import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

/**
 * Used to build the `favicon.ico` and `.webp`
 * images from the `.svg` files
 */
(async () => {
  const logoIconPath = join(process.cwd(), '/src/svgs/logoIcon.svg');
  const publicPath = join(process.cwd(), '/public');
  const iconsPath = join(publicPath, '/icons');

  // Make the /public/icons directory
  // if it doesn't exist
  if (existsSync(iconsPath) === false) {
    mkdirSync(iconsPath);
  }

  // Use sharp to convert the SVG files to WebP files, resize
  // and output them to file within the public directory

  await sharp(logoIconPath)
    .webp()
    .resize(64, 64)
    .toFile(`${publicPath}/favicon.ico`);

  await sharp(logoIconPath)
    .webp()
    .resize(180, 180)
    .toFile(`${iconsPath}/icon-180x180.webp`);
})();
