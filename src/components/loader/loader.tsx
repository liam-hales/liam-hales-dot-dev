import { CircularProgress } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { useIsFetching } from '@tanstack/react-query';
import { StyledBackgrop } from './loader.styled';

/**
 * Used to indicate that the app is fetching
 * data by rendering a progress spinner.
 *
 * Uses the `useIsFetching` hook from `@tanstack/react-query`
 * to determine if a query is being fetched
 *
 * @returns The `Loader` component
 */
const Loader: FunctionComponent = (): ReactElement => {

  const count = useIsFetching({
    predicate: (query) => {

      // The `status` is only 'loading' for the initial query which is
      // when we want to display the loader. The `fetchStatus` however
      // is set to `fetching` for every request
      const { state } = query;
      const { status } = state;

      return (status === 'loading');
    },
  });

  return (
    <StyledBackgrop open={count > 0}>
      <CircularProgress />
    </StyledBackgrop>
  );
};

export default Loader;
