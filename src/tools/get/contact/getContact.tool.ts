import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../../helpers';
import dedent from 'dedent';

/**
 * The `getContact` tool used to fetch Liam's contact info — his GitHub,
 * LinkedIn and how to get in touch with him
 */
const getContactTool = tool({
  type: 'function',
  title: 'Contact',
  description: dedent`
    Used to fetch Liam's contact info — his GitHub, LinkedIn
    and how to get in touch with him.

    > Call this when the user asks how to reach Liam, for
    > his socials, or for any of his personal details
  `,
  inputSchema: z.object({}),
  execute: async (): Promise<string> => {
    'use server';

    // Read amd return the content
    // for the `getContact` tool
    return await readContent('getContact');
  },
});

export default getContactTool;
