import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `HomeContent`
 * type used within the page query
 */
const homeContentFragment = gql`
  fragment HomeContentFields on HomeContent {
    headerForegroundImage {
      ...AssetFields
    }
    headerBackgroundImage {
      ...AssetFields
    }
    aboutMeText
    careerStartDate
    frontendText
    backendText
    designText
    proStatementText
    stillInterestedText
  }
`;

export default homeContentFragment;
