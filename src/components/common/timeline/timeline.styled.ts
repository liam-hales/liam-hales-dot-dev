import { styled } from '@mui/material';
import { Box } from '..';
import { ColourPalette } from '../../../enums';

/**
 * The `StyledContainer` component props
 */
interface StyledContainerProps {
  readonly first: boolean;
  readonly last: boolean;
}

/**
 * The styled `Box` component used for
 * the `Timeline` component item box
 */
export const StyledItemBox = styled(Box)`
  position: relative;
`;

/**
 * The styled `Box` component used for
 * the `Timeline` component child box
 */
export const StyledChildBox = styled(Box)`
  padding-left: 12px;
  padding-bottom: 40px;
`;

/**
 * The styled `div` element used for
 * the `Timeline` component connector
 */
export const StyledConnector = styled('div')<StyledContainerProps>`
  position: absolute;
  width: 2px;
  top: ${(props) => (props.first === true) ? 38 : 0}px;
  bottom: ${(props) => (props.last === true) ? 'calc(100% - 38px)' : '0px'};
  left: 9px;
  background-color: ${ColourPalette.DARK_GREY};
  z-index: -1;
`;

/**
 * The styled `div` element used for
 * the `Timeline` component item dot
 */
export const StyledDot = styled('div')`
  width: 20px;
  height: 20px;
  margin-top: 28px;
  flex-shrink: 0;
  border-style: solid;
  border-color: ${ColourPalette.BLACK};
  border-width: 4px;
  border-radius: 50%;
  background-color: ${ColourPalette.BLUE};
`;
