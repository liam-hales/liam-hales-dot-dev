import { gql } from 'graphql-request';
import {
  assetFragment,
  globalContentFragment,
  homeContentFragment,
  curriculumVitaeContentFragment,
} from '../fragments';

/**
 * The GraphQL query for fetching the page
 * data for a specific page slug
 *
 * @example
 *
 * const { status, data } = useQuery<PageData<PageSlug.GLOBAL>>(pageQuery, {
 *   slug: PageSlug.GLOBAL,
 * });
 */
const pageQuery = gql`
  query getPage($slug: PageSlug!) {
    page(
      where: {
        slug: $slug
      }
    ) {
      id
      slug
      name
      content {
        ... on GlobalContent {
          ...GlobalContentFields
        }
        ... on HomeContent {
          ...HomeContentFields
        }
        ... on CurriculumVitaeContent {
          ...CurriculumVitaeContentFields
        }
      }
      createdAt
      updatedAt
    }
  }
  ${assetFragment}
  ${globalContentFragment}
  ${homeContentFragment}
  ${curriculumVitaeContentFragment}
`;

export default pageQuery;
