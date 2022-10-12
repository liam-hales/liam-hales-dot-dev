import { ReactNode, RefObject } from 'react';
import { ScreenSize } from './enums';

/**
 * Override the existing `BreakpointOverrides` interface
 * from `@mui/material` to replace the breakpoint value keys
 */
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    [ScreenSize.SMALL]: true;
    [ScreenSize.MEDIUM]: true;
    [ScreenSize.LARGE]: true;
  }
}

/**
 * The props that all component
 * props should `extends`.
 *
 * Generic type `T` for the `children`
 */
export interface BaseProps<T = ReactNode> {
  readonly reference?: RefObject<HTMLDivElement>;
  readonly className?: string;
  readonly children?: T;
}
