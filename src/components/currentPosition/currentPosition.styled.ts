import { styled } from '@mui/material';
import { Text } from '../common';
import { Stat } from '..';

/**
 * The styled `Text` component used for
 * the `CurrentPosition` component description text
 */
export const StyledDescription = styled(Text)`
  padding-top: 16px;
  padding-bottom: 10px;
`;

/**
 * The styled `Box` component used for
 * the `CurrentPosition` component stat
 */
export const StyledStat = styled(Stat)`
  padding-right: 42px;
`;
