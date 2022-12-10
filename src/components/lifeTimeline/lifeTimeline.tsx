/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useMemo } from 'react';
import { css } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { BoxAlignment, IconId, ScreenSize } from '../../enums';
import { PageSlug } from '../../graphql';
import { searchFilter } from '../../helpers';
import { usePageContent, useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Input, Timeline, TimelineEvent } from '../common';
import { NoResults } from '..';
/**
 * The `LifeTimeline` component props
 */
type Props = BaseProps;

/**
 * Renders the life timeline for the life timeline page which
 * is rendered within the `LifeTimelineRoute` component
 *
 * @param props The component props
 * @returns The `LifeTimeline` component
 */
const LifeTimeline: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const [params, setParams] = useSearchParams();
  const searchText = params.get('search') ?? '';

  const { screenSize } = useScreen();
  const { timelineEvents } = usePageContent({
    slug: PageSlug.LIFE_TIMELINE,
  });

  const filteredEvents = useMemo(() => {
    return timelineEvents
      .filter((event) => searchFilter(searchText, event, ['title', 'description']));
  }, [
    timelineEvents,
    searchText,
  ]);

  return (
    <Box
      className={className}
      alignment={BoxAlignment.START}
      css={css`
        row-gap: 40px;
      `}
    >
      <Input
        value={searchText}
        placeholder="Search"
        delay={500}
        iconId={IconId.MAGNIFYING_GLASS}
        onChange={(value) => {

          // Trim the value and set the correct query params
          // or clearing them if the value is an empty string
          const trimmed = value.trim();
          setParams({
            ...(trimmed !== '') && {
              search: trimmed,
            },
          });
        }}
        css={css`
          width: ${(screenSize === ScreenSize.SMALL) ? '100%' : '350px'};
        `}
      />
      {
        (filteredEvents.length === 0) && (
          <NoResults
            searchText={searchText}
            css={css`
              padding-top: 26px;
              align-self: center;
            `}
          />
        )
      }
      <Timeline>
        {
          filteredEvents.map((event, index) => {

            // Destructure the timeline event and get the first
            // event from the original timeline events array
            const { id, title, description, date } = event;
            const [firstEvent] = timelineEvents;

            return (
              <TimelineEvent
                key={`life-timeline-item-${index}`}
                title={title}
                description={description}
                date={date}
                isFirst={id === firstEvent.id}
              />
            );
          })
        }
      </Timeline>
    </Box>
  );
};

export default LifeTimeline;
