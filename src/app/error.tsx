/** @jsxImportSource @emotion/react */

'use client';

import { ReactElement, useEffect } from 'react';
import { css } from '@mui/material';
import { ErrorComponent } from 'next/dist/client/components/error-boundary';
import { ColourPalette, IconId, NavRoute } from '../enums';
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
      <Title>
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
        href={NavRoute.HOME}
        passHref={true}
      >
        <Button
          iconId={IconId.ARROW_LEFT}
          onClick={() => reset()}
        >
          Return home
        </Button>
      </Link>
    </Content>
  );
};

export default AppError;
