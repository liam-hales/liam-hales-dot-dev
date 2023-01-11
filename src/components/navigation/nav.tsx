/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css } from '@mui/material';
import Link from 'next/link';
import { BaseProps } from '../../types';
import { BoxJustify, NavRoute, ScreenSize } from '../../enums';
import { TopNav, BottomNav, Logo } from '..';
import { useScreen } from '../../hooks';
import { Box } from '../common';
import { GlobalContent } from '../../graphql';

/**
 * The `Nav` component props
 */
interface Props extends BaseProps {
  readonly content: GlobalContent;
  readonly children: ReactNode;
}

/**
 * Controls the navigation for the app and what navigation
 * component should be rendered depending on the screen size
 *
 * @param props The component props
 * @returns The `Nav` component
 */
const Nav: FunctionComponent<Props> = ({ content, children }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { notionUrl } = content;

  return (
    <>
      {
        (screenSize === ScreenSize.SMALL) && (
          <Box
            justify={BoxJustify.CENTER}
            css={css`
              width: 100%;
              height: 72px;
            `}
          >
            <Link
              href={NavRoute.HOME}
              passHref={true}
              aria-label="Home"
            >
              <Logo css={css`
                width: 24px;
              `}
              />
            </Link>
          </Box>
        )
      }
      {
        (screenSize !== ScreenSize.SMALL) && (
          <TopNav notionUrl={notionUrl} />
        )
      }
      {children}
      {
        (screenSize === ScreenSize.SMALL) && (
          <>
            <BottomNav />
            <div css={css`
              height: 84px;
            `}
            />
          </>
        )
      }
    </>
  );
};

export default Nav;
