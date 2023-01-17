import { ReactElement, RefObject } from 'react';
import { ColourPalette, ScreenSize } from './enums';

/**
 * Override types from `@mui/material`
 */
declare module '@mui/material' {

  /**
   * Override the existing `BreakpointOverrides` interface
   * from `@mui/material` to replace the breakpoint value keys
   */
  interface BreakpointOverrides extends Record<ScreenSize, true> {
    readonly xs: false;
    readonly sm: false;
    readonly md: false;
    readonly lg: false;
    readonly xl: false;
  }

  /**
   * Override the existing `ButtonPropsColorOverrides` interface
   * from `@mui/material` to replace the button colour prop values
   */
  interface ButtonPropsColorOverrides extends Record<ColourPalette, true> {
    readonly inherit: false;
    readonly primary: false;
    readonly secondary: false;
    readonly success: false;
    readonly error: false;
    readonly info: false;
    readonly warning: false;
  }

  /**
   * Override the existing `IconButtonPropsColorOverrides` interface
   * from `@mui/material` to replace the button colour prop values
   */
  interface IconButtonPropsColorOverrides extends Record<ColourPalette, true> {
    readonly inherit: false;
    readonly default: false;
    readonly primary: false;
    readonly secondary: false;
    readonly success: false;
    readonly error: false;
    readonly info: false;
    readonly warning: false;
  }
}

/**
 * Like `FunctionComponent from `react` but for `async`
 * server components with a `Promise` return typr
 */
export interface ServerComponent<P extends Partial<Record<keyof P, unknown>> = never> {
  (props: P): Promise<ReactElement<P>> | Promise<ReactElement>;
}

/**
 * The props that all component
 * props should `extends`.
 *
 * Generic type `T` for the `reference`
 */
export interface BaseProps<T extends HTMLElement = HTMLElement> {
  readonly reference?: RefObject<T>;
  readonly className?: string;
}

/**
 * Describes the props for a Next.js page
 * component exported from a route `page.tsx`
 */
export interface PageProps extends BaseProps {
  readonly params?: Partial<Record<string, string>>;
  readonly searchParams?: Partial<Record<string, string>>;
}

/**
 * Describes the `options` for the `useQuery` hook
 */
export interface UseQueryOptions<V extends Partial<Record<keyof V, unknown>> = never> {
  readonly variables?: V;
  readonly cache?: RequestCache;
}
