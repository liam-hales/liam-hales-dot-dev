import { styled } from '@mui/material';
import { ScreenSize } from '../../enums';
import { Input } from '../common';

/**
 * The `StyledSearchInput` component props
 */
interface StyledSearchInputProps {
  readonly screenSize: ScreenSize;
}

/**
 * The styled `Inout` component used for the
 * `LifeTimeline` component search input
 */
export const StyledSearchInput = styled(Input)<StyledSearchInputProps>`
  width: ${(props) => (props.screenSize === ScreenSize.SMALL) ? '100%' : '350px'};
  margin-bottom: 50px;
`;
