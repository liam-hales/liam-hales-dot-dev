import { CssBaseline } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { ThemeProvider, QueryProvider } from '../../providers';
import { Nav, Loader, Global } from '..';
import { StyledFooter } from './app.styled';

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
      <QueryProvider>
        <Loader />
        <Global>
          <Nav>
            <StyledFooter />
          </Nav>
        </Global>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default App;
