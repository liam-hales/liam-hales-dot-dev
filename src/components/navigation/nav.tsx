/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { BaseProps } from '../../types';
import { BoxJustify, ScreenSize } from '../../enums';
import { TopNav, BottomNav, Logo } from '..';
import { useScreen } from '../../hooks';
import { Box } from '../common';

/**
 * The `Nav` component props
 */
type Props = BaseProps;

/**
 * Controls the navigation for the app and what navigation
 * component should be rendered depending on the screen size
 *
 * @param props The component props
 * @returns The `Nav` component
 */
const Nav: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  return (
    <BrowserRouter>
      {
        (screenSize === ScreenSize.SMALL) && (
          <Box
            justify={BoxJustify.CENTER}
            css={css`
              width: 100%;
              height: 72px;
            `}
          >
            <Logo css={css`
              width: 24px;
            `}
            />
          </Box>
        )
      }
      {
        (screenSize !== ScreenSize.SMALL) && (
          <TopNav />
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
    </BrowserRouter>
  );
};

export default Nav;
