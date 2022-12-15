/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxDirection, NavKey, NavRoute, BoxJustify, ColourPalette } from '../../enums';
import { useNav, useRouter } from '../../hooks';
import { Box, Tabs, Tab } from '../common';
import { Logo } from '..';

/**
 * Renders the top navigation bar used for navigating the
 * app for any screen size apart from  extra small
 *
 * @returns The `TopNav` component
 */
const TopNav: FunctionComponent = (): ReactElement => {

  const { navKey } = useNav();
  const { goTo } = useRouter();

  return (
    <Box css={css`
      position: sticky;
      width: 100%;
      top: 0px;
      padding-top: 12px;
      padding-bottom: 20px;
      padding-left: 12px;
      padding-right: 12px;
      z-index: 1;
      background-color: transparent;
    `}
    >
      <Box
        direction={BoxDirection.ROW}
        justify={BoxJustify.START}
        css={css`
          width: 100%;
          height: 72px;
          max-width: 800px;
          padding-left: 42px;
          padding-right: 42px;
          border-style: solid;
          border-width: 1px;
          border-radius: 36px;
          border-color: ${ColourPalette.GREY_800};
          background-color: ${ColourPalette.GREY_900};
        `}
      >
        <Logo css={css`
          width: 24px;
        `}
        />
        <Tabs
          value={navKey}
          css={css`
            padding-left: 28px;
          `}
        >
          <Tab
            value={NavKey.HOME}
            onClick={() => goTo(NavRoute.HOME)}
          >
            Home
          </Tab>
          <Tab
            value={NavKey.CV}
            onClick={() => goTo(NavRoute.CV)}
          >
            CV
          </Tab>
          <Tab
            value={NavKey.BLOG}
            onClick={() => goTo(NavRoute.BLOG)}
          >
            Blog
          </Tab>
          <Tab
            value={NavKey.BRAND}
            onClick={() => goTo(NavRoute.BRAND)}
          >
            Brand
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
};

export default TopNav;
