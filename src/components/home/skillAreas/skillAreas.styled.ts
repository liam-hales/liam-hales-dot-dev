import { styled } from '@mui/material';
import { ColourPalette, ScreenSize } from '../../../enums';
import { Card, Icon, Text } from '../../common';

/**
 * The `StyledCard` component props
 */
interface StyledCardProps {
  screenSize: ScreenSize;
}

/**
 * The card width map for the dfferent
 * `ScreenSize` values
 */
const cardWidthMap: Record<ScreenSize, string> = {
  [ScreenSize.EXTRA_SMALL]: '310px',
  [ScreenSize.SMALL]: 'calc((100% / 2) - 10px)',
  [ScreenSize.MEDIUM]: 'calc((100% / 2) - 10px)',
  [ScreenSize.LARGE]: 'calc((100% / 3) - 10px)',
  [ScreenSize.EXTRA_LARGE]: 'calc((100% / 3) - 10px)',
};

/**
 * The styled `Card` component used for
 * the `SkillAreas` component
 */
export const StyledCard = styled(Card)<StyledCardProps>`
  width: ${(props) => cardWidthMap[props.screenSize]};
  height: 200px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  max-width: 180px;
  text-align: center;
`;
