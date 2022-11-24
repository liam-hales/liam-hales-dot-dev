/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { useRouter } from '../hooks';
import { ColourPalette, IconId, NavRoute } from '../enums';
import { Button, Title, Text } from './common';
import { Content } from '.';

/**
 * Used to display an error message to the
 * user for any errors loading data
 *
 * @returns The `Error` component
 */
const Error: FunctionComponent = (): ReactElement => {

  const { goTo } = useRouter();
  return (
    <Content css={css`
      padding-top: 100px;
    `}
    >
      <Title>
        Something went wrong
      </Title>
      <Text
        colour={ColourPalette.LIGHT_GREY}
        css={css`
          max-width: 280px;
          padding-top: 16px;
          padding-bottom: 38px;
          text-align: center;
        `}
      >
        Oops, looks like something went wrong. Please try refreshing the page.
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

export default Error;
