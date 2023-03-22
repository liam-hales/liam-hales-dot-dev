/* eslint-disable @typescript-eslint/naming-convention */

import unpluginIconsPlugin from 'unplugin-icons/webpack';
import bundleAnalyser from '@next/bundle-analyzer';

/**
 * The initialised bundle analyser
 * from `@next/bundle-analyzer`
 */
const withAnalyser = bundleAnalyser({
  enabled: process.env.ANALYSE_BUNDLE === 'true',
  openAnalyzer: true,
});

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
  webpack: (config) => {
    const { plugins } = config;
    const iconPlugin = unpluginIconsPlugin({
      compiler: 'jsx',
      jsx: 'react',
    });

    return {
      ...config,
      plugins: [
        ...plugins,
        iconPlugin,
      ],
    };
  },
};

export default withAnalyser(nextConfig);
