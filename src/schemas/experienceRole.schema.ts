import { z } from 'zod';

/**
 * The schema used to describe a single experience role. Used for
 * the `showExperience` tool and the `ExperienceRole` component
 */
const experienceRoleSchema = z.object({
  title: z
    .string()
    .min(1)
    .max(64)
    .describe('The role title'),
  type: z
    .string()
    .min(1)
    .max(32)
    .describe('The role type, for example "Full-time — Remote"'),
  companyName: z
    .string()
    .min(1)
    .max(32)
    .describe('The name of the company'),
  location: z
    .string()
    .min(1)
    .max(32)
    .describe('The role location, for example "Manchester, UK"'),
  startDate: z
    .string()
    .min(1)
    .max(8)
    .describe('The role start date, for example "Aug 2026"'),
  endDate: z
    .union([
      z.string()
        .min(1)
        .max(8),
      z.literal('Present'),
    ])
    .describe('The role end date, for example "Aug 2026" or set to "Present"'),
  bullets: z
    .array(
      z
        .string()
        .min(1)
        .max(256),
    )
    .min(2)
    .max(16)
    .describe('The role bullet points'),
});

export default experienceRoleSchema;
