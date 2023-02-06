/** @jsxImportSource @emotion/react */

'use client';

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
    <MuiDivider
      flexItem={true}
      css={css`
        margin-left: -1000px;
        margin-right: -1000px;
        padding-left: 1000px;
        padding-right: 1000px;
        background-color: ${ColourPalette.GREY_900};
      `}
    />
  );
};

export default Divider;
