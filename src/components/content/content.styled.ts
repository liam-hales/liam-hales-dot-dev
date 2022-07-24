import styled from 'styled-components';
import { Box } from '../common';

/**
 * The styled `Box` component used for
 * the `Content` component outer box
 */
export const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
`;

/**
 * The styled `Box` component used
 * for the `Content` component content
 */
export const StyledContent = styled(Box)`
  width: 100%;
  max-width: 800px;
  padding-left: 24px;
  padding-right: 24px;
`;
