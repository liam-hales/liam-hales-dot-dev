import { FunctionComponent, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IconId } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent, useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { Timeline, TimelineEvent } from '../common';
import { StyledSearchInput } from './lifeTimeline.styled';

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

  const { screenSize } = useScreen();
  const { timelineEvents } = usePageContent({
    slug: PageSlug.LIFE_TIMELINE,
  });

  return (
    <div className={className}>
      <StyledSearchInput
        value={params.get('search') ?? ''}
        placeholder="Search"
        iconId={IconId.MAGNIFYING_GLASS}
        onChange={(value) => {
          setParams({
            ...(value !== '') && {
              search: value,
            },
          });
        }}
        screenSize={screenSize}
      />
      <Timeline>
        {
          timelineEvents
            .filter((event) => {
              const { title, description } = event;

              // Join the event title and description into one text string
              // Lowercase the text to search and the search text itself
              const text = `${title} ${description}`.toLowerCase();
              const search = (params.get('search') ?? '')
                .toLowerCase()
                .split(' ');

              // Filter out events that do not include one
              // of the words from the search string
              return search.every((word) => text.includes(word));
            })
            .map((event, index) => {

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
                  first={id === firstEvent.id}
                />
              );
            })
        }
      </Timeline>
    </div>
  );
};

export default LifeTimeline;
