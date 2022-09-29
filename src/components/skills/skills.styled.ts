import { styled } from '@mui/material';
import { ScreenSize } from '../../enums';
import { Box, Input, Text } from '../common';
import { Grid } from '..';

/**
 * The `StyledSearchInput` component props
 */
interface StyledSearchInputProps {
  readonly screenSize: ScreenSize;
}

/**
 * The width map for the dfferent
 * `ScreenSize` values
 */
const widthMap: Record<ScreenSize, string> = {
  [ScreenSize.EXTRA_SMALL]: '100%',
  [ScreenSize.SMALL]: '100%',
  [ScreenSize.MEDIUM]: '350px',
  [ScreenSize.LARGE]: '350px',
  [ScreenSize.EXTRA_LARGE]: '350px',
};

/**
 * The styled `Box` component used for
 * the `Skills` component box
 */
export const StyledBox = styled(Box)`
  row-gap: 40px;
`;

/**
 * The styled `Inout` component used for the
 * `Skills` component search input
 */
export const StyledSearchInput = styled(Input)<StyledSearchInputProps>`
  width: ${(props) => widthMap[props.screenSize]};
`;

/**
 * The styled `Text` component used for
 * the `Skills` component disclaimer text
 */
export const StyledDisclaimerText = styled(Text)`
  max-width: 450px;
`;

/**
 * The styled `Grid` component used for
 * the `Skills` component grid
 */
export const StyledGrid = styled(Grid)`
  width: 100%;
`;
