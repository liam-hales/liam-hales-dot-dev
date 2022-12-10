/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { useRouter } from '../hooks';
import { ColourPalette, IconId, NavRoute } from '../enums';
import { Button, Title, Text } from './common';
import { Content } from '.';

/**
 * Used to display to the user that a
 * specific page is coming soon
 *
 * @returns The `ComingSoon` component
 */
const ComingSoon: FunctionComponent = (): ReactElement => {

  const { goTo } = useRouter();
  return (
    <Content css={css`
      padding-top: 100px;
    `}
    >
      <Title>
        Coming Soon
      </Title>
      <Text
        colour={ColourPalette.LIGHT_GREY}
        css={css`
          max-width: 300px;
          padding-top: 16px;
          padding-bottom: 38px;
          text-align: center;
        `}
      >
        This page is coming soon. For now you can visit my old website
        {' '}
        <Text
          isBold={true}
          onClick={() => window.open('https://liamhales.io', '_blank')}
        >
          liamhales.io
        </Text>
        {' '}
        for this infomation.
      </Text>
      <Button
        iconId={IconId.ARROW_LEFT}
        onClick={() => goTo(NavRoute.HOME)}
      >
        Return home
      </Button>
    </Content>
  );
};

export default ComingSoon;
