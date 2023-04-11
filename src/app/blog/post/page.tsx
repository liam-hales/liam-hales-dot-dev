import { notFound } from 'next/navigation';
import { ReactElement } from 'react';
import { BlogPost as BlogPostData, blogPostQuery, BlogPostVariables } from '../../../graphql';
import { useQuery } from '../../../hooks/server';
import { PageProps, ServerComponent } from '../../../types';
import { generateMetadata } from './metadata';
import BlogPost from './blogPost';

/**
 * The entry point for the blog post page route `/blog/post`, used to fetch the required
 * data and render the `BlogPost` component passing said data as props
 *
 * @param props The component props
 * @returns The `BlogPostPage` component
 */
const BlogPostPage: ServerComponent<PageProps> = async ({ searchParams = {} }): Promise<ReactElement<PageProps>> => {
  const { id } = searchParams;

  // If the `id` query param has not been set then call the Next.js
  // `notFound` function to redirect the user to the not found page
  if (id == null) {
    notFound();
  }

  const post = await useQuery<BlogPostData | undefined, BlogPostVariables>(blogPostQuery, {
    variables: {
      id: id,
    },
  });

  // If the post does not exist then call the Next.js `notFound`
  // function to redirect the user to the not found page
  if (post == null) {
    notFound();
  }

  return (
    <BlogPost post={post} />
  );
};

export default BlogPostPage;
export {
  generateMetadata,
};
