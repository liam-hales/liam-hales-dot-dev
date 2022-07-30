import { styled } from '@mui/material';
import { BoxAlignment, BoxDirection, BoxJustify } from '../../../enums';

/**
 * The `StyledBox` component props
 */
interface StyledBoxProps {
  readonly direction: BoxDirection;
  readonly alignment: BoxAlignment;
  readonly justify: BoxJustify;
  readonly wrap: boolean;
}

/**
 * The styled `div` element used
 * for the `Box` component
 */
export const StyledBox = styled('div')<StyledBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignment};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => {
    return (props.wrap === true)
      ? 'wrap'
      : 'nowrap';
  }};
`;
