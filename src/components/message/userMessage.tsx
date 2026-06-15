import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { TextUIPart } from 'ai';

/**
 * The `UserMessage` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly parts: TextUIPart[];
}

/**
 * Used to render the message parts
 * for a message with a `user` role
 *
 * @param props The component props
 * @returns The `UserMessage` component
 */
const UserMessage: FunctionComponent<Props> = ({ ref, className, parts }): ReactElement<Props> => {
  return (
    <div
      ref={ref}
      className={`${className ?? ''} flex flex-col items-start border border-solid border-outline bg-surface-mid rounded-xl px-4 py-2`}
    >
      {
        parts.map((part, index) => {
          const { text } = part;
          return (
            <p
              className="text-content-primary whitespace-pre-wrap"
              key={`user-message-text-part-${index}`}
            >
              {text}
            </p>
          );
        })
      }
    </div>
  );
};

export default UserMessage;
