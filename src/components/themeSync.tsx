'use client';

import { FunctionComponent, ReactElement, useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * Used to keep the `theme-color` meta tags
 * in sync with the users chosen theme
 *
 * @returns An empty fragment as there is nothing to render
 */
const ThemeSync: FunctionComponent = (): ReactElement => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Wait until `next-themes` has resolved the
    // active theme before updating the meta tags
    if (resolvedTheme == null) {
      return;
    }

    const color = (resolvedTheme === 'light') ? '#faf9f5' : '#181715';
    const metas = document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]');

    // Update every `theme-color` tag, including the `prefers-color-scheme` scoped ones,
    // so the colour is correct regardless of which tag the browser picks
    for (const meta of metas) {
      meta.setAttribute('content', color);
    }
  }, [resolvedTheme]);

  return (
    <></>
  );
};

export default ThemeSync;
