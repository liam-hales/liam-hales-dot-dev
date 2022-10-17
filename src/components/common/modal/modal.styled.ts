import { styled, Dialog } from '@mui/material';
import { ScreenSize } from '../../../enums';
import { Card } from '..';

/**
 * The `StyledDialog` component props
 */
interface StyledDialogProps {
  readonly screenSize: ScreenSize;
}

/**
 * The styled `Dialog` component used
 * for the `Modal` component
 */
export const StyledDialog = styled(Dialog)<StyledDialogProps>`

  .MuiDialog-container {
    padding-bottom: ${(props) => (props.screenSize === ScreenSize.SMALL) ? 120 : 0}px;
  }

  .MuiDialog-paper {
    margin: 0px;
    max-height: unset;
    background-color: transparent;
  }
`;

/**
 * The styled `Card` component used
 * for the `Modal` component
 */
export const StyledCard = styled(Card)`
  padding: 28px;
  margin-left: 20px;
  margin-right: 20px;
`;
