import { gql } from 'graphql-request';
import { pageFragment, cvContentFragment, skillFragment, timelineEventFragment, assetFragment } from '..';

/**
 * The GraphQL query for fetching
 * the CV page data
 *
 * @example
 * import { request } from 'graphql-request';
 *
 * const url = 'https://example.com/graphql';
 *
 * const data = await request(url, cvPageQuery);
 * const data = await useQuery(cvPageQuery);
 */
const cvPageQuery = gql`
  query cvPage {
    page(
      where: {
        slug: CV
      }
    ) {
      ...PageFields,
      content {
        ... on CVContent {
          ...CVContentFields
        }
      }
    }
  }
  ${pageFragment}
  ${cvContentFragment}
  ${skillFragment}
  ${timelineEventFragment}
  ${assetFragment}
`;

export default cvPageQuery;
