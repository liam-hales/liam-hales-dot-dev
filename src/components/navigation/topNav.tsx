/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../../enums';
import { useNav } from '../../hooks';
import { Box, Tabs, Tab, IconButton, Popover, Link } from '../common';
import { Logo } from '..';
import { BaseProps } from '../../types';

/**
 * The `TopNav` component props
 */
interface Props extends BaseProps {
  readonly notionUrl: string;
  readonly notionText: string;
}

/**
 * Renders the top navigation bar used for navigating the
 * app for any screen size apart from  extra small
 *
 * @returns The `TopNav` component
 */
const TopNav: FunctionComponent<Props> = ({ notionUrl, notionText }): ReactElement<Props> => {

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
          border-radius: 36px;
          border-color: ${ColourPalette.GREY_800};
          background-color: ${ColourPalette.GREY_900};
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
        <Popover text={notionText}>
          <Link
            href={notionUrl}
            target="_blank"
            passHref={true}
            aria-label="Notion"
          >
            <IconButton
              id="notion"
              css={css`
                svg {
                  font-size: 28px;
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
