import { styled } from '@mui/material';
import { Box, Text } from '../../common';
import { Logo } from '../..';

/**
 * The styled `Text` component used for
 * the `BrandLogo` component description text
 */
export const StyledDescription = styled(Text)`
  padding-top: 16px;
  padding-bottom: 50px;
`;

/**
 * The styled `Text` component used for the
 * `BrandLogo` component interactive logo box
 */
export const StyledInteractiveLogoBox = styled(Box)`
  width: 100%;
`;

/**
 * The styled `Logo` component used for
 * the `BrandLogo` component logo
 */
export const StyledLogo = styled(Logo)`
  width: 180px;
`;

/**
 * The styled `Text` component used for the
 * `BrandLogo` component inspect text
 */
export const StyledInspectText = styled(Text)`
  max-width: 340px;
  padding-top: 40px;
  font-size: 16px;
  text-align: center;
`;
