import { join } from 'path';
import sharp from 'sharp';

/**
 * Used to build the `favicon.ico` and `.webp`
 * icons from the `icon.svg` file
 */
(async () => {
  const publicPath = join(process.cwd(), '/public');
  const iconPath = join(publicPath, '/icon.svg');

  const faviconSize = 64;
  const appleIconSize = 180;

  // Use sharp to convert the SVG files to WebP files, resize
  // and output them to file within the public directory

  await sharp(iconPath)
    .webp()
    .resize(faviconSize, faviconSize)
    .toFile(`${publicPath}/favicon.ico`);

  await sharp(iconPath)
    .webp()
    .resize(appleIconSize, appleIconSize)
    .toFile(`${publicPath}/apple-touch-icon.webp`);
})();
