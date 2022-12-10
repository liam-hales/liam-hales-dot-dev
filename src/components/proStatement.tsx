/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, ColourPalette } from '../enums';
import { PageSlug } from '../graphql';
import { usePageContent } from '../hooks';
import { BaseProps } from '../types';
import { Box, Text, Title } from './common';

/**
 * The `ProStatement` component props
 */
type Props = BaseProps;

/**
 * Renders the professional statement section for the home page
 * which is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `ProStatement` component
 */
const ProStatement: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { proStatementText } = usePageContent({
    slug: PageSlug.HOME,
  });

  return (
    <Box
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Professional Statement
      </Title>
      <Text
        colour={ColourPalette.LIGHT_GREY}
        css={css`
          padding-top: 16px;
          padding-bottom: 16px;
        `}
      >
        {proStatementText}
      </Text>
      <Text
        isBold={true}
        isItalic={true}
        css={css`
          font-size: 18px;
        `}
      >
        - Liam Hales
      </Text>
    </Box>
  );
};

export default ProStatement;
