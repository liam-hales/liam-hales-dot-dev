import { styled, Modal } from '@mui/material';
import { ColourPalette, ScreenSize } from '../../../enums';
import { Card, Icon } from '..';

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

/**
 * The styled `Icon` component used
 * for the `Modal` component close icon
 */
export const StyledIcon = styled(Icon)`
  font-size: 20px;
  align-self: flex-end;
  color: ${ColourPalette.LIGHT_GREY};
`;
