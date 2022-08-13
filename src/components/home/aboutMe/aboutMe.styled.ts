import { styled } from '@mui/material';
import { Text, Image } from '../../common';
import { Stat } from '../..';

/**
 * The styled `Image` component used
 * for the `AboutMe` component
 */
export const StyledMeImage = styled(Image)`
  width: 116px;
  height: 116px;
  margin-top: 16px;
  margin-right: 40px;
  flex-shrink: 0;
`;

/**
 * The styled `Text` component used for
 * the `AboutMe` component description text
 */
export const StyledDescription = styled(Text)`
  padding-top: 16px;
  padding-bottom: 10px;
`;

/**
 * The styled `Box` component used for
 * the `AboutMe` component stat
 */
export const StyledStat = styled(Stat)`
  padding-right: 42px;
`;
