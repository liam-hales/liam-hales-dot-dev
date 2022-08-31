import { FunctionComponent, ReactElement } from 'react';
import { StatusHandler, Header, Content } from '../..';
import { PageSlug } from '../../../graphql';
import { usePageQuery } from '../../../hooks';
import {
  StyledCurrentPosition,
  StyledSkillsPreview,
  StyledLifeTimelinePreview,
} from './curriculumVitaeRoute.styled';

/**
 * Used as the entry point for the curriculum vitae page.
 * Fetches the page data and renders it's components
 *
 * @returns The `CurriculumVitaeRoute` component
 */
const CurriculumVitaeRoute: FunctionComponent = (): ReactElement => {

  const { status } = usePageQuery({
    slug: PageSlug.CV,
  });

  return (
    <>
      <Header title="Curriculum Vitae" />
      <StatusHandler status={status}>
        <Content>
          <StyledCurrentPosition />
          <StyledSkillsPreview />
          <StyledLifeTimelinePreview />
        </Content>
      </StatusHandler>
    </>
  );
};

export default CurriculumVitaeRoute;
