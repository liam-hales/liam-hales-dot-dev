import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../helpers';
import dedent from 'dedent';

/**
 * The interests tool used to fetch Liam's interests and hobbies — what he gets up to
 * outside of work, from side projects and gaming, to his smart home setup and home DIY.
 */
const interestsTool = tool({
  type: 'function',
  title: 'Interests',
  description: dedent`
    Used to fetch Liam's interests and hobbies — what he gets up to outside of work,
    from side projects and gaming, to his smart home setup and home DIY.

    > Call this when the user asks about his hobbies, interests, what he does
    > in his spare time, or what he's into outside of work.
  `,
  inputSchema: z.object({}),
  execute: async (): Promise<string> => {
    'use server';

    // Read amd return the content
    // for the `interests` tool
    return await readContent('interests');
  },
});

export default interestsTool;
