/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { BaseProps } from '../../types';
import { BoxAlignment, BoxJustify, TextElement } from '../../enums';
import { Image, Typewriter, Text, Box } from '../common';
import { Content } from '..';

/**
 * The `HomeHeader` component props
 */
type Props = BaseProps;

/**
 * Renders the header used for the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `HomeHeader` component
 */
const HomeHeader: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { scrollYProgress } = useScroll();
  const { headerForegroundImage, headerBackgroundImage } = usePageContent({
    slug: PageSlug.HOME,
  });

  const { shayanRastegarUrl } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '46%']);

  return (
    <Content
      className={className}
      css={css`
        position: relative;
        max-width: 910px;
        height: 500px;
        padding: 0px;
      `}
    >
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 16px;
          z-index: -3;
        `}
      >
        <motion.div
          style={{
            y: backgroundY,
          }}
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          <Image
            path={headerBackgroundImage.url}
            alt="Liam Hales - Header"
            css={css`
              width: 100%;
              height: 100%;
              border-radius: 16px;
            `}
          />
        </motion.div>
      </div>
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 16px;
          z-index: -1;
        `}
      >
        <motion.div
          style={{
            y: foregroundY,
          }}
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          <Image
            path={headerForegroundImage.url}
            alt="Liam Hales - Header"
            css={css`
              width: 100%;
              height: 100%;
            `}
          />
        </motion.div>
      </div>
      <Content
        alignment={BoxAlignment.START}
        justify={BoxJustify.END}
        css={css`
          height: 100%;
          padding-bottom: 20px;
        `}
      >
        <Text
          isBold={true}
          element={TextElement.H1}
          css={css`
            font-size: clamp(70px, 17.4vw, 140px);
            line-height: 92%;
            z-index: -2;
          `}
        >
          Liam Hales.
        </Text>
        <Box
          alignment={BoxAlignment.START}
          css={css`
            padding-top: 28px;
            padding-bottom: 68px;
            padding-left: 6px;
          `}
        >
          <Text
            isBold={true}
            element={TextElement.H2}
            css={css`
              height: 140px;
              font-size: clamp(28px, 7vw, 42px);
              line-height: 110%;
            `}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Software dev')
                  .pauseFor(100)
                  .deleteChars(4)
                  .typeString('<br/>Engineer from<br/>manny')
                  .pauseFor(200)
                  .deleteChars(5)
                  .typeString('Manchester.')
                  .pauseFor(10000)
                  .typeString('<br/>¯\\_(ツ)_/¯')
                  .pauseFor(1000)
                  .deleteChars(10)
                  .typeString('.')
                  .start();
              }}
            />
          </Text>
        </Box>
        <Text css={css`
          font-size: 11px;
          align-self: flex-end;
        `}
        >
          Captured by
          {' '}
          <Text
            isBold={true}
            onClick={() => window.open(shayanRastegarUrl, '_blank')}
            css={css`
              font-size: 11px;
            `}
          >
            Shayan Rastegar
          </Text>
        </Text>
      </Content>
    </Content>
  );
};

export default HomeHeader;
