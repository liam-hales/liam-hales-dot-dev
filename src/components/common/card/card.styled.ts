import { styled } from '@mui/material';
import { Box } from '..';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Box` component used
 * for the `Card` component
 */
export const StyledCard = styled(Box)`
  border-radius: 10px;
  background-color: ${ColourPalette.DARK_GREY};
`;
