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
        colour={ColourPalette.GREY_400}
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
        Urbanist SemiBold 600
      </Text>
      <Text
        isItalic={true}
        css={css`
          font-size: 28px;
        `}
      >
        Urbanist SemiBold 600 Italic
      </Text>
      <Text
        isBold={true}
        css={css`
          font-size: 28px;
        `}
      >
        Urbanist Black 900
      </Text>
      <Text
        isBold={true}
        isItalic={true}
        css={css`
          font-size: 28px;
        `}
      >
        Urbanist Black 900 Italic
      </Text>
    </Box>
  );
};

export default BrandTypography;
