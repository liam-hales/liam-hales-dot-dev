/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useState } from 'react';
import { ClickAwayListener, css } from '@mui/material';
import { motion, Transition } from 'framer-motion';
import { BoxAlignment, BoxJustify, ColourPalette, LogoSection, ScreenSize } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent, useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Text, Title } from '../common';
import { Logo } from '..';

/**
 * The `BrandLogo` component props
 */
type Props = BaseProps<HTMLDivElement>;

/**
 * Renders the brand logo section for the brand page which
 * is rendered within the `BrandRoute` component
 *
 * @param props The component props
 * @returns The `BrandLogo` component
 */
const BrandLogo: FunctionComponent<Props> = ({ reference, className }): ReactElement<Props> => {

  const [activeLogoSection, setActiveLogoSection] = useState<LogoSection | undefined>();

  const { screenSize } = useScreen();
  const { logoText, logoLetterLText, logoReverseLetterLText, logoBarText } = usePageContent({
    slug: PageSlug.BRAND,
  });

  /**
   * The animation transition options
   * for the `Text` components
   */
  const textTransition: Transition = {
    y: {
      type: 'spring',
      stiffness: 116,
      damping: 14,
    },
  };

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
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
          padding-bottom: 50px;
        `}
      >
        {logoText}
      </Text>
      <Box css={css`
        width: 100%;
        padding-top: 40px;
        padding-bottom: 40px;
        border-style: solid;
        border-width: 2px;
        border-radius: 18px;
        border-color: ${ColourPalette.GREY_800};
      `}
      >
        <ClickAwayListener onClickAway={() => setActiveLogoSection(undefined)}>
          {
            /**
             * This `div` element is here in order for the
             * `ClickAwayListener` to function correctly
             */
          }
          <div>
            <Logo
              isInteractive={true}
              activeSection={activeLogoSection}
              onChange={(section) => setActiveLogoSection(section)}
              css={css`
                width: 170px;
                align-self: center;
              `}
            />
          </div>
        </ClickAwayListener>
        <Box
          justify={BoxJustify.CENTER}
          css={css`
            position: relative;
            width: 100%;
            height: ${screenSize === ScreenSize.SMALL ? 110 : 88}px;
            max-width: ${screenSize === ScreenSize.SMALL ? 260 : 300}px;
            padding-top: 40px;
            text-align: center;
          `}
        >
          <motion.div
            animate={{
              y: (activeLogoSection == null) ? 0 : 50,
              opacity: (activeLogoSection == null) ? 1 : 0,
            }}
            transition={textTransition}
            css={css`
              width: 100%;
              position: absolute;
            `}
          >
            <Text
              colour={ColourPalette.GREY_400}
              css={css`
                font-size: 16px;
              `}
            >
              Select or hover over a section of the logo to inspect it&apos;s purpose.
            </Text>
          </motion.div>
          <motion.div
            animate={{
              y: (activeLogoSection === LogoSection.LETTER_L) ? 0 : 50,
              opacity: (activeLogoSection === LogoSection.LETTER_L) ? 1 : 0,
            }}
            transition={textTransition}
            css={css`
              width: 100%;
              position: absolute;
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
            transition={textTransition}
            css={css`
              width: 100%;
              position: absolute;
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
            transition={textTransition}
            css={css`
              width: 100%;
              position: absolute;
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
    </Box>
  );
};

export default BrandLogo;
