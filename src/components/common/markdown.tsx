/* eslint-disable react/no-unstable-nested-components */

/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { codeLanguages } from '../../constants';
import { Box, Text, Title, CodeSnippet, CodeInline } from '.';

/**
 * The `Markdown` component props
 */
interface Props extends BaseProps {
  readonly children: string;
}

/**
 * Used to render a Markdown `string` using
 * `react-markdown` and common app components
 *
 * @param props The component props
 * @returns The `Markdown` component
 */
const Markdown: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <Box
      className={className}
      alignment="flex-start"
    >
      <ReactMarkdown components={{
        h1: ({ children }) => {
          return (
            <Title>
              {`${children}`}
            </Title>
          );
        },
        h2: ({ children }) => {
          return (
            <Text
              isBold={true}
              element="h2"
              css={css`
                font-size: 28px;
                line-height: 122%;
              `}
            >
              {children}
            </Text>
          );
        },
        p: ({ children }) => {
          return (
            <Text
              colour={ColourPalette.GREY_400}
              element="span"
              css={css`
                padding-top: 16px;
                padding-bottom: 16px;
              `}
            >
              {children}
            </Text>
          );
        },
        strong: ({ children }) => {
          return (
            <Text isBold={true}>
              {children}
            </Text>
          );
        },
        em: ({ children }) => {
          return (
            <Text isItalic={true}>
              {children}
            </Text>
          );
        },
        code: ({ className, children }) => {

          // Get the code langauge from the class name and
          // check for a match in the code langauges array
          const language = codeLanguages
            .find((value) => value === className?.replace('language-', ''));

          // If there is no language then assume the code is inline
          // and not a snippet, render the `CodeInline` component
          if (language == null) {
            return (
              <CodeInline>
                {`${children}`}
              </CodeInline>
            );
          }

          return (
            <CodeSnippet
              language={language}
              css={css`
                width: 100%;
                padding-top: 10px;
                padding-bottom: 10px;
              `}
            >
              {`${children}`}
            </CodeSnippet>
          );
        },
        // Renders the children within a fragment in
        // order to remove the `<pre>` tags
        pre: ({ children }) => {
          return (
            <>
              {children}
            </>
          );
        },
      }}
      >
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default Markdown;
