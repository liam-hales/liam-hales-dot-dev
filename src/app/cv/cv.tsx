/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { CVContent } from '../../graphql';
import { Box, Text, Title, Icon } from '../../components/common';
import { Content, TimelinePreview, SkillsPreview } from '../../components';
import Card from '../../components/common/card';

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
    timelineText,
    timelineEvents,
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
      <Card
        direction="row"
        css={css`
          padding-top: 14px;
          padding-bottom: 14px;
          padding-left: 22px;
          padding-right: 22px;
          margin-top: 40px;
        `}
      >
        <Icon
          id="info"
          css={css`
            margin-right: 16px;
            font-size: 30px;
            flex-shrink: 0;
          `}
        />
        <Text
          colour={ColourPalette.GREY_400}
          css={css`
            font-size: 12px;
          `}
        >
          {disclaimerText}
        </Text>
      </Card>
      <Box css={css`
        padding-top: 100px;
        row-gap: 100px;
      `}
      >
        <SkillsPreview
          text={skillsText}
          skills={skills}
        />
        <TimelinePreview
          text={timelineText}
          events={timelineEvents}
        />
      </Box>
    </Content>
  );
};

export default CV;
