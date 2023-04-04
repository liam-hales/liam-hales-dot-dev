import { gql } from 'graphql-request';
import { pageFragment, pageMetadataFragment, timelineEventFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the CV life timeline page data.
 *
 * Default value required for `$search` variable due to
 * how Hygraph handles searching within GraphQL.
 */
const lifeTimelinePageQuery = gql`
  query lifeTimelinePage($search: String = "") {
    page(
      where: {
        slug: "life-timeline"
      }
    ) {
      ...PageFields,
      content {
        ... on LifeTimelineContent {
          timelineEvents(
            orderBy: date_DESC
            where: {
              _search: $search
            }
          ) {
            ...TimelineEventFields
          }
        }
      }
    }
  }
  ${pageFragment}
  ${pageMetadataFragment}
  ${timelineEventFragment}
`;

export default lifeTimelinePageQuery;
