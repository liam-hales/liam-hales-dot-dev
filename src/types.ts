import { Ref } from 'react';

/**
 * Describes the different
 * app states
 */
export type AppState =
  {
    readonly id: 'idle' | 'loading' | 'streaming';
  }
  | AppErrorState;

/**
 * Describes the app
 * error state
 */
export interface AppErrorState {
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
