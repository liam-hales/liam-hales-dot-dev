import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `GlobalContent` type
 * used within the page query
 */
const globalContentFragment = gql`
  fragment GlobalContentFields on GlobalContent {
    footerText
    builtUsingText
    email
    linkedInUrl
    stackOverflowUrl
    buyMeCoffeeUrl
  }
`;

export default globalContentFragment;
