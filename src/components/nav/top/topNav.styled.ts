import { styled } from '@mui/material';
import { ColourPalette } from '../../../enums';
import { LogoSvg } from '../../../svgs';
import { Box, Tabs } from '../../common';

/**
 * The styled `Box` component used for
 * the `TopNav` component background
 */
export const StyledBackground = styled(Box)`
  position: sticky;
  width: 100%;
  top: 0px;
  z-index: 1;
  background-color: ${ColourPalette.BLACK};
`;

/**
 * The styled `Box` component used
 * for the `TopNav` component
 */
export const StyledTopNav = styled(Box)`
  width: 100%;
  height: 72px;
  max-width: 800px;
  padding-left: 42px;
  padding-right: 42px;
`;

/**
 * The styled `LogoSvg` component used
 * for the `TopNav` component
 */
export const StyledLogoSvg = styled(LogoSvg)`
  width: 24px;
`;

/**
 * The styled `LogoSvg` component used
 * for the `TopNav` component
 */
export const StyledTabs = styled(Tabs)`
  padding-left: 28px;
`;
