import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `HomeContent` type
 * used within the page query
 */
const homeContentFragment = gql`
  fragment HomeContentFields on HomeContent {
    aboutMeText
    careerStartDate
  }
`;

export default homeContentFragment;
