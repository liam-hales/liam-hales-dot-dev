import { styled } from '@mui/material';
import { ColourPalette } from '../../enums';

/**
 * The `StyledPath` component props
 */
interface StyledPathProps {
  readonly interactive: boolean;
  readonly active: boolean;
}

/**
 * The styled `path` element used for
 * the `Logo` component SVG path
 */
export const StyledPath = styled('path')<StyledPathProps>`
  transition-duration: 300ms;
  fill: ${(props) => {
    return (props.active === true)
      ? ColourPalette.WHITE
      : ColourPalette.DARK_GREY;
  }};
  cursor: ${(props) => {
    return (props.interactive === true)
      ? 'pointer'
      : 'unset';
  }};
  pointer-events: ${(props) => {
    return (props.interactive === false)
      ? 'none'
      : 'unset';
  }};
`;
