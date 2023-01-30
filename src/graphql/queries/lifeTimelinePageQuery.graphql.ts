import { gql } from 'graphql-request';
import { pageFragment, timelineEventFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the CV life timeline page data
 */
const lifeTimelinePageQuery = gql`
  query lifeTimelinePage($search: String!) {
    page(
      where: {
        slug: "life-timeline"
      }
    ) {
      ...PageFields,
      content {
        ... on LifeTimelineContent {
          timelineEvents(
          where: {
            title_contains: $search
          }
        ) {
          ...TimelineEventFields
        }
        }
      }
    }
  }
  ${pageFragment}
  ${timelineEventFragment}
`;

export default lifeTimelinePageQuery;
