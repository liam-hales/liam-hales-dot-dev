import { createTheme, PaletteOptions, ThemeProvider as MuiThemeProvider } from '@mui/material';
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

  const theme = createTheme({
    palette: {
      ...palette,
      background: {
        default: ColourPalette.BLACK,
      },
      primary: {
        main: ColourPalette.BLUE,
      },
      secondary: {
        main: ColourPalette.GREY,
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
