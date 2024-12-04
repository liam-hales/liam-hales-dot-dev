/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../../types';
import { CVContent, GlobalContent } from '../../graphql';
import { Box, Title, Info, Button, Link } from '../../components/common';
import { Content, Experience, CoreSkills } from '../../components';
import { ColourPalette } from '../../enums';
import { useScreen } from '../../hooks';

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

  const { screenSize } = useScreen();
  const { githubUrl, terminalAppUrl } = globalContent;
  const {
    coreSkills,
    experienceEvents,
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
        max-width: 600px;
        margin-top: 40px;
      `}
      >
        {disclaimerText}
      </Info>
      <Box
        direction={(screenSize === 'small') ? 'column' : 'row'}
        alignment="flex-start"
        css={css`
          margin-top: 40px;
          column-gap: 18px;
          row-gap: 18px;
        `}
      >
        <Link
          href={githubUrl}
          target="_blank"
          passHref={true}
          aria-label="GitHub"
        >
          <Button
            size="large"
            iconId="github"
            css={css`
              background-color: ${ColourPalette.GREY_900};
              outline: solid;
              outline-width: 1px;
              outline-color: ${ColourPalette.GREY_700};
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
        >
          <Button
            size="large"
            iconId="terminal"
            css={css`
              background-color: ${ColourPalette.GREY_900};
              outline: solid;
              outline-width: 1px;
              outline-color: ${ColourPalette.GREY_700};
            `}
          >
            Terminal App
          </Button>
        </Link>
      </Box>
      <Box
        direction={(screenSize === 'small') ? 'column' : 'row'}
        alignment="flex-start"
        css={css`
          column-gap: 100px;
          row-gap: 100px;
          padding-top: 100px;
          flex-direction: ${(screenSize === 'small') ? 'column-reverse' : 'unset'};
        `}
      >
        <Experience events={experienceEvents} />
        <CoreSkills
          skills={coreSkills}
          css={css`
            width: ${(screenSize === 'small') ? '100%' : '260px'};
            flex-shrink: 0;
          `}
        />
      </Box>
    </Content>
  );
};

export default CV;
