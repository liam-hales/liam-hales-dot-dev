import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, NavRoute, ColourPalette } from '../../../enums';
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
const LifeTimelinePreview: FunctionComponent<Props> = ({ reference, className }): ReactElement<Props> => {

  const { goTo } = useRouter();
  const { lifeTimelineText, lifeTimelineEvents } = usePageContent({
    slug: PageSlug.CV,
  });

  return (
    <Box
      reference={reference}
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Life Timeline
      </Title>
      <StyledDescription colour={ColourPalette.LIGHT_GREY}>
        {lifeTimelineText}
      </StyledDescription>
      <StyledTimeline trailingConnector={true}>
        {
          lifeTimelineEvents.map((event, index) => {

            // Destructure the timeline event and
            // return the timeline event component
            const { title, description, date } = event;
            return (
              <TimelineEvent
                key={`life-timeline-item-${index}`}
                title={title}
                description={description}
                date={date}
              />
            );
          })
        }
      </StyledTimeline>
      <StyledButton onClick={() => goTo(NavRoute.LIFE_TIMELINE)}>
        See full timeline
      </StyledButton>
    </Box>
  );
};

export default LifeTimelinePreview;
