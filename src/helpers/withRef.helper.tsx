import { FunctionComponent, forwardRef } from 'react';
import { BaseProps } from '../types';

/**
 * Used to forward a components reference
 * to it's `reference` prop
 *
 * - Generic type `T` for the HTML element
 * - Generic type `P` for the component props
 *
 * @param Component The component
 * @returns The component with a forwarded reference
 */
const withRef = <
  T extends HTMLElement,
  P extends BaseProps<T>,
>(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: FunctionComponent<P>,
) => {

  // Foward the component reference
  // to it's `reference` prop
  return forwardRef<T, P>((props, ref) => {
    return (
      <Component
        {...props}
        reference={ref}
      />
    );
  });
};

export default withRef;
