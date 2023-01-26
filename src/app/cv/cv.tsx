/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useRef } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { CVContent } from '../../graphql';
import { Box, Button, Text } from '../../components/common';
import {
  Content,
  CurrentPosition,
  Header,
  LifeTimelinePreview,
  SkillsPreview,
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

  const {
    currentPositionText,
    careerStartDate,
    skillsText,
    skills,
    lifeTimelineText,
    lifeTimelineEvents,
    disclaimerText,
  } = content;

  return (
    <>
      <Header title="Curriculum Vitae">
        <Box
          direction="row"
          css={css`
            column-gap: 12px;
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
        </Box>
      </Header>
      <Content>
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
        <Text
          colour={ColourPalette.GREY_600}
          css={css`
            max-width: 500px;
            padding-top: 65px;
            padding-bottom: 100px;
            font-size: 12px;
            text-align: center;
          `}
        >
          {disclaimerText}
        </Text>
      </Content>
    </>
  );
};

export default CV;
