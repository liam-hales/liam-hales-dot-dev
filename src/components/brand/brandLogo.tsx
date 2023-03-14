/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { ClickAwayListener, css } from '@mui/material';
import { Transition } from 'framer-motion';
import { ColourPalette } from '../../enums';
import { useScreen } from '../../hooks';
import { BaseProps, LogoSection } from '../../types';
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
      alignment="flex-start"
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
        border-color: ${ColourPalette.GREY_900};
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
          justify="center"
          css={css`
            position: relative;
            width: 100%;
            height: ${screenSize === 'small' ? 110 : 88}px;
            max-width: ${screenSize === 'small' ? 260 : 300}px;
            padding-top: 40px;
            text-align: center;
          `}
        >
          <Text
            colour={ColourPalette.GREY_400}
            initial={{
              y: 0,
              opacity: 1,
            }}
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
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: (activeLogoSection === 'letterL') ? 0 : 50,
              opacity: (activeLogoSection === 'letterL') ? 1 : 0,
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
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: (activeLogoSection === 'reverseLetterL') ? 0 : 50,
              opacity: (activeLogoSection === 'reverseLetterL') ? 1 : 0,
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
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: (activeLogoSection === 'bar') ? 0 : 50,
              opacity: (activeLogoSection === 'bar') ? 1 : 0,
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
