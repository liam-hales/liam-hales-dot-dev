import { ReactElement, Ref } from 'react';
import { navKeys, navRoutes, codeLanguages } from './constants';
import { ColourPalette } from './enums';

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
}

/**
 * Describes the different types of
 * rendering for the app
 */
export type RenderType = 'client-side' | 'server-side';

/**
 * Describes the different screen sizes
 */
export type ScreenSize = 'small' | 'medium' | 'large';

/**
 * Describes the different device types
 */
export type DeviceType = 'desktop' | 'mobile';

/**
 * The `Box` component direction used to determine
 * how the content is displayed along the main axis
 */
export type BoxDirection = 'row' | 'column';

/**
 * The `Box` component alignment used to determine
 * how the content is displayed along the cross axis
 */
export type BoxAlignment = 'flex-start' | 'center' | 'flex-end';

/**
 * The `Box` component content justification used to determine
 * how the content is justified along the main axis
 */
export type BoxJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between';

/**
 * The `Button` component size used to determine
 * the size of the button
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * The `Text` component element used to determine what underlaying
 * HTML element is used to render the text
 */
export type TextElement = 'h1' | 'h2' | 'p' | 'span';

/**
 * The `Modal` component status used to determine
 * what status the modal is currently in
 */
export type ModalStatus = 'open' | 'closed' | 'opening' | 'closing';

/**
 * Describes each individual section of the logo
 * used for the `Logo` component
 */
export type LogoSection = 'letterL' | 'reverseLetterL' | 'bar';

/**
 * The icon ID used for the `Icon` component
 * to determine which icon is rendered
 */
export type IconId =
  | 'home'
  | 'document'
  | 'message'
  | 'colourSwatch'
  | 'code'
  | 'server'
  | 'envelope'
  | 'arrowleft'
  | 'arrowRight'
  | 'magnifyingGlass'
  | 'cross'
  | 'tick'
  | 'copy'
  | 'list'
  | 'tool'
  | 'pencil'
  | 'textBox'
  | 'refresh'
  | 'copyright'
  | 'info'
  | 'linkedIn'
  | 'stackOverflow'
  | 'github'
  | 'notion';

/**
 * The logo icon ID used for the `LogoIcon` component
 * to determine which logo icon is rendered
 */
export type LogoIconId =
  | 'javascript'
  | 'typescript'
  | 'nodejs'
  | 'nestjs'
  | 'nextjs'
  | 'html'
  | 'css'
  | 'react'
  | 'tailwindcss'
  | 'jest'
  | 'git'
  | 'json'
  | 'swift'
  | 'graphql'
  | 'mui'
  | 'mongodb'
  | 'vercel'
  | 'aws'
  | 'azure'
  | 'microsoft'
  | 'jira'
  | 'sketch'
  | 'photoshop'
  | 'illustrator';

/**
 * The navigation key used for the `TopNav`
 * and `BottomNav` components
 */
export type NavKey = typeof navKeys[number];

/**
 * The navigation route used to describe
 * all possible app routes
 */
export type NavRoute = typeof navRoutes[number];

/**
 * Describes the code languages supported by the
 * `CodeSnippet` component for syntax highlighting
 */
export type CodeLanguage = typeof codeLanguages[number];

/**
 * Like `FunctionComponent from `react` but for `async`
 * server components with a `Promise` return type
 *
 * - Generic type `T` for the props
 */
export interface AsyncComponent<T extends object = never> {
  (props: T): Promise<ReactElement<T>> | Promise<ReactElement>;
}

/**
 * The props that all component
 * props should `extends`
 *
 * - Generic type `T` for the `internalRef`
 *
 * The `internalRef` prop is used with the `withRef`
 * helper to forward component references
 *
 * @see [React - Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)
 */
export interface BaseProps<T extends HTMLElement = HTMLElement> {
  readonly internalRef?: Ref<T>;
  readonly className?: string;
}

/**
 * Describes the props for a Next.js page
 * component exported from a route `page.tsx`
 */
export interface PageProps {
  readonly params?: Partial<Record<string, string>>;
  readonly searchParams?: Partial<Record<string, string>>;
}

/**
 * Describes the `options` for
 * the `useQuery` hook
 */
export interface UseQueryOptions<V extends object = never> {
  readonly variables?: V;
}
