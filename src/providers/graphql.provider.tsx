import { FunctionComponent, ReactElement, useState } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GraphQLContext } from '../context';
import { BaseProps, GraphQLState } from '../types';
import { useConfig } from '../hooks';

/**
 * The `GraphQLProvider` component props
 */
 type Props = BaseProps;

/**
 * Provides the GraphQL state and dispatch
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
  const [state] = useState<GraphQLState>({
    client: new GraphQLClient(apiUrl),
  });

  return (
    <GraphQLContext.Provider value={state}>
      {children}
    </GraphQLContext.Provider>
  );
};

export default GraphQLProvider;
