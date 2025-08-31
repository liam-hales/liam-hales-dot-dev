/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
import { BaseProps, DeviceType } from '../../types';
import { TopNav, BottomNav, Logo } from '..';
import { useScreen } from '../../hooks';
import { Box, Link } from '../common';

/**
 * The `Nav` component props
 */
interface Props extends BaseProps {
  readonly deviceType: DeviceType;
  readonly children: ReactNode;
}

/**
 * Controls the navigation for the app and what navigation
 * component should be rendered depending on the screen size
 *
 * @param props The component props
 * @returns The `Nav` component
 */
const Nav: FunctionComponent<Props> = ({ deviceType, children }): ReactElement<Props> => {

  const { screenSize } = useScreen(deviceType);

  return (
    <>
      {
        (screenSize === 'small') && (
          <Box
            justify="center"
            css={css`
              width: 100%;
              height: 72px;
            `}
          >
            <Link
              href="/"
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
        (screenSize !== 'small') && (
          <TopNav />
        )
      }
      {children}
      {
        (screenSize === 'small') && (
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
