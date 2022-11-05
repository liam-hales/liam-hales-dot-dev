import { styled } from '@mui/material';
import { ScreenSize } from '../../enums';
import { Box, Input, Text } from '../common';
import { Grid, NoResults } from '..';

/**
 * The `StyledSearchInput` component props
 */
interface StyledSearchInputProps {
  readonly screenSize: ScreenSize;
}

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
  width: ${(props) => (props.screenSize === ScreenSize.SMALL) ? '100%' : '350px'};
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

/**
 * The styled `NoResults` component used
 * for the `Skills` component
 */
export const StyledNoResults = styled(NoResults)`
  padding-top: 26px;
  align-self: center;
`;
