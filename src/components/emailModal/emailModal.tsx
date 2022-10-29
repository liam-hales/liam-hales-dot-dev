import { FunctionComponent, ReactElement, useState } from 'react';
import { BoxDirection, BoxJustify, ColourPalette } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { BaseProps } from '../../types';
import { Modal, Button, Popover } from '../common';
import { StyledTitle, StyledText, StyledCopyText, StyledButtons } from './emailModal.styled';

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
      open={open}
      onClose={onClose}
      onClosed={() => setShowEmail(false)}
    >
      <StyledTitle>
        Before you email
      </StyledTitle>
      <StyledText colour={ColourPalette.LIGHT_GREY}>
        {emailText}
      </StyledText>
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
            <StyledCopyText colour={ColourPalette.LIGHT_GREY}>
              Click to copy to clipboard
            </StyledCopyText>
          </>
        )
      }
      {
        (showEmail === false) && (
          <StyledButtons
            direction={BoxDirection.ROW}
            justify={BoxJustify.END}
          >
            <Button
              colour={ColourPalette.GREY}
              onClick={onClose}
            >
              I&apos;m a recruiter
            </Button>
            <Button onClick={() => setShowEmail(true)}>
              OK, got it
            </Button>
          </StyledButtons>
        )
      }
    </Modal>
  );
};

export default EmailModal;
