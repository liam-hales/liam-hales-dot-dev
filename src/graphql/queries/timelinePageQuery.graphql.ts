import { gql } from 'graphql-request';
import {
  pageFragment,
  pageMetadataFragment,
  timelinePointEventFragment,
  timelinePeriodEventFragment,
  skillFragment,
} from '..';

/**
 * The GraphQL query used for fetching
 * the CV timeline page data
 */
const timelinePageQuery = gql`
  query timelinePage {
    page(
      where: {
        slug: "timeline"
      }
    ) {
      ...PageFields,
      content {
        ... on TimelineContent {
          events {
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
  ${skillFragment}
`;

export default timelinePageQuery;
