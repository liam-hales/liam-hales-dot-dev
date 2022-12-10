/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { StatusHandler, Header, Content, LifeTimeline } from '..';
import { BoxAlignment, NavRoute } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageQuery } from '../../hooks';
import { Breadcrumbs, BreadcrumbItem } from '../common';

/**
 * Used as the entry point for the life timeline page.
 * Fetches the page data and renders it's components
 *
 * @returns The `LifeTimelineRoute` component
 */
const LifeTimelineRoute: FunctionComponent = (): ReactElement => {

  const { status } = usePageQuery({
    slug: PageSlug.LIFE_TIMELINE,
  });

  return (
    <StatusHandler status={status}>
      <Header title="Life Timeline">
        <Breadcrumbs>
          <BreadcrumbItem route={NavRoute.CV}>
            Curriculum Vitae
          </BreadcrumbItem>
          <BreadcrumbItem
            route={NavRoute.LIFE_TIMELINE}
            isActive={true}
          >
            Life Timeline
          </BreadcrumbItem>
        </Breadcrumbs>
      </Header>
      <Content alignment={BoxAlignment.START}>
        <LifeTimeline css={css`
          width: 100%;
          padding-top: 50px;
        `}
        />
      </Content>
    </StatusHandler>
  );
};

export default LifeTimelineRoute;
