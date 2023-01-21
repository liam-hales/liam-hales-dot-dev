/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { ClickAwayListener, css } from '@mui/material';
import { Transition } from 'framer-motion';
import { BoxAlignment, BoxJustify, ColourPalette, LogoSection, ScreenSize } from '../../enums';
import { useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Text, Title } from '../common';
import { Logo } from '..';
import { withRef } from '../../helpers';

/**
 * The `BrandLogo` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly text: string;
  readonly letterLText: string;
  readonly reverseLetterLText: string;
  readonly barText: string;
}

/**
 * Renders the brand logo section for the brand page which
 * is rendered within the `BrandRoute` component
 *
 * @param props The component props
 * @returns The `BrandLogo` component
 */
const BrandLogo: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    internalRef,
    className,
    text,
    letterLText,
    reverseLetterLText,
    barText,
  } = props;

  const { screenSize } = useScreen();
  const [activeLogoSection, setActiveLogoSection] = useState<LogoSection | undefined>();

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
      ref={internalRef}
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
        {text}
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
          <Logo
            isInteractive={true}
            activeSection={activeLogoSection}
            onChange={(section) => setActiveLogoSection(section)}
            css={css`
              width: 170px;
              align-self: center;
            `}
          />
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
          <Text
            colour={ColourPalette.GREY_400}
            animate={{
              y: (activeLogoSection == null) ? 0 : 50,
              opacity: (activeLogoSection == null) ? 1 : 0,
            }}
            transition={textTransition}
            css={css`
              position: absolute;
              width: 100%;
              font-size: 16px;
            `}
          >
            Select or hover over a section of the logo to inspect it&apos;s purpose.
          </Text>
          <Text
            isBold={true}
            animate={{
              y: (activeLogoSection === LogoSection.LETTER_L) ? 0 : 50,
              opacity: (activeLogoSection === LogoSection.LETTER_L) ? 1 : 0,
            }}
            transition={textTransition}
            css={css`
              position: absolute;
              width: 100%;
              font-size: 16px;
            `}
          >
            {letterLText}
          </Text>
          <Text
            isBold={true}
            animate={{
              y: (activeLogoSection === LogoSection.REVERSE_LETTER_L) ? 0 : 50,
              opacity: (activeLogoSection === LogoSection.REVERSE_LETTER_L) ? 1 : 0,
            }}
            transition={textTransition}
            css={css`
              position: absolute;
              width: 100%;
              font-size: 16px;
            `}
          >
            {reverseLetterLText}
          </Text>
          <Text
            isBold={true}
            animate={{
              y: (activeLogoSection === LogoSection.BAR) ? 0 : 50,
              opacity: (activeLogoSection === LogoSection.BAR) ? 1 : 0,
            }}
            transition={textTransition}
            css={css`
              position: absolute;
              width: 100%;
              font-size: 16px;
            `}
          >
            {barText}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default withRef(BrandLogo);
