/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../../enums';
import { TimelineEvent as Event } from '../../graphql';
import { BaseProps } from '../../types';
import { Box, Title, TimelineEvent, Text, Timeline, Button, Link } from '../common';
import { withRef } from '../../helpers';

/**
 * The `LifeTimelinePreview` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly text: string;
  readonly events: Event[];
}

/**
 * Renders the life timeline preview section for the CV
 * page which is rendered within the `CVRoute` component
 *
 * @param props The component props
 * @returns The `LifeTimelinePreview` component
 */
const LifeTimelinePreview: FunctionComponent<Props> = ({ internalRef, className, text, events }): ReactElement<Props> => {
  return (
    <Box
      ref={internalRef}
      className={className}
      alignment="flex-start"
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
        {text}
      </Text>
      <Timeline
        hasTrailingConnector={true}
        css={css`
          padding-top: 46px;
          mask-image: linear-gradient(
            to bottom,
            black 50%,
            transparent 88%
          );
        `}
      >
        {
          events.map((event, index) => {

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
      <Link
        href="/cv/life-timeline"
        passHref={true}
        css={css`
          margin-top: -12px;
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

export default withRef(LifeTimelinePreview);
