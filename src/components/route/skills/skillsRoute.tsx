import { FunctionComponent, ReactElement } from 'react';
import { StatusHandler, Header, Content } from '../..';
import { BoxAlignment, NavRoute } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageQuery } from '../../../hooks';
import { Breadcrumbs, BreadcrumbItem } from '../../common';
import { StyledSkills } from './skillsRoute.styled';

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
    <>
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
      <StatusHandler status={status}>
        <Content alignment={BoxAlignment.START}>
          <StyledSkills />
        </Content>
      </StatusHandler>
    </>
  );
};

export default SkillsRoute;
