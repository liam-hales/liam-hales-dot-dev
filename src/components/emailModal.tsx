/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, BoxDirection, BoxJustify, ColourPalette, IconId } from '../enums';
import { BaseProps } from '../types';
import { Box, Modal, Button, Popover, Title, Text } from './common';

/**
 * The `EmailModal` component props
 */
interface Props extends BaseProps {
  readonly text: string;
  readonly email: string;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

/**
 * Used to render an email modal which displays a message
 * for recruiters before allowing a user to email
 *
 * @param props The component props
 * @returns The `EmailModal` component
 */
const EmailModal: FunctionComponent<Props> = ({ text, email, isOpen, onClose }): ReactElement<Props> => {

  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  return (
    <Modal
      alignment={BoxAlignment.START}
      isOpen={isOpen}
      onClose={onClose}
      onClosed={() => setShowEmail(false)}
    >
      <Title>
        Before you email
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
          padding-bottom: 28px;
        `}
      >
        {text}
      </Text>
      {
        (showEmail === true) && (
          <Box css={css`
            width: 100%;
          `}
          >
            <Popover
              text="Coppied"
              isOpen={popoverOpen}
              onClose={() => setPopoverOpen(false)}
            >
              <Button
                iconId={IconId.COPY}
                onClick={() => {
                  setPopoverOpen(true);
                  navigator.clipboard.writeText(email);
                }}
              >
                {email}
              </Button>
            </Popover>
            <Text
              colour={ColourPalette.GREY_400}
              css={css`
                padding-top: 6px;
                font-size: 11px;
              `}
            >
              Click to copy to clipboard
            </Text>
          </Box>
        )
      }
      {
        (showEmail === false) && (
          <Box
            direction={BoxDirection.ROW}
            justify={BoxJustify.END}
            css={css`
              width: 100%;
              column-gap: 12px;
            `}
          >
            <Button
              colour={ColourPalette.GREY_700}
              iconId={IconId.ARROW_LEFT}
              onClick={onClose}
            >
              I&apos;m a recruiter
            </Button>
            <Button
              iconId={IconId.TICK}
              onClick={() => setShowEmail(true)}
            >
              OK, got it
            </Button>
          </Box>
        )
      }
    </Modal>
  );
};

export default EmailModal;
