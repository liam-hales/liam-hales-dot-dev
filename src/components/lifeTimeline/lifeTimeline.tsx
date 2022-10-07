import { FunctionComponent, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IconId } from '../../enums';
import { PageSlug } from '../../graphql';
import { searchFilter } from '../../helpers';
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
  const searchText = params.get('search') ?? '';

  const { screenSize } = useScreen();
  const { timelineEvents } = usePageContent({
    slug: PageSlug.LIFE_TIMELINE,
  });

  return (
    <div className={className}>
      <StyledSearchInput
        defaultValue={searchText}
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
        screenSize={screenSize}
      />
      <Timeline>
        {
          timelineEvents
            .filter((event) => searchFilter(searchText, event, ['title', 'description']))
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
