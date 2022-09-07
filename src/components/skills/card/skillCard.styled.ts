import { styled } from '@mui/material';
import { Card, Text, Image } from '../../common';

/**
 * The styled `Card` component used for
 * the `SkillCard` component
 */
export const StyledCard = styled(Card)`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
`;

/**
 * The styled `Text` component used for
 * the `SkillCard` component name text
 */
export const StyledName = styled(Text)`
  font-size: 20px;
  line-height: 122%;
`;

/**
 * The styled `Image` component used for
 * the `SkillCard` component image
 */
export const StyledImage = styled(Image)`
  width: 46px;
  height: 46px;
  margin-left: 20px;
  flex-shrink: 0;
`;
