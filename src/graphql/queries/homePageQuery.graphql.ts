import { gql } from 'graphql-request';
import { pageFragment, pageMetadataFragment, assetFragment, personFragment, skillFragment } from '..';

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
          frontendSkills {
            ...SkillFields
          }
          backendText
          backendSkills {
            ...SkillFields
          }
          designText
          designSkills {
            ...SkillFields
          }
          proStatementText
          stillInterestedText
        }
      }
    }
  }
  ${pageFragment}
  ${pageMetadataFragment}
  ${assetFragment}
  ${personFragment}
  ${skillFragment}
`;

export default homePageQuery;
