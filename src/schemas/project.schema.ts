import { z } from 'zod';

/**
 * The schema used to describe a single project. Used for
 * the `showProjects` tool and the `Project` component
 */
const projectSchema = z.object({
  title: z
    .string()
    .min(1)
    .max(64)
    .describe('The project title'),
  description: z
    .string()
    .min(1)
    .max(256)
    .describe('The project description'),
  status: z
    .string()
    .min(1)
    .max(64)
    .describe('The project status'),
  type: z
    .enum([
      'web-app',
      'cli',
    ])
    .describe('The project type'),
  startDate: z
    .string()
    .min(1)
    .max(8)
    .describe('The project start date, for example "Aug 2026"'),
  endDate: z
    .union([
      z.string()
        .min(1)
        .max(8),
      z.literal('Present'),
    ])
    .describe('The project end date, for example "Aug 2026" or set to "Present"'),
  repoUrl: z
    .string()
    .min(1)
    .max(128)
    .describe('The project GitHub repo URL'),
  liveUrl: z
    .string()
    .min(1)
    .max(64)
    .optional()
    .describe('The project live URL, without the protocol'),
  bullets: z
    .array(
      z
        .string()
        .min(1)
        .max(256),
    )
    .min(2)
    .max(16)
    .describe('The project bullet points'),
});

export default projectSchema;
