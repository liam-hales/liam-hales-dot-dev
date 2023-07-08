/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../types';
import { ColourPalette } from '../enums';
import { TimelineEvent as TEvent } from '../graphql';
import { Box, Text, DateBadge, Popover, Link, LogoIcon } from './common';

/**
 * The `TimelineEvent` component props
 */
interface Props extends BaseProps {
  readonly event: TEvent;
  readonly isFirst?: boolean;
}

/**
 * Renders a timeline event which should be
 * rendered within the `Timeline` component
 *
 * @param props The component props
 * @returns The `TimelineEvent` component
 */
const TimelineEvent: FunctionComponent<Props> = ({ event, isFirst = false }): ReactElement<Props> => {

  const { title, description, ...rest } = event;
  const { __typename: type } = rest;

  return (
    <Box alignment="flex-start">
      {
        (type === 'TimelinePointEvent') && (
          <DateBadge
            type="point"
            date={rest.date}
          />
        )
      }
      {
        (type === 'TimelinePeriodEvent') && (
          <DateBadge
            type="period"
            startDate={rest.startDate}
            endDate={rest.endDate}
          />
        )
      }
      <Text
        isBold={true}
        css={css`
          max-width: ${(isFirst === true) ? '580px' : 'unset'};
          padding-top: 10px;
          padding-bottom: 8px;
          font-size: ${(isFirst === true) ? 34 : 24}px;
          line-height: 122%;
        `}
      >
        {title}
      </Text>
      <Text colour={ColourPalette.GREY_400}>
        {description}
      </Text>
    </Box>
  );
};

export default TimelineEvent;
