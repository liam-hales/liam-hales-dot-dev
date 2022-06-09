import { useQuery as _useQuery, QueryStatus as _QueryStatus } from 'react-query';
import { dataTransformer } from '../helpers';
import { QueryStatus } from '../enums';
import { GraphQLContext } from '../context';
import { useContext } from '.';

/**
 * The `useQuery` hook response.
 * Generic type `T for the response data
 */
interface UseQueryResponse<T extends Record<keyof T, unknown>> {
  readonly status: QueryStatus;
  readonly data?: T;
}

/**
 * Used to make a request to the GraphQL API using the
 * `client` from the `GraphQLContext`.
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

  // Stringify and base64 encode the variables
  // to act as the cache key for the request
  const keyData = JSON.stringify(variables);
  const cacheKey = window.btoa(keyData);

  const { client } = useContext(GraphQLContext);
  const { status, data } = _useQuery<T>({
    queryKey: cacheKey,
    queryFn: async () => {

      // Make the GraphQL request and get
      // the first key from the response
      const repsonse = await client.request<{ [key: string]: T }, V>(document, variables);
      const [key] = Object.keys(repsonse);

      // Stringify the respone and pasre it
      // with the custom response formatter
      const text = JSON.stringify(repsonse[key]);
      const data = JSON.parse(text, dataTransformer);

      return data;
    },
  });

  // Define the status map to map between the react-query
  // query status and the app query status
  const statusMap: Record<_QueryStatus, QueryStatus> = {
    idle: QueryStatus.PENDING,
    loading: QueryStatus.LOADING,
    success: QueryStatus.SUCCESS,
    error: QueryStatus.ERROR,
  };

  return {
    status: statusMap[status],
    data: data,
  };
};

export default useQuery;
