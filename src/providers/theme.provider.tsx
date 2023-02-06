'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { createTheme, CssBaseline, GlobalStyles, PaletteOptions, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { urbanist } from '../fonts';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';

/**
 * The `ThemeProvider` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

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

  // Recuce the values from the `ColourPalette` enum
  // into a palette options object for the theme
  const palette = Object
    .values(ColourPalette)
    .reduce<PaletteOptions>((map, value) => {
      return {
        ...map,
        [value]: {
          main: value,
        },
      };
    }, {});

  const { fontFamily } = urbanist.style;
  const theme = createTheme({
    palette: {
      ...palette,
      background: {
        default: ColourPalette.GREY_1000,
      },
      primary: {
        main: ColourPalette.BLUE,
      },
      secondary: {
        main: ColourPalette.GREY_700,
      },
    },
    breakpoints: {
      values: {
        small: 0,
        medium: 500,
        large: 1024,
      },
    },
    typography: {
      fontFamily: fontFamily,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
        html: {
          overflowX: 'hidden',
        },
        body: {
          overflowX: 'hidden',
        },
      }}
      />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
