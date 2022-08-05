import { FunctionComponent, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BaseProps } from '../types';

/**
 * The `QueryProvider` component props
 */
type Props = BaseProps;

/**
 * Used to wrap the `children` in the
 * `QueryClientProvider` from `@tanstack/react-query`
 *
 * @param props The component props
 * @returns The `QueryProvider` component
 * @example
 *
 * return (
 *   <QueryProvider>
 *     { ... }
 *   </QueryProvider>
 * );
 */
const QueryProvider: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
