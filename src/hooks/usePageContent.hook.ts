import { useQueryClient } from '@tanstack/react-query';
import { PageSlug } from '../graphql/enums';
import { PageContent, PageData, PageVariables } from '../graphql/types';
import { generateCacheKey } from '../helpers';

/**
 * Finds the page data from the query cache for
 * the `variables` and returns it's `content`.
 *
 * **NOTE:** It's important to only use this hook in a
 * component that has been wrapped in the `StatusHandler`
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

  // Generate the cache key from the page variables and get
  // the query data from the client cache using the cache key
  const cacheKey = generateCacheKey(variables);
  const client = useQueryClient();
  const page = client.getQueryData<PageData<T>>([cacheKey]);

  // Check if the page exists
  // If not then throw an error
  if (page == null) {
    throw new Error(`No page data for cache key ${cacheKey}. Make sure "usePageContent" is used within a component that has been wrapped in the "StatusHandler"`);
  }

  const { content } = page;
  return content;
};

export default usePageContent;
