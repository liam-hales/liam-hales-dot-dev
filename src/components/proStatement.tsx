/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { Box, Text, Title } from './common';

/**
 * The `ProStatement` component props
 */
interface Props extends BaseProps {
  readonly text: string;
}

/**
 * Renders the professional statement section for the home page
 * which is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `ProStatement` component
 */
const ProStatement: FunctionComponent<Props> = ({ className, text }): ReactElement<Props> => {
  return (
    <Box
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Professional Statement
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
          padding-bottom: 16px;
        `}
      >
        {text}
      </Text>
      <Text
        isBold={true}
        isItalic={true}
        css={css`
          font-size: 18px;
        `}
      >
        - Liam Hales
      </Text>
    </Box>
  );
};

export default ProStatement;
