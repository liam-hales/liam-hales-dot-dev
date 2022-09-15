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
 * The styled `Inout` component used for the
 * `LifeTimeline` component search input
 */
export const StyledSearchInput = styled(Input)<StyledSearchInputProps>`
  width: ${(props) => widthMap[props.screenSize]};
  margin-bottom: 50px;
`;
