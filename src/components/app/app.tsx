import { CssBaseline } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { ThemeProvider } from '../../providers';

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
    </ThemeProvider>
  );
};

export default App;
