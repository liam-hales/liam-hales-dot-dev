import { FunctionComponent, ReactElement } from 'react';
import { BoxDirection, IconId } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { StyledIconsBox, StyledIcon } from './socialIcons.styled';

/**
 * Renders the social icons which link out to profiles on different
 * social media platforms such asd LinkedIn and Stack Overflow
 *
 * @returns The `SocialIcons` component
 */
const SocialIcons: FunctionComponent = (): ReactElement => {

  const { linkedInUrl, stackOverflowUrl } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  return (
    <StyledIconsBox direction={BoxDirection.ROW}>
      <StyledIcon
        id={IconId.ENVELOPE}
      />
      <StyledIcon
        id={IconId.LINKED_IN}
        onClick={() => window.open(linkedInUrl, '_blank')}
      />
      <StyledIcon
        id={IconId.STACK_OVERFLOW}
        onClick={() => window.open(stackOverflowUrl, '_blank')}
      />
    </StyledIconsBox>
  );
};

export default SocialIcons;
