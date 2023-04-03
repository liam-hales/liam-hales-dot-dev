import { gql } from 'graphql-request';
import { pageFragment, pageMetadataFragment, skillFragment, assetFragment } from '..';

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
              _search: $search
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
  ${assetFragment}
`;

export default skillsPageQuery;
