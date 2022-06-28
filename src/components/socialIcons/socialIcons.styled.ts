import styled from 'styled-components';
import { ColourPalette } from '../../enums';
import { Box, Icon } from '../common';

/**
 * The styled `Box` component used
 * for the `SocialIcons` component
 */
export const StyledBox = styled(Box)`
  width: 100px;
`;

/**
 * The styled `Icon` component used
 * for the `SocialIcons` component
 */
export const StyledIcon = styled(Icon)`
  font-size: 22px;
  color: ${ColourPalette.BLUE};
`;
