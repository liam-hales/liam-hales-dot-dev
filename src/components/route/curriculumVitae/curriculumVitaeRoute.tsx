import { FunctionComponent, ReactElement, useRef } from 'react';
import { StatusHandler, Header, Content } from '../..';
import { Button } from '../../common';
import { PageSlug } from '../../../graphql';
import { usePageQuery, useScreen } from '../../../hooks';
import { BoxDirection, QueryStatus, TextAppearance } from '../../../enums';
import {
  StyledHeaderButtons,
  StyledCurrentPosition,
  StyledSkillsPreview,
  StyledLifeTimelinePreview,
  StyledDisclaimerText,
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
  const { status, data } = usePageQuery({
    slug: PageSlug.CV,
  });

  return (
    <StatusHandler status={status}>
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
      <Content>
        <StyledCurrentPosition reference={currentPositionRef} />
        <StyledSkillsPreview reference={skillsPreviewRef} />
        <StyledLifeTimelinePreview reference={lifeTimelinePreviewRef} />
        {
          (() => {
            if (status !== QueryStatus.SUCCESS) {
              return null;
            }

            const { content } = data;
            const { disclaimerText } = content;

            return (
              <StyledDisclaimerText appearance={TextAppearance.SUBTLE}>
                {disclaimerText}
              </StyledDisclaimerText>
            );
          })()
        }
      </Content>
    </StatusHandler>
  );
};

export default CurriculumVitaeRoute;
