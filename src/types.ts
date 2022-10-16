import { ReactNode, RefObject } from 'react';
import { QueryStatus, ScreenSize } from './enums';

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

/**
 * The union type for all `useQuery` hook responses.
 * This type can also used other query hooks.
 *
 * Generic type `T` for the `data`
 */
export type UseQueryResponse<T extends Record<keyof T, unknown>> =
  | LoadingUseQueryResponse
  | SuccessUseQueryResponse<T>
  | ErrorUseQueryResponse;

/**
 * Describes the `useQuery` hook success response
 */
interface SuccessUseQueryResponse<T extends Record<keyof T, unknown>> {
  readonly status: QueryStatus.SUCCESS;
  readonly data: T
}

/**
 * Describes the `useQuery` hook loading response
 */
interface LoadingUseQueryResponse {
  readonly status: QueryStatus.LOADING;
  readonly data?: undefined;
}

/**
 * Describes the `useQuery` hook error response
 */
interface ErrorUseQueryResponse {
  readonly status: QueryStatus.ERROR;
  readonly data?: undefined;
}
