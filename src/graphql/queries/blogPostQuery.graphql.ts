import { gql } from 'graphql-request';
import { blogPostFragment, tagFragment, personFragment, assetFragment } from '..';

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
  ${personFragment}
  ${assetFragment}
`;

export default blogPostQuery;
