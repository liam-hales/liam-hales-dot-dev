import { gql } from 'graphql-request';
import { pageFragment, assetFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the global page data
 */
const globalPageQuery = gql`
  query globalPage {
    page(
      where: {
        slug: "global"
      }
    ) {
      ...PageFields,
      content {
        ... on GlobalContent {
          footerText
          builtUsingText
          email
          emailText
          linkedInUrl
          stackOverflowUrl
          buyMeCoffeeUrl
          notionUrl
          notionText
          notFoundText
          notFoundImage {
            ...AssetFields
          }
        }
      }
    }
  }
  ${pageFragment}
  ${assetFragment}
`;

export default globalPageQuery;
