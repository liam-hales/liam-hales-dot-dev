import { Divider } from '@mui/material';
import styled from 'styled-components';
import { ColourPalette } from '../../enums';
import { LogoSvg } from '../../svgs';
import { Box, Text } from '../common';

/**
 * The styled `Divider` component used for
 * the `Footer` component
 */
export const StyledDivider = styled(Divider)`
  background-color: ${ColourPalette.DARK_GREY};
`;

/**
 * The styled `Box` component used for
 * the `Footer` component
 */
export const StyledBox = styled(Box)`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 20px;
`;

/**
 * The styled `Box` component used for
 * the `Footer` component info
 */
export const StyledInfoBox = styled(Box)`
  max-width: 420px;
  margin-right: 70px;
`;

/**
 * The styled `Text` component used for
 * the `Footer` component title text
 */
export const StyledTitle = styled(Text)`
  font-size: 24px;
`;

/**
* The styled `Text` component used for
* the `Footer` component description text
*/
export const StyledDescription = styled(Text)`
  padding-top: 8px;
`;

/**
 * The styled `LogoSvg` component used
 * for the `Footer` component
 */
export const StyledLogoSvg = styled(LogoSvg)`
  width: 46px;
  flex-shrink: 0;
`;

/**
 * The styled `Box` component used for
 * the `Footer` component copyright
 */
export const StyledCopyrightBox = styled(Box)`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 20px;
`;

/**
 * The styled `Text` component used for
 * the `Footer` component built using text
 */
export const StyledBuiltUsing = styled(Text)`
  padding-top: 4px;
  font-size: 11px;
`;
