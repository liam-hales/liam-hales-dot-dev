/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode, useEffect, useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import { css } from '@emotion/react';
import { useScreen } from '../../hooks';
import { BaseProps, BoxDirection, BoxAlignment, BoxJustify, ModalStatus } from '../../types';
import { ColourPalette } from '../../enums';
import { Box, Card, IconButton, Backdrop } from '.';

/**
 * The `Modal` component props
 */
interface Props extends BaseProps {
  readonly isOpen: boolean;
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
  readonly onClose: () => void;
  readonly onStatusChange?: (status: ModalStatus) => void;
  readonly children: ReactNode;
}

/**
 * The common `Modal` component used to render a modal to
 * display information and for the user to interact with
 *
 * @param props The component props
 * @returns The `Modal` component
 */
const Modal: FunctionComponent<Props> = ({ isOpen, direction, alignment, justify, onClose, onStatusChange, children }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const [status, setStatus] = useState<ModalStatus | undefined>(undefined);

  /**
   * Used to call `onStatusChange` when the
   * modal status state changes
   */
  useEffect(() => {

    // Only call `onStatusChange` when the
    // status state has been set
    if (status != null) {
      onStatusChange?.(status);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <Backdrop isOpen={isOpen}>
      <Box
        justify="center"
        css={css`
          height: 100%;
          padding-bottom: ${(screenSize === 'small') ? 128 : 0}px;
        `}
      >
        <ClickAwayListener onClickAway={() => {

          // Only close the modal if the status is open
          // to avoid it being closed when it is opening
          if (status === 'open') {
            onClose();
          }
        }}
        >
          <Card
            direction={direction}
            alignment={alignment}
            justify={justify}
            initial={{
              y: window.innerHeight,
            }}
            animate={{
              y: (isOpen === true) ? 0 : window.innerHeight,
            }}
            transition={{
              y: {
                ...(isOpen === true) && {
                  type: 'spring',
                },
                stiffness: 182,
                damping: 22,
              },
            }}
            onAnimationStart={() => setStatus((isOpen === true) ? 'opening' : 'closing')}
            onAnimationComplete={() => setStatus((isOpen === true) ? 'open' : 'closed')}
            css={css`
              position: relative;
              max-width: 480px;
              padding: 28px;
              margin-left: 20px;
              margin-right: 20px;
            `}
          >
            <IconButton
              id="cross"
              colour={ColourPalette.GREY_400}
              onClick={onClose}
              css={css`
                position: absolute;
                align-self: flex-end;
              `}
            />
            {children}
          </Card>
        </ClickAwayListener>
      </Box>
    </Backdrop>
  );
};

export default Modal;
