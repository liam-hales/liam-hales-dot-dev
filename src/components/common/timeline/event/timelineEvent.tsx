import { FunctionComponent, ReactElement } from 'react';
import { Moment } from 'moment';
import { BaseProps } from '../../../../types';
import { Box, Text } from '../..';
import { BoxAlignment, ColourPalette } from '../../../../enums';
import { StyledTimestamp, StyledTitle } from './timelineEvent.styled';

/**
 * The `TimelineEvent` component props
 */
interface Props extends BaseProps {
  readonly title: string;
  readonly description: string;
  readonly date: Moment;
  readonly first?: boolean;
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
    first = false,
  } = props;

  // Format the date into a human readable timestamp
  // The year, month and how long ag the date was from the current date
  const formattedDate = date.format('MMMM YYYY');
  const timeAgo = date.fromNow();
  const timestamp = `${formattedDate} - ${timeAgo}`;

  return (
    <Box alignment={BoxAlignment.START}>
      <StyledTimestamp colour={ColourPalette.LIGHT_GREY}>
        {timestamp}
      </StyledTimestamp>
      <StyledTitle
        bold={true}
        first={first}
      >
        {title}
      </StyledTitle>
      <Text colour={ColourPalette.LIGHT_GREY}>
        {description}
      </Text>
    </Box>
  );
};

export default TimelineEvent;
