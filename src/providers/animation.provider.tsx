'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';
import { BaseProps } from '../types';

/**
 * The `AnimationProvider` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

/**
 * Used to setup animations and wrap the `children`
 * in the `LazyMotion` from `motion/react`
 *
 * @param props The component props
 * @returns The `AnimationProvider` component
 * @example
 *
 * return (
 *   <AnimationProvider>
 *     { ... }
 *   </AnimationProvider>
 * );
 */
const AnimationProvider: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {
  return (
    <LazyMotion
      features={domAnimation}
      strict={true}
    >
      {children}
    </LazyMotion>
  );
};

export default AnimationProvider;
