/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../types';
import { ColourPalette } from '../enums';
import { Button, Text, Title, Link } from './common';
import { Content } from '.';

/**
 * The `Error` component props
 */
interface Props extends BaseProps {
  readonly reset: () => void;
}

/**
 * Used to display a generic **"Something went wrong"**
 * error message to the user
 *
 * @param props The component props
 * @returns The `Error` component
 */
const Error: FunctionComponent<Props> = ({ reset }): ReactElement<Props> => {
  return (
    <Content css={css`
      padding-top: 100px;
      padding-bottom: 100px;
    `}
    >
      <Title css={css`
        text-align: center;
      `}
      >
        Something went wrong
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          max-width: 280px;
          padding-top: 16px;
          padding-bottom: 38px;
          text-align: center;
        `}
      >
        Oops, looks like something went wrong. Please try refreshing the page.
      </Text>
      <Link
        href="/"
        passHref={true}
      >
        <Button
          iconId="arrowleft"
          onClick={() => reset()}
        >
          Return home
        </Button>
      </Link>
    </Content>
  );
};

export default Error;
