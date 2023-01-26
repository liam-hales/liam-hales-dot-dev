/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../../../types';
import { ColourPalette } from '../../../enums';
import { Box, Text } from '..';
import { useDate } from '../../../hooks';

/**
 * The `TimelineEvent` component props
 */
interface Props extends BaseProps {
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly isFirst?: boolean;
}

/**
 * Renders a timeline event which should be
 * rendered within the `Timeline` component
 *
 * @param props The component props
 * @returns The `TimelineEvent` component
 */
const TimelineEvent: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    title,
    description,
    date,
    isFirst = false,
  } = props;

  const { from } = useDate();

  // Format the date into a human readable timestamp
  // The year, month and how long ag the date was from the current date
  const formattedDate = from(date).format('MMMM YYYY');
  const timeAgo = from(date).fromNow();
  const timestamp = `${formattedDate} - ${timeAgo}`;

  return (
    <Box alignment="flex-start">
      <Text colour={ColourPalette.GREY_600}>
        {timestamp}
      </Text>
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
