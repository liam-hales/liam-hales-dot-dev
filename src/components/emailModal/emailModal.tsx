import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, BoxDirection, BoxJustify, ButtonAppearance, TextAppearance } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { BaseProps } from '../../types';
import { Modal, Text, Button } from '../common';
import { StyledTitle, StyledButtons } from './emailModal.styled';

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

  const { email, emailText } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  return (
    <Modal
      open={open}
      alignment={BoxAlignment.START}
      onClose={onClose}
    >
      <StyledTitle>
        Before you email
      </StyledTitle>
      <Text appearance={TextAppearance.SECONDARY}>
        {emailText}
      </Text>
      <StyledButtons
        direction={BoxDirection.ROW}
        justify={BoxJustify.END}
      >
        <Button
          appearance={ButtonAppearance.SECONDARY}
          onClick={onClose}
        >
          I&apos;m a recruiter
        </Button>
        <Button onClick={() => window.open(`mailto:${email}`)}>
          OK, got it
        </Button>
      </StyledButtons>
    </Modal>
  );
};

export default EmailModal;
