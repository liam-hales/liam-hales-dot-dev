import { styled } from '@mui/material';
import { BrandLogo, BrandTypography } from '../..';
import { Box } from '../../common';

/**
 * The styled `Box` component used for the
 * `BrandRoute` component header buttons
 */
export const StyledHeaderButtons = styled(Box)`
  column-gap: 12px;
`;

/**
 * The styled `BrandLogo` component used
 * for the `BrandRoute` component
 */
export const StyledBrandLogo = styled(BrandLogo)`
  // Margin is applied here and not padding so
  // the auto scroll works correctly
  margin-top: 50px;
`;

/**
 * The styled `BrandTypography` component used
 * for the `BrandRoute` component
 */
export const StyledBrandTypography = styled(BrandTypography)`
  // Margin is applied here and not padding so
  // the auto scroll works correctly
  margin-top: 80px;
`;
