import { Newsreader, JetBrains_Mono } from 'next/font/google';

/**
 * The Newsreader font from Google Fonts
 * self-hosted by `next/font`
 *
 * @url https://fonts.google.com/specimen/Newsreader
 */
export const newsreader = Newsreader({
  variable: '--sans-font',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '600'],
});

/**
 * The JetBrains Mono font from Google Fonts
 * self-hosted by `next/font`
 *
 * @url https://fonts.google.com/specimen/JetBrains+Mono
 */
export const jetbrainsMono = JetBrains_Mono({
  variable: '--mono-font',
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '700'],
});
