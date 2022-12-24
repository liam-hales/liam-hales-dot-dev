/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unstable-nested-components */

import { FunctionComponent, ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { css } from '@mui/material';
import { BaseProps } from '../../types';
import { BoxAlignment, CodeLanguage, ColourPalette } from '../../enums';
import { Box, Text, CodeSnippet } from '.';

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
      alignment={BoxAlignment.START}
    >
      <ReactMarkdown
        components={{
          h1: ({ children }) => {
            return (
              <Text
                isBold={true}
                css={css`
                  font-size: 38px;
                  line-height: 122%;
                `}
              >
                {children}
              </Text>
            );
          },
          h2: ({ children }) => {
            return (
              <Text
                isBold={true}
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
            // Get the code langauge from the class name and see if it matches
            // one of the code langauges from the `CodeLanguage` enum
            const language = Object
              .values(CodeLanguage)
              .find((value) => value === className?.replace('language-', ''));

            return (
              <CodeSnippet
                language={language}
                css={css`
                  width: 100%;
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
