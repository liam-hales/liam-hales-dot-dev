import { gql } from 'graphql-request';
import { pageFragment, brandContentFragment, assetFragment } from '..';

/**
 * The GraphQL query for fetching
 * the brand page data
 *
 * @example
 * import { request } from 'graphql-request';
 *
 * const url = 'https://example.com/graphql';
 *
 * const data = await request(url, brandPageQuery);
 * const data = await useQuery(brandPageQuery);
 */
const brandPageQuery = gql`
  query brandPage {
    page(
      where: {
        slug: BRAND
      }
    ) {
      ...PageFields,
      content {
        ... on BrandContent {
          ...BrandContentFields
        }
      }
    }
  }
  ${pageFragment}
  ${brandContentFragment}
  ${assetFragment}
`;

export default brandPageQuery;
