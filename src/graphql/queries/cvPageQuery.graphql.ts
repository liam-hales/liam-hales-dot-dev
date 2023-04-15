import { gql } from 'graphql-request';
import { pageFragment, pageMetadataFragment, skillFragment, timelineEventFragment } from '..';

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
            ...TimelineEventFields
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
  ${timelineEventFragment}
`;

export default cvPageQuery;
