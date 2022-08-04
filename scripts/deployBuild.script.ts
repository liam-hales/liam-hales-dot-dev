/* eslint-disable @typescript-eslint/naming-convention */

import { join } from 'path';
import { S3Client } from '@aws-sdk/client-s3';
import { fromIni } from '@aws-sdk/credential-providers';
import S3SyncClient from 's3-sync-client';
import mime from 'mime-types';

/**
 * Attempts to lookup the correct content type
 * (mime type) for the file key
 *
 * @param input The file input
 * @returns The file content type
 */
const getContentType = (input: { Key: string }): string | undefined => {

  // Lookup the content type from the file key and check
  // if one has been found before returning it
  const mimeType = mime.lookup(input.Key);
  return (mimeType === false)
    ? undefined
    : mimeType;
};

/**
 * Used to deploy and sync the build files to the production
 * S3 bucket ready to be served to the client
 */
(async () => {

  // Define the variables for the script
  const region = 'eu-west-1';
  const bucket = 'liamhales.dev';
  const profile = 'liam_cli_admin';

  // Get the credentials for the S3 client
  // from the `~/.aws/credentials file
  const credentials = fromIni({
    profile: profile,
  });

  // Initialise the S3 client with
  // the region and credentials
  const client = new S3Client({
    region: region,
    credentials: credentials,
  });

  // Initialise the S3 sync client
  // using the current S3 client
  const { sync } = new S3SyncClient({
    client: client,
  });

  const buildPath = join(process.cwd(), '/build');
  const buildStaticPath = join(buildPath, '/static');

  // Sync the build files that need to have no cache control
  // which is all files outside the `/static` directory
  await sync(buildPath, `s3://${bucket}`, {
    del: true,
    commandInput: {
      ServerSideEncryption: 'AES256',
      CacheControl: 'no-cache',
      ContentType: getContentType,
    },
    filters: [
      {
        exclude: (key: string) => key.startsWith('static/'),
      },
    ],
  });

  // Sync the static build files with the cache control
  // set to a year so the users browser will cache them
  await sync(buildStaticPath, `s3://${bucket}/static`, {
    del: true,
    commandInput: {
      ServerSideEncryption: 'AES256',
      CacheControl: 'max-age=31536000',
      ContentType: getContentType,
    },
  });
})();
