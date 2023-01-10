import { gql } from 'graphql-request';
import { pageFragment, homeContentFragment, assetFragment } from '..';

/**
 * The GraphQL query for fetching
 * the home page data
 *
 * @example
 * import { request } from 'graphql-request';
 *
 * const url = 'https://example.com/graphql';
 *
 * const data = await request(url, homePageQuery);
 * const data = await useQuery(homePageQuery);
 */
const homePageQuery = gql`
  query homePage {
    page(
      where: {
        slug: HOME
      }
    ) {
      ...PageFields,
      content {
        ... on HomeContent {
          ...HomeContentFields
        }
      }
    }
  }
  ${pageFragment}
  ${homeContentFragment}
  ${assetFragment}
`;

export default homePageQuery;
