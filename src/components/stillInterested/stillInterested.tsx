import { FunctionComponent, ReactElement } from 'react';
import { NavRoute, ColourPalette } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent, useRouter } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Button, Title } from '../common';
import { StyledText } from './stillInterested.styled';

/**
 * The `StillInterested` component props
 */
type Props = BaseProps;

/**
 * Renders the still interested section for the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `StillInterested` component
 */
const StillInterested: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { goTo } = useRouter();
  const { stillInterestedText } = usePageContent({
    slug: PageSlug.HOME,
  });

  return (
    <Box className={className}>
      <Title>
        Still interested?
      </Title>
      <StyledText colour={ColourPalette.LIGHT_GREY}>
        {stillInterestedText}
      </StyledText>
      <Button onClick={() => goTo(NavRoute.CV)}>
        Curriculum Vitae
      </Button>
    </Box>
  );
};

export default StillInterested;
