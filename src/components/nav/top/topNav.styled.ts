import styled from 'styled-components';
import { ColourPalette } from '../../../enums';
import { Box } from '../../common';

/**
 * The styled `Box` component used
 * for the `TopNav` component
 */
export const StyledBackground = styled(Box)`
  position: sticky;
  width: 100%;
  top: 0px;
  z-index: 1;
  background-color: ${ColourPalette.BLACK};
`;

/**
 * The styled `Box` component used
 * for the `TopNav` component
 */
export const StyledTopNav = styled(Box)`
  width: 100%;
  max-width: 740px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
