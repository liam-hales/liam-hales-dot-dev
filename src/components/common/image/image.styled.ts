import styled from 'styled-components';
import { Box } from '..';

/**
 * The `StyledBox` component props
 */
interface StyledBoxProps {
  circle: boolean;
}

/**
 * The styled `Box` component used
 * for the `Image` component
 */
export const StyledBox = styled(Box)<StyledBoxProps>`
  border-radius: ${(props) => (props.circle === true) ? '50%' : '16px'};
  overflow: hidden;
`;

/**
 * The styled `img` element used
 * for the `Image` component
 */
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
