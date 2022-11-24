/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, BoxDirection, BoxJustify, ColourPalette, IconId } from '../enums';
import { PageSlug } from '../graphql';
import { usePageContent } from '../hooks';
import { BaseProps } from '../types';
import { Box, Modal, Button, Popover, Title, Text } from './common';

/**
 * The `EmailModal` component props
 */
interface Props extends BaseProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

/**
 * Used to render an email modal which displays a message
 * for recruiters before allowing a user to email
 *
 * @param props The component props
 * @returns The `EmailModal` component
 */
const EmailModal: FunctionComponent<Props> = ({ open, onClose }): ReactElement<Props> => {

  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  const { email, emailText } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  return (
    <Modal
      alignment={BoxAlignment.START}
      open={open}
      onClose={onClose}
      onClosed={() => setShowEmail(false)}
    >
      <Title>
        Before you email
      </Title>
      <Text
        colour={ColourPalette.LIGHT_GREY}
        css={css`
          padding-top: 16px;
          padding-bottom: 28px;
        `}
      >
        {emailText}
      </Text>
      {
        (showEmail === true) && (
          <>
            <Popover
              text="Coppied"
              open={popoverOpen}
              onClose={() => setPopoverOpen(false)}
            >
              <Button
                onClick={() => {
                  setPopoverOpen(true);
                  navigator.clipboard.writeText(email);
                }}
              >
                {email}
              </Button>
            </Popover>
            <Text
              colour={ColourPalette.LIGHT_GREY}
              css={css`
                padding-top: 6px;
                font-size: 11px;
              `}
            >
              Click to copy to clipboard
            </Text>
          </>
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
              colour={ColourPalette.GREY}
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
