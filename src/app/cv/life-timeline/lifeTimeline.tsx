/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { Header, Content, NoResults } from '../../../components';
import { Breadcrumbs, BreadcrumbItem, Input, Timeline, TimelineEvent } from '../../../components/common';
import { BoxAlignment, IconId, NavRoute, ScreenSize } from '../../../enums';
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
 * @returns The `LifeTimeline` component
 */
const LifeTimeline: FunctionComponent<Props> = ({ content, search }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { timelineEvents } = content;

  const [searchText, setSearchText] = useState<string>(search ?? '');

  return (
    <>
      <Header title="Life Timeline">
        <Breadcrumbs>
          <BreadcrumbItem route={NavRoute.CV}>
            Curriculum Vitae
          </BreadcrumbItem>
          <BreadcrumbItem
            route={NavRoute.LIFE_TIMELINE}
            isActive={true}
          >
            Life Timeline
          </BreadcrumbItem>
        </Breadcrumbs>
      </Header>
      <Content
        alignment={BoxAlignment.START}
        css={css`
          padding-top: 50px;
          padding-bottom: 100px;
          row-gap: 40px;
        `}
      >
        <Input
          value={searchText}
          placeholder="Search"
          iconId={IconId.MAGNIFYING_GLASS}
          onChange={(value) => setSearchText(value.trim())}
          css={css`
            width: ${(screenSize === ScreenSize.SMALL) ? '100%' : '350px'};
          `}
        />
        {
          (timelineEvents.length === 0) && (
            <NoResults
              searchText={searchText}
              css={css`
                padding-top: 26px;
                align-self: center;
              `}
            />
          )
        }
        <Timeline>
          {
            timelineEvents.map((event, index) => {

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
                  isFirst={id === firstEvent.id}
                />
              );
            })
          }
        </Timeline>
      </Content>
    </>
  );
};

export default LifeTimeline;
