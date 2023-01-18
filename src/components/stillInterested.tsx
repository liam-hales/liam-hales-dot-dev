/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { NavRoute, ColourPalette, IconId } from '../enums';
import { BaseProps } from '../types';
import { Box, Button, Link, Text, Title } from './common';

/**
 * The `StillInterested` component props
 */
interface Props extends BaseProps {
  readonly text: string;
}

/**
 * Renders the still interested section for the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `StillInterested` component
 */
const StillInterested: FunctionComponent<Props> = ({ className, text }): ReactElement<Props> => {
  return (
    <Box className={className}>
      <Title>
        Still interested?
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          max-width: 340px;
          padding-top: 16px;
          padding-bottom: 32px;
          text-align: center;
        `}
      >
        {text}
      </Text>
      <Link
        href={NavRoute.CV}
        passHref={true}
      >
        <Button iconId={IconId.DOCUMENT}>
          Curriculum Vitae
        </Button>
      </Link>
    </Box>
  );
};

export default StillInterested;
