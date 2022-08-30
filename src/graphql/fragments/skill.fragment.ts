import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `Skill` type used
 * within other fragments for the page query
 */
const skillFragment = gql`
  fragment SkillFields on Skill {
    name
    type
    image {
      ...AssetFields
    }
  }
`;

export default skillFragment;
