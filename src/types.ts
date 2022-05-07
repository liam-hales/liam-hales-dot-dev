import { ReactNode } from 'react';

/**
 * The props that all component props should `extends`
 */
export interface BaseProps {
  className?: string;
  children?: ReactNode;
}
