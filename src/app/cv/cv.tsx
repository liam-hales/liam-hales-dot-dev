/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../../types';
import { CVContent, GlobalContent } from '../../graphql';
import { Box, Title, Info, Button, Link } from '../../components/common';
import { Content, Experience, CoreSkills } from '../../components';
import { ColourPalette } from '../../enums';

/**
 * The `CV` component props
 */
interface Props extends BaseProps {
  readonly globalContent: GlobalContent;
  readonly content: CVContent;
}

/**
 * Used as the entry point for the CV page. Renders the
 * CV page components using the given `content` prop
 *
 * @param props The component props
 * @returns The `CV` component
 */
const CV: FunctionComponent<Props> = ({ globalContent, content }): ReactElement<Props> => {
  const { githubUrl, terminalAppUrl } = globalContent;
  const {
    skills,
    timelineEvents,
    disclaimerText,
  } = content;

  return (
    <Content
      alignment="flex-start"
      css={css`
        max-width: 1100px;
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
      <Info css={css`
        width: 600px;
        margin-top: 40px;
      `}
      >
        {disclaimerText}
      </Info>
      <Box
        direction="row"
        css={css`
          column-gap: 24px;
        `}
      >
        <Link
          href={githubUrl}
          target="_blank"
          passHref={true}
          aria-label="GitHub"
          css={css`
            margin-top: 40px;
          `}
        >
          <Button
            size="large"
            iconId="github"
            css={css`
              background-color: ${ColourPalette.GREY_900};
              outline: solid;
              outline-width: 0.6px;
              outline-color: ${ColourPalette.GREY_600};
            `}
          >
            View my code on GitHub
          </Button>
        </Link>
        <Link
          href={terminalAppUrl}
          target="_blank"
          passHref={true}
          aria-label="Terminal"
          css={css`
            margin-top: 40px;
          `}
        >
          <Button
            size="large"
            iconId="terminal"
            css={css`
              background-color: ${ColourPalette.GREY_900};
              outline: solid;
              outline-width: 0.6px;
              outline-color: ${ColourPalette.GREY_600};
            `}
          >
            View my Terminal app
          </Button>
        </Link>
      </Box>
      <Box
        direction="row"
        alignment="flex-start"
        css={css`
          column-gap: 120px;
          padding-top: 100px;
        `}
      >
        <Experience events={timelineEvents} />
        <CoreSkills
          skills={skills}
          css={css`
            width: 260px;
            flex-shrink: 0;
          `}
        />
      </Box>
    </Content>
  );
};

export default CV;
