/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { Box, Modal, Button, Popover, Title, Text, Link } from './common';

/**
 * The `ContactModal` component props
 */
interface Props extends BaseProps {
  readonly text: string;
  readonly email: string;
  readonly linkedInUrl: string;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

/**
 * Used to render the contact modal which displays a message about
 * contacting before allowing a user to see the email
 *
 * @param props The component props
 * @returns The `ContactModal` component
 */
const ContactModal: FunctionComponent<Props> = ({ text, email, linkedInUrl, isOpen, onClose }): ReactElement<Props> => {

  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  return (
    <Modal
      alignment="flex-start"
      isOpen={isOpen}
      onClose={onClose}
      onStatusChange={(status) => {

        // Only reset the show email state
        // if the modal is closed
        if (status === 'closed') {
          setShowEmail(false);
        }
      }}
    >
      <Title>
        Before you contact
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
                iconId="copy"
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
            direction="row"
            justify="flex-end"
            css={css`
              width: 100%;
              column-gap: 12px;
            `}
          >
            <Link
              href={linkedInUrl}
              target="_blank"
              passHref={true}
              aria-label="LinkedIn"
            >
              <Button
                colour={ColourPalette.GREY_700}
                iconId="linkedIn"
              >
                I&apos;m a recruiter
              </Button>
            </Link>
            <Button
              iconId="tick"
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

export default ContactModal;
