import { gql } from 'graphql-request';
import { pageFragment, skillFragment, assetFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the CV skills page data
 */
const skillsPageQuery = gql`
  query skillsPage($search: String!) {
    page(
      where: {
        slug: "skills"
      }
    ) {
      ...PageFields,
      content {
        ... on SkillsContent {
          disclaimerText
          skills(
            where: {
              name_contains: $search
            }
          ) {
            ...SkillFields
          }
        }
      }
    }
  }
  ${pageFragment}
  ${skillFragment}
  ${assetFragment}
`;

export default skillsPageQuery;
