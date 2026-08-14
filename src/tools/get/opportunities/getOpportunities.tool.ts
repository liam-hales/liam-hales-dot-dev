import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../../helpers';
import dedent from 'dedent';

/**
 * The `getOpportunities` tool used to fetch Liam's stance on new roles — what he values,
 * what would tempt him to move, and how he prefers to be approached
 */
const getOpportunitiesTool = tool({
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
    // for the `getOpportunities` tool
    return await readContent('getOpportunities');
  },
});

export default getOpportunitiesTool;
