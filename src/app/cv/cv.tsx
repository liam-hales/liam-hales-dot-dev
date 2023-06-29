/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { CVContent } from '../../graphql';
import { Box, Button, Text, Title, Link } from '../../components/common';
import {
  Content,
  LifeTimelinePreview,
  SkillsPreview,
  ExperiencePreview,
} from '../../components';

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
 * @param props The component props
 * @returns The `CV` component
 */
const CV: FunctionComponent<Props> = ({ content }): ReactElement<Props> => {
  const {
    skillsText,
    skills,
    lifeTimelineText,
    lifeTimelineEvents,
    experienceText,
    employments,
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
          padding-bottom: 80px;
          column-gap: 10px;
          row-gap: 10px;
        `}
      >
        <Link
          href="/cv/skills"
          passHref={true}
        >
          <Button>
            Skills
          </Button>
        </Link>
        <Link
          href="/cv/life-timeline"
          passHref={true}
        >
          <Button>
            Life Timeline
          </Button>
        </Link>
        <Link
          href="/cv/experience"
          passHref={true}
        >
          <Button>
            Experience
          </Button>
        </Link>
      </Box>
      <Box css={css`
        row-gap: 100px;
      `}
      >
        <SkillsPreview
          text={skillsText}
          skills={skills}
        />
        <LifeTimelinePreview
          text={lifeTimelineText}
          events={lifeTimelineEvents}
        />
        <ExperiencePreview
          text={experienceText}
          employments={employments}
        />
      </Box>
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
