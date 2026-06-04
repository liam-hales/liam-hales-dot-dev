import './globals.css';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { AppProvider, ThemeProvider } from '../providers';
import { newsreader, jetbrainsMono } from '../fonts';
import { BaseProps } from '../types';

/**
 * The `AppLayout` component props
 */
interface Props extends BaseProps {
  children: ReactNode;
}

/**
 * The top level component for the app, used to define the HTML document
 * structure, initialise React context providers and render the page content
 *
 * @param props The component props
 * @returns The `AppLayout` component
 */
const AppLayout: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`h-full ${newsreader.variable} ${jetbrainsMono.variable} overscroll-none`}
    >
      <body className="h-full touch-none">
        <AppProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
};

export default AppLayout;
