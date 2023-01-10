/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette, IconId, SVGIconId } from '../../../enums';
import { BaseProps } from '../../../types';
import { Box, Icon } from '..';

/**
 * The `IconButton` component props
 */
interface Props extends BaseProps {
  readonly id: IconId | SVGIconId;
  readonly colour?: ColourPalette;
  readonly onClick?: () => void;
}

/**
 * The common `IconButton` component used to
 * render an icon button to perform an action
 *
 * @param props The component props
 * @returns The `IconButton` component
 */
const IconButton: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    id,
    colour = ColourPalette.BLUE,
    onClick,
  } = props;

  return (
    <Box
      className={className}
      onClick={onClick}
    >
      <Icon
        id={id}
        colour={colour}
        css={css`
          width: 20px;
          height: 20px;
          font-size: 20px;
        `}
      />
    </Box>
  );
};

export default IconButton;
