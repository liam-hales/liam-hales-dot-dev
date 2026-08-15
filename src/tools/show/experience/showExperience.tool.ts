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
    his current role and/or previous roles.

    > Call this immediately after \`getExperience\`, every time — the timeline replaces
    > writing the roles out in the reply, it doesn't accompany it.
  `,
  inputSchema: experienceSchema,
  execute: (): string => {
    // Return the content telling the LLM that the
    // experience has been displayed to the user
    return dedent`
      _The experience timeline has been displayed to the user._

      Do not repeat data from the roles — the user can already see them. Instead reply
      with a short bit of context around the roles or a follow up question.
    `;
  },
});

export default showExperienceTool;
