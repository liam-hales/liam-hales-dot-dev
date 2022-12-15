/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { Divider as MuiDivider, css } from '@mui/material';
import { ColourPalette } from '../../enums';

/**
 * Renders the divider used to split up compoonents
 * and separate content into groups
 *
 * @returns The `Divider` component
 */
const Divider: FunctionComponent = (): ReactElement => {
  return (
    <MuiDivider css={css`
      background-color: ${ColourPalette.GREY_800};
    `}
    />
  );
};

export default Divider;
