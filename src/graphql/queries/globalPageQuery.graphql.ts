import { gql } from 'graphql-request';
import { pageFragment, pageMetadataFragment, assetFragment, personFragment } from '..';

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
          contactText
          linkedInUrl
          stackOverflowUrl
          githubUrl
          notionUrl
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
  ${pageMetadataFragment}
  ${assetFragment}
  ${personFragment}
`;

export default globalPageQuery;
