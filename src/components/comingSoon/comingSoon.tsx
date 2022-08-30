import { FunctionComponent, ReactElement } from 'react';
import { Button, Title, Text } from '../common';
import { useRouter } from '../../hooks';
import { TextAppearance, NavRoute } from '../../enums';
import { StyledContent, StyledText } from './comingSoon.styled';

/**
 * Used to display to the user that a
 * specific page is coming soon
 *
 * @returns The `ComingSoon` component
 */
const ComingSoon: FunctionComponent = (): ReactElement => {

  const { goTo } = useRouter();
  return (
    <StyledContent>
      <Title>
        Coming Soon
      </Title>
      <StyledText appearance={TextAppearance.SECONDARY}>
        This page is coming soon. For now you can visit my old website
        {' '}
        <Text
          bold={true}
          onClick={() => window.open('https://liamhales.io', '_blank')}
        >
          liamhales.io
        </Text>
        {' '}
        for this infomation.
      </StyledText>
      <Button onClick={() => goTo(NavRoute.HOME)}>
        Return home
      </Button>
    </StyledContent>
  );
};

export default ComingSoon;
