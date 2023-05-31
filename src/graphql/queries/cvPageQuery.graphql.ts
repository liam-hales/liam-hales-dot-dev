import { gql } from 'graphql-request';
import {
  pageFragment,
  pageMetadataFragment,
  skillFragment,
  pointTimelineEventFragment,
  periodTimelineEventFragment,
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
            ... on PointTimelineEvent {
              ...PointTimelineEventFields
            }
            ... on PeriodTimelineEvent {
              ...PeriodTimelineEventFields
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
  ${pointTimelineEventFragment}
  ${periodTimelineEventFragment}
`;

export default cvPageQuery;
