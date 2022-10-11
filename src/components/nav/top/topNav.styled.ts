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
  padding-top: 12px;
  padding-bottom: 20px;
  padding-left: 12px;
  padding-right: 12px;
  z-index: 1;
  background-color: transparent;
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
  background-color: ${ColourPalette.BLACK};
  border-style: solid;
  border-color: ${ColourPalette.DARK_GREY};
  border-width: 1px;
  border-radius: 36px;
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
