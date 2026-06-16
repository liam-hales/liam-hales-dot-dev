import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { TriangleAlert } from 'lucide-react';

/**
 * The `ChatError` component props
 */
interface Props extends BaseProps {
  readonly children: string;
}

/**
 * Used to render an error dialogue for
 * when the chat is in an error status
 *
 * @param props The component props
 * @returns The `ChatError` component
 */
const ChatError: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <div className={`${className ?? ''} flex flex-row items-center gap-x-4 bg-surface-error border border-solid border-outline-error rounded-xl px-4 py-2`}>
      <TriangleAlert
        className="text-content-error"
        size={18}
      />
      <p className="text-content-error pt-0.5">
        {`An error occurred during the request — `}
        <em className="italic">
          {children}
        </em>
      </p>
    </div>
  );
};

export default ChatError;
