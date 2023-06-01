import { gql } from 'graphql-request';
import {
  pageFragment,
  pageMetadataFragment,
  timelinePointEventFragment,
  timelinePeriodEventFragment,
} from '..';

/**
 * The GraphQL query used for fetching
 * the CV life timeline page data.
 *
 * Default value required for `$search` variable due to
 * how Hygraph handles searching within GraphQL.
 */
const lifeTimelinePageQuery = gql`
  query lifeTimelinePage {
    page(
      where: {
        slug: "life-timeline"
      }
    ) {
      ...PageFields,
      content {
        ... on LifeTimelineContent {
          timelineEvents {
            ... on TimelinePointEvent {
              ...TimelinePointEventFields
            }
            ... on TimelinePeriodEvent {
              ...TimelinePeriodEventFields
            }
          }
        }
      }
    }
  }
  ${pageFragment}
  ${pageMetadataFragment}
  ${timelinePointEventFragment}
  ${timelinePeriodEventFragment}
`;

export default lifeTimelinePageQuery;
