import { FunctionComponent, ReactElement, memo } from 'react';
import { BaseProps } from '../../types';
import ReactMarkdown from 'react-markdown';

/**
 * The `MarkdownBlock` component props
 */
interface Props extends BaseProps {
  readonly children: string;
}

/**
 * Used to render a given Markdown string
 * using `react-markdown` under the hood.
 *
 * Uses `memo` for performance optimisation
 * and rendering efficiency.
 *
 * @param props The component props
 * @returns The `MarkdownBlock` component
 */
const MarkdownBlock: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {
  return (
    <ReactMarkdown components={{
      h1: ({ children }) => {
        return (
          <h1 className="font-bold text-content-primary text-3xl">
            {children}
          </h1>
        );
      },
      h2: ({ children }) => {
        return (
          <h2 className="font-bold text-content-primary text-2xl">
            {children}
          </h2>
        );
      },
      h3: ({ children }) => {
        return (
          <h3 className="font-bold text-content-primary text-xl">
            {children}
          </h3>
        );
      },
      h4: ({ children }) => {
        return (
          <h4 className="font-bold text-content-primary text-lg">
            {children}
          </h4>
        );
      },
      p: ({ children }) => {
        return (
          <p className="text-content-primary">
            {children}
          </p>
        );
      },
      strong: ({ children }) => {
        return (
          <strong className="font-bold">
            {children}
          </strong>
        );
      },
      em: ({ children }) => {
        return (
          <em className="italic">
            {children}
          </em>
        );
      },
      ol: ({ children }) => {
        return (
          <div className="w-full">
            <ol className="list-decimal flex flex-col pl-6">
              {children}
            </ol>
          </div>
        );
      },
      ul: ({ children }) => {
        return (
          <div className="w-full">
            <ul className="list-disc flex flex-col pl-6">
              {children}
            </ul>
          </div>
        );
      },
      li: ({ children }) => {
        return (
          <li className="text-content-primary pl-1">
            {children}
          </li>
        );
      },
      blockquote: ({ children }) => {
        return (
          <blockquote className="text-content-primary italic bg-surface-mid border-l-4 border-solid border-accent px-4 py-2 rounded-r-sm">
            {children}
          </blockquote>
        );
      },
      a: ({ href, children }) => {
        return (
          <a
            className="font-bold text-accent underline underline-offset-2"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {
              children
            }
          </a>
        );
      },
    }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default memo(MarkdownBlock);
