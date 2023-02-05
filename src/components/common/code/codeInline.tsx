/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../../../types';
import { Box, Text } from '..';
import { ColourPalette } from '../../../enums';

/**
 * The `CodeInline` component props
 */
interface Props extends BaseProps {
  readonly children: string;
}

/**
 * Used to render inline code
 *
 * @param props The component props
 * @returns The `CodeInline` component
 */
const CodeInline: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <Box
      className={className}
      css={css`
        display: inline;
        padding-top: 1.2px;
        padding-bottom: 1.2px;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 4px;
        background-color: ${ColourPalette.GREY_800};
      `}
    >
      <Text
        isBold={true}
        isMono={true}
        css={css`
          display: inline;
          font-size: 12px;
        `}
      >
        {children}
      </Text>
    </Box>
  );
};

export default CodeInline;
