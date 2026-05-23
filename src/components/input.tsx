import { FunctionComponent, ReactElement, KeyboardEvent } from 'react';
import { BaseProps } from '../types';
import { ArrowUp } from 'lucide-react';
import TextArea from 'react-textarea-autosize';

/**
 * The `Input` component props
 */
interface Props extends BaseProps {
  readonly value: string;
  readonly status: 'idle' | 'streaming';
  readonly isDisabled?: boolean;
  readonly onChange: (value: string) => void;
  readonly onSend: () => void;
}

/**
 * Used to render the user input which allows
 * the user to enter text to send to the LLM
 *
 * @param props The component props
 * @returns The `Input` component
 */
const Input: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    value,
    status,
    isDisabled,
    onChange,
    onSend,
  } = props;

  /**
   * Used to handle key press events
   * for the text area input
   *
   * @param event The keyboard event
   */
  const _onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    const { key, shiftKey } = event;

    // If the user has pressed the enter key,
    // check if they were also holding shift
    if (key === 'Enter' && shiftKey === false) {
      event.preventDefault();

      // Make sure the value is valid
      // before calling `onSend`
      if (value.trim() !== '') {
        onSend();
      }
    }
  };

  return (
    <div className={`${className ?? ''} flex flex-row items-end gap-x-4 bg-surface-high border border-solid border-outline rounded-xl p-2`}>
      <TextArea
        className="w-full max-h-40 text-content-primary placeholder-content-secondary outline-none caret-white resize-none px-2 py-1.5"
        placeholder="Ask me anything..."
        value={value}
        disabled={isDisabled}
        onKeyDown={_onKeyDown}
        onChange={({ target }) => onChange(target.value)}
      />
      {
        (status === 'idle') && (
          <button
            className={`
              text-white cursor-pointer bg-accent hover:bg-accent-hover rounded-lg p-2

              disabled:cursor-not-allowed
              disabled:text-content-secondary
              disabled:bg-disabled
            `}
            onClick={onSend}
            disabled={value.trim() === ''}
          >
            <ArrowUp size={20} />
          </button>
        )
      }
    </div>
  );
};

export default Input;
