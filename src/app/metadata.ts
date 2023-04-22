import { Metadata } from 'next';
import { ColourPalette } from '../enums';

/**
 * Used to generate the `AppLayout` page component metadata
 * that is rendered within the page `<head/>` element
 *
 * @returns The metadata for the `AppLayout` component
 */
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    themeColor: ColourPalette.GREY_1000,
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
