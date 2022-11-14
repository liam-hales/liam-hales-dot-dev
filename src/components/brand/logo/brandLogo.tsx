import { FunctionComponent, ReactElement, useState } from 'react';
import { BoxAlignment, ColourPalette, LogoSection } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box, Title } from '../../common';
import {
  StyledDescription,
  StyledInteractiveLogoBox,
  StyledLogo,
  StyledInspectText,
} from './brandLogo.styled';

/**
 * The `BrandLogo` component props
 */
type Props = BaseProps;

/**
 * Renders the brand logo section for the brand page which
 * is rendered within the `BrandRoute` component
 *
 * @param props The component props
 * @returns The `BrandLogo` component
 */
const BrandLogo: FunctionComponent<Props> = ({ reference, className }): ReactElement<Props> => {

  const [activeLogoSection, setActiveLogoSection] = useState<LogoSection | undefined>();

  const { logoText, logoLetterLText, logoReverseLetterLText, logoBarText } = usePageContent({
    slug: PageSlug.BRAND,
  });

  return (
    <Box
      reference={reference}
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        The Logo
      </Title>
      <StyledDescription colour={ColourPalette.LIGHT_GREY}>
        {logoText}
      </StyledDescription>
      <StyledInteractiveLogoBox>
        <StyledLogo
          interactive={true}
          activeSection={activeLogoSection}
          onChange={(section) => setActiveLogoSection(section)}
        />
        {
          (activeLogoSection == null) && (
            <StyledInspectText colour={ColourPalette.LIGHT_GREY}>
              Select or hover over a section of the logo to inspect its purpose.
            </StyledInspectText>
          )
        }
        {
          (activeLogoSection === LogoSection.LETTER_L) && (
            <StyledInspectText bold={true}>
              {logoLetterLText}
            </StyledInspectText>
          )
        }
        {
          (activeLogoSection === LogoSection.REVERSE_LETTER_L) && (
            <StyledInspectText bold={true}>
              {logoReverseLetterLText}
            </StyledInspectText>
          )
        }
        {
          (activeLogoSection === LogoSection.BAR) && (
            <StyledInspectText bold={true}>
              {logoBarText}
            </StyledInspectText>
          )
        }
      </StyledInteractiveLogoBox>
    </Box>
  );
};

export default BrandLogo;
