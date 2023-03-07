import { gql } from 'graphql-request';
import { blogPostFragment, tagFragment, personFragment, assetFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the blog post data for a specific slug
 */
const blogPostQuery = gql`
  query blogPost($slug: String!) {
    blogPost(
      where: {
        slug: $slug
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
