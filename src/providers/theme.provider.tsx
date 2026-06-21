'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeSync } from '../components';
import { BaseProps } from '../types';
import { themes } from '../constants';

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
      themes={[...themes]}
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
    >
      <ThemeSync />
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
