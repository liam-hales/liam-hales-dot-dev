import { styled } from '@mui/material';
import { ColourPalette, ScreenSize } from '../../../enums';
import { Card, Text, Icon } from '../../common';

/**
 * The component props for
 * the screen size
 */
interface ScreenSizeProps {
  screenSize: ScreenSize;
}

/**
 * The card width map for the dfferent
 * `ScreenSize` values
 */
const cardWidthMap: Record<ScreenSize, string> = {
  [ScreenSize.EXTRA_SMALL]: '100%',
  [ScreenSize.SMALL]: 'calc((100% / 2) - 10px)',
  [ScreenSize.MEDIUM]: 'calc((100% / 2) - 10px)',
  [ScreenSize.LARGE]: 'calc((100% / 3) - 10px)',
  [ScreenSize.EXTRA_LARGE]: 'calc((100% / 3) - 10px)',
};

/**
 * The styled `Card` component used for
 * the `SkillAreaCard` component
 */
export const StyledCard = styled(Card)<ScreenSizeProps>`
  width: ${(props) => cardWidthMap[props.screenSize]};
  height: ${(props) => (props.screenSize === ScreenSize.EXTRA_SMALL) ? 120 : 200}px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

/**
 * The styled `Icon` component used for
 * the `SkillAreaCard` component
 */
export const StyledIcon = styled(Icon)<ScreenSizeProps>`
  padding-right: ${(props) => (props.screenSize === ScreenSize.EXTRA_SMALL) ? 24 : 0}px;
  font-size: 42px;
  color: ${ColourPalette.BLUE};
`;

/**
 * The styled `Text` component used for
 * the `SkillAreaCard` component title text
 */
export const StyledTitle = styled(Text)<ScreenSizeProps>`
  padding-top: ${(props) => (props.screenSize === ScreenSize.EXTRA_SMALL) ? 0 : 16}px;
  padding-bottom: ${(props) => (props.screenSize === ScreenSize.EXTRA_SMALL) ? 4 : 16}px;
  font-size: 18px;
`;

/**
 * The styled `Text` component used for
 * the `SkillAreaCard` component description text
 */
export const StyledDescription = styled(Text)<ScreenSizeProps>`
  max-width: ${(props) => (props.screenSize === ScreenSize.EXTRA_SMALL) ? 210 : 180}px;
  text-align: ${(props) => (props.screenSize === ScreenSize.EXTRA_SMALL) ? 'left' : 'center'};
`;
