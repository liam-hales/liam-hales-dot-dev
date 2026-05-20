'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { BaseProps } from '../types';

/**
 * The `ThemeProvider` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

/**
 * Used to provide the theme context using
 * the `next-themes` package under the hood
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
  return (
    <NextThemeProvider
      themes={
        [
          'system',
          'light',
          'dark',
        ]
      }
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
