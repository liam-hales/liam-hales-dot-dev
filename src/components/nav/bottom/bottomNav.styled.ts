import { styled, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Box, Icon } from '../../common';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Box` component used
 * for the `BottomNav` component
 */
export const StyledBottomNav = styled(Box)`
  position: fixed;
  width: 100%;
  bottom: 0px;
  padding-top: 12px;
  padding-bottom: calc(12px + env(safe-area-inset-bottom));
  padding-left: 12px;
  padding-right: 12px;
  z-index: 1;
`;

/**
 * The styled `BottomNavigation` component from `@mui/material`
 * used for the `BottomNav` component
 */
export const StyledBottomNavigation = styled(BottomNavigation)`
  width: 100%;
  height: 72px;
  border-style: solid;
  border-color: ${ColourPalette.DARK_GREY};
  border-width: 1px;
  border-radius: 36px;
  background-color: ${ColourPalette.BLACK};
`;

/**
 * The styled `BottomNavigationAction` component from `@mui/material`
 * used for the `BottomNav` component
 */
export const StyledBottomNavigationAction = styled(BottomNavigationAction)`

  .MuiTouchRipple-root {
    color: ${ColourPalette.WHITE};
    border-radius: 36px;
  };
`;

/**
 * The styled `Icon` component used for
 * the `BottomNav` component icon
 */
export const StyledIcon = styled(Icon)`
  font-size: 20px;
  padding-top: 3px;
  padding-bottom: 6px;
`;
