/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { StatusHandler, Header, Content, Skills } from '..';
import { BoxAlignment, NavRoute } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageQuery } from '../../hooks';
import { Breadcrumbs, BreadcrumbItem } from '../common';

/**
 * Used as the entry point for the skills page.
 * Fetches the page data and renders it's components
 *
 * @returns The `SkillsRoute` component
 */
const SkillsRoute: FunctionComponent = (): ReactElement => {

  const { status } = usePageQuery({
    slug: PageSlug.SKILLS,
  });

  return (
    <StatusHandler status={status}>
      <Header title="Skills">
        <Breadcrumbs>
          <BreadcrumbItem route={NavRoute.CV}>
            Curriculum Vitae
          </BreadcrumbItem>
          <BreadcrumbItem
            route={NavRoute.SKILLS}
            active={true}
          >
            Skills
          </BreadcrumbItem>
        </Breadcrumbs>
      </Header>
      <Content alignment={BoxAlignment.START}>
        <Skills css={css`
          width: 100%;
          padding-top: 50px;
        `}
        />
      </Content>
    </StatusHandler>
  );
};

export default SkillsRoute;
