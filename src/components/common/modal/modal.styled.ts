import { styled, Modal } from '@mui/material';
import { ScreenSize } from '../../../enums';
import { Card } from '..';

/**
 * The `StyledModal` component props
 */
interface StyledModalProps {
  readonly screenSize: ScreenSize;
}

/**
 * The styled `Modal` component from `@mui/material`
 * used for the `Modal` component
 */
export const StyledModal = styled(Modal)<StyledModalProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => (props.screenSize === ScreenSize.SMALL) ? 128 : 0}px;
`;

/**
 * The styled `Card` component used
 * for the `Modal` component
 */
export const StyledCard = styled(Card)`
  max-width: 420px;
  padding: 28px;
  margin-left: 20px;
  margin-right: 20px;
`;
