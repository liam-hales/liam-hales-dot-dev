import { ReactElement } from 'react';
import { BlogPost as BlogPostData, blogPostQuery, BlogPostVariables } from '../../../graphql';
import { useQuery } from '../../../hooks';
import { PageProps, ServerComponent } from '../../../types';
import BlogPost from './blogPost';

/**
 * Set the Next.js revalidate to `0` which will stop caching
 * for this page and force a server request for data every time
 */
export const revalidate = 0;

/**
 * The entry point for the blog page route `/blog/{slug}`, used to fetch the required
 * data and render the `BlogPost` component passing said data as props
 *
 * @returns The `BlogPostPage` component
 */
const BlogPostPage: ServerComponent<PageProps> = async ({ params = {} }): Promise<ReactElement<PageProps>> => {

  const { slug = '' } = params;
  const post = await useQuery<BlogPostData, BlogPostVariables>(blogPostQuery, {
    variables: {
      slug: slug,
    },
  });

  return (
    <BlogPost post={post} />
  );
};

export default BlogPostPage;
