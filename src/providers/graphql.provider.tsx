import { FunctionComponent, ReactElement, useState } from 'react';
import { GraphQLClient } from 'graphql-request';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GraphQLContext } from '../context';
import { BaseProps, GraphQLState } from '../types';
import { useConfig } from '../hooks';

/**
 * The `GraphQLProvider` component props
 */
 type Props = BaseProps;

/**
 * Used to provide the GraphQL state and wrap the
 * `children` in the `QueryClientProvider`
 *
 * @param props The component props
 * @returns The `GraphQLProvider` component
 * @example
 *
 * return (
 *   <GraphQLProvider>
 *     { ... }
 *   </GraphQLProvider>
 * );
 */
const GraphQLProvider: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {

  const { apiUrl } = useConfig();
  const [state] = useState<GraphQLState>(() => {
    return {
      client: new GraphQLClient(apiUrl),
      queryClient: new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
    };
  });

  return (
    <GraphQLContext.Provider value={state}>
      <QueryClientProvider client={state.queryClient}>
        {children}
      </QueryClientProvider>
    </GraphQLContext.Provider>
  );
};

export default GraphQLProvider;
