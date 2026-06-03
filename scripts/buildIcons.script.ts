import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';
import { load } from 'cheerio';

/**
 * Used to build the `favicon.ico`, `.webp`
 * and `.png` icons from the `icon.svg` file
 */
void (async (): Promise<void> => {
  const publicPath = path.join(process.cwd(), '/public');
  const iconPath = path.join(publicPath, '/icon.svg');

  // Read the SVG icon data and
  // convert it to a buffer
  const svgData = await fs.readFile(iconPath, 'utf-8');
  const svgBuffer = Buffer.from(svgData);

  // Load the SVG icon buffer using
  // `cheerio` so it can be modified
  const $ = load(svgBuffer, {
    xml: true,
  });

  // Modify the icon SVG attributes to remove its
  // rounded corners for the Apple touch icon
  $('rect').attr('rx', '0');
  const appleTouchBuffer = Buffer.from($.xml());

  // Use sharp to load the SVG data, resize and export
  // all icon files to the public directory

  await sharp(svgBuffer)
    .webp()
    .resize(64, 64)
    .toFile(`${publicPath}/favicon.ico`);

  await sharp(svgBuffer)
    .webp()
    .resize(192, 192)
    .toFile(`${publicPath}/icon-192x192.webp`);

  await sharp(svgBuffer)
    .webp()
    .resize(512, 512)
    .toFile(`${publicPath}/icon-512x512.webp`);

  await sharp(appleTouchBuffer)
    .png()
    .resize(180, 180)
    .toFile(`${publicPath}/apple-touch-icon.png`);
})();
