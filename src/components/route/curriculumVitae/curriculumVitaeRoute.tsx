import { FunctionComponent, ReactElement, useRef } from 'react';
import { StatusHandler, Header, Content } from '../..';
import { Button } from '../../common';
import { PageSlug } from '../../../graphql';
import { usePageQuery, useScreen } from '../../../hooks';
import { BoxDirection } from '../../../enums';
import {
  StyledHeaderButtons,
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

  const currentPositionRef = useRef<HTMLDivElement>(null);
  const skillsPreviewRef = useRef<HTMLDivElement>(null);
  const lifeTimelinePreviewRef = useRef<HTMLDivElement>(null);

  const { scrollTo } = useScreen();
  const { status } = usePageQuery({
    slug: PageSlug.CV,
  });

  return (
    <>
      <Header title="Curriculum Vitae">
        <StyledHeaderButtons direction={BoxDirection.ROW}>
          <Button onClick={() => scrollTo(currentPositionRef)}>
            Current Position
          </Button>
          <Button onClick={() => scrollTo(skillsPreviewRef)}>
            Skills
          </Button>
          <Button onClick={() => scrollTo(lifeTimelinePreviewRef)}>
            Life Timeline
          </Button>
        </StyledHeaderButtons>
      </Header>
      <StatusHandler status={status}>
        <Content>
          <StyledCurrentPosition reference={currentPositionRef} />
          <StyledSkillsPreview reference={skillsPreviewRef} />
          <StyledLifeTimelinePreview reference={lifeTimelinePreviewRef} />
        </Content>
      </StatusHandler>
    </>
  );
};

export default CurriculumVitaeRoute;
