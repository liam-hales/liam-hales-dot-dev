import { ReactNode, RefObject } from 'react';

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
