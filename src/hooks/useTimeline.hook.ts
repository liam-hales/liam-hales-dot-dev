import { TimelineEvent } from '../graphql';
import { useDate } from '.';

/**
 * The `useTimeline` hook response
 */
interface UseTimelineResponse {
  readonly groupedEvents: Record<string, TimelineEvent[]>;
}

/**
 * Used to perform actions on the timeline events such as
 * grouping them by year so they are ready for rendering
 *
 * @param events The timeline events
 * @returns The `useTimeline` hook response
 * @example
 *
 * const { groupedEvents } = useTimeline();
 */
const useTimeline = (events: TimelineEvent[]): UseTimelineResponse => {

  const { utc, from } = useDate();

  // Group the timeline events by year by reducing the events
  // array into an object of grouped events
  const grouped = events.reduce<Record<string, TimelineEvent[]>>((map, current) => {
    const { __typename: type } = current;

    const date = (type === 'TimelinePointEvent')
      ? current.date
      : current.endDate;

    // If the event does not have a date
    // value then use the current date
    const year = (date == null)
      ? utc().format('YYYY')
      : from(date).format('YYYY');

    const forYear = map[year];
    return {
      ...map,
      [year]: (forYear != null)
        ? [
            ...forYear,
            current,
          ]
        : [current],
    };
  }, {});

  return {
    groupedEvents: grouped,
  };
};

export default useTimeline;
