import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Slide } from '@mui/material';
import { useScreen } from '../../../hooks';
import { BaseProps } from '../../../types';
import { BoxDirection, BoxAlignment, BoxJustify, IconId, ColourPalette } from '../../../enums';
import { StyledBackdrop, StyledModal, StyledCard, StyledCloseButton } from './modal.styled';

/**
 * The `Modal` component props
 */
interface Props extends BaseProps<ReactNode, true> {
  readonly open: boolean;
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
  readonly onClose: () => void;
  readonly onClosed?: () => void;
}

/**
 * The common `Modal` component used to render a modal to
 * display infomation and for the user to interact with
 *
 * @param props The component props
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
      components={{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Backdrop: StyledBackdrop,
      }}
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
         * forwarded from the `Slide` transition component
         */}
        <div>
          <StyledCard
            direction={direction}
            alignment={alignment}
            justify={justify}
          >
            <StyledCloseButton
              id={IconId.CROSS}
              colour={ColourPalette.LIGHT_GREY}
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
