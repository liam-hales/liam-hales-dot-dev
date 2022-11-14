import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, ColourPalette } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box, Title } from '../../common';
import { StyledDescription, StyledText } from './brandTypography.styled';

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
      <StyledDescription colour={ColourPalette.LIGHT_GREY}>
        {typographyText}
      </StyledDescription>
      <StyledText>
        Urbanist Regular 400
      </StyledText>
      <StyledText italic={true}>
        Urbanist Regular 400 Italic
      </StyledText>
      <StyledText bold={true}>
        Urbanist ExtraBold 800
      </StyledText>
      <StyledText
        bold={true}
        italic={true}
      >
        Urbanist ExtraBold 800 Italic
      </StyledText>
    </Box>
  );
};

export default BrandTypography;
