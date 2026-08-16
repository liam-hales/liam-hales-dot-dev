import { z } from 'zod';
import { projectSchema } from './';

/**
 * The schema used to describe a collection of projects. Used for
 * the `showProjects` tool and the `Projects` component
 */
const projectsSchema = z.object({
  projects: z
    .array(projectSchema)
    .min(1)
    .max(16)
    .describe('The projects, ordered from most to least recent'),
});

export default projectsSchema;
