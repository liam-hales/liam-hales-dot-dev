import { styled } from '@mui/material';
import { ColourPalette } from '../../enums';
import { Box, Icon } from '../common';

/**
 * The styled `Box` component used for
 * the `SocialIcons` component icons box
 */
export const StyledIconsBox = styled(Box)`
  column-gap: 16px;
`;

/**
 * The styled `Icon` component used
 * for the `SocialIcons` component
 */
export const StyledIcon = styled(Icon)`
  font-size: 22px;
  color: ${ColourPalette.BLUE};
`;
