import styled from 'styled-components';

/**
 * The `StyledImageProps` component props
 */
interface StyledImageProps {
  readonly circle: boolean;
}

/**
 * The styled `img` element used
 * for the `Image` component
 */
export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => (props.circle === true) ? '50%' : '16px'};
`;
