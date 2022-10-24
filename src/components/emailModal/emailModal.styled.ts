import { styled } from '@mui/material';
import { Box, Title, Text } from '../common';

/**
 * The styled `Title` component used for
 * the `EmailModal` component title
 */
export const StyledTitle = styled(Title)`
  align-self: flex-start;
`;

/**
 * The styled `Text` component used for
 * the `EmailModal` component text
 */
export const StyledText = styled(Text)`
  padding-top: 16px;
  padding-bottom: 28px;
`;

/**
 * The styled `Text` component used for the
 * `EmailModal` component copy to clipboard text
 */
export const StyledCopyText = styled(Text)`
  padding-top: 6px;
  font-size: 11px;
`;

/**
 * The styled `Box` component used for
 * the `EmailModal` component buttons
 */
export const StyledButtons = styled(Box)`
  width: 100%;
  column-gap: 12px;
`;
