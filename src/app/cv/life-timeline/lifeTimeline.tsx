/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { Content, NoResults } from '../../../components';
import { Breadcrumbs, BreadcrumbItem, SearchInput, Timeline, TimelineEvent, Title } from '../../../components/common';
import { LifeTimelineContent } from '../../../graphql';
import { BaseProps } from '../../../types';
import { useScreen } from '../../../hooks';

/**
 * The `LifeTimeline` component props
 */
interface Props extends BaseProps {
  readonly content: LifeTimelineContent;
  readonly search?: string;
}

/**
 * Used as the entry point for the CV life timeline page. Renders the
 * CV life timeline page components using the given `content` prop
 *
 * @param props The component props
 * @returns The `LifeTimeline` component
 */
const LifeTimeline: FunctionComponent<Props> = ({ content, search = '' }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { push } = useRouter();
  const { timelineEvents } = content;

  const [searchText, setSearchText] = useState<string>(search);

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
        padding-bottom: 50px;
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
      <SearchInput
        value={searchText}
        onChange={(value) => setSearchText(value)}
        onSearch={() => {

          // Define the search query params
          // based on the search text
          const params = new URLSearchParams({
            ...(searchText !== '') && {
              search: searchText,
            },
          });

          push(`/cv/life-timeline?${params.toString()}`);
        }}
        css={css`
          width: ${(screenSize === 'small') ? '100%' : '400px'};
          margin-top: 50px;
          margin-bottom: 40px;
        `}
      />
      {
        (timelineEvents.length === 0) && (
          <NoResults
            searchText={search}
            css={css`
              padding-top: 26px;
              align-self: center;
            `}
          />
        )
      }
      <Timeline>
        {
          timelineEvents.map((event) => {

            // Destructure the timeline event and get the first
            // event from the original timeline events array
            const { id, title, description, date } = event;
            const [firstEvent] = timelineEvents;

            return (
              <TimelineEvent
                key={`timeline-event-${id}`}
                title={title}
                description={description}
                date={date}
                isFirst={id === firstEvent.id}
              />
            );
          })
        }
      </Timeline>
    </Content>
  );
};

export default LifeTimeline;
