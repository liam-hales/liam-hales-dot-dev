import { styled, Dialog } from '@mui/material';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Dialog` component used
 * for the `Modal` component
 */
export const StyledDialog = styled(Dialog)`
  
  .MuiDialog-paper {
    padding: 28px;
    border-radius: 10px;
    background-color: ${ColourPalette.DARK_GREY};
  }
`;
