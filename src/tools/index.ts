import { personaTool } from './persona';
import { contactTool } from './contact';

/**
 * Describes all tools that
 * can be used by the LLM
 */
export const tools = {
  persona: personaTool,
  contact: contactTool,
};
