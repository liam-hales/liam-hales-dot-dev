import { FunctionComponent, ReactElement } from 'react';
import { ColourPalette } from '../enums';
import { useConfig } from '../hooks/server';

/**
 * Used to configure the app `<head>` tag which contains
 * all the required `<meta>` and `<link>` tags for SEO
 *
 * @returns The `AppHead` component
 */
const AppHead: FunctionComponent = (): ReactElement => {

  const { siteUrl } = useConfig();

  const name = 'Liam Hales';
  const title = `${name}, Software Engineer | Manchester`;
  const description = 'Software Engineer from Manchester. My job is to craft clean looking front end apps and build robust backend API\'s that scale and house the brains of an application.';
  const coverUrl = `${siteUrl}/cover.webp`;

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content={ColourPalette.GREY_1000} />

      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="theme-color" content={ColourPalette.GREY_1000} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={coverUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={coverUrl} />
      <meta name="twitter:url" content={siteUrl} />

      <link rel="icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="/icons/icon-180x180.webp" />
    </>
  );
};

export default AppHead;
