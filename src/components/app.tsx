/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { CssBaseline, css } from '@mui/material';
import { ThemeProvider, QueryProvider } from '../providers';
import { SafeArea, Nav, Loader, Global, Router, Footer, BuyMeCoffeeWidget } from '.';

/**
 * The root component to render into the
 * `DOM` which renders everything
 *
 * @returns The `App` component
 */
const App: FunctionComponent = (): ReactElement => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <BuyMeCoffeeWidget />
      <QueryProvider>
        <Loader />
        <SafeArea>
          <Nav>
            <Global>
              <Router />
              <Footer css={css`
                padding-top: 100px;
              `}
              />
            </Global>
          </Nav>
        </SafeArea>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default App;
