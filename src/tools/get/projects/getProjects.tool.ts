import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../../helpers';
import dedent from 'dedent';

/**
 * The `getProjects` tool used to fetch the projects Liam has built — each with a name,
 * description, GitHub link and a list of details about said project
 */
const getProjectsTool = tool({
  type: 'function',
  title: 'Projects',
  description: dedent`
    Used to fetch the projects Liam has built — each with a name, description,
    GitHub link and a list of details about said project.

    > Call this when the user asks about his projects,
    > what he's built, or to see his work.
  `,
  inputSchema: z.object({}),
  execute: async (): Promise<string> => {
    'use server';

    // Read and return the content
    // for the `getProjects` tool
    return await readContent('getProjects');
  },
});

export default getProjectsTool;
