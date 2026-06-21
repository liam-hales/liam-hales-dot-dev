'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Logo, SocialLink, ThemeToggle } from './';
import { useApp } from '../hooks';
import { useMediaQuery } from 'usehooks-ts';
import { BaseProps } from '../types';

/**
 * The `Header` component props
 */
type Props = BaseProps;

/**
 * Used to render the header
 * at the top of the page
 *
 * @returns The `Header` component
 */
const Header: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {
  const { environment, messages } = useApp();

  const isLargeScreen = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  return (
    <div className={`${className ?? ''} w-full h-20 flex flex-row items-center justify-between border border-solid border-divider px-6 rounded-2xl`}>
      <div className="flex flex-row items-center gap-x-8">
        {
          (messages.length > 0 && isLargeScreen === true) && (
            <Logo className="w-6 fill-accent" />
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
