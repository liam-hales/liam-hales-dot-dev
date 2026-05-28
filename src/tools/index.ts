import { personaTool } from './persona';
import { contactTool } from './contact';
import { skillsTool } from './skills';

/**
 * Describes all tools that
 * can be used by the LLM
 */
export const tools = {
  persona: personaTool,
  contact: contactTool,
  skills: skillsTool,
};
