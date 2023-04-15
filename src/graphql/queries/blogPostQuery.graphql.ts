import { gql } from 'graphql-request';
import { blogPostFragment, tagFragment, colourFragment, personFragment, assetFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the blog post data for a specific `id`
 */
const blogPostQuery = gql`
  query blogPost($id: ID!) {
    blogPost(
      where: {
        id: $id
      }
    ) {
      ...BlogPostFields
    }
  }
  ${blogPostFragment}
  ${tagFragment}
  ${colourFragment}
  ${personFragment}
  ${assetFragment}
`;

export default blogPostQuery;
