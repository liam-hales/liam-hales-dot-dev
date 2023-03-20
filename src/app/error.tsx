/** @jsxImportSource @emotion/react */

'use client';

import { ReactElement, useEffect } from 'react';
import { css } from '@emotion/react';
import { ErrorComponent } from 'next/dist/client/components/error-boundary';
import { ColourPalette } from '../enums';
import { Button, Title, Text, Link } from '../components/common';
import { Content } from '../components';

/**
 * The app level error boundry used to display a generic error
 * message to the user for any uncaught errors that `throw`
 *
 * @returns The `Error` component
 */
const AppError: ErrorComponent = ({ error, reset }): ReactElement => {

  /**
   * Logs out the error to the `console`
   * for extra visibility
   */
  useEffect(() => console.error(error), [error]);

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

export default AppError;
