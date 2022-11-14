import { FunctionComponent, ReactElement, useRef } from 'react';
import { StatusHandler, Content, Header } from '../..';
import { BoxDirection } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageQuery, useScreen } from '../../../hooks';
import { Button } from '../../common';
import { StyledHeaderButtons, StyledBrandLogo, StyledBrandTypography } from './brandRoute.styled';

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
        <StyledHeaderButtons direction={BoxDirection.ROW}>
          <Button onClick={() => scrollTo(brandLogoRef)}>
            The Logo
          </Button>
          <Button onClick={() => scrollTo(brandTypographyRef)}>
            Typography
          </Button>
          <Button onClick={() => {}}>
            Colour Palette
          </Button>
        </StyledHeaderButtons>
      </Header>
      <Content>
        <StyledBrandLogo reference={brandLogoRef} />
        <StyledBrandTypography reference={brandTypographyRef} />
      </Content>
    </StatusHandler>
  );
};

export default BrandRoute;
