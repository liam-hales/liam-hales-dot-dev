import { writeFileSync } from 'fs';
import { join } from 'path';
import { FunctionComponent, ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * The component used to build the public `index.html` file
 * which is rendered to HTML using `renderToStaticMarkup`
 *
 * @returns The `Index` component
 */
const Index: FunctionComponent = (): ReactElement => {

  const name = 'Liam Hales';
  const title = `${name}, Software Engineer | Manchester`;
  const description = 'Software Engineer from Manchester. My job is to craft clean looking front end apps and build robust backend API\'s that scale and house the brains of an application.';
  const url = 'https://liamhales.dev';

  const publicPath = join(process.cwd(), '/public');
  const iconsPath = join(publicPath, '/icons');
  const coverPath = `${publicPath}/cover.png`;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />

        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={coverPath} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={coverPath} />
        <meta name="twitter:url" content={url} />

        <link rel="apple-touch-icon" href={`${iconsPath}/icon-180x180.png`} />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" />
      </body>
    </html>
  );
};

/**
 * Used to build the public `index.html` file to
 * provide the entry point for the app.
 *
 * The `Index` component is rendered to HTML using
 * `renderToStaticMarkup` and written to said file
 */
(async () => {
  // Resolve the public index.html file path
  // and render the Index component to HTML
  const filePath = join(process.cwd(), '/public/index.html');
  const html = renderToStaticMarkup(<Index />);

  // Write the rendered HTML to the public index.html
  // file prefixed with the HTML doctype declaration tag
  writeFileSync(filePath, `<!DOCTYPE html>${html}`);
})();