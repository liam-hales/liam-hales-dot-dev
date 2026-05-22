import { FunctionComponent, ReactElement } from 'react';
import { Logo } from './';
import { suggestions } from '../constants';
import { CircleSmall } from 'lucide-react';
import { BaseProps } from '../types';

/**
 * The `Welcome` component props
 */
interface Props extends BaseProps {
  readonly onSuggestion: (value: string) => void;
}

/**
 * Used to render the welcome UI which is
 * rendered when there are no messages
 *
 * @param props The component props
 * @returns The `Welcome` component
 */
const Welcome: FunctionComponent<Props> = ({ onSuggestion }): ReactElement<Props> => {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <Logo className="w-12 fill-accent" />
      <div className="flex flex-col items-center">
        <p className="text-content-primary text-[40px]">
          Have a chat with Liam.
        </p>
        <div className="flex flex-col items-center">
          <p className="text-content-secondary">
            Senior Software Engineer from Manchester.
          </p>
          <p className="text-content-secondary">
            Ask me anything or use one of the suggestions below.
          </p>
        </div>
      </div>
      <div className="w-130 grid grid-cols-2 gap-3">
        {
          suggestions.map((item, index) => {
            return (
              <button
                className="flex flex-row items-center gap-x-2 border border-solid border-outline bg-surface-mid rounded-xl cursor-pointer px-4 py-3 hover:bg-surface-low"
                key={`suggestion-${index}`}
                onClick={() => onSuggestion(item)}
              >
                <CircleSmall
                  className="text-content-secondary"
                  size={12}
                />
                <span className="text-sm text-content-primary pt-1">
                  {item}
                </span>
              </button>
            );
          })
        }
      </div>
    </div>
  );
};

export default Welcome;
