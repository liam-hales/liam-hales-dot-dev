import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `LifeTimelineContent`
 * type used within the page query
 */
const lifeTimelineContentFragment = gql`
  fragment LifeTimelineContentFields on LifeTimelineContent {
    timelineEvents {
      ...TimelineEventFields
    }
  }
`;

export default lifeTimelineContentFragment;
