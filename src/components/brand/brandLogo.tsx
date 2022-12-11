/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { motion } from 'framer-motion';
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
      <Logo
        isInteractive={true}
        activeSection={activeLogoSection}
        onChange={(section) => setActiveLogoSection(section)}
        css={css`
          width: 180px;
          align-self: center;
        `}
      />
      <Box css={css`
        position: relative;
        width: 100%;
        height: 88px;
        padding-top: 40px;
      `}
      >
        <motion.div
          animate={{
            y: (activeLogoSection == null) ? 0 : 50,
            opacity: (activeLogoSection == null) ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 116,
            damping: 14,
          }}
          css={css`
            max-width: 340px;
            position: absolute;
            text-align: center;
          `}
        >
          <Text
            colour={ColourPalette.LIGHT_GREY}
            css={css`
              font-size: 16px;
            `}
          >
            Select or hover over a section of the logo to inspect its purpose.
          </Text>
        </motion.div>
        <motion.div
          animate={{
            y: (activeLogoSection === LogoSection.LETTER_L) ? 0 : 50,
            opacity: (activeLogoSection === LogoSection.LETTER_L) ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 116,
            damping: 14,
          }}
          css={css`
            max-width: 340px;
            position: absolute;
            text-align: center;
          `}
        >
          <Text
            isBold={true}
            css={css`
              font-size: 16px;
            `}
          >
            {logoLetterLText}
          </Text>
        </motion.div>
        <motion.div
          animate={{
            y: (activeLogoSection === LogoSection.REVERSE_LETTER_L) ? 0 : 50,
            opacity: (activeLogoSection === LogoSection.REVERSE_LETTER_L) ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 116,
            damping: 14,
          }}
          css={css`
            max-width: 340px;
            position: absolute;
            text-align: center;
          `}
        >
          <Text
            isBold={true}
            css={css`
              font-size: 16px;
            `}
          >
            {logoReverseLetterLText}
          </Text>
        </motion.div>
        <motion.div
          animate={{
            y: (activeLogoSection === LogoSection.BAR) ? 0 : 50,
            opacity: (activeLogoSection === LogoSection.BAR) ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 116,
            damping: 14,
          }}
          css={css`
            max-width: 340px;
            position: absolute;
            text-align: center;
          `}
        >
          <Text
            isBold={true}
            css={css`
              font-size: 16px;
            `}
          >
            {logoBarText}
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
};

export default BrandLogo;
