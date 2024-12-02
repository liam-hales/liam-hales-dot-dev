/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useMemo } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { useDate } from '../../hooks';
import { Box, Text } from '.';

/**
 * The `DateBadge` component props
 * for the `point` type
 */
interface PointProps extends BaseProps {
  readonly type: 'point';
  readonly date: string;
}

/**
 * The `DateBadge` component props
 * for the `period` type
 */
interface PeriodProps extends BaseProps {
  readonly type: 'period';
  readonly startDate: string;
  readonly endDate?: string;
}

/**
 * The `DateBadge` component props
 */
type Props = PointProps | PeriodProps;

/**
 * Renders either a single date or a date
 * period in a human readable format
 *
 * @param props The component props
 * @returns The `DateBadge` component
 */
const DateBadge: FunctionComponent<Props> = (props): ReactElement<Props> => {

  const { utc, from } = useDate();
  const { type } = props;

  const [primaryText, secondaryText] = useMemo<[string, string]>(() => {

    // For a type of `point`, format the date and
    // get the relative time from now
    if (type === 'point') {
      const { date } = props;

      const dateText = from(date).format('MMM YYYY');
      const timeAgo = from(date).fromNow();

      return [dateText, timeAgo];
    }

    // For type of `period`, format the start and end dates and calculate
    // the difference between the two for the duration text
    const { startDate, endDate } = props;

    const start = from(startDate);
    const end = (endDate != null) ? from(endDate) : utc();

    // Get the difference between the two dates and calculate the
    // number of years and months based on the difference
    const diff = end.diff(start, 'months');
    const years = Math.floor(diff / 12);
    const months = diff % 12;

    const startText = start.format('MMM YYYY');
    const endText = (endDate != null) ? end.format('MMM YYYY') : 'Now';

    const yearsText = (years > 0) ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const monthsText = (months > 0) ? `${months} mo${months > 1 ? 's' : ''}` : '';

    const periodText = `${startText} - ${endText}`;
    const durationText = `${yearsText}${(years > 0 && months > 0) ? ', ' : ''}${monthsText}`;

    return [periodText, durationText];
  }, [type, props, utc, from]);

  return (
    <Box
      direction="row"
      css={css`
        column-gap: 10px;
      `}
    >
      <Box css={css`
        padding-top: 2.4px;
        padding-bottom: 2.4px;
        padding-left: 9px;
        padding-right: 9px;
        border-radius: 4px;
        background-color: ${ColourPalette.BLUE};
      `}
      >
        <Text
          isBold={true}
          css={css`
            font-size: 14px;
          `}
        >
          {primaryText}
        </Text>
      </Box>
      <Text colour={ColourPalette.GREY_600}>
        {secondaryText}
      </Text>
    </Box>
  );
};

export default DateBadge;
