import { getTools } from './get';

/**
 * Describes all tools that
 * can be used by the LLM
 */
export const tools = {
  ...getTools,
};
