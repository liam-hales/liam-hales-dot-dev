/* eslint-disable @typescript-eslint/naming-convention */

import { FunctionComponent, ReactElement } from 'react';
import { BaseProps, MessagePart } from '../../types';
import { getStaticToolName } from 'ai';
import { Loader } from '../index';
import { LoaderStatus } from '../types';

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
              <p
                className="text-content-primary whitespace-pre-wrap py-3"
                key={`assistant-message-text-part-${index}`}
              >
                {text}
              </p>
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
