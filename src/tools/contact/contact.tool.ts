import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../helpers';
import dedent from 'dedent';

/**
 * The contact tool used to fetch Liam Hales' contact info such as
 * his GitHub, LinkedIn and how to get in touch with him
 */
const contactTool = tool({
  type: 'function',
  title: 'Contact',
  description: dedent`
    Fetches Liam Hales' contact info — his GitHub, LinkedIn and how to get in touch with him. Call this
    when the user asks how to reach Liam, for his socials, or for any of his personal details
  `,
  inputSchema: z.object({}),
  execute: async (): Promise<string> => {
    'use server';

    // Read amd return the content
    // for the `contact` tool
    return await readContent('contact');
  },
});

export default contactTool;
