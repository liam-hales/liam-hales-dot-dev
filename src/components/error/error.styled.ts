import { styled } from '@mui/material';
import { Box, Text } from '../common';
import { Content } from '..';

/**
 * The styled `Content` component used for
 * the `Error` component content
 */
export const StyledContent = styled(Content)`
  padding-top: 100px;
`;

/**
 * The styled `Text` component used for
 * the `Error` component text
 */
export const StyledText = styled(Text)`
  max-width: 280px;
  padding-top: 16px;
  padding-bottom: 38px;
  text-align: center;
`;

/**
 * The styled `Box` component used for
 * the `Error` component image
 */
export const StyledButtonBox = styled(Box)`
  width: 210px;
`;
