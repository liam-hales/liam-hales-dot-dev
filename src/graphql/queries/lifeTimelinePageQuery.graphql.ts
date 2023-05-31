import { gql } from 'graphql-request';
import {
  pageFragment,
  pageMetadataFragment,
  pointTimelineEventFragment,
  periodTimelineEventFragment,
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
            ... on PointTimelineEvent {
              ...PointTimelineEventFields
            }
            ... on PeriodTimelineEvent {
              ...PeriodTimelineEventFields
            }
          }
        }
      }
    }
  }
  ${pageFragment}
  ${pageMetadataFragment}
  ${pointTimelineEventFragment}
  ${periodTimelineEventFragment}
`;

export default lifeTimelinePageQuery;
