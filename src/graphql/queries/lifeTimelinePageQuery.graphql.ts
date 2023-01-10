import { gql } from 'graphql-request';
import { pageFragment, lifeTimelineContentFragment, timelineEventFragment } from '..';

/**
 * The GraphQL query for fetching
 * the CV life timeline page data
 *
 * @example
 * import { request } from 'graphql-request';
 *
 * const url = 'https://example.com/graphql';
 *
 * const data = await request(url, lifeTimelinePageQuery);
 * const data = await useQuery(lifeTimelinePageQuery);
 */
const lifeTimelinePageQuery = gql`
  query lifeTimelinePage($search: String!) {
    page(
      where: {
        slug: LIFE_TIMELINE
      }
    ) {
      ...PageFields,
      content {
        ... on LifeTimelineContent {
          ...LifeTimelineContentFields
        }
      }
    }
  }
  ${pageFragment}
  ${lifeTimelineContentFragment}
  ${timelineEventFragment}
`;

export default lifeTimelinePageQuery;
