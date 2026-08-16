import { showExperienceTool } from './experience';
import { showProjectsTool } from './projects';

/**
 * Describes all the `show` tools that can be used by
 * the LLM to display components to the user
 */
export const showTools = {
  showExperience: showExperienceTool,
  showProjects: showProjectsTool,
};
