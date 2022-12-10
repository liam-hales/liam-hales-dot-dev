/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Modal as MuiModal, css, Slide } from '@mui/material';
import { useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { BoxDirection, BoxAlignment, BoxJustify, IconId, ColourPalette, ScreenSize } from '../../enums';
import { Box, Card, IconButton, Backdrop } from '.';

/**
 * The `Modal` component props
 */
interface Props extends BaseProps<ReactNode, true> {
  readonly isOpen: boolean;
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
const Modal: FunctionComponent<Props> = ({ className, isOpen, direction, alignment, justify, onClose, onClosed, children }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  return (
    <MuiModal
      className={className}
      open={isOpen}
      onClose={onClose}
      keepMounted={true}
      disableAutoFocus={true}
      components={{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Backdrop: Backdrop,
      }}
    >
      <Box
        justify={BoxJustify.CENTER}
        css={css`
          height: 100%;
          padding-bottom: ${(screenSize === ScreenSize.SMALL) ? 128 : 0}px;
        `}
      >
        <Slide
          in={isOpen}
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
            <Card
              direction={direction}
              alignment={alignment}
              justify={justify}
              css={css`
                position: relative;
                max-width: 418px;
                padding: 28px;
                margin-left: 20px;
                margin-right: 20px;
              `}
            >
              <IconButton
                id={IconId.CROSS}
                colour={ColourPalette.LIGHT_GREY}
                onClick={onClose}
                css={css`
                  position: absolute;
                  align-self: flex-end;
                `}
              />
              {children}
            </Card>
          </div>
        </Slide>
      </Box>
    </MuiModal>
  );
};

export default Modal;
