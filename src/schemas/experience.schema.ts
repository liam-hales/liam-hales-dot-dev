import { z } from 'zod';
import { experienceRoleSchema } from './';

/**
 * The schema used to describe an experience timeline. Used for
 * the `showExperience` tool and the `Experience` component
 */
const experienceSchema = z.object({
  currentRole: experienceRoleSchema
    .optional()
    .describe('The current role being worked in'),
  previousRoles: z
    .array(experienceRoleSchema)
    .min(1)
    .max(16)
    .optional()
    .describe('The roles previously worked in, ordered from most to least recent'),
});

export default experienceSchema;
