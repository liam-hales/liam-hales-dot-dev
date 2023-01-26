/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../enums';
import { Button, Title, Text, Link } from './common';
import { Content } from '.';

/**
 * Used to display to the user that a
 * specific page is coming soon
 *
 * @returns The `ComingSoon` component
 */
const ComingSoon: FunctionComponent = (): ReactElement => {
  return (
    <Content css={css`
      padding-top: 100px;
    `}
    >
      <Title>
        Coming Soon
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          max-width: 300px;
          padding-top: 16px;
          padding-bottom: 38px;
          text-align: center;
        `}
      >
        This page is coming soon. For now you can visit my old website
        {' '}
        <Link
          href="https://liamhales.io"
          target="_blank"
          passHref={true}
        >
          <Text isBold={true}>
            liamhales.io
          </Text>
        </Link>
        {' '}
        for this infomation.
      </Text>
      <Link
        href="/"
        passHref={true}
      >
        <Button iconId="arrowleft">
          Return home
        </Button>
      </Link>
    </Content>
  );
};

export default ComingSoon;
