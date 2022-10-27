import { styled } from '@mui/material';
import { Text } from '../..';

/**
 * The `StyledTitle` component props
 */
interface StyledTitleProps {
  readonly first: boolean;
}

/**
 * The styled `Text` component used for the
 * `TimelineEvent` component timestamp text
 */
export const StyledTimestamp = styled(Text)`
  font-size: 12px;
  opacity: 0.52;
`;

/**
 * The styled `Text` component used for the
 * `TimelineEvent` component title text
 */
export const StyledTitle = styled(Text)<StyledTitleProps>`
  max-width: ${(props) => (props.first === true) ? '580px' : 'unset'};
  padding-top: 4px;
  padding-bottom: 8px;
  font-size: ${(props) => (props.first === true) ? 34 : 24}px;
  line-height: 122%;
`;
