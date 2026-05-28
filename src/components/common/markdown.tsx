import { FunctionComponent, ReactElement, useMemo } from 'react';
import { BaseProps } from '../../types';
import { MarkdownBlock } from '../';
import { marked } from 'marked';

/**
 * The `Markdown` component props
 */
interface Props extends BaseProps {
  readonly children: string;
}

/**
 * Used to parse a given Markdown string into blocks and
 * render each one using the `MarkdownBlock` component.
 *
 * Uses `useMemo` to avoid re-lexing the Markdown
 * string on unrelated parent re-renders.
 *
 * @param props The component props
 * @returns The `Markdown` component
 */
const Markdown: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  const blocks = useMemo(() => {
    // Parse the Markdown string into blocks
    // using the `marked` lexer
    return marked
      .lexer(children)
      .map((token) => token.raw);
  }, [children]);

  return (
    <div className={`${className ?? ''} flex flex-col items-start gap-y-4`}>
      {
        blocks.map((block, index) => {
          return (
            <MarkdownBlock key={`markdown-block-${index}`}>
              {block}
            </MarkdownBlock>
          );
        })
      }
    </div>
  );
};

export default Markdown;
