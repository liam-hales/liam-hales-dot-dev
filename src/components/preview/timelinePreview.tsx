/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';
import { TimelineEvent as Event } from '../../graphql';
import { BaseProps } from '../../types';
import { Box, Title, Text, VerticalTimeline, Button, Link } from '../common';
import { TimelineEvent } from '..';
import { useTimeline } from '../../hooks';

/**
 * The `TimelinePreview` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly text: string;
  readonly events: Event[];
}

/**
 * Renders the timeline preview section for the CV
 * page which is rendered within the `CVRoute` component
 *
 * @param props The component props
 * @returns The `TimelinePreview` component
 */
const TimelinePreview: FunctionComponent<Props> = ({ className, text, events }): ReactElement<Props> => {

  const { groupedEvents } = useTimeline(events);
  return (
    <Box
      className={className}
      alignment="flex-start"
    >
      <Title>
        Timeline
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
        `}
      >
        {text}
      </Text>
      <Box
        alignment="flex-start"
        css={css`
          padding-top: 46px;
          row-gap: 20px;
          mask-image: linear-gradient(
            to bottom,
            black 40%,
            transparent 98%
          );
        `}
      >
        {
          Object
            .keys(groupedEvents)
            .reverse()
            .map((key, groupIndex) => {
              return (
                <div key={`timeline-event-group-${key}`}>
                  {
                    (groupIndex > 0) && (
                      <Title>
                        {key}
                      </Title>
                    )
                  }
                  <VerticalTimeline
                    hasLeadingConnector={groupIndex > 0}
                    hasTrailingConnector={true}
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
                  </VerticalTimeline>
                </div>
              );
            })
        }
      </Box>
      <Link
        href="/cv/timeline"
        passHref={true}
        css={css`
          margin-top: -28px;
          align-self: center;
        `}
      >
        <Button
          size="large"
          iconId="arrowRight"
        >
          See full timeline
        </Button>
      </Link>
    </Box>
  );
};

export default TimelinePreview;
