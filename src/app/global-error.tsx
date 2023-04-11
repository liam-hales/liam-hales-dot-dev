'use client';

import { ReactElement, useEffect } from 'react';
import { ErrorComponent } from 'next/dist/client/components/error-boundary';
import { Error, SafeArea } from '../components';
import { ThemeProvider } from '../providers';
import { urbanist } from '../fonts';

/**
 * The global error boundry used to render the `Error` component for
 * any uncaught errors that occur in the `AppLayout` component
 *
 * @param props The component props
 * @returns The `GlobalError` component
 */
const GlobalError: ErrorComponent = ({ error, reset }): ReactElement => {

  /**
   * Logs out the error to the `console`
   * for extra visibility
   */
  useEffect(() => console.error(error), [error]);

  return (
    <html
      lang="en"
      className={`${urbanist.className}`}
    >
      <body>
        <ThemeProvider>
          <SafeArea>
            <Error reset={reset} />
          </SafeArea>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default GlobalError;
