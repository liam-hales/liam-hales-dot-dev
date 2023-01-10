/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BaseProps } from '../types';
import { GlobalContent, HomeContent } from '../graphql';
import {
  Content,
  HomeHeader,
  AboutMe,
  SkillAreas,
  ProStatement,
  StillInterested,
} from '../components';

/**
 * The `Home` component props
 */
interface Props extends BaseProps {
  readonly homeContent: HomeContent;
  readonly globalContent: GlobalContent;
}

/**
 * Used as the entry point for the home page. Renders the
 * home page components using the given content props
 *
 * @returns The `Home` component
 */
const Home: FunctionComponent<Props> = ({ homeContent, globalContent }): ReactElement<Props> => {

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const { meImage, shayanRastegarUrl } = globalContent;
  const {
    headerForegroundImage,
    headerBackgroundImage,
    aboutMeText,
    careerStartDate,
    frontendText,
    backendText,
    designText,
    proStatementText,
    stillInterestedText,
  } = homeContent;

  return (
    <>
      <motion.div style={{
        y: headerY,
      }}
      >
        <HomeHeader
          foregroundImage={headerForegroundImage}
          backgroundImage={headerBackgroundImage}
          shayanRastegarUrl={shayanRastegarUrl}
        />
      </motion.div>
      <Content>
        <AboutMe
          text={aboutMeText}
          meImage={meImage}
          careerStartDate={careerStartDate}
          css={css`
            padding-top: 60px;
          `}
        />
        <SkillAreas
          frontendText={frontendText}
          backendText={backendText}
          designText={designText}
          css={css`
            width: 100%;
            padding-top: 48px;
          `}
        />
        <ProStatement
          text={proStatementText}
          css={css`
            padding-top: 60px;
          `}
        />
        <StillInterested
          text={stillInterestedText}
          css={css`
            padding-top: 96px;
            padding-bottom: 100px;
          `}
        />
      </Content>
    </>
  );
};

export default Home;
