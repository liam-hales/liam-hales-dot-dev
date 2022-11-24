/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, ColourPalette, LogoSection } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Text, Title } from '../common';
import { Logo } from '..';

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
      <Text
        colour={ColourPalette.LIGHT_GREY}
        css={css`
          padding-top: 16px;
          padding-bottom: 50px;
        `}
      >
        {logoText}
      </Text>
      <Box css={css`
        width: 100%;
      `}
      >
        <Logo
          interactive={true}
          activeSection={activeLogoSection}
          onChange={(section) => setActiveLogoSection(section)}
          css={css`
            width: 180px;
          `}
        />
        {
          (activeLogoSection == null) && (
            <Text
              colour={ColourPalette.LIGHT_GREY}
              css={css`
                max-width: 340px;
                padding-top: 40px;
                font-size: 16px;
                text-align: center;
              `}
            >
              Select or hover over a section of the logo to inspect its purpose.
            </Text>
          )
        }
        {
          (activeLogoSection === LogoSection.LETTER_L) && (
            <Text
              bold={true}
              css={css`
                max-width: 340px;
                padding-top: 40px;
                font-size: 16px;
                text-align: center;
              `}
            >
              {logoLetterLText}
            </Text>
          )
        }
        {
          (activeLogoSection === LogoSection.REVERSE_LETTER_L) && (
            <Text
              bold={true}
              css={css`
                max-width: 340px;
                padding-top: 40px;
                font-size: 16px;
                text-align: center;
              `}
            >
              {logoReverseLetterLText}
            </Text>
          )
        }
        {
          (activeLogoSection === LogoSection.BAR) && (
            <Text
              bold={true}
              css={css`
                max-width: 340px;
                padding-top: 40px;
                font-size: 16px;
                text-align: center;
              `}
            >
              {logoBarText}
            </Text>
          )
        }
      </Box>
    </Box>
  );
};

export default BrandLogo;
