import { useQuery as _useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { dataTransformer, generateCacheKey } from '../helpers';
import { QueryStatus } from '../enums';
import { UseQueryResponse } from '../types';
import { useConfig } from '.';

/**
 * Used to make a request to the GraphQL API using
 * `graphql-request` and `@tanstack/react-query` under the hood
 *
 * Generic type `T` for the response data.
 * Generic Type `V` for the request variables.
 *
 * @param document The GraphQL query document
 * @param variables The GraphQL query varibales
 *
 * @returns The `useQuery` hook response
 * @example
 *
 * const { status, data } = useQuery<Data, Variables>(document, variables);
 */
const useQuery = <
  T extends Partial<Record<keyof T, unknown>>,
  V extends Partial<Record<keyof V, unknown>>,
>(
  document: string,
  variables: V,
): UseQueryResponse<T> => {

  // Generate a cache key from the query variables
  // which will be used as the cache key for the query
  const cacheKey = generateCacheKey(variables);

  const { apiUrl } = useConfig();
  const { isLoading, isError, data } = _useQuery<T>({
    queryKey: [cacheKey],
    queryFn: async () => {

      // Make the GraphQL request and get
      // the first key from the response
      const repsonse = await request<{ [key: string]: T }>(apiUrl, document, variables);
      const [key] = Object.keys(repsonse);

      // Stringify the respone and pasre it
      // with the custom response formatter
      const text = JSON.stringify(repsonse[key]);
      const data = JSON.parse(text, dataTransformer);

      return data;
    },
  });

  // Check if the query is loading and
  // if so return the loading status
  if (isLoading === true) {
    return {
      status: QueryStatus.LOADING,
    };
  }

  // Check if the query has errored and
  // if so return the error status
  if (isError === true) {
    return {
      status: QueryStatus.ERROR,
    };
  }

  // Return the success status
  // and the defined data
  return {
    status: QueryStatus.SUCCESS,
    data: data,
  };
};

export default useQuery;
