/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, BoxDirection, BoxJustify } from '../../enums';
import { BaseProps } from '../../types';

/**
 * The `Box` component props
 */
interface Props extends BaseProps<ReactNode, true> {
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
  readonly wrap?: boolean;
  readonly onClick?: () => void;
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
    reference,
    className,
    direction = BoxDirection.COLUMN,
    alignment = BoxAlignment.CENTER,
    justify = BoxJustify.START,
    wrap = false,
    onClick,
    children,
  } = props;

  return (
    <div
      ref={reference}
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role={(onClick != null) ? 'button' : undefined}
      tabIndex={(onClick != null) ? 0 : undefined}
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

export default Box;
