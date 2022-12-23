/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unstable-nested-components */

import { FunctionComponent, ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { css } from '@mui/material';
import { BaseProps } from '../../types';
import { BoxAlignment, ColourPalette } from '../../enums';
import { Box, Text } from '.';

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
    <Box alignment={BoxAlignment.START}>
      <ReactMarkdown
        className={className}
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
        }}
      >
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default Markdown;
