/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css } from '@mui/material';
import { MotionProps } from 'framer-motion';
import { BoxAlignment, BoxDirection, BoxJustify, ColourPalette } from '../../enums';
import { BaseProps } from '../../types';
import { Box } from '.';

/**
 * The `Card` component props
 */
interface Props extends MotionProps, BaseProps<HTMLDivElement> {
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
  readonly onClick?: ()=> void;
  readonly children: ReactNode;
}

/**
 * The common `Card` component used to render a card
 * which elevates and draws attention to content
 *
 * @param props The component props
 * @returns The `Card` component
 */
const Card: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    reference,
    className,
    direction,
    alignment,
    justify,
    onClick,
    children,
    ...motionProps
  } = props;

  return (
    <Box
      {...motionProps}
      reference={reference}
      className={className}
      direction={direction}
      alignment={alignment}
      justify={justify}
      onClick={onClick}
      css={css`
        border-radius: 10px;
        background-color: ${ColourPalette.GREY_800};
      `}
    >
      {children}
    </Box>
  );
};

export default Card;
