import { styled } from '@mui/material';
import { Text } from '..';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Text` component used for
 * the `Title` component title text
 */
export const StyledTitle = styled(Text)`
  font-size: 38px;
  line-height: 122%;
`;

/**
 * The styled `Text` component used for
 * the `Title` component full stop text
 */
export const StyledFullStop = styled(Text)`
  font-size: 56px;
  line-height: 0px;
  color: ${ColourPalette.BLUE};
`;
