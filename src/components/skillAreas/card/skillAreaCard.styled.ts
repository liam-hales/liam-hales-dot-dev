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
 * The styled `Card` component used for
 * the `SkillAreaCard` component
 */
export const StyledCard = styled(Card)`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 20px;
  padding-right: 20px;
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
