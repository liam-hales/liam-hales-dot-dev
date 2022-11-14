import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `BrandContent`
 * type used within the page query
 */
const brandContentFragment = gql`
  fragment BrandContentFields on BrandContent {
    logoText
    typographyText
  }
`;

export default brandContentFragment;
