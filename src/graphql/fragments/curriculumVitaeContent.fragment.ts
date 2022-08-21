import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `CurriculumVitaeContent`
 * type used within the page query
 */
const curriculumVitaeContentFragment = gql`
  fragment CurriculumVitaeContentFields on CurriculumVitaeContent {
    currentPositionText
    careerStartDate
    companyStartDate
  }
`;

export default curriculumVitaeContentFragment;
