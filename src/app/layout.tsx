import './globals.css';

import { FunctionComponent, ReactElement } from 'react';
import { AppProvider, ThemeProvider } from '../providers';
import { App } from '../components';
import { newsreader, jetbrainsMono } from '../fonts';

/**
 * The top level component for the app, used to define the HTML document
 * structure, initialise React context providers and render the `App` component
 *
 * @returns The `AppLayout` component
 */
const AppLayout: FunctionComponent = (): ReactElement => {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`h-full ${newsreader.variable} ${jetbrainsMono.variable} overscroll-none`}
    >
      <body className="h-full touch-none">
        <AppProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
};

export default AppLayout;
