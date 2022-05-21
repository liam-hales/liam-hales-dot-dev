import { ReactNode } from 'react';

/**
 * The props that all component props should `extends`
 */
export interface BaseProps {
  readonly className?: string;
  readonly children?: ReactNode;
}
