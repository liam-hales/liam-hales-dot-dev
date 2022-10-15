import { FunctionComponent, ReactElement } from 'react';
import { ScreenSize } from '../../../enums';
import { BaseProps } from '../../../types';
import { StyledDialog } from './modal.styled';

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
  return (
    <StyledDialog
      className={className}
      open={open}
      onClose={onClose}
      keepMounted={true}
      maxWidth={ScreenSize.MEDIUM}
    >
      {children}
    </StyledDialog>
  );
};

export default Modal;
