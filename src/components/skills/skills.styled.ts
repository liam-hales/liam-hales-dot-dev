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
 * The max width map for the dfferent
 * `ScreenSize` values
 */
const maxWidthMap: Record<ScreenSize, string> = {
  [ScreenSize.EXTRA_SMALL]: 'unset',
  [ScreenSize.SMALL]: 'unset',
  [ScreenSize.MEDIUM]: '350px',
  [ScreenSize.LARGE]: '350px',
  [ScreenSize.EXTRA_LARGE]: '350px',
};

/**
 * The styled `Inout` component used for the
 * `LifeTimeline` component search input
 */
export const StyledSearchInput = styled(Input)<StyledSearchInputProps>`
  width: 100%;
  max-width: ${(props) => maxWidthMap[props.screenSize]};
  margin-bottom: 50px;
`;
