/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { Moment } from 'moment';
import { BaseProps } from '../../../types';
import { BoxAlignment, ColourPalette } from '../../../enums';
import { Box, Text } from '..';

/**
 * The `TimelineEvent` component props
 */
interface Props extends BaseProps {
  readonly title: string;
  readonly description: string;
  readonly date: Moment;
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

  // Format the date into a human readable timestamp
  // The year, month and how long ag the date was from the current date
  const formattedDate = date.format('MMMM YYYY');
  const timeAgo = date.fromNow();
  const timestamp = `${formattedDate} - ${timeAgo}`;

  return (
    <Box alignment={BoxAlignment.START}>
      <Text
        colour={ColourPalette.GREY}
        css={css`
          font-size: 12px;
        `}
      >
        {timestamp}
      </Text>
      <Text
        isBold={true}
        css={css`
          max-width: ${(isFirst === true) ? '580px' : 'unset'};
          padding-top: 4px;
          padding-bottom: 8px;
          font-size: ${(isFirst === true) ? 34 : 24}px;
          line-height: 122%;
        `}
      >
        {title}
      </Text>
      <Text colour={ColourPalette.LIGHT_GREY}>
        {description}
      </Text>
    </Box>
  );
};

export default TimelineEvent;
