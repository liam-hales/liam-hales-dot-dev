import { personaTool } from './persona';
import { contactTool } from './contact';
import { skillsTool } from './skills';
import { workflowTool } from './workflow';
import { opportunitiesTool } from './opportunities';

/**
 * Describes all tools that
 * can be used by the LLM
 */
export const tools = {
  persona: personaTool,
  contact: contactTool,
  skills: skillsTool,
  workflow: workflowTool,
  opportunities: opportunitiesTool,
};
