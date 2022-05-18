import styled from 'styled-components';
import { Tabs as MuiTabs } from '@mui/material';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Tabs` component from `@mui/material`
 * used for the `Tabs` component
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
      max-width: 42px;
      border-radius: 2px;
      background-color: ${ColourPalette.BLUE};
    }
  };
`;
