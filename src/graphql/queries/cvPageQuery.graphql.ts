import { gql } from 'graphql-request';
import {
  pageFragment,
  pageMetadataFragment,
  skillFragment,
  timelinePointEventFragment,
  timelinePeriodEventFragment,
  employmentFragment,
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
          employments {
            ...EmploymentFields
          }
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
  ${employmentFragment}
`;

export default cvPageQuery;
