'use server';

import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock';
import { fromNodeProviderChain } from '@aws-sdk/credential-providers';
import { generateId, streamText, stepCountIs } from 'ai';
import { modelId, modelInstructions, mancModeInstructions } from '../constants';
import { tools } from '../tools';
import { StreamMessageOptions, MessageChunk } from '../types';

/**
 * Used to stream the LLM message in chunks to the client using
 * Amazon Bedrock and the `ai` package under the hood
 *
 * @param options The stream message options
 * @returns The message chunk readable stream
 */
const streamMessage = async ({ messages, mancMode = false }: StreamMessageOptions): Promise<ReadableStream<MessageChunk>> => {
  // Resolve AWS credentials via the standard provider chain, which will obtain credentials
  // from environment variables, the `~/.aws` directory or an IAM role when deployed
  const provider = createAmazonBedrock({
    credentialProvider: fromNodeProviderChain(),
  });

  // Generate the full system prompt using
  // the model and option instructions
  const systemPrompt =
    [
      modelInstructions,
      ...(mancMode === true) ? [mancModeInstructions] : [],
    ]
      .join('\n\n\n');

  // Pass the model, instructions, tools and message
  // history to the LLM and stream its response
  const result = streamText({
    model: provider(modelId),
    system: systemPrompt,
    tools: tools,
    messages: messages,
    stopWhen: stepCountIs(5),
    providerOptions: {
      bedrock: {
        reasoningConfig: {
          type: 'enabled',
          budgetTokens: 2048,
        },
      },
    },
  });

  // Convert the result into a UI message stream
  // ready for the client to handle
  const stream = result.toUIMessageStream({
    generateMessageId: generateId,
  });

  // The array of allowed message chunk types
  // that are safe to stream to the client
  const allowedChunkTypes: MessageChunk['type'][] = [
    'start',
    'finish',
    'abort',
    'error',
    'start-step',
    'finish-step',
    'text-start',
    'text-delta',
    'text-end',
    'reasoning-start',
    'reasoning-delta',
    'reasoning-end',
    'tool-input-start',
    'tool-input-delta',
    'tool-input-available',
    'tool-input-error',
    'tool-output-available',
    'tool-output-error',
  ];

  return new ReadableStream<MessageChunk>({
    start: async (controller) => {
      try {
        for await (const chunk of stream) {
          const { type } = chunk;

          if (type === 'error') {
            throw new Error(chunk.errorText);
          }

          // Only update the stream
          // with allowed message chunks
          if (allowedChunkTypes.includes(type) === true) {
            controller.enqueue(chunk);
          }
        }

        // Close the stream once all message
        // chunks have been processed
        controller.close();
      }
      catch (error) {
        console.error('streamMessage() -> ', error);

        // Catch any errors and
        // update the streamable
        controller.error(error);
      }
    },
  });
};

export default streamMessage;
