/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../../../types';
import { ColourPalette } from '../../../enums';
import { Box, Text } from '..';
import { useDate } from '../../../hooks';
import { TimelineEvent as TEvent } from '../../../graphql';

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

  const { utc, from } = useDate();
  const { title, description, ...rest } = event;
  const { __typename: type } = rest;

  return (
    <Box alignment="flex-start">
      {
        (type === 'PointTimelineEvent') && (() => {
          const { date } = rest;

          const dateText = from(date).format('MMM YYYY');
          const timeAgo = from(date).fromNow();

          return (
            <Text colour={ColourPalette.GREY_600}>
              {`${dateText} - ${timeAgo}`}
            </Text>
          );
        })()
      }
      {
        (type === 'PeriodTimelineEvent') && (() => {
          const { startDate, endDate } = rest;

          const start = from(startDate);
          const end = (endDate != null) ? from(endDate) : utc();

          // Get the difference between the two dates and calculate the
          // number of years and months for the difference
          const diff = end.diff(start, 'months');
          const years = Math.floor(diff / 12);
          const months = (diff % 12) + 1;

          const startText = start.format('MMM YYYY');
          const endText = (endDate != null) ? end.format('MMM YYYY') : 'Now';

          // Build the text used for the period
          // from the number of years and months
          const yearsText = `${(years > 0) ? `${years} yr${years > 1 ? 's' : ''}` : ''}`;
          const monthsText = `${(months > 0) ? `${months} mo${months > 1 ? 's' : ''}` : ''}`;

          const period = `${yearsText}${(years > 0) ? ', ' : ''}${monthsText}`;

          return (
            <Text colour={ColourPalette.GREY_600}>
              {`${startText} - ${endText} (${period})`}
            </Text>
          );
        })()
      }
      <Text
        isBold={true}
        css={css`
          max-width: ${(isFirst === true) ? '580px' : 'unset'};
          padding-top: 6px;
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
