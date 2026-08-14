import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../../helpers';
import dedent from 'dedent';

/**
 * The `getSkills` tool used to fetch Liam's technical skills — the languages,
 * frameworks, tools and technologies he works with
 */
const getSkillsTool = tool({
  type: 'function',
  title: 'Skills',
  description: dedent`
    Used to fetch Liam's technical skills — the languages, frameworks, tools and technologies
    he works with, including his core day-to-day skills and the full skill set.

    > Call this when the user asks about his skills, tech stack,
    > what he works with, or his expertise in a specific technology.
  `,
  inputSchema: z.object({}),
  execute: async (): Promise<string> => {
    'use server';

    // Read amd return the content
    // for the `getSkills` tool
    return await readContent('getSkills');
  },
});

export default getSkillsTool;
