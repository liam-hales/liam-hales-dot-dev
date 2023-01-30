import { gql } from 'graphql-request';
import { pageFragment, skillFragment, timelineEventFragment, assetFragment } from '..';

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
          disclaimerText
        }
      }
    }
  }
  ${pageFragment}
  ${skillFragment}
  ${timelineEventFragment}
  ${assetFragment}
`;

export default cvPageQuery;
