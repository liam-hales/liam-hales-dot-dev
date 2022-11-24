/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { BottomNavigation, BottomNavigationAction, css } from '@mui/material';
import { ColourPalette, IconId, NavKey, NavRoute } from '../../enums';
import { useNav, useRouter } from '../../hooks';
import { Box, Text, Icon } from '../common';

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
  font-size: 20px;
  padding-top: 3px;
  padding-bottom: 6px;
`;

/**
 * Renders the bottom navigation bar used for navigating
 * the app for extra small screen sizes
 *
 * @returns The `BottomNav` component
 */
const BottomNav: FunctionComponent = (): ReactElement => {

  const { goTo } = useRouter();
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
          border-color: ${ColourPalette.DARK_GREY};
          background-color: ${ColourPalette.BLACK};
        `}
      >
        <BottomNavigationAction
          value={NavKey.HOME}
          onClick={() => goTo(NavRoute.HOME)}
          label={(
            <Text bold={true}>
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
          onClick={() => goTo(NavRoute.CV)}
          label={(
            <Text bold={true}>
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
          onClick={() => goTo(NavRoute.BLOG)}
          label={(
            <Text bold={true}>
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
          onClick={() => goTo(NavRoute.BRAND)}
          label={(
            <Text bold={true}>
              Brand
            </Text>
          )}
          icon={(
            <Icon
              id={IconId.PAINT_BRUSH}
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
