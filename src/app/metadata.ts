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
      icon: 'favicon.ico',
      apple: '/icons/icon-180x180.webp',
    },
  };
};
