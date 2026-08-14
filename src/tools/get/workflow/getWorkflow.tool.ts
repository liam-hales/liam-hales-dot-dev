import { tool } from 'ai';
import { z } from 'zod';
import { readContent } from '../../../helpers';
import dedent from 'dedent';

/**
 * The `getWorkflow` tool used to fetch how Liam approaches his day-to-day work as a
 * senior software engineer — task management, deep work, PR culture, and AI usage
 */
const getWorkflowTool = tool({
  type: 'function',
  title: 'Workflow',
  description: dedent`
    Used to fetch how Liam approaches his day-to-day work as a senior software
    engineer — task management, deep work, PR culture, and AI usage.

    > Call this when the user asks how he works, how he uses
    > AI or anything about his ways of working.
  `,
  inputSchema: z.object({}),
  execute: async (): Promise<string> => {
    'use server';

    // Read amd return the content
    // for the `getWorkflow` tool
    return await readContent('getWorkflow');
  },
});

export default getWorkflowTool;
