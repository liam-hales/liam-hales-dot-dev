/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { BoxDirection, IconId } from '../enums';
import { PageSlug } from '../graphql';
import { usePageContent } from '../hooks';
import { Box, IconButton } from './common';
import { EmailModal } from '.';

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
      <Box
        direction={BoxDirection.ROW}
        css={css`
          column-gap: 16px;
        `}
      >
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
      </Box>
    </>
  );
};

export default SocialIcons;
