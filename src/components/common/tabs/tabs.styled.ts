import { styled, Tabs as MuiTabs } from '@mui/material';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Tabs` component from `@mui/material`
 */
export const StyledTabs = styled(MuiTabs)`

  .MuiTabs-indicator {
    height: 4px;
    display: flex;
    justify-content: center;
    background-color: transparent;

    span {
      width: 100%;
      height: 100%;
      border-radius: 2px;
      max-width: 42px;
      background-color: ${ColourPalette.BLUE};
    }
  };
`;
