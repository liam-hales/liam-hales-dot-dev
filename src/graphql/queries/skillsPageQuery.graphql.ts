import { gql } from 'graphql-request';
import { pageFragment, pageMetadataFragment, skillFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the CV skills page data.
 *
 * Default value required for `$search` variable due to
 * how Hygraph handles searching within GraphQL.
 */
const skillsPageQuery = gql`
  query skillsPage($search: String = "") {
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
  ${pageMetadataFragment}
  ${skillFragment}
`;

export default skillsPageQuery;
