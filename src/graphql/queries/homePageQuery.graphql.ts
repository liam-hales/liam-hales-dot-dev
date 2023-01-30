import { gql } from 'graphql-request';
import { pageFragment, personFragment, assetFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the home page data
 */
const homePageQuery = gql`
  query homePage {
    page(
      where: {
        slug: "home"
      }
    ) {
      ...PageFields,
      content {
        ... on HomeContent {
          headerForegroundImage {
            ...AssetFields
          }
          headerBackgroundImage {
            ...AssetFields
          }
          shayanRastegarUrl
          me {
            ...PersonFields
          }
          aboutMeText
          careerStartDate
          frontendText
          backendText
          designText
          proStatementText
          stillInterestedText
        }
      }
    }
  }
  ${pageFragment}
  ${personFragment}
  ${assetFragment}
`;

export default homePageQuery;
