/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useRef } from 'react';
import { css } from '@mui/material';
import { StatusHandler, Content, Header, BrandLogo, BrandTypography } from '..';
import { BoxDirection } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageQuery, useScreen } from '../../hooks';
import { Box, Button } from '../common';

/**
 * Used as the entry point for the brand page.
 * Fetches the page data and renders it's components
 *
 * @returns The `BrandRoute` component
 */
const BrandRoute: FunctionComponent = (): ReactElement => {

  const brandLogoRef = useRef<HTMLDivElement>(null);
  const brandTypographyRef = useRef<HTMLDivElement>(null);

  const { scrollTo } = useScreen();
  const { status } = usePageQuery({
    slug: PageSlug.BRAND,
  });

  return (
    <StatusHandler status={status}>
      <Header title="Personal Brand">
        <Box
          direction={BoxDirection.ROW}
          css={css`
            column-gap: 12px;
          `}
        >
          <Button onClick={() => scrollTo(brandLogoRef)}>
            The Logo
          </Button>
          <Button onClick={() => scrollTo(brandTypographyRef)}>
            Typography
          </Button>
          <Button onClick={() => {}}>
            Colour Palette
          </Button>
        </Box>
      </Header>
      <Content>
        <BrandLogo
          reference={brandLogoRef}
          css={css`
            // Margin is applied here and not padding so
            // the auto scroll works correctly
            margin-top: 50px;
          `}
        />
        <BrandTypography
          reference={brandTypographyRef}
          css={css`
            // Margin is applied here and not padding so
            // the auto scroll works correctly
            margin-top: 80px;
          `}
        />
      </Content>
    </StatusHandler>
  );
};

export default BrandRoute;
