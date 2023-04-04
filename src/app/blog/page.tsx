import { ReactElement } from 'react';
import { Page, blogPageQuery, SearchVariables } from '../../graphql';
import { useQuery } from '../../hooks/server';
import { PageProps, ServerComponent } from '../../types';
import { buildPageMetadata } from '../../helpers/server';
import Blog from './blog';

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
      search: search,
    },
  });

  return (
    <Blog
      content={content}
      search={search}
    />
  );
};

export default BlogPage;
export const generateMetadata = buildPageMetadata(blogPageQuery, {
  searchable: true,
});
