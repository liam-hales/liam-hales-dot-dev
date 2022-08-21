import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `GlobalContent`
 * type used within the page query
 */
const globalContentFragment = gql`
  fragment GlobalContentFields on GlobalContent {
    footerText
    builtUsingText
    email
    linkedInUrl
    stackOverflowUrl
    buyMeCoffeeUrl
    shayanRastegarUrl
    notFoundText
    notFoundImage {
      ...AssetFields
    }
    meImage {
      ...AssetFields
    }
  }
`;

export default globalContentFragment;
