/* eslint-disable @typescript-eslint/naming-convention */

import { MetadataRoute } from 'next';

/**
 * Used to build the `manifest.webmanifest` file for PWA
 * configuration and to specify how the app is launched
 *
 * @returns The `manifest.webmanifest` file
 */
const buildManifest = (): MetadataRoute.Manifest => {
  const name = 'Liam Hales';
  const description = 'The official website for Liam Hales — a Senior Software Engineer from Manchester, UK.';

  return {
    name: name,
    short_name: name,
    description: description,
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f5',
    theme_color: '#faf9f5',
    icons: [
      {
        src: '/icon-192x192.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/icon-512x512.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
};

export default buildManifest;
