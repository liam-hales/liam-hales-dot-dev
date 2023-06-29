import { gql } from 'graphql-request';
import {
  pageFragment,
  pageMetadataFragment,
  employmentFragment,
  skillFragment,
} from '..';

/**
 * The GraphQL query used for fetching
 * the CV experience page data
 */
const experiencePageQuery = gql`
  query experiencePage {
    page(
      where: {
        slug: "experience"
      }
    ) {
      ...PageFields,
      content {
        ... on ExperienceContent {
          employments {
            ...EmploymentFields
          }
        }
      }
    }
  }
  ${pageFragment}
  ${pageMetadataFragment}
  ${employmentFragment}
  ${skillFragment}
`;

export default experiencePageQuery;
