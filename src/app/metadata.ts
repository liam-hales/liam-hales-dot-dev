/* eslint-disable react-hooks/rules-of-hooks */

import { Metadata } from 'next';
import { ColourPalette } from '../enums';
import { useConfig } from '../hooks/server';

/**
 * Used to generate the `AppLayout` layout component metadata
 * that is rendered within the page `<head/>` element
 *
 * @returns The metadata for the `AppLayout` component
 */
export const generateMetadata = async (): Promise<Metadata> => {

  const { siteUrl } = useConfig();
  return {
    themeColor: ColourPalette.GREY_1000,
    metadataBase: new URL(siteUrl),
    icons: {
      icon: [
        {
          rel: 'icon',
          url: '/favicon.ico',
        },
        {
          rel: 'icon',
          url: '/icon.svg',
          type: 'image/svg+xml',
        },
        {
          rel: 'apple-touch-icon',
          url: '/apple-touch-icon.webp',
        },
      ],
    },
  };
};
