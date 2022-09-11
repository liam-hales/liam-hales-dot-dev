import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `Asset` type used
 * within other fragments for the page query
 */
const assetFragment = gql`
  fragment AssetFields on Asset {
    id
    fileName
    url
  }
`;

export default assetFragment;
