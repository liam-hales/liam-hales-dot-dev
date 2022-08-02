import { FunctionComponent, ReactElement } from 'react';
import { Button, Title } from '../common';
import { useRouter } from '../../hooks';
import { TextAppearance, NavRoute, BoxDirection, BoxJustify } from '../../enums';
import { StyledContent, StyledText, StyledButtonBox } from './error.styled';

/**
 * Used to display an error message to the
 * user for any errors loading data
 *
 * @returns The `Error` component
 */
const Error: FunctionComponent = (): ReactElement => {

  const { goTo, goBack } = useRouter();
  return (
    <StyledContent>
      <Title>
        Something went wrong
      </Title>
      <StyledText appearance={TextAppearance.SECONDARY}>
        Oops, looks like something went wrong. Please try refreshing the page.
      </StyledText>
      <StyledButtonBox
        direction={BoxDirection.ROW}
        justify={BoxJustify.SPACE_BETWEEN}
      >
        <Button onClick={goBack}>
          Go Back
        </Button>
        <Button onClick={() => goTo(NavRoute.HOME)}>
          Return Home
        </Button>
      </StyledButtonBox>
    </StyledContent>
  );
};

export default Error;
