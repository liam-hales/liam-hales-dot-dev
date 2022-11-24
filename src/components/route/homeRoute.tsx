/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { PageSlug } from '../../graphql';
import { usePageQuery } from '../../hooks';
import {
  StatusHandler,
  Content,
  HomeHeader,
  AboutMe,
  SkillAreas,
  ProStatement,
  StillInterested,
} from '..';

/**
 * Used as the entry point for the home page.
 * Fetches the page data and renders it's components
 *
 * @returns The `HomeRoute` component
 */
const HomeRoute: FunctionComponent = (): ReactElement => {

  const { status } = usePageQuery({
    slug: PageSlug.HOME,
  });

  return (
    <StatusHandler status={status}>
      <HomeHeader />
      <Content>
        <AboutMe css={css`
          padding-top: 60px;
        `}
        />
        <SkillAreas css={css`
          width: 100%;
          padding-top: 48px;
        `}
        />
        <ProStatement css={css`
          padding-top: 60px;
        `}
        />
        <StillInterested css={css`
          padding-top: 96px;
        `}
        />
      </Content>
    </StatusHandler>
  );
};

export default HomeRoute;
