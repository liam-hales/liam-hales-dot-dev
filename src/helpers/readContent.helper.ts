'use server';

import { tools } from '../tools';
import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Used to read the tool content `.content.md`
 * file and return its data
 *
 * @param toolName The tool to read content for
 * @returns The `.content.md` file data
 */
const readContent = async (toolName: keyof typeof tools): Promise<string> => {
  const filePath = path.join(process.cwd(), `src/tools/${toolName}/${toolName}.content.md`);
  return await fs.readFile(filePath, 'utf-8');
};

export default readContent;
