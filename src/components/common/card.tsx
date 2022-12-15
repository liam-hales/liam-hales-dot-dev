/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, BoxDirection, BoxJustify, ColourPalette } from '../../enums';
import { BaseProps } from '../../types';
import { Box } from '.';

/**
 * The `Card` component props
 */
interface Props extends BaseProps {
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
  readonly onClick?: ()=> void;
}

/**
 * The common `Card` component used to render a card
 * which elevates and draws attention to content
 *
 * @param props The component props
 * @returns The `Card` component
 */
const Card: FunctionComponent<Props> = ({ className, direction, alignment, justify, onClick, children }): ReactElement<Props> => {
  return (
    <Box
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
