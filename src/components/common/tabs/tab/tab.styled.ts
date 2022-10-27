import { styled, Tab } from '@mui/material';
import { ColourPalette } from '../../../../enums';

/**
 * The styled `Tab` component from `@mui/material`
 * used for the `Tab` component
 */
export const StyledTab = styled(Tab)`
  border-radius: 10px;
  opacity: 1.0;

  .MuiTouchRipple-root {
    color: ${ColourPalette.WHITE};
    border-radius: 24px;
  };
`;
