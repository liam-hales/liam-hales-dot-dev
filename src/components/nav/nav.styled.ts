import { styled } from '@mui/material';
import { LogoSvg } from '../../svgs';
import { Box } from '../common';

/**
 * The styled `Box` component used for
 * the `Nav` component logo box
 */
export const StyledLogoBox = styled(Box)`
  width: 100%;
  height: 72px;
`;

/**
 * The styled `LogoSvg` component used
 * for the `Nav` component
 */
export const StyledLogoSvg = styled(LogoSvg)`
  width: 24px;
`;

/**
 * The styled `div` element used for the `Nav` component
 * spacer to fill the area behind the `BottomNav`
 */
export const StyledBottmSpacer = styled('div')`
  height: 84px;
`;
