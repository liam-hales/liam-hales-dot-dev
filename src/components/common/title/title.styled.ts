import { styled } from '@mui/material';
import { Text } from '..';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Text` component used for
 * the `Title` component title text
 */
export const StyledTitle = styled(Text)`
  font-size: 34px;
  line-height: 42px;
  text-align: center;
`;

/**
 * The styled `Text` component used for
 * the `Title` component full stop text
 */
export const StyledFullStop = styled(Text)`
  font-size: 54px;
  line-height: 0px;
  color: ${ColourPalette.BLUE};
`;
