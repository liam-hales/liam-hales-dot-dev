import { gql } from 'graphql-request';
import { pageFragment, pageMetadataFragment, assetFragment } from '..';

/**
 * The GraphQL query used for fetching
 * the brand page data
 */
const brandPageQuery = gql`
  query brandPage {
    page(
      where: {
        slug: "brand"
      }
    ) {
      ...PageFields,
      content {
        ... on BrandContent {
          logoText
          logoLetterLText
          logoReverseLetterLText
          logoBarText
          colourPaletteText
          typographyText
        }
      }
    }
  }
  ${pageFragment}
  ${pageMetadataFragment}
  ${assetFragment}
`;

export default brandPageQuery;
