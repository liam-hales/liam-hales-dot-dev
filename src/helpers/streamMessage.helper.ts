'use server';

import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { ModelMessage, generateId, streamText, stepCountIs } from 'ai';
import { modelId, modelInstructions } from '../constants';
import { tools } from '../tools';
import { MessageChunk } from '../types';

/**
 * Used to stream the LLM message in chunks to the client using
 * the OpenRouter API and `ai` package under the hood
 *
 * @param messages The messages to send to the model
 * @returns The message chunk readable stream
 */
const streamMessage = async (messages: ModelMessage[]): Promise<ReadableStream<MessageChunk>> => {
  const openRouterApiKey = process.env.OPEN_ROUTER_API_KEY;

  // Make sure the `OPEN_ROUTER_API_KEY`
  // environment variable has been set
  if (openRouterApiKey == null) {
    throw new Error('The "OPEN_ROUTER_API_KEY" environment variable is required');
  }

  const provider = createOpenRouter({
    apiKey: openRouterApiKey,
    compatibility: 'strict',
  });

  // Pass the model, instructions, tools and message
  // history to the LLM and stream its response
  const result = streamText({
    model: provider.chat(modelId),
    system: modelInstructions,
    tools: tools,
    messages: messages,
    stopWhen: stepCountIs(5),
    providerOptions: {
      openrouter: {
        reasoning: {
          enabled: true,
          exclude: false,
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
    'text-start',
    'text-delta',
    'text-end',
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
        // Catch any errors and
        // update the streamable
        controller.error(error);
      }
    },
  });
};

export default streamMessage;
