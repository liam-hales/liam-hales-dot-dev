import { FunctionComponent, ReactElement } from 'react';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { BaseProps } from '../../types';
import { Timeline, TimelineEvent } from '../common';

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

  const { timelineEvents } = usePageContent({
    slug: PageSlug.LIFE_TIMELINE,
  });

  return (
    <Timeline className={className}>
      {
        timelineEvents.map((event) => {

          // Destructure the timeline event and
          // return the timeline event component
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
    </Timeline>
  );
};

export default LifeTimeline;
