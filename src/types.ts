import { Ref } from 'react';

/**
 * Describes the different
 * app statuses
 */
export type Status =
  {
    readonly id: 'idle' | 'loading' | 'streaming';
  }
  | ErrorStatus;

/**
 * Describes the app
 * error status
 */
export interface ErrorStatus {
  readonly id: 'error';
  readonly error: Error;
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
