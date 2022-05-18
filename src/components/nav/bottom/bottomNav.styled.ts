import styled from 'styled-components';
import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction as MuiBottomNavigationAction } from '@mui/material';
import { Box, Icon } from '../../common';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Box` component used
 * for the `BottomNav` component
 */
export const StyledBottomNav = styled(Box)`
  position: sticky;
  width: 100%;
  bottom: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 1;
  background-color: ${ColourPalette.BLACK};
`;

/**
 * The styled `BottomNavigation` component from `@mui/material`
 * used for the `BottomNav` component
 */
export const StyledBottomNavigation = styled(MuiBottomNavigation)`
  width: 100%;
  background-color: transparent;
`;

/**
 * The styled `BottomNavigationAction` component from `@mui/material`
 * used for the `BottomNav` component
 */
export const StyledBottomNavigationAction = styled(MuiBottomNavigationAction)`
  border-radius: 10px;
  color: ${ColourPalette.WHITE};

  .MuiTouchRipple-root {
    color: ${ColourPalette.WHITE};
  };

  .MuiBottomNavigationAction-label {
    font-weight: 800;
    color: ${ColourPalette.WHITE};
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
