/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { Content } from '../../../components';
import { Breadcrumbs, BreadcrumbItem, Timeline, TimelineEvent, Title } from '../../../components/common';
import { LifeTimelineContent } from '../../../graphql';
import { BaseProps } from '../../../types';

/**
 * The `LifeTimeline` component props
 */
interface Props extends BaseProps {
  readonly content: LifeTimelineContent;
}

/**
 * Used as the entry point for the CV life timeline page. Renders the
 * CV life timeline page components using the given `content` prop
 *
 * @param props The component props
 * @returns The `LifeTimeline` component
 */
const LifeTimeline: FunctionComponent<Props> = ({ content }): ReactElement<Props> => {

  const { timelineEvents } = content;
  return (
    <Content
      alignment="flex-start"
      css={css`
        padding-top: 42px;
        padding-bottom: 100px;
      `}
    >
      <Title
        size="large"
        css={css`
          max-width: 400px;
        `}
      >
        Life Timeline
      </Title>
      <Breadcrumbs css={css`
        padding-top: 40px;
        padding-bottom: 80px;
      `}
      >
        <BreadcrumbItem route="/cv">
          Curriculum Vitae
        </BreadcrumbItem>
        <BreadcrumbItem
          route="/cv/life-timeline"
          isActive={true}
        >
          Life Timeline
        </BreadcrumbItem>
      </Breadcrumbs>
      <Timeline>
        {
          timelineEvents.map((event) => {

            // Get the first event from the original timeline events array
            // which will be used to see if the event is the first event
            const { id } = event;
            const [firstEvent] = timelineEvents;

            return (
              <TimelineEvent
                key={`timeline-event-${id}`}
                event={event}
                isFirst={(id === firstEvent.id)}
              />
            );
          })
        }
      </Timeline>
    </Content>
  );
};

export default LifeTimeline;
