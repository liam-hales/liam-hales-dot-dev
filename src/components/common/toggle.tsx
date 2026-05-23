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
      className={`
        ${className ?? ''} w-8 h-4.5 relative inline-flex items-center rounded-full

        ui-checked:bg-accent
        ui-not-checked:bg-disabled
      `}
    >
      <span
        className={`
          w-3 h-3 inline-block transform rounded-full bg-white transition

          ui-checked:translate-x-4
          ui-not-checked:translate-x-1
        `}
      />
    </Switch>
  );
};

export default Toggle;
