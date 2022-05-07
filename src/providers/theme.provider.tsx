import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';

/**
 * The `ThemeProvider` component props
 */
type Props = BaseProps;

/**
 * Used to create and provide the
 * theme for the app to use
 *
 * @param props The component props
 * @returns The `ThemeProvider` component
 */
const ThemeProvider: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {

  const theme = createTheme({
    palette: {
      background: {
        default: ColourPalette.BLACK,
      },
      text: {
        primary: ColourPalette.WHITE,
      },
      primary: {
        main: ColourPalette.BLUE,
        contrastText: ColourPalette.WHITE,
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
