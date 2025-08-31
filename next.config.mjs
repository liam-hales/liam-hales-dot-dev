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
 * The Next.js config used to configure
 * the Next.js framework for the app
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  modularizeImports: {
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
        hostname: '**.graphassets.com',
      },
    ],
  },
  webpack: (config) => {
    const { plugins } = config;
    const iconPlugin = unpluginIconsPlugin({
      compiler: 'jsx',
      jsx: 'react',
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return {
      ...config,
      infrastructureLogging: {
        level: 'error',
      },
      plugins: [
        ...plugins,
        iconPlugin,
      ],
    };
  },
};

export default withAnalyser(nextConfig);
