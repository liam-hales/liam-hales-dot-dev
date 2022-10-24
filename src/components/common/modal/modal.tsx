import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Slide } from '@mui/material';
import { useScreen } from '../../../hooks';
import { BaseProps } from '../../../types';
import { BoxDirection, BoxAlignment, BoxJustify, IconId } from '../../../enums';
import { StyledModal, StyledCard, StyledIcon } from './modal.styled';

/**
 * The `Modal` component props
 */
interface Props extends BaseProps<ReactNode, true> {
  readonly open: boolean;
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
  readonly onClose?: () => void;
  readonly onClosed?: () => void;
}

/**
 * The common `Modal` component used to render a modal to
 * display infomation and for the user to interact with
 *
 * @param props The cmponent props
 * @returns The `Modal` component
 */
const Modal: FunctionComponent<Props> = ({ className, open, direction, alignment, justify, onClose, onClosed, children }): ReactElement<Props> => {

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
        onExited={onClosed}
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
          <StyledCard
            direction={direction}
            alignment={alignment}
            justify={justify}
          >
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