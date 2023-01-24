/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { BottomNavigation, BottomNavigationAction, css } from '@mui/material';
import { ColourPalette, IconId, NavKey, NavRoute } from '../../enums';
import { useNav } from '../../hooks';
import { Box, Text, Icon, Link } from '../common';

/**
 * The CSS styles for the
 * bottom navigation action
 */
const bottomNavActionCss = css`
  .MuiTouchRipple-root {
    color: ${ColourPalette.WHITE};
    border-radius: 36px;
  };
`;

/**
 * The CSS styles for the bottom
 * navigation action icon
 */
const iconCss = css`
  font-size: 24px;
`;

/**
 * Renders the bottom navigation bar used for navigating
 * the app for extra small screen sizes
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
      padding-top: 12px;
      padding-bottom: calc(12px + env(safe-area-inset-bottom));
      padding-left: 12px;
      padding-right: 12px;
      z-index: 1;
    `}
    >
      <BottomNavigation
        value={navKey}
        css={css`
          width: 100%;
          height: 72px;
          border-style: solid;
          border-width: 1px;
          border-radius: 36px;
          border-color: ${ColourPalette.GREY_800};
          background-color: ${ColourPalette.GREY_900};
        `}
      >
        <BottomNavigationAction
          value={NavKey.HOME}
          href={NavRoute.HOME}
          component={Link}
          label={(
            <Text isBold={true}>
              Home
            </Text>
          )}
          icon={(
            <Icon
              id={IconId.HOME}
              colour={
                (navKey === NavKey.HOME)
                  ? ColourPalette.BLUE
                  : ColourPalette.WHITE
              }
              css={iconCss}
            />
          )}
          css={bottomNavActionCss}
        />
        <BottomNavigationAction
          value={NavKey.CV}
          href={NavRoute.CV}
          component={Link}
          label={(
            <Text isBold={true}>
              CV
            </Text>
          )}
          icon={(
            <Icon
              id={IconId.DOCUMENT}
              colour={
                (navKey === NavKey.CV)
                  ? ColourPalette.BLUE
                  : ColourPalette.WHITE
              }
              css={iconCss}
            />
          )}
          css={bottomNavActionCss}
        />
        <BottomNavigationAction
          value={NavKey.BLOG}
          href={NavRoute.BLOG}
          component={Link}
          label={(
            <Text isBold={true}>
              Blog
            </Text>
          )}
          icon={(
            <Icon
              id={IconId.MESSAGE}
              colour={
                (navKey === NavKey.BLOG)
                  ? ColourPalette.BLUE
                  : ColourPalette.WHITE
              }
              css={iconCss}
            />
          )}
          css={bottomNavActionCss}
        />
        <BottomNavigationAction
          value={NavKey.BRAND}
          href={NavRoute.BRAND}
          component={Link}
          label={(
            <Text isBold={true}>
              Brand
            </Text>
          )}
          icon={(
            <Icon
              id={IconId.COLOUR_SWATCH}
              colour={
                (navKey === NavKey.BRAND)
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
