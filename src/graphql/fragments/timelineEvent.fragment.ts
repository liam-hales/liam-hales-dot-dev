import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `TimelineEvent` type used
 * within other fragments for the page query
 */
const timelineEventFragment = gql`
  fragment TimelineEventFields on TimelineEvent {
    title
    description
    date
  }
`;

export default timelineEventFragment;
