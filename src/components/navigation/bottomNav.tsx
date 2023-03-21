/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';
import { useNav } from '../../hooks';
import { Box, Text, Icon, Link, Divider } from '../common';

/**
 * The CSS styles for the
 * bottom navigation action
 */
const bottomNavActionCss = css`
  .MuiTouchRipple-root {
    color: ${ColourPalette.WHITE};
    border-radius: 8px;
  };
`;

/**
 * The CSS styles for the bottom
 * navigation action icon
 */
const iconCss = css`
  font-size: 20px;
  flex-shrink: 0;
`;

/**
 * Renders the bottom navigation bar used for
 * navigating the app for small screen sizes
 *
 * @returns The `BottomNav` component
 */
const BottomNav: FunctionComponent = (): ReactElement => {

  const { navKey } = useNav();
  return (
    <Box css={css`
      position: fixed;
      width: 100%;
      bottom: 0px;
      z-index: 1;
      background-color: ${ColourPalette.GREY_1000};
    `}
    >
      <Divider />
      <BottomNavigation
        value={navKey}
        css={css`
          width: 100%;
          height: 72px;
          padding-top: 12px;
          padding-bottom: 12px;
          padding-left: 12px;
          padding-right: 12px;
          margin-bottom: env(safe-area-inset-bottom);
          background-color: transparent;
        `}
      >
        <BottomNavigationAction
          value="home"
          href="/"
          component={Link}
          label={(
            <Text isBold={true}>
              Home
            </Text>
          )}
          icon={(
            <Icon
              id="home"
              colour={
                (navKey === 'home')
                  ? ColourPalette.BLUE
                  : ColourPalette.WHITE
              }
              css={iconCss}
            />
          )}
          css={bottomNavActionCss}
        />
        <BottomNavigationAction
          value="cv"
          href="/cv"
          component={Link}
          label={(
            <Text isBold={true}>
              CV
            </Text>
          )}
          icon={(
            <Icon
              id="document"
              colour={
                (navKey === 'cv')
                  ? ColourPalette.BLUE
                  : ColourPalette.WHITE
              }
              css={iconCss}
            />
          )}
          css={bottomNavActionCss}
        />
        <BottomNavigationAction
          value="blog"
          href="/blog"
          component={Link}
          label={(
            <Text isBold={true}>
              Blog
            </Text>
          )}
          icon={(
            <Icon
              id="message"
              colour={
                (navKey === 'blog')
                  ? ColourPalette.BLUE
                  : ColourPalette.WHITE
              }
              css={iconCss}
            />
          )}
          css={bottomNavActionCss}
        />
        <BottomNavigationAction
          value="brand"
          href="/brand"
          component={Link}
          label={(
            <Text isBold={true}>
              Brand
            </Text>
          )}
          icon={(
            <Icon
              id="colourSwatch"
              colour={
                (navKey === 'brand')
                  ? ColourPalette.BLUE
                  : ColourPalette.WHITE
              }
              css={iconCss}
            />
          )}
          css={bottomNavActionCss}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
