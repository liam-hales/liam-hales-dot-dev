/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, ColourPalette } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Text, Title } from '../common';

/**
 * The `BrandTypography` component props
 */
type Props = BaseProps;

/**
 * Renders the brand logo section for the brand page which
 * is rendered within the `BrandRoute` component
 *
 * @param props The component props
 * @returns The `BrandTypography` component
 */
const BrandTypography: FunctionComponent<Props> = ({ reference, className }): ReactElement<Props> => {

  const { typographyText } = usePageContent({
    slug: PageSlug.BRAND,
  });

  return (
    <Box
      reference={reference}
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Typography
      </Title>
      <Text
        colour={ColourPalette.LIGHT_GREY}
        css={css`
          padding-top: 16px;
          padding-bottom: 36px;
        `}
      >
        {typographyText}
      </Text>
      <Text css={css`
        font-size: 28px;
      `}
      >
        Urbanist Regular 400
      </Text>
      <Text
        italic={true}
        css={css`
          font-size: 28px;
        `}
      >
        Urbanist Regular 400 Italic
      </Text>
      <Text
        bold={true}
        css={css`
          font-size: 28px;
        `}
      >
        Urbanist ExtraBold 800
      </Text>
      <Text
        bold={true}
        italic={true}
        css={css`
          font-size: 28px;
        `}
      >
        Urbanist ExtraBold 800 Italic
      </Text>
    </Box>
  );
};

export default BrandTypography;
