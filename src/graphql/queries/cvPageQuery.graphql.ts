import { gql } from 'graphql-request';
import {
  pageFragment,
  pageMetadataFragment,
  skillFragment,
  timelinePointEventFragment,
  timelinePeriodEventFragment,
} from '..';

/**
 * The GraphQL query used for
 * fetching the CV page data
 */
const cvPageQuery = gql`
  query cvPage {
    page(
      where: {
        slug: "cv"
      }
    ) {
      ...PageFields,
      content {
        ... on CVContent {
          currentPositionText
          careerStartDate
          skillsText
          skills {
            ...SkillFields
          }
          lifeTimelineText
          lifeTimelineEvents {
            ... on TimelinePointEvent {
              ...TimelinePointEventFields
            }
            ... on TimelinePeriodEvent {
              ...TimelinePeriodEventFields
            }
          }
          experienceText
          disclaimerText
        }
      }
    }
  }
  ${pageFragment}
  ${pageMetadataFragment}
  ${skillFragment}
  ${timelinePointEventFragment}
  ${timelinePeriodEventFragment}
`;

export default cvPageQuery;
