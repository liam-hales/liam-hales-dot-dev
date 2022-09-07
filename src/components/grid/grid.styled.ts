import { styled } from '@mui/material';
import { ScreenSize } from '../../enums';
import { Box } from '../common';

/**
 * The `StyledCard` component props
 */
interface StyledChildBoxProps {
  readonly screenSize: ScreenSize;
}

/**
 * The width map for the dfferent
 * `ScreenSize` values
 */
const widthMap: Record<ScreenSize, string> = {
  [ScreenSize.EXTRA_SMALL]: '100%',
  [ScreenSize.SMALL]: 'calc((100% / 2) - 7.5px)',
  [ScreenSize.MEDIUM]: 'calc((100% / 2) - 7.5px)',
  [ScreenSize.LARGE]: 'calc((100% / 3) - 10px)',
  [ScreenSize.EXTRA_LARGE]: 'calc((100% / 3) - 10px)',
};

/**
 * The styled `Box` component used
 * for the `Grid` component box
 */
export const StyledBox = styled(Box)`
  width: 100%;
`;

/**
 * The styled `Box` component used for
 * the `Grid` component child box
 */
export const StyledChildBox = styled(Box)<StyledChildBoxProps>`
  width: ${(props) => widthMap[props.screenSize]};
  margin-top: 7.5px;
  margin-bottom: 7.5px;
`;
