/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css } from '@mui/material';
import { motion } from 'framer-motion';
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
const Modal: FunctionComponent<Props> = ({ isOpen, direction, alignment, justify, onClose, onClosed, children }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  return (
    <Backdrop isOpen={isOpen}>
      <Box
        justify={BoxJustify.CENTER}
        css={css`
          height: 100%;
          padding-bottom: ${(screenSize === ScreenSize.SMALL) ? 128 : 0}px;
        `}
      >
        <motion.div
          initial={{
            y: window.innerHeight,
          }}
          animate={{
            y: (isOpen === true) ? 0 : window.innerHeight,
          }}
          transition={{
            y: {
              type: (isOpen === true) ? 'spring' : 'just',
              stiffness: 182,
              damping: 22,
            },
          }}
          onAnimationComplete={() => {

            // Only call `onClosed` if the modal is open to avoid it
            // being called for the modal open animation
            if (isOpen === false) {
              onClosed?.();
            }
          }}
        >
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
        </motion.div>
      </Box>
    </Backdrop>
  );
};

export default Modal;
