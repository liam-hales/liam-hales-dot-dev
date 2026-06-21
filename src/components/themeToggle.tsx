/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Monitor, Sun, Moon, LucideComponent } from 'lucide-react';
import { useTheme } from 'next-themes';
import { themes } from '../constants';
import { Theme } from './types';

/**
 * Used to render the theme toggle which allows the user
 * to switch between the `system`, `light` and `dark` themes
 *
 * @returns The `ThemeToggle` component
 */
const ThemeToggle: FunctionComponent = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  /**
   * Defines the map between the
   * theme and the toggle icon
   */
  const iconMap: Record<Theme, typeof LucideComponent> = {
    system: Monitor,
    light: Sun,
    dark: Moon,
  };

  /**
   * Defines the map between the
   * theme and the offset class
   */
  const offsetMap: Record<Theme, string> = {
    system: 'translate-x-0',
    light: 'translate-x-8',
    dark: 'translate-x-16',
  };

  return (
    <div className="relative flex flex-row items-center gap-x-1 bg-surface-low p-1 rounded-full">
      <span className={`
        absolute size-7 rounded-full bg-base shadow-sm transition-transform duration-200 ease-out
        ${(theme != null) ? offsetMap[theme as Theme] : ''}
      `}
      />
      {
        themes.map((name) => {
          const Icon = iconMap[name];
          return (
            <button
              key={name}
              className={`
                relative z-10 cursor-pointer p-1.5
                ${(theme === name) ? 'text-content-primary' : 'text-content-secondary'}
              `}
              onClick={() => setTheme(name)}
            >
              <Icon size={16} />
            </button>
          );
        })
      }
    </div>
  );
};

export default ThemeToggle;
