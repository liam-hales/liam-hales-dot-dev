import { Metadata, Viewport } from 'next';
import { ColourPalette } from '../enums';
import { useConfig } from '../hooks/server';

/**
 * Describes the viewport options for the `AppLayout` layout component viewport
 * specific metadata that is rendered within the page `<head/>` element
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: ColourPalette.GREY_1000,
};

/**
 * Used to generate the `AppLayout` layout component metadata
 * that is rendered within the page `<head/>` element
 *
 * @returns The metadata for the `AppLayout` component
 */
export const generateMetadata = async (): Promise<Metadata> => {

  const { siteUrl } = useConfig();
  return {
    metadataBase: new URL(siteUrl),
    icons: {
      icon: [
        {
          rel: 'icon',
          url: '/favicon.ico',
          type: 'image/x-icon',
        },
        {
          rel: 'icon',
          url: '/icon.svg',
          type: 'image/svg+xml',
        },
        {
          rel: 'apple-touch-icon',
          url: '/apple-touch-icon.webp',
          type: 'image/webp',
        },
      ],
    },
  };
};
