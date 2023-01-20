/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette, IconId, NavRoute } from '../enums';
import { GlobalContent } from '../graphql';
import { BaseProps } from '../types';
import { Button, Image, Link, Text, Title } from './common';
import { Content } from '.';

/**
 * The `NotFound` component props
 */
interface Props extends BaseProps {
  readonly content: GlobalContent;
}

/**
 * Used to display a **"404 Not Found"**
 * message to the user
 *
 * @returns The `NotFound` component
 */
const NotFound: FunctionComponent<Props> = ({ content }): ReactElement<Props> => {

  const { notFoundText, notFoundImage } = content;
  return (
    <Content css={css`
      padding-top: 46px;
      padding-bottom: 100px;
    `}
    >
      <Text
        isBold={true}
        css={css`
          padding-right: 6px;
          font-size: 110px;
          line-height: 100%;
        `}
      >
        404
      </Text>
      <Title>
        Page not found
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          max-width: 320px;
          padding-top: 16px;
          text-align: center;
        `}
      >
        {notFoundText}
      </Text>
      <Image
        path={notFoundImage.url}
        alt="Not found image"
        width={320}
        css={css`
          margin-top: 38px;
          margin-Bottom: 38px;
        `}
      />
      <Link
        href={NavRoute.HOME}
        passHref={true}
      >
        <Button iconId={IconId.ARROW_LEFT}>
          Return home
        </Button>
      </Link>
    </Content>
  );
};

export default NotFound;
