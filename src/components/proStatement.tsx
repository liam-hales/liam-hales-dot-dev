/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { Person } from '../graphql';
import { Box, Text, Title } from './common';

/**
 * The `ProStatement` component props
 */
interface Props extends BaseProps {
  readonly text: string;
  readonly me: Person;
}

/**
 * Renders the professional statement section for the home page
 * which is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `ProStatement` component
 */
const ProStatement: FunctionComponent<Props> = ({ className, text, me }): ReactElement<Props> => {
  const { firstName, lastName } = me;

  return (
    <Box
      className={className}
      alignment="flex-start"
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
        -
        {' '}
        {firstName}
        {' '}
        {lastName}
      </Text>
    </Box>
  );
};

export default ProStatement;
