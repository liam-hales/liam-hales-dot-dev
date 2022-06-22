import { useQueryClient } from 'react-query';
import { PageSlug } from '../graphql/enums';
import { PageContent, PageData, PageVariables } from '../graphql/types';

/**
 * Finds the page data from the query cache for
 * the `variables` and returns it's `content`.
 *
 * Generic type `T` for the page slug
 *
 * @param variables The page variables
 * @returns The page content
 * @example
 *
 * const { ... } = usePageContent<PageSlug.GLOBAL>({
 *   slug: PageSlug.GLOBAL
 * });
 */
const usePageContent = <T extends PageSlug>(
  variables: PageVariables<T>,
): PageContent<T> => {

  // Stringify and base64 encode the variables
  // to generate the cache key for the query
  const keyData = JSON.stringify(variables);
  const cacheKey = window.btoa(keyData);

  const client = useQueryClient();
  const page = client.getQueryData<PageData<T>>(cacheKey);

  // Check if the page exists
  // If not then throw an error
  if (page == null) {
    throw new Error(`No page data for cache key ${cacheKey}`);
  }

  const { content } = page;
  return content;
};

export default usePageContent;
