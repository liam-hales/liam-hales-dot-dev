'use server';

import { getTools } from '../tools/get';
import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Used to read the `get` tool content from its
 * `.content.md` file and return its data
 *
 * @param toolName The tool to read content for
 * @returns The `.content.md` file data
 */
const readContent = async (toolName: keyof typeof getTools): Promise<string> => {
  const [verb, ...rest] = toolName.split(/(?=[A-Z])/);

  // Using the tool name, calculate the path
  // segment and full file path to read
  const segment = `${verb}/${rest.join('').toLowerCase()}`;
  const filePath = path.join(process.cwd(), `src/tools/${segment}/${toolName}.content.md`);

  return await fs.readFile(filePath, 'utf-8');
};

export default readContent;
