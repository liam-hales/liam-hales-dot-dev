import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { TextUIPart } from 'ai';

/**
 * The `AssistantMessage` component props
 */
interface Props extends BaseProps {
  readonly parts: TextUIPart[];
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
    <div className={`${className ?? ''} flex flex-col items-start`}>
      {
        parts.map((part, index) => {
          const { text } = part;
          return (
            <p
              className="text-content-primary whitespace-pre-wrap"
              key={`assistant-message-text-part-${index}`}
            >
              {text}
            </p>
          );
        })
      }
    </div>
  );
};

export default AssistantMessage;
