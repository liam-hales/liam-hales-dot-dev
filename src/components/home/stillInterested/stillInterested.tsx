import { FunctionComponent, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavRoute, TextAppearance } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box, Button, Title } from '../../common';
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

  const navigate = useNavigate();
  const { stillInterestedText } = usePageContent({
    slug: PageSlug.HOME,
  });

  return (
    <Box className={className}>
      <Title>
        Still interested?
      </Title>
      <StyledText appearance={TextAppearance.SECONDARY}>
        {stillInterestedText}
      </StyledText>
      <Button onClick={() => navigate(NavRoute.CV)}>
        Curriculum Vitae
      </Button>
    </Box>
  );
};

export default StillInterested;
