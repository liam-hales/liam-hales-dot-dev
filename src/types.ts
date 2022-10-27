import { ReactNode, RefObject } from 'react';
import { QueryStatus, ScreenSize } from './enums';

/**
 * Override types from `@mui/material`
 */
declare module '@mui/material/styles' {

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
}

/**
 * The props that all component
 * props should `extends`.
 *
 * Generic type `T` for the `children`
 *
 * Generic type `R` for if `children` is required
 */
export type BaseProps<T = ReactNode, R extends boolean = false> =
  {
    readonly reference?: RefObject<HTMLDivElement>;
    readonly className?: string;
  }
  & (
    R extends true
      ? {
          readonly children: T
        }
      : {
          readonly children?: T
        }
  );

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
