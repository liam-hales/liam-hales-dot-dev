import { request } from 'graphql-request';
import { cache } from 'react';
import { UseQueryOptions } from '../../types';
import { useConfig } from '.';

/**
 * Used to make GraphQL API requests using
 * `graphql-request` under the hood.
 *
 * _**WARNING:** This hook can only be used server-side_
 *
 * - Generic type `T` for the response data
 * - Generic Type `V` for the request variables
 *
 * @param document The GraphQL query document
 * @param options The GraphQL query options
 *
 * @returns The response data
 * @example
 *
 * const data = await useQuery<Data, Variables>(document, {
 *   variables: { ... },
 * });
 */
const useQuery = async <
  T extends object | undefined,
  V extends object = never,
>(
  document: string,
  options: UseQueryOptions<V> = {},
): Promise<T> => {

  const { graphqlApiUrl } = useConfig();
  const { variables } = options;

  const repsonse = await request<{ readonly [key: string]: T }>({
    url: graphqlApiUrl,
    document: document,
    // Use `as` to fix generic type error
    variables: variables as Record<string, unknown>,
  });

  // Extract and return the object from
  // the first key in the response
  const [key] = Object.keys(repsonse);
  return repsonse[key];
};

export default cache(useQuery);
