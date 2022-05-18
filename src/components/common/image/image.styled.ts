import styled from 'styled-components';
import { Box } from '..';

/**
 * The styled `Box` component used
 * for the `Image` component
 */
export const StyledBox = styled(Box)`
  border-radius: 16px;
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
