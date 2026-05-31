import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../helpers';
import dedent from 'dedent';

/**
 * The opportunities tool used to fetch Liam's stance on new roles — what he values,
 * what would tempt him to move, and how he prefers to be approached
 */
const opportunitiesTool = tool({
  type: 'function',
  title: 'Opportunities',
  description: dedent`
    Used to fetch Liam's stance on new roles — what he values, what would tempt
    him to move, and how he prefers to be approached.

    > Call this when the user asks whether he's open to roles, about salary,
    > notice period, remote/hybrid, relocation, or anything about hiring him.
  `,
  inputSchema: z.object({}),
  execute: async (): Promise<string> => {
    'use server';

    // Read amd return the content
    // for the `opportunities` tool
    return await readContent('opportunities');
  },
});

export default opportunitiesTool;
