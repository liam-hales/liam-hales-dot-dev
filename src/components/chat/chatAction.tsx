import { FunctionComponent, ReactElement } from 'react';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import { BaseProps } from '../../types';

/**
 * The `ChatAction` component props
 */
interface Props extends BaseProps {
  readonly text: string;
  readonly icon: IconName;
  readonly onClick: () => void;
}

/**
 * Used to render a button containing an icon and text,
 * that when clicked performs a specific chat action
 *
 * @param props The component props
 * @returns The `ChatAction` component
 */
const ChatAction: FunctionComponent<Props> = ({ className, text, icon, onClick }): ReactElement<Props> => {
  return (
    <button
      className={`${className ?? ''} flex flex-row items-center gap-x-1.5 bg-surface-mid border border-solid border-outline hover:bg-hover rounded-full cursor-pointer px-3`}
      onClick={onClick}
    >
      <DynamicIcon
        className="pb-px"
        name={icon}
        size={10}
      />
      <p className="text-[11px] text-content-primary pt-0.75">
        {text}
      </p>
    </button>
  );
};

export default ChatAction;
