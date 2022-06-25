import { Backdrop, CircularProgress } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { useIsFetching } from 'react-query';

/**
 * Used to indicate that the app is fetching
 * data by rendering a progress spinner.
 *
 * Uses the `useIsFetching` hook from `react-query`
 * to determine if a query is being fetched
 *
 * @returns The `Loader` component
 */
const Loader: FunctionComponent = (): ReactElement => {

  const count = useIsFetching({
    fetching: false,
  });

  return (
    <Backdrop open={count > 0}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
