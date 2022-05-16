import { styled } from '@mui/material';
import { BoxAlignment, BoxDirection } from '../../../enums';

/**
 * The `StyledBox` component props
 */
interface StyledBoxProps {
  direction: BoxDirection;
  alignment: BoxAlignment;
}

/**
 * The styled `div` element used
 * for the `Box` component
 */
export const StyledBox = styled.div<StyledBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignment};
`;
