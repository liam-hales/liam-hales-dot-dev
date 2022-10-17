import { FunctionComponent, ReactElement } from 'react';
import { ScreenSize } from '../../../enums';
import { useScreen } from '../../../hooks';
import { BaseProps } from '../../../types';
import { StyledDialog, StyledCard } from './modal.styled';

/**
 * The `Modal` component props
 */
interface Props extends BaseProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

/**
 * The common `Modal` component used to render a modal to
 * display infomation and for the user to interact with
 *
 * @param props The cmponent props
 * @returns
 */
const Modal: FunctionComponent<Props> = ({ className, open, onClose, children }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  return (
    <StyledDialog
      className={className}
      open={open}
      onClose={onClose}
      keepMounted={true}
      maxWidth={ScreenSize.MEDIUM}
      screenSize={screenSize}
    >
      <StyledCard>
        {children}
      </StyledCard>
    </StyledDialog>
  );
};

export default Modal;
