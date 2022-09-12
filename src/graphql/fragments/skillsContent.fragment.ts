import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `SkillsContent`
 * type used within the page query
 */
const skillsContentFragment = gql`
  fragment SkillsContentFields on SkillsContent {
    skills {
      ...SkillFields
    }
  }
`;

export default skillsContentFragment;
