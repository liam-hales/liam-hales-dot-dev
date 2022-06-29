import styled from 'styled-components';
import { ColourPalette } from '../../../enums';
import { Card, Icon, Text } from '../../common';

/**
 * The styled `Card` component used for
 * the `SkillAreas` component
 */
export const StyledCard = styled(Card)`
  max-width: 216px;
  padding-top: 22px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

/**
 * The styled `Icon` component used for
 * the `SkillAreas` component
 */
export const StyledIcon = styled(Icon)`
  font-size: 42px;
  color: ${ColourPalette.BLUE};
`;

/**
 * The styled `Text` component used for
 * the `SkillAreas` component title text
 */
export const StyledTitle = styled(Text)`
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 18px;
`;

/**
 * The styled `Text` component used for
 * the `SkillAreas` component description text
 */
export const StyledDescription = styled(Text)`
  text-align: center;
`;
