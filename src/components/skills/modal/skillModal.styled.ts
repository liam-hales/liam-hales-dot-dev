import { styled } from '@mui/material';
import { Text, Image } from '../../common';

/**
 * The styled `Image` component used for
 * the `SkillModal` component image
 */
export const StyledImage = styled(Image)`
  width: 68px;
  height: 68px;
`;

/**
 * The styled `Text` component used for
 * the `SkillModal` component name text
 */
export const StyledName = styled(Text)`
  padding-top: 16px;
  font-size: 32px;
`;

/**
 * The styled `Text` component used for
 * the `SkillModal` component description text
 */
export const StyledDescription = styled(Text)`
  padding-top: 26px;
  padding-bottom: 34px;
`;
