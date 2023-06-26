import { join } from 'path';
import { readFileSync } from 'fs';
import { parseStringPromise, Builder } from 'xml2js';
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

  // Read the SVG icon data and parse it
  // using `xml2js` so it can be modified
  const svgData = readFileSync(iconPath, 'utf-8');
  const iconSvg = await parseStringPromise(svgData);

  // Modify the icon SVG attributes to resize the
  // background rect and remove it's corner radius
  iconSvg.svg.$.viewBox = '-86 -86 1196 1196';
  iconSvg.svg.rect[0].$ = {
    x: -86,
    y: -86,
    width: 1196,
    height: 1196,
    rx: 0,
  };

  const svgString = new Builder().buildObject(iconSvg);
  const svgBuffer = Buffer.from(svgString);

  // Use sharp to convert the SVG files to WebP files, resize
  // and output them to file within the public directory

  await sharp(iconPath)
    .webp()
    .resize(faviconSize, faviconSize)
    .toFile(`${publicPath}/favicon.ico`);

  await sharp(svgBuffer)
    .webp()
    .resize(appleIconSize, appleIconSize)
    .toFile(`${publicPath}/apple-touch-icon.webp`);
})();
