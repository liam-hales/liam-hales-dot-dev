/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { NavRoute, ColourPalette, IconId } from '../enums';
import { PageSlug } from '../graphql';
import { usePageContent, useRouter } from '../hooks';
import { BaseProps } from '../types';
import { Box, Button, Text, Title } from './common';

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
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          max-width: 340px;
          padding-top: 16px;
          padding-bottom: 32px;
          text-align: center;
        `}
      >
        {stillInterestedText}
      </Text>
      <Button
        iconId={IconId.DOCUMENT}
        onClick={() => goTo(NavRoute.CV)}
      >
        Curriculum Vitae
      </Button>
    </Box>
  );
};

export default StillInterested;
