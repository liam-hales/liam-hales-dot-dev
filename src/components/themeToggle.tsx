'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

/**
 * Used to render the theme toggle which allows the user
 * to switch between the `system`, `light` and `dark` themes
 *
 * @returns The `ThemeToggle` component
 */
const ThemeToggle: FunctionComponent = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-row items-center gap-x-1 bg-elevated p-1 rounded-full">
      <button
        className={`${(theme === 'system') ? 'bg-surface shadow-sm' : 'bg-transparent'} rounded-full cursor-pointer p-1.5`}
        onClick={() => setTheme('system')}
      >
        <Monitor size={16} />
      </button>
      <button
        className={`${(theme === 'light') ? 'bg-surface shadow-sm' : 'bg-transparent'} rounded-full cursor-pointer p-1.5`}
        onClick={() => setTheme('light')}
      >
        <Sun size={16} />
      </button>
      <button
        className={`${(theme === 'dark') ? 'bg-surface shadow-sm' : 'bg-transparent'} rounded-full cursor-pointer p-1.5`}
        onClick={() => setTheme('dark')}
      >
        <Moon size={16} />
      </button>
    </div>
  );
};

export default ThemeToggle;
