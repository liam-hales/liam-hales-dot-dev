import { styled } from '@mui/material';
import { ScreenSize } from '../../enums';
import { Box, Input } from '../common';
import { NoResults } from '..';

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
 * `LifeTimeline` component search input
 */
export const StyledSearchInput = styled(Input)<StyledSearchInputProps>`
  width: ${(props) => (props.screenSize === ScreenSize.SMALL) ? '100%' : '350px'};
`;

/**
 * The styled `NoResults` component used
 * for the `LifeTimeline` component
 */
export const StyledNoResults = styled(NoResults)`
  padding-top: 26px;
  align-self: center;
`;
