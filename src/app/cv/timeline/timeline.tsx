/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { Content, TimelineEvent } from '../../../components';
import { Breadcrumbs, BreadcrumbItem, Title, Box, VerticalTimeline } from '../../../components/common';
import { TimelineContent } from '../../../graphql';
import { BaseProps } from '../../../types';
import { useTimeline } from '../../../hooks';

/**
 * The `Timeline` component props
 */
interface Props extends BaseProps {
  readonly content: TimelineContent;
}

/**
 * Used as the entry point for the CV timeline page. Renders the
 * CV timeline page components using the given `content` prop
 *
 * @param props The component props
 * @returns The `Timeline` component
 */
const Timeline: FunctionComponent<Props> = ({ content }): ReactElement<Props> => {

  const { events } = content;
  const { groupedEvents } = useTimeline(events);

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
        Timeline
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
          route="/cv/timeline"
          isActive={true}
        >
          Timeline
        </BreadcrumbItem>
      </Breadcrumbs>
      <Box
        alignment="flex-start"
        css={css`
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
                  <VerticalTimeline
                    hasLeadingConnector={groupIndex > 0}
                    hasTrailingConnector={groupIndex < (keys.length - 1)}
                    css={css`
                      padding-top: 20px;
                    `}
                  >
                    {
                      groupedEvents[key].map((event, eventIndex) => {

                        const { id } = event;
                        return (
                          <TimelineEvent
                            key={`timeline-event-${id}`}
                            event={event}
                            isFirst={groupIndex === 0 && eventIndex === 0}
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
    </Content>
  );
};

export default Timeline;
