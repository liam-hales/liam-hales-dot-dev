import { QueryStatus } from '../enums';
import { PageData, pageQuery, PageSlug, PageVariables } from '../graphql';
import { useQuery } from '.';

/**
 * The `usePageQuery` hook response.
 * Generic type `T for the page slug
 */
interface UsePageQueryResponse<T extends PageSlug> {
  readonly status: QueryStatus;
  readonly data?: PageData<T>;
}

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
 * const { status, data } = usePageQuery<PageSlug.GLOBAL>(PageSlug.GLOBAL);
 */
const usePageQuery = <T extends PageSlug>(
  variables: PageVariables<T>,
): UsePageQueryResponse<T> => {

  // Use the useQuery hook to make the page
  // request and return the response
  return useQuery<PageData<T>, PageVariables<T>>(pageQuery, variables);
};

export default usePageQuery;
