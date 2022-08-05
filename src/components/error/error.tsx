import { FunctionComponent, ReactElement } from 'react';
import { Button, Title } from '../common';
import { useRouter } from '../../hooks';
import { TextAppearance, NavRoute } from '../../enums';
import { StyledContent, StyledText } from './error.styled';

/**
 * Used to display an error message to the
 * user for any errors loading data
 *
 * @returns The `Error` component
 */
const Error: FunctionComponent = (): ReactElement => {

  const { goTo } = useRouter();
  return (
    <StyledContent>
      <Title>
        Something went wrong
      </Title>
      <StyledText appearance={TextAppearance.SECONDARY}>
        Oops, looks like something went wrong. Please try refreshing the page.
      </StyledText>
      <Button onClick={() => goTo(NavRoute.HOME)}>
        Return Home
      </Button>
    </StyledContent>
  );
};

export default Error;