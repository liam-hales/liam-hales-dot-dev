import { m as motion } from 'motion/react';
import { FunctionComponent } from 'react';
import { BaseProps } from '../types';
import { withRef } from '.';

/**
 * Used to wrap a component in `m` from `motion/react` to
 * apply the `MotionProps` and allow the component to be animated.
 *
 * _**NOTE:** This also uses `withRef` which is required for `motion/react` custom components_
 *
 * - Generic type `T` for the HTML element
 * - Generic type `P` for the component props
 *
 * @param Component The component
 * @returns The component with a forwarded reference
 * @example
 *
 * const Component = withMotion((): ReactElement => {
 *   return (
 *     <div> ... </div>
 *   );
 * });
 */
const withMotion = <
  T extends HTMLElement,
  P extends BaseProps<T>,
>(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: FunctionComponent<P>,
) => {

  // Forward the component reference and turn it into a
  // `motion/react` component to allow it to be animated
  return motion.create(withRef(Component));
};

export default withMotion;
