/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';
import { useNav } from '../../hooks';
import { Box, Tabs, Tab, IconButton, Popover, Link } from '../common';
import { Logo } from '..';
import { BaseProps } from '../../types';

/**
 * The `TopNav` component props
 */
interface Props extends BaseProps {
  readonly terminalAppUrl: string;
}

/**
 * Renders the top navigation bar used for navigating
 * the app for medium and large screen sizes
 *
 * @param props The component props
 * @returns The `TopNav` component
 */
const TopNav: FunctionComponent<Props> = ({ terminalAppUrl }): ReactElement<Props> => {

  const { navKey } = useNav();
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
        direction="row"
        justify="space-between"
        css={css`
          width: 100%;
          height: 72px;
          max-width: 800px;
          padding-left: 42px;
          padding-right: 42px;
          border-style: solid;
          border-width: 1px;
          border-radius: 8px;
          border-color: ${ColourPalette.GREY_900};
          background-color: ${ColourPalette.GREY_1000};
        `}
      >
        <Box direction="row">
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
          <Tabs
            value={navKey}
            css={css`
              padding-left: 28px;
            `}
          >
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
              value="blog"
              href="/blog"
            >
              Blog
            </Tab>
            <Tab
              value="brand"
              href="/brand"
            >
              Brand
            </Tab>
          </Tabs>
        </Box>
        <Popover text="Terminal App">
          <Link
            href={terminalAppUrl}
            target="_blank"
            passHref={true}
            aria-label="Terminal App"
          >
            <IconButton
              id="terminal"
              colour={ColourPalette.WHITE}
              css={css`
                svg {
                  font-size: 24px;
                };
              `}
            />
          </Link>
        </Popover>
      </Box>
    </Box>
  );
};

export default TopNav;
