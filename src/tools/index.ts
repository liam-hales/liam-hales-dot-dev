import { getTools } from './get';
import { showTools } from './show';

/**
 * Describes all tools that
 * can be used by the LLM
 */
export const tools = {
  ...getTools,
  ...showTools,
};
