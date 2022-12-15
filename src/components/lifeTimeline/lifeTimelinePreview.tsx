/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, NavRoute, ColourPalette, IconId } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent, useRouter } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Title, TimelineEvent, Text, Timeline, Button } from '../common';

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
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
        `}
      >
        {lifeTimelineText}
      </Text>
      <Timeline
        hasTrailingConnector={true}
        css={css`
          padding-top: 46px;
          mask-image: linear-gradient(
            to bottom,
            black 36%,
            transparent 100%
          );
        `}
      >
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
      </Timeline>
      <Button
        iconId={IconId.ARROW_RIGHT}
        onClick={() => goTo(NavRoute.LIFE_TIMELINE)}
        css={css`
          margin-top: -12px;
          align-self: center;
        `}
      >
        See full timeline
      </Button>
    </Box>
  );
};

export default LifeTimelinePreview;
