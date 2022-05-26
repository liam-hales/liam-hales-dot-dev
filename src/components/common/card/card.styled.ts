import styled from 'styled-components';
import { Box } from '..';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Box` component used
 * for the `Card` component
 */
export const StyledCard = styled(Box)`
  border-radius: 8px;
  background-color: ${ColourPalette.DARK_GREY};
`;
