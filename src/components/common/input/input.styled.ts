import { styled, InputBase } from '@mui/material';
import { Box, Icon } from '..';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Box` component used
 * for the `Input` component
 */
export const StyledBox = styled(Box)`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 21px;
  padding-right: 21px;
  border-radius: 1000px;
  background-color: ${ColourPalette.DARK_GREY};
`;

/**
 * The styled `InputBase` component used
 * for the `Input` component
 */
export const StyledInput = styled(InputBase)`
  width: 100%;

  .MuiInputBase-input {
    color: ${ColourPalette.WHITE};
    font-size: 16px;
    font-weight: bold;

    ::placeholder {
      opacity: 0.22;
    }
  }
`;

/**
 * The styled `Icon` component used
 * for the `Input` component icon
 */
export const StyledIcon = styled(Icon)`
  padding-right: 12px;
  font-size: 18px;
  color: ${ColourPalette.BLUE};
`;

/**
 * The styled `Icon` component used
 * for the `Input` component clear icon
 */
export const StyledClearIcon = styled(Icon)`
  padding-left: 12px;
  font-size: 18px;
  color: ${ColourPalette.WHITE};
`;
