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

  // Check if the blog post exists, if not
  // just return the Open Graph metadata
  if (post == null) {
    return {
      openGraph: openGraph,
    };
  }

  const { title: postTitle, description, author } = post;
  const { firstName, lastName } = author;

  // Build the title using the blog post title and author
  // Return the page metadata
  const title = `${postTitle} - ${firstName} ${lastName}`;
  return {
    title: title,
    description: description,
    openGraph: {
      ...openGraph,
      title: title,
      description: description,
    },
  };
};
