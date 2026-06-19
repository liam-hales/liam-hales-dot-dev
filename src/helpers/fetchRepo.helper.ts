'use server';

import { Octokit } from '@octokit/rest';
import camelcaseKeys from 'camelcase-keys';

/**
 * Used to fetch the details for a public GitHub repository
 * using the `@octokit/rest` package under the hood
 *
 * @param url The public GitHub repo URL
 * @returns The public GitHub repository details
 */
const fetchRepo = async (url: string) => {
  const accessToken = process.env.GITHUB_ACCESS_TOKEN;

  // Make sure the `GITHUB_ACCESS_TOKEN` environment
  // variable has been set
  if (accessToken == null) {
    throw new Error('The "GITHUB_ACCESS_TOKEN" environment variable is required');
  }

  const match = /github\.com[/:]([^/]+)\/([^/]+?)(?:\.git)?\/?$/.exec(url);
  const octokit = new Octokit({
    auth: accessToken,
  });

  // If there was no match against the GitHub
  // repo URL regex then throw an error
  if (match == null) {
    throw new Error('Invalid GitHub repo URL');
  }

  // Extract the owner and repo from
  // the executed regex search
  const [, owner, repo] = match;

  // Fetch the repository details
  // from the GitHub API
  const { data } = await octokit.rest.repos.get({
    owner: owner,
    repo: repo,
  });

  return camelcaseKeys(data);
};

export default fetchRepo;
