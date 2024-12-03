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
          coreSkills {
            ...SkillFields
          }
          experienceEvents {
            ... on TimelinePointEvent {
              ...TimelinePointEventFields
            }
            ... on TimelinePeriodEvent {
              ...TimelinePeriodEventFields
            }
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
`;

export default cvPageQuery;
