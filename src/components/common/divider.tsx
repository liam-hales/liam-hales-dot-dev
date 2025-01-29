/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Divider as MuiDivider } from '@mui/material';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';

/**
 * Renders the divider used to split up components
 * and separate content into groups
 *
 * @returns The `Divider` component
 */
const Divider: FunctionComponent = (): ReactElement => {
  return (
    <MuiDivider
      flexItem={true}
      css={css`
        background-color: ${ColourPalette.GREY_900};
      `}
    />
  );
};

export default Divider;
