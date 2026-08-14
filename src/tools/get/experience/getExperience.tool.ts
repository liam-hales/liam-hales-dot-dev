import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../../helpers';
import dedent from 'dedent';

/**
 * The `getExperience` tool used to fetch Liam's experience — a breakdown of his professional career,
 * the roles he's worked in, what he worked on, and the certifications he's earned along the way
 */
const getExperienceTool = tool({
  type: 'function',
  title: 'Experience',
  description: dedent`
    Used to fetch Liam's experience — a breakdown of his professional career, the roles he's
    worked in, what he worked on, and the certifications he's earned along the way.

    > Call this when the user asks about his background, employers, previous jobs,
    > career progression, what he's built, or any certifications he holds.
  `,
  inputSchema: z.object({}),
  execute: async (): Promise<string> => {
    'use server';

    // Read amd return the content
    // for the `getExperience` tool
    return await readContent('getExperience');
  },
});

export default getExperienceTool;
