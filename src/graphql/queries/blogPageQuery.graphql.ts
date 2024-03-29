import { gql } from 'graphql-request';
import { pageFragment, pageMetadataFragment, blogPostFragment, tagFragment, colourFragment, personFragment, assetFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the blog page data.
 *
 * Default value required for `$search` variable due to
 * how Hygraph handles searching within GraphQL.
 */
const blogPageQuery = gql`
  query blogPage($search: String = "") {
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
  ${pageMetadataFragment}
  ${blogPostFragment}
  ${tagFragment}
  ${colourFragment}
  ${personFragment}
  ${assetFragment}
`;

export default blogPageQuery;
