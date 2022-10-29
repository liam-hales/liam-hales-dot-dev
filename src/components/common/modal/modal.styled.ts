import { styled, Backdrop, Modal } from '@mui/material';
import { ScreenSize, ColourPalette } from '../../../enums';
import { Card, IconButton } from '..';

/**
 * The `StyledModal` component props
 */
interface StyledModalProps {
  readonly screenSize: ScreenSize;
}

/**
 * The styled `Backdrop` component from `@mui/material`
 * used for the `Modal` component backdrop
 */
export const StyledBackdrop = styled(Backdrop)`
  backdrop-filter: blur(4px);
`;

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
  position: relative;
  max-width: 418px;
  padding: 28px;
  margin-left: 20px;
  margin-right: 20px;
`;

/**
 * The styled `IconButton` component used
 * for the `Modal` component close icon button
 */
export const StyledCloseButton = styled(IconButton)`
  position: absolute;
  align-self: flex-end;
`;
