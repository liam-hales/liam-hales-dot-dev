import { FunctionComponent, ReactElement } from 'react';
import { Switch } from '@headlessui/react';
import { BaseProps } from '../../types';

/**
 * The `Toggle` component props
 */
interface Props extends BaseProps {
  readonly isOn: boolean;
  readonly onChange: (value: boolean) => void;
}

/**
 * Used to render a toggle/switch
 * that has a simple on/off state
 *
 * @param props The component props
 * @returns The `Toggle` component
 */
const Toggle: FunctionComponent<Props> = ({ className, isOn, onChange }): ReactElement<Props> => {
  return (
    <Switch
      checked={isOn}
      onChange={onChange}
      className={`${className ?? ''} w-8 h-4.5 group inline-flex items-center rounded-full cursor-pointer bg-disabled data-checked:bg-accent`}
    >
      <span
        className="size-3 rounded-full bg-white shadow-sm transition translate-x-1 group-data-checked:translate-x-4"
        aria-hidden={true}
      />
    </Switch>
  );
};

export default Toggle;
