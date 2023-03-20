/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { PrismLight } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import { BaseProps, CodeLanguage } from '../../../types';

// Register the supported languages
// for `react-syntax-highlighter`
PrismLight.registerLanguage('ts', ts);
PrismLight.registerLanguage('tsx', tsx);

/**
 * The `CodeSnippet` component props
 */
interface Props extends BaseProps {
  readonly language?: CodeLanguage;
  readonly children: string;
}

/**
 * Used to render a code snippet with syntax highlighting
 * using `react-syntax-highlighter`
 *
 * @param props The component props
 * @returns The `CodeSnippet` component
 */
const CodeSnippet: FunctionComponent<Props> = ({ className, language, children }): ReactElement<Props> => {
  return (
    <PrismLight
      className={className}
      style={nord}
      language={language}
      css={css`
        padding: 18px !important;
        border-radius: 10px !important;
        font-size: 14px;
      `}
    >
      {children}
    </PrismLight>
  );
};

export default CodeSnippet;
