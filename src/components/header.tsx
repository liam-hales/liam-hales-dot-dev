'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Logo, SocialLink, ThemeToggle } from './';
import { useApp } from '../hooks';

/**
 * Used to render the header
 * at the top of the page
 *
 * @returns The `Header` component
 */
const Header: FunctionComponent = (): ReactElement => {
  const { environment, messages } = useApp();

  return (
    <div className="w-full h-20 flex flex-row items-center justify-between border border-solid border-outline px-6">
      <div className="flex flex-row items-center gap-x-8">
        {
          (messages.length > 0) && (
            <Logo className="w-6 fill-primary" />
          )
        }
        {
          (environment === 'client') && (
            <ThemeToggle />
          )
        }
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <SocialLink platform="github" />
        <SocialLink platform="linkedin" />
      </div>
    </div>
  );
};

export default Header;
