import { gql } from 'graphql-request';
import { pageFragment, skillsContentFragment, skillFragment, assetFragment } from '..';

/**
 * The GraphQL query for fetching
 * the CV skills page data
 *
 * @example
 * import { request } from 'graphql-request';
 *
 * const url = 'https://example.com/graphql';
 *
 * const data = await request(url, skillsPageQuery);
 * const data = await useQuery(skillsPageQuery);
 */
const skillsPageQuery = gql`
  query skillsPage($search: String!) {
    page(
      where: {
        slug: SKILLS
      }
    ) {
      ...PageFields,
      content {
        ... on SkillsContent {
          ...SkillsContentFields
        }
      }
    }
  }
  ${pageFragment}
  ${skillsContentFragment}
  ${skillFragment}
  ${assetFragment}
`;

export default skillsPageQuery;
