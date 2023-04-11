/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { m as motion, useScroll, useTransform } from 'framer-motion';
import { BaseProps, DeviceType } from '../types';
import { HomeContent } from '../graphql';
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
  readonly deviceType: DeviceType;
  readonly content: HomeContent;
}

/**
 * Used as the entry point for the home page. Renders the
 * home page components using the given content props
 *
 * @param props The component props
 * @returns The `Home` component
 */
const Home: FunctionComponent<Props> = ({ deviceType, content }): ReactElement<Props> => {

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const {
    headerForegroundImage,
    headerBackgroundImage,
    shayanRastegarUrl,
    me,
    aboutMeText,
    careerStartDate,
    frontendText,
    backendText,
    designText,
    proStatementText,
    stillInterestedText,
  } = content;

  return (
    <>
      <motion.div style={{
        y: headerY,
      }}
      >
        <HomeHeader
          me={me}
          foregroundImage={headerForegroundImage}
          backgroundImage={headerBackgroundImage}
          shayanRastegarUrl={shayanRastegarUrl}
        />
      </motion.div>
      <Content>
        <AboutMe
          deviceType={deviceType}
          text={aboutMeText}
          me={me}
          careerStartDate={careerStartDate}
          css={css`
            padding-top: 60px;
          `}
        />
        <SkillAreas
          deviceType={deviceType}
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
          me={me}
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
