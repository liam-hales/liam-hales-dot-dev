import { styled, InputBase } from '@mui/material';
import { Box, Icon, IconButton } from '..';
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
 * The styled `InputBase` component from `@mui/material`
 * used for the `Input` component
 */
export const StyledInput = styled(InputBase)`
  width: 100%;

  .MuiInputBase-input {
    font-size: 16px;
    font-weight: bold;
    color: ${ColourPalette.WHITE};

    ::placeholder {
      color: ${ColourPalette.LIGHT_GREY};
    };
  };
`;

/**
 * The styled `Icon` component used
 * for the `Input` component icon
 */
export const StyledIcon = styled(Icon)`
  padding-right: 12px;
  font-size: 18px;
`;

/**
 * The styled `IconButton` component used
 * for the `Input` component clear icon button
 */
export const StyledClearButton = styled(IconButton)`
  margin-left: 8px;
`;
