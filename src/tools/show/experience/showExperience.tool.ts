import { tool } from 'ai';
import { experienceSchema } from '../../../schemas';
import dedent from 'dedent';

/**
 * The `showExperience` tool used to display Liam's experience as a
 * timeline — can include his current role and/or previous roles.
 */
const showExperienceTool = tool({
  type: 'function',
  title: 'Show Experience',
  description: dedent`
    Used to display Liam's experience as a timeline — can include
    his current role and/or any of his previous roles.

    Pass only what was asked for
    - "What do you do now?" — is the current role alone
    - "Tell me about Mercarto" — is that one previous role alone
    - "Talk me through your career" — is everything

    > Call this immediately after \`getExperience\`, every time — the timeline replaces
    > writing the roles out in the reply, it doesn't accompany it.
  `,
  inputSchema: experienceSchema,
  execute: (): string => {
    // Return text telling the LLM that the
    // experience has been displayed to the user
    return '_The experience timeline has been displayed to the user_';
  },
});

export default showExperienceTool;
