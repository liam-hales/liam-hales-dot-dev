import { styled, Modal } from '@mui/material';
import { ScreenSize } from '../../../enums';
import { Card } from '..';

/**
 * The `StyledCard` component props
 */
interface StyledCardProps {
  readonly screenSize: ScreenSize;
}

/**
 * The styled `Modal` component from `@mui/material`
 * used for the `Modal` component
 */
export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * The styled `Card` component used
 * for the `Modal` component
 */
export const StyledCard = styled(Card)<StyledCardProps>`
  max-width: 420px;
  padding: 28px;
  margin-bottom: ${(props) => (props.screenSize === ScreenSize.SMALL) ? 120 : 0}px;
  margin-left: 20px;
  margin-right: 20px;
`;
