import { tool } from 'ai';
import { projectsSchema } from '../../../schemas';
import dedent from 'dedent';

/**
 * The `showProjects` tool used to display the projects Liam
 * has built — can include a single project or multiple
 */
const showProjectsTool = tool({
  type: 'function',
  title: 'Show Projects',
  description: dedent`
    Used to display the projects Liam has built — can include
    a single project or multiple

    Pass only what was asked for
    - "Tell me about your website" — is that one project alone
    - "What have you built?" — is everything

    Don't call this for a specific question the data answers in a sentence or two
    - "What's your website built with?" — answer it directly in the reply instead

    > Call this after \`getProjects\` when the user wants to see the projects — they
    > replace writing them out in the reply, they don't accompany it.
  `,
  inputSchema: projectsSchema,
  execute: (): string => {
    // Return text telling the LLM that the
    // projects have been displayed to the user
    return '_The projects have been displayed to the user_';
  },
});

export default showProjectsTool;
