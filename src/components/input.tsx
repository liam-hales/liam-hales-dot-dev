import { FunctionComponent, ReactElement, KeyboardEvent } from 'react';
import { BaseProps } from '../types';
import { ArrowUp, CircleX, Square } from 'lucide-react';
import TextArea from 'react-textarea-autosize';

/**
 * The `Input` component props
 */
interface Props extends BaseProps {
  readonly value: string;
  readonly status: 'send' | 'abort';
  readonly onChange: (value: string) => void;
  readonly onClear: () => void;
  readonly onSend: () => void;
  readonly onAbort: () => void;
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
    onChange,
    onClear,
    onSend,
    onAbort,
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

      // Make sure the value is valid and the
      // status is `send` before calling `onSend`
      if (status === 'send' && value.trim() !== '') {
        onSend();
      }
    }
  };

  return (
    <div className={`${className ?? ''} flex flex-col items-start gap-y-3 bg-surface-high border border-solid border-outline rounded-xl p-2`}>
      <div className="flex flex-row items-center gap-x-2 p-1">
        <button
          className="flex flex-row items-center gap-x-1.5 bg-surface-mid border border-solid border-outline hover:bg-hover rounded-full cursor-pointer px-3"
          onClick={onClear}
        >
          <CircleX
            className="pb-px"
            size={10}
          />
          <p className="text-[11px] text-content-primary pt-0.75">
            Clear chat
          </p>
        </button>
      </div>
      <div className="w-full flex flex-row items-end gap-x-4">
        <TextArea
          className="w-full max-h-40 text-content-primary placeholder-content-secondary outline-none caret-content-primary resize-none px-2 py-1.5"
          placeholder="Ask me anything..."
          value={value}
          onKeyDown={_onKeyDown}
          onChange={({ target }) => onChange(target.value)}
        />
        {
          (status === 'send') && (
            <button
              className={`
                size-9 flex flex-col items-center justify-center shrink-0 text-white cursor-pointer bg-accent hover:bg-accent-hover rounded-lg p-2

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
        {
          (status === 'abort') && (
            <button
              className="size-9 flex flex-col items-center justify-center shrink-0 text-content-secondary cursor-pointer bg-disabled border border-solid border-outline hover:bg-hover rounded-lg p-2"
              onClick={onAbort}
            >
              <Square
                className="fill-content-secondary"
                size={16}
              />
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Input;
