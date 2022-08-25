import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, NavRoute, TextAppearance } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent, useRouter } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box, Title, TimelineEvent } from '../../common';
import { StyledDescription, StyledTimeline, StyledButton } from './lifeTimelinePreview.styled';

/**
 * The `LifeTimelinePreview` component props
 */
type Props = BaseProps;

/**
 * Renders the life timeline preview section for the curriculum vitae
 * page which is rendered within the `CurriculumVitaeRoute` component
 *
 * @param props The component props
 * @returns The `LifeTimelinePreview` component
 */
const LifeTimelinePreview: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { goTo } = useRouter();
  const { lifeTimelineText, lifeTimelineEvents } = usePageContent({
    slug: PageSlug.CV,
  });

  return (
    <Box
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Life Timeline
      </Title>
      <StyledDescription appearance={TextAppearance.SECONDARY}>
        {lifeTimelineText}
      </StyledDescription>
      <StyledTimeline trailingConnector={true}>
        {
          lifeTimelineEvents.map((event) => {

            // Destructure the timeline event and
            // return the timeline event compnent
            const { title, description, date } = event;
            return (
              <TimelineEvent
                title={title}
                description={description}
                date={date}
              />
            );
          })
        }
      </StyledTimeline>
      <StyledButton onClick={() => goTo(NavRoute.LIFE_TIMELINE)}>
        See More
      </StyledButton>
    </Box>
  );
};

export default LifeTimelinePreview;
