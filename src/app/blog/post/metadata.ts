/* eslint-disable react-hooks/rules-of-hooks */

import { Metadata } from 'next';
import { openGraphMetadata } from '../../../helpers/server';
import { BlogPostVariables, BlogPost, blogPostQuery } from '../../../graphql';
import { useQuery } from '../../../hooks/server';
import { PageProps } from '../../../types';

/**
 * Used to generate the `BlogPostPage` page component metadata
 * that is rendered within the page `<head/>` element
 *
 * @returns The metadata for the `BlogPostPage` page component
 */
export const generateMetadata = async ({ searchParams = {} }: PageProps): Promise<Metadata> => {

  const { id = '' } = searchParams;
  const post = await useQuery<BlogPost | undefined, BlogPostVariables>(blogPostQuery, {
    variables: {
      id: id,
    },
  });

  const openGraph = await openGraphMetadata();
  return {
    ...post,
    openGraph: {
      ...post,
      ...openGraph,
    },
  };
};
