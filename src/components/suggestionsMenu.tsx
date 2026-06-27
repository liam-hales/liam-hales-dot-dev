import { FunctionComponent, ReactElement } from 'react';
import { MenuItem } from '@headlessui/react';
import { BaseProps } from '../types';
import { suggestions } from '../constants';
import { ChatAction, Menu } from './';

/**
 * The `SuggestionsMenu` component props
 */
interface Props extends BaseProps {
  readonly onSelect: (value: string) => void;
}

/**
 * Used to render a menu of suggestions
 * which can be opened and closed
 *
 * @param props The component props
 * @returns The `SuggestionsMenu` component
 */
const SuggestionsMenu: FunctionComponent<Props> = ({ onSelect }): ReactElement<Props> => {
  return (
    <Menu
      className="outline-none"
      button={ChatAction}
      buttonProps={{
        text: 'Suggestions',
        icon: 'lightbulb',
      }}
    >
      <div className="flex flex-row items-center gap-x-2 pl-3 pt-2">
        <p className="text-content-secondary text-sm">
          Suggestions
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-y-1">
        {
          suggestions.map((suggestion, index) => {
            return (
              <MenuItem key={`suggestion-menu-item-${index}`}>
                <button
                  className="w-full flex flex-col items-start px-3 py-2 text-content-primary hover:bg-hover rounded-lg cursor-pointer hover-lift"
                  onClick={() => onSelect(suggestion)}
                >
                  {suggestion}
                </button>
              </MenuItem>
            );
          })
        }
      </div>
    </Menu>
  );
};

export default SuggestionsMenu;
