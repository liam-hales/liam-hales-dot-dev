/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';
import { useNav } from '../../hooks';
import { Box, Divider, Tabs, Tab } from '../common';

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
      height: 72px;
      bottom: 0px;
      z-index: 1;
      background-color: ${ColourPalette.GREY_1000};
    `}
    >
      <Divider />
      <Box
        justify="center"
        css={css`
          width: 100%;
          height: 100%;
          margin-bottom: env(safe-area-inset-bottom);
        `}
      >
        <Tabs value={navKey}>
          <Tab
            value="home"
            href="/"
          >
            Home
          </Tab>
          <Tab
            value="cv"
            href="/cv"
          >
            CV
          </Tab>
          <Tab
            value="projects"
            href="/projects"
          >
            Projects
          </Tab>
          <Tab
            value="brand"
            href="/brand"
          >
            Brand
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
};

export default BottomNav;
