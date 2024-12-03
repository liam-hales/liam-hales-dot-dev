/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { TimelineEvent as Event } from '../graphql';
import { BaseProps } from '../types';
import { Box, Title, Timeline } from './common';
import { TimelineEvent } from '.';
import { useTimeline } from '../hooks';

/**
 * The `Experience` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly events: Event[];
}

/**
 * Renders the experience section for the CV page
 * which is rendered within the `CVRoute` component
 *
 * @param props The component props
 * @returns The `Experience` component
 */
const Experience: FunctionComponent<Props> = ({ className, events }): ReactElement<Props> => {

  const { groupedEvents } = useTimeline(events);
  return (
    <Box
      className={className}
      alignment="flex-start"
    >
      <Title>
        Experience
      </Title>
      <Box
        alignment="flex-start"
        css={css`
          padding-top: 16px;
          padding-bottom: 46px;
          row-gap: 20px;
        `}
      >
        {
          Object
            .keys(groupedEvents)
            .reverse()
            .map((key, groupIndex, keys) => {
              return (
                <div key={`timeline-event-group-${key}`}>
                  {
                    (groupIndex > 0) && (
                      <Title>
                        {key}
                      </Title>
                    )
                  }
                  <Timeline
                    hasLeadingConnector={groupIndex > 0}
                    hasTrailingConnector={groupIndex < (keys.length - 1)}
                    css={css`
                      padding-top: 20px;
                    `}
                  >
                    {
                      groupedEvents[key].map((event) => {

                        const { id } = event;
                        return (
                          <TimelineEvent
                            key={`timeline-event-${id}`}
                            event={event}
                          />
                        );
                      })
                    }
                  </Timeline>
                </div>
              );
            })
        }
      </Box>
    </Box>
  );
};

export default Experience;
