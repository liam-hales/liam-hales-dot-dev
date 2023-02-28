import { gql } from 'graphql-request';
import { pageFragment, assetFragment, personFragment } from '..';

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
          me {
            ...PersonFields
          }
        }
      }
    }
  }
  ${pageFragment}
  ${assetFragment}
  ${personFragment}
`;

export default globalPageQuery;
