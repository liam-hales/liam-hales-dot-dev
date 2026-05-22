import type { NextConfig } from 'next';

/**
 * The Next.js config used to configure
 * the Next.js framework for the app
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  redirects: () => {
    return [
      {
        source: '/:path+',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
