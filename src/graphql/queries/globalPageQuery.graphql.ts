import { gql } from 'graphql-request';
import { pageFragment, globalContentFragment, assetFragment } from '..';

/**
 * The GraphQL query for fetching
 * the global page data
 *
 * @example
 * import { request } from 'graphql-request';
 *
 * const url = 'https://example.com/graphql';
 *
 * const data = await request(url, globalPageQuery);
 * const data = await useQuery(globalPageQuery);
 */
const globalPageQuery = gql`
  query homePage {
    page(
      where: {
        slug: GLOBAL
      }
    ) {
      ...PageFields,
      content {
        ... on GlobalContent {
          ...GlobalContentFields
        }
      }
    }
  }
  ${pageFragment}
  ${globalContentFragment}
  ${assetFragment}
`;

export default globalPageQuery;
