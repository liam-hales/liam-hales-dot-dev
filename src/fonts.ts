import { Urbanist, Fira_Code } from 'next/font/google';

/**
 * The Urbanist font from Google Fonts
 * self-hosted by `next/font`
 *
 * @url https://fonts.google.com/specimen/Urbanist
 */
export const urbanist = Urbanist({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['600', '900'],
});

/**
 * The Fira Code font from Google Fonts
 * self-hosted by `next/font`
 *
 * @url https://fonts.google.com/specimen/Fira+Code
 */
export const firaCode = Fira_Code({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '600'],
});
