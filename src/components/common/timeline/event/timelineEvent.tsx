import { FunctionComponent, ReactElement } from 'react';
import { Moment } from 'moment';
import { BaseProps } from '../../../../types';
import { Box, Text } from '../..';
import { BoxAlignment, TextAppearance } from '../../../../enums';
import { StyledTimestamp, StyledTitle } from './timelineEvent.styled';

/**
 * The `TimelineEvent` component props
 */
interface Props extends BaseProps {
  readonly title: string;
  readonly description: string;
  readonly date: Moment;
}

/**
 * Renders a timeline event which should be
 * rendered within the `Timeline` component
 *
 * @param props The component props
 * @returns The `TimelineEvent` component
 */
const TimelineEvent: FunctionComponent<Props> = ({ title, description, date }): ReactElement<Props> => {

  // Format the date into a human readable timestamp
  // The year, month and how long ag the date was from the current date
  const formattedDate = date.format('MMMM YYYY');
  const timeAgo = date.fromNow();
  const timestamp = `${formattedDate} - ${timeAgo}`;

  return (
    <Box alignment={BoxAlignment.START}>
      <StyledTimestamp appearance={TextAppearance.SUBTLE}>
        {timestamp}
      </StyledTimestamp>
      <StyledTitle bold={true}>
        {title}
      </StyledTitle>
      <Text appearance={TextAppearance.SECONDARY}>
        {description}
      </Text>
    </Box>
  );
};

export default TimelineEvent;
