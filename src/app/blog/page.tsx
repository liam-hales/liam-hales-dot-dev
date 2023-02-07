import { ReactElement } from 'react';
import { Page, blogPageQuery, SearchVariables } from '../../graphql';
import { useQuery } from '../../hooks';
import { PageProps, ServerComponent } from '../../types';
import Blog from './blog';

/**
 * Set the Next.js revalidate to `0` which will make sure this page is always dynamically
 * rendered which is required because this page uses `searchParams`
 *
 * @see https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
 */
export const revalidate = 0;

/**
 * The entry point for the blog page route `/blog`, used to fetch the required
 * data and render the `Blog` component passing said data as props
 *
 * @returns The `BlogPage` component
 */
const BlogPage: ServerComponent<PageProps> = async ({ searchParams = {} }): Promise<ReactElement<PageProps>> => {

  const { search } = searchParams;
  const { content } = await useQuery<Page<'blog'>, SearchVariables>(blogPageQuery, {
    variables: {
      search: search ?? '',
    },
  });

  return (
    <Blog content={content} />
  );
};

export default BlogPage;
