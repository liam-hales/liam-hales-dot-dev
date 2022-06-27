import { gql } from 'graphql-request';
import { assetFragment } from '.';

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
    meImage {
      ...AssetFields
    }
  }
  ${assetFragment}
`;

export default globalContentFragment;
