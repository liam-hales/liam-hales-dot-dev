'use client';

import { ReactElement, useEffect } from 'react';
import { ErrorComponent } from 'next/dist/client/components/error-boundary';
import { Error } from '../components';

/**
 * The app error boundry used to render the `Error` component for
 * any uncaught errors that occur in the app level segment and below
 *
 * @param props The component props
 * @returns The `AppError` component
 */
const AppError: ErrorComponent = ({ error, reset }): ReactElement => {

  /**
   * Logs out the error to the `console`
   * for extra visibility
   */
  useEffect(() => console.error(error), [error]);

  return (
    <Error reset={reset} />
  );
};

export default AppError;
