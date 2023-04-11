/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../enums';
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
 * @param props The component props
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
          padding-bottom: 30px;
          font-size: 160px;
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
          max-width: 340px;
          padding-top: 16px;
          text-align: center;
        `}
      >
        {notFoundText}
      </Text>
      <Image
        path={notFoundImage.url}
        alt="Not found image"
        width={400}
        height={200}
        css={css`
          margin-top: 42px;
          margin-Bottom: 42px;
          border-radius: 16px;
        `}
      />
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

export default NotFound;
