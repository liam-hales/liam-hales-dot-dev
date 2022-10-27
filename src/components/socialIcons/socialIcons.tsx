import { FunctionComponent, ReactElement, useState } from 'react';
import { BoxDirection, IconId } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { EmailModal } from '..';
import { IconButton } from '../common';
import { StyledIconsBox } from './socialIcons.styled';

/**
 * Renders the social icons which link out to profiles on different
 * social media platforms such asd LinkedIn and Stack Overflow
 *
 * @returns The `SocialIcons` component
 */
const SocialIcons: FunctionComponent = (): ReactElement => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { linkedInUrl, stackOverflowUrl } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  return (
    <>
      <EmailModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <StyledIconsBox direction={BoxDirection.ROW}>
        <IconButton
          id={IconId.ENVELOPE}
          onClick={() => setModalOpen(true)}
        />
        <IconButton
          id={IconId.LINKED_IN}
          onClick={() => window.open(linkedInUrl, '_blank')}
        />
        <IconButton
          id={IconId.STACK_OVERFLOW}
          onClick={() => window.open(stackOverflowUrl, '_blank')}
        />
      </StyledIconsBox>
    </>
  );
};

export default SocialIcons;
