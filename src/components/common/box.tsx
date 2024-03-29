/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
import { BaseProps, BoxAlignment, BoxDirection, BoxJustify } from '../../types';
import { withMotion } from '../../helpers';

/**
 * The `Box` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
  readonly wrap?: boolean;
  readonly onClick?: () => void;
  readonly children: ReactNode;
}

/**
 * The common `Box` component used to layout components
 * rendering them within a flexbox `div` element
 *
 * @param props The component props
 * @returns The `Box` component
 */
const Box: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    internalRef,
    className,
    direction = 'column',
    alignment = 'center',
    justify = 'flex-start',
    wrap = false,
    onClick,
    children,
  } = props;

  return (
    <div
      ref={internalRef}
      className={className}
      role={(onClick != null) ? 'button' : undefined}
      onClick={onClick}
      onKeyDown={(event) => {

        // If the key pressed was the enter key then
        // call `onClick` to simulate a click
        if (event.key === 'Enter') {
          onClick?.();
        }
      }}
      css={css`
        display: flex;
        flex-direction: ${direction};
        align-items: ${alignment};
        justify-content: ${justify};
        flex-wrap: ${(wrap === true) ? 'wrap' : 'nowrap'};
        cursor: ${(onClick != null) ? 'pointer' : 'unset'};
      `}
    >
      {children}
    </div>
  );
};

export default withMotion(Box);
