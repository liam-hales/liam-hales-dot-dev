import { styled } from '@mui/material';
import { Box, Text } from '../common';

/**
 * The styled `Text` component used for
 * the `EmailModal` component title text
 */
export const StyledTitle = styled(Text)`
  font-size: 28px;
  padding-bottom: 14px;
`;

/**
 * The styled `Box` component used for
 * the `EmailModal` component buttons
 */
export const StyledButtons = styled(Box)`
  width: 100%;
  padding-top: 28px;
  column-gap: 12px;
`;
