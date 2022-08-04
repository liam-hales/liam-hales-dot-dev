import { FunctionComponent, ReactElement } from 'react';
import { Button, Title } from '../common';
import { usePageContent, useRouter } from '../../hooks';
import { TextAppearance, NavRoute } from '../../enums';
import { PageSlug } from '../../graphql';
import { StyledContent, Styled404, StyledText, StyledImage } from './notFound.styled';

/**
 * Used to display a 404 Not Found message
 * to the user for any unknown routes
 *
 * @returns The `NotFound` component
 */
const NotFound: FunctionComponent = (): ReactElement => {

  const { goTo } = useRouter();
  const { notFoundImage, notFoundText } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  return (
    <StyledContent>
      <Styled404 bold={true}>
        404
      </Styled404>
      <Title>
        Page not found
      </Title>
      <StyledText appearance={TextAppearance.SECONDARY}>
        {notFoundText}
      </StyledText>
      <StyledImage
        path={notFoundImage.url}
        alt="Not found image"
      />
      <Button onClick={() => goTo(NavRoute.HOME)}>
        Return Home
      </Button>
    </StyledContent>
  );
};

export default NotFound;
