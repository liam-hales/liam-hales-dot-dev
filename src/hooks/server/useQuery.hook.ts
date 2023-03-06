import { GraphQLClient } from 'graphql-request';
import { UseQueryOptions } from '../../types';
import { useConfig } from '.';

/**
 * Used to make GraphQL API requests using
 * `graphql-request` under the hood.
 *
 * _**NOTE:** This hook can only be used server-side_
 *
 * - Generic type `T` for the response data
 * - Generic Type `V` for the request variables
 *
 * @param document The GraphQL query document
 * @param options The GraphQL query options
 *
 * @returns The `useQuery` hook response
 * @example
 *
 * const data = await useQuery<Data, Variables>(document, {
 *   variables: { ... },
 * });
 */
const useQuery = async <
  T extends Partial<Record<keyof T, unknown>> | undefined,
  V extends Partial<Record<keyof V, unknown>> = never,
>(
  document: string,
  options: UseQueryOptions<V> = {},
): Promise<T> => {

  const { graphqlApiUrl } = useConfig();
  const { variables } = options;

  // Initialise the GraphQL client with
  // the API URL and the options
  const client = new GraphQLClient(graphqlApiUrl, {
    fetch: fetch,
  });

  const repsonse = await client.request<{ readonly [key: string]: T }>({
    document: document,
    variables: variables,
  });

  // Extract and return the object from
  // the first key in the response
  const [key] = Object.keys(repsonse);
  return repsonse[key];
};

export default useQuery;
