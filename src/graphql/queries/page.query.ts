import { gql } from 'graphql-request';

/**
 * The GraphQL query for fetching the page
 * data for a specific page slug
 *
 * @example
 *
 * const { status, data } = useQuery<PageData<PageSlug.GLOBAL>>(pageQuery, {
 *   slug: PageSlug.GLOBAL,
 * });
 */
const pageQuery = gql`
  query getPage($slug: PageSlug!) {
    page(
      where: {
        slug: $slug
      }
    ) {
      id
      slug
      name
      createdAt
      updatedAt
    }
  }
`;

export default pageQuery;
