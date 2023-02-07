import { gql } from 'graphql-request';
import { pageFragment, blogPostFragment, tagFragment, personFragment, assetFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the blog page data
 */
const blogPageQuery = gql`
  query blogPage($search: String!) {
    page(
      where: {
        slug: "blog"
      }
    ) {
      ...PageFields,
      content {
        ... on BlogContent {
          posts(
            orderBy: publishedDate_DESC
            where: {
              _search: $search
            }
          ) {
            ...BlogPostFields
          }
        }
      }
    }
  }
  ${pageFragment}
  ${blogPostFragment}
  ${tagFragment}
  ${personFragment}
  ${assetFragment}
`;

export default blogPageQuery;
