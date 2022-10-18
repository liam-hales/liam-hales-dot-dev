import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Slide } from '@mui/material';
import { useScreen } from '../../../hooks';
import { BaseProps } from '../../../types';
import { IconId } from '../../../enums';
import { StyledModal, StyledCard, StyledIcon } from './modal.styled';

/**
 * The `Modal` component props
 */
interface Props extends BaseProps<ReactNode, true> {
  readonly open: boolean;
  readonly onClose: () => void;
}

/**
 * The common `Modal` component used to render a modal to
 * display infomation and for the user to interact with
 *
 * @param props The cmponent props
 * @returns The `Modal` component
 */
const Modal: FunctionComponent<Props> = ({ className, open, onClose, children }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  return (
    <StyledModal
      className={className}
      open={open}
      onClose={onClose}
      keepMounted={true}
      disableAutoFocus={true}
      screenSize={screenSize}
    >
      <Slide
        in={open}
        direction="up"
        timeout={{
          enter: 460,
          exit: 160,
        }}
        easing={{
          enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
          exit: 'cubic-bezier(0.12, 0, 0.39, 0)',
        }}
      >
        {/**
         * The `div` element is here to accept the reference
         * forwarded from the `Slide` transition compnent
         */}
        <div>
          <StyledCard>
            <StyledIcon
              id={IconId.CROSS}
              onClick={onClose}
            />
            {children}
          </StyledCard>
        </div>
      </Slide>
    </StyledModal>
  );
};

export default Modal;
