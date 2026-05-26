'use server';

import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { AsyncIterableStream, ModelMessage, generateId, streamText } from 'ai';
import { modelId, modelInstructions } from '../constants';
import { MessageChunk } from '../types';

/**
 * Used to stream the LLM message in chunks to the client using
 * the OpenRouter API and `ai` package under the hood
 *
 * @param messages The messages to send
 */
const streamMessage = async (messages: ModelMessage[]): Promise<AsyncIterableStream<MessageChunk>> => {
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
    messages: messages,
    providerOptions: {
      openrouter: {
        reasoning: {
          enabled: true,
          exclude: false,
        },
      },
    },
  });

  // Convert the result into a UI message
  // stream ready for the client to handle
  return result.toUIMessageStream({
    generateMessageId: generateId,
  });
};

export default streamMessage;
