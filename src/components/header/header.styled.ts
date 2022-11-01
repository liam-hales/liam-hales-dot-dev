import { styled } from '@mui/material';
import { Content } from '..';
import { Box, Text } from '../common';

/**
 * The styled `Content` component used for
 * the `Header` component content
 */
export const StyledContent = styled(Content)`
  padding-top: 42px;
  padding-bottom: 50px;
`;

/**
 * The styled `Text` component used for
 * the `Header` component title text
 */
export const StyledTitle = styled(Text)`
  max-width: 400px;
  font-size: clamp(58px, 15vw, 78px);
  line-height: 100%;
`;

/**
* The styled `Text` component used for
* the `Header` component full stop text
*/
export const StyledFullStop = styled(Text)`
  font-size: clamp(76px, 15vw, 96px);
  line-height: 0px;
`;

/**
 * The styled `Box` component used for
 * the `Header` component children
 */
export const StyledChildren = styled(Box)`
  padding-top: 40px;
`;
