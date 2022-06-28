import styled from 'styled-components';
import { Text } from '..';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Text` component used for
 * the `Title` component title text
 */
export const StyledTitle = styled(Text)`
  font-size: 34px;
`;

/**
 * The styled `Text` component used for
 * the `Title` component full stop text
 */
export const StyledFullStop = styled(Text)`
  padding-left: 2px;
  font-size: 54px;
  line-height: 0px;
  color: ${ColourPalette.BLUE};
`;
