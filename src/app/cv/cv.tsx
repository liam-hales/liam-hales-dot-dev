/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useRef } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { CVContent } from '../../graphql';
import { Box, Button, Divider, Text, Title } from '../../components/common';
import {
  Content,
  CurrentPosition,
  LifeTimelinePreview,
  SkillsPreview,
  Experience,
} from '../../components';
import { useScreen } from '../../hooks';

/**
 * The `CV` component props
 */
interface Props extends BaseProps {
  readonly content: CVContent;
}

/**
 * Used as the entry point for the CV page. Renders the
 * CV page components using the given `content` prop
 *
 * @returns The `CV` component
 */
const CV: FunctionComponent<Props> = ({ content }): ReactElement<Props> => {

  const { scrollTo } = useScreen();

  const currentPositionRef = useRef<HTMLDivElement>(null);
  const skillsPreviewRef = useRef<HTMLDivElement>(null);
  const lifeTimelinePreviewRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const {
    currentPositionText,
    careerStartDate,
    skillsText,
    skills,
    lifeTimelineText,
    lifeTimelineEvents,
    experienceText,
    disclaimerText,
  } = content;

  return (
    <Content
      alignment="flex-start"
      css={css`
        padding-top: 42px;
        padding-bottom: 100px;
      `}
    >
      <Title
        size="large"
        css={css`
          max-width: 400px;
        `}
      >
        Curriculum Vitae
      </Title>
      <Box
        direction="row"
        wrap={true}
        css={css`
          padding-top: 40px;
          padding-bottom: 50px;
          column-gap: 10px;
          row-gap: 10px;
        `}
      >
        <Button onClick={() => scrollTo(currentPositionRef)}>
          Current Position
        </Button>
        <Button onClick={() => scrollTo(skillsPreviewRef)}>
          Skills
        </Button>
        <Button onClick={() => scrollTo(lifeTimelinePreviewRef)}>
          Life Timeline
        </Button>
        <Button onClick={() => scrollTo(experienceRef)}>
          Experience
        </Button>
      </Box>
      <Divider />
      <CurrentPosition
        ref={currentPositionRef}
        text={currentPositionText}
        careerStartDate={careerStartDate}
        css={css`
          // Margin is applied here and not padding so
          // the auto scroll works correctly
          margin-top: 50px;
        `}
      />
      <SkillsPreview
        ref={skillsPreviewRef}
        text={skillsText}
        skills={skills}
        css={css`
          // Margin is applied here and not padding so
          // the auto scroll works correctly
          margin-top: 70px;
        `}
      />
      <LifeTimelinePreview
        ref={lifeTimelinePreviewRef}
        text={lifeTimelineText}
        events={lifeTimelineEvents}
        css={css`
          // Margin is applied here and not padding so
          // the auto scroll works correctly
          margin-top: 80px;
        `}
      />
      <Experience
        ref={experienceRef}
        text={experienceText}
        css={css`
          // Margin is applied here and not padding so
          // the auto scroll works correctly
          margin-top: 80px;
        `}
      />
      <Text
        colour={ColourPalette.GREY_600}
        css={css`
          max-width: 500px;
          padding-top: 80px;
          font-size: 12px;
          text-align: center;
          align-self: center;
        `}
      >
        {disclaimerText}
      </Text>
    </Content>
  );
};

export default CV;
