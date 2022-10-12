import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { ColourPalette, ScreenSize } from '../enums';
import { BaseProps } from '../types';

/**
 * The `ThemeProvider` component props
 */
type Props = BaseProps;

/**
 * Used to create and provide the theme for the app and wrap
 * the `children` in the `ThemeProvider` from `@mui/material`
 *
 * @param props The component props
 * @returns The `ThemeProvider` component
 * @example
 *
 * return (
 *   <ThemeProvider>
 *     { ... }
 *   </ThemeProvider>
 * );
 */
const ThemeProvider: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {

  const theme = createTheme({
    palette: {
      background: {
        default: ColourPalette.BLACK,
      },
      primary: {
        main: ColourPalette.BLUE,
      },
    },
    breakpoints: {
      values: {
        [ScreenSize.SMALL]: 0,
        [ScreenSize.MEDIUM]: 500,
        [ScreenSize.LARGE]: 1024,
      },
    },
    typography: {
      fontFamily: [
        'Urbanist',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
