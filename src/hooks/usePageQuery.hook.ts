import { PageData, pageQuery, PageSlug, PageVariables } from '../graphql';
import { UseQueryResponse } from '../types';
import { useQuery } from '.';

/**
 * Used to make a request to the GraphQL API
 * for specific page data
 *
 * Generic type `T` for the page slug
 *
 * @param variables The page variables
 * @returns The `usePageQuery` hook response
 * @example
 *
 * const { status, data } = usePageQuery<PageSlug.GLOBAL>({
 *   slug: PageSlug.GLOBAL
 * });
 */
const usePageQuery = <T extends PageSlug>(
  variables: PageVariables<T>,
): UseQueryResponse<PageData<T>> => {

  // Use the useQuery hook to make the page
  // request and return the response
  return useQuery<PageData<T>, PageVariables<T>>(pageQuery, variables);
};

export default usePageQuery;
