import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BaseProps } from '../types';

/**
 * The `QueryProvider` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

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
