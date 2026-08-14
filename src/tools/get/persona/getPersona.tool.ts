import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../../helpers';
import dedent from 'dedent';

/**
 * The `getPersona` tool used to fetch the Liam Hales persona — a high-level
 * overview of who he is and his background etc
 */
const getPersonaTool = tool({
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
    // for the `getPersona` tool
    return await readContent('getPersona');
  },
});

export default getPersonaTool;
