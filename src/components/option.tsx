import { FunctionComponent, ReactElement } from 'react';
import { Toggle } from './';
import { BaseProps } from '../types';

/**
 * The `Option` component props
 */
interface Props extends BaseProps {
  readonly text: string;
  readonly isOn: boolean;
  readonly onChange: (value: boolean) => void;
}

/**
 * Used to render an option which displays the option name
 * alongside the toggle to set the option on/off state
 *
 * @param props The component props
 * @returns The `Option` component
 */
const Option: FunctionComponent<Props> = ({ className, text, isOn, onChange }): ReactElement<Props> => {
  return (
    <div className={`${className ?? ''} flex flex-row items-center gap-x-3 bg-surface-high border border-solid border-outline rounded-full pl-3 p-1.5`}>
      <p className="text-xs text-content-primary pt-0.5">
        {text}
      </p>
      <Toggle
        isOn={isOn}
        onChange={onChange}
      />
    </div>
  );
};

export default Option;
