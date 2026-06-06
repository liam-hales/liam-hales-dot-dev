import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../helpers';
import dedent from 'dedent';

/**
 * The persona tool used to fetch the Liam Hales persona — a high-level
 * overview of who he is and his background etc
 */
const personaTool = tool({
  type: 'function',
  title: 'Persona',
  description: dedent`
    Used to fetch the Liam Hales persona — a high-level overview of who he is, his background,
    where he's based, and the kind of engineer he is.

    > Call this early in a conversation to ground yourself
    > in the persona you're speaking as.
  `,
  inputSchema: z.object({}),
  execute: async (): Promise<string> => {
    'use server';

    // Read amd return the content
    // for the `persona` tool
    return await readContent('persona');
  },
});

export default personaTool;
