/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { usePageContent, useRouter } from '../hooks';
import { ColourPalette, IconId, NavRoute } from '../enums';
import { PageSlug } from '../graphql';
import { Button, Image, Text, Title } from './common';
import { Content } from '.';

/**
 * Used to display a 404 Not Found message
 * to the user for any unknown routes
 *
 * @returns The `NotFound` component
 */
const NotFound: FunctionComponent = (): ReactElement => {

  const { goTo } = useRouter();
  const { notFoundImage, notFoundText } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  return (
    <Content css={css`
      padding-top: 46px;
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
        colour={ColourPalette.LIGHT_GREY}
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
        css={css`
          width: 320px;
          margin-top: 38px;
          margin-Bottom: 38px;
        `}
      />
      <Button
        iconId={IconId.ARROW_LEFT}
        onClick={() => goTo(NavRoute.HOME)}
      >
        Return home
      </Button>
    </Content>
  );
};

export default NotFound;
