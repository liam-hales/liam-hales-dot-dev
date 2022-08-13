import { styled } from '@mui/material';
import { ColourPalette } from '../../enums';
import { Text } from '../common';

/**
 * The styled `Text` component used for
 * the `Stat` component value text
 */
export const StyledValue = styled(Text)`
  font-size: 56px;
  color: ${ColourPalette.BLUE};
`;

/**
 * The styled `Text` component used for
 * the `Stat` component text
 */
export const StyledText = styled(Text)`
  max-width: 100px;
  padding-left: 10px;
`;
