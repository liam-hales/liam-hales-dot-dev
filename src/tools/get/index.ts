import { getPersonaTool } from './persona';
import { getContactTool } from './contact';
import { getSkillsTool } from './skills';
import { getWorkflowTool } from './workflow';
import { getOpportunitiesTool } from './opportunities';
import { getExperienceTool } from './experience';
import { getInterestsTool } from './interests';
import { getProjectsTool } from './projects';

/**
 * Describes all the `get` tools that can be used
 * by the LLM to fetch the data it needs
 */
export const getTools = {
  getPersona: getPersonaTool,
  getContact: getContactTool,
  getSkills: getSkillsTool,
  getWorkflow: getWorkflowTool,
  getOpportunities: getOpportunitiesTool,
  getExperience: getExperienceTool,
  getInterests: getInterestsTool,
  getProjects: getProjectsTool,
};
