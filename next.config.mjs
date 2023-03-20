/* eslint-disable @typescript-eslint/naming-convention */

/**
 * The Next.js config used for advanced
 * configuration within Next.js
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  experimental: {
    appDir: true,
  },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
      preventFullImport: true,
    },
    '@mui/material/styles': {
      transform: '@mui/material/styles/{{member}}',
      preventFullImport: true,
    },
    'react-syntax-highlighter': {
      transform: 'react-syntax-highlighter/dist/cjs/{{ kebabCase member }}',
      preventFullImport: true,
    },
    'react-syntax-highlighter/dist/cjs/styles/prism': {
      transform: 'react-syntax-highlighter/dist/cjs/styles/prism/{{member}}',
      preventFullImport: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
};

export default nextConfig;
