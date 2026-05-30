/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { BaseProps, MessagePart } from '../../types';
import { getStaticToolName } from 'ai';
import { Loader, Markdown } from '../';
import { LoaderStatus } from '../types';
import { ChevronRight, ChevronDown } from 'lucide-react';

/**
 * The `AssistantMessage` component props
 */
interface Props extends BaseProps {
  readonly parts: MessagePart[];
}

/**
 * Used to render the message parts for
 * a message with an `assistant` role
 *
 * @param props The component props
 * @returns The `AssistantMessage` component
 */
const AssistantMessage: FunctionComponent<Props> = ({ className, parts }): ReactElement<Props> => {
  const [showReasoning, setShowReasoning] = useState<boolean>(false);

  return (
    <div className={`${className ?? ''} flex flex-col items-start gap-y-1`}>
      {
        parts.map((part, index) => {
          const { type } = part;

          // If the part it of type `text`
          // then simply render the text
          if (type === 'text') {
            const { text } = part;
            return (
              <Markdown
                className="text-content-primary py-3"
                key={`assistant-message-text-part-${index}`}
              >
                {text}
              </Markdown>
            );
          }

          // If the part is of type `reasoning` then render the
          // reasoning text streaming in from the right
          if (type === 'reasoning') {
            const { state } = part;
            return (
              <div
                className="max-w-155 flex flex-col items-start gap-y-1"
                key={`assistant-message-reasoning-part-${index}`}
              >
                <button
                  className="flex flex-row items-center gap-x-1 cursor-pointer"
                  onClick={() => setShowReasoning(showReasoning !== true)}
                >
                  <Loader status={
                    (state === 'streaming')
                      ? 'loading'
                      : 'success'
                  }
                  >
                    Reasoning
                  </Loader>
                  <div className="text-content-secondary">
                    {
                      (state === 'streaming' || showReasoning === true)
                        ? <ChevronDown size={14} />
                        : <ChevronRight size={14} />
                    }
                  </div>
                </button>
                {
                  (state === 'streaming' || showReasoning === true) && (
                    <div className="flex flex-col border-l-2 border-solid border-outline py-2 pl-4">
                      <p className="font-mono text-content-secondary text-[11px] whitespace-pre-wrap">
                        {part.text}
                      </p>
                    </div>
                  )
                }
              </div>
            );
          }

          // Any remaining parts are tool parts,
          // use the tool name for the loader text
          const { title, state } = part;

          const name = title ?? getStaticToolName(part);
          const text = `Calling tool — ${name}`;

          // The map between the tool part
          // state and the loader status
          const statusMap: Partial<Record<typeof state, LoaderStatus>> = {
            'output-available': 'success',
            'output-error': 'error',
          };

          return (
            <div
              className="flex flex-row items-center gap-x-2"
              key={`assistant-message-tool-part-${index}`}
            >
              <Loader status={statusMap[state] ?? 'loading'}>
                {text}
              </Loader>
            </div>
          );
        })
      }
    </div>
  );
};

export default AssistantMessage;
