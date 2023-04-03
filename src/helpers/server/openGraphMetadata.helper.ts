/* eslint-disable react-hooks/rules-of-hooks */

import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { useConfig, useQuery } from '../../hooks/server';
import { Page, globalPageQuery } from '../../graphql';

/**
 * Used to generate the base Open Graph metadata
 * which can be combined with the page metadata.
 *
 * _**NOTE:** This function can only be used server-side_
 *
 * @returns The Open Graph metadata
 */
const openGraphMetadata = async (): Promise<OpenGraph> => {

  const { siteUrl } = useConfig();
  const { content } = await useQuery<Page<'global'>>(globalPageQuery);
  const { firstName, lastName } = content.me;

  return {
    type: 'website',
    siteName: `${firstName} ${lastName}`,
    images: [
      {
        type: 'image/webp',
        url: `${siteUrl}/cover.webp`,
        alt: `${firstName} ${lastName} Cover`,
      },
    ],
  };
};

export default openGraphMetadata;