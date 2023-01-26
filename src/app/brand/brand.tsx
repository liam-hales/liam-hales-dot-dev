/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useRef } from 'react';
import { css } from '@mui/material';
import { Content, Header, BrandLogo, BrandTypography, BrandColourPalette } from '../../components';
import { Box, Button } from '../../components/common';
import { useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { BrandContent } from '../../graphql';

/**
 * The `Brand` component props
 */
interface Props extends BaseProps {
  readonly content: BrandContent;
}

/**
 * Used as the entry point for the brand page. Renders the
 * brand page components using the given `content` prop
 *
 * @returns The `Brand` component
 */
const Brand: FunctionComponent<Props> = ({ content }): ReactElement<Props> => {

  const { scrollTo } = useScreen();

  const brandLogoRef = useRef<HTMLDivElement>(null);
  const brandColourPaletteRef = useRef<HTMLDivElement>(null);
  const brandTypographyRef = useRef<HTMLDivElement>(null);

  const {
    logoText,
    logoLetterLText,
    logoReverseLetterLText,
    logoBarText,
    colourPaletteText,
    typographyText,
  } = content;

  return (
    <>
      <Header title="Personal Brand">
        <Box
          direction="row"
          css={css`
            column-gap: 12px;
          `}
        >
          <Button onClick={() => scrollTo(brandLogoRef)}>
            The Logo
          </Button>
          <Button onClick={() => scrollTo(brandColourPaletteRef)}>
            Colour Palette
          </Button>
          <Button onClick={() => scrollTo(brandTypographyRef)}>
            Typography
          </Button>
        </Box>
      </Header>
      <Content>
        <BrandLogo
          ref={brandLogoRef}
          text={logoText}
          letterLText={logoLetterLText}
          reverseLetterLText={logoReverseLetterLText}
          barText={logoBarText}
          css={css`
            // Margin is applied here and not padding so
            // the auto scroll works correctly
            margin-top: 50px;
          `}
        />
        <BrandColourPalette
          ref={brandColourPaletteRef}
          text={colourPaletteText}
          css={css`
            // Margin is applied here and not padding so
            // the auto scroll works correctly
            margin-top: 90px;
          `}
        />
        <BrandTypography
          ref={brandTypographyRef}
          text={typographyText}
          css={css`
            // Margin is applied here and not padding so
            // the auto scroll works correctly
            margin-top: 100px;
            padding-bottom: 100px;
          `}
        />
      </Content>
    </>
  );
};

export default Brand;
