import { MetadataRoute } from 'next';
import { useConfig } from '../hooks/server';

/**
 * Used to build the `robots.txt` file to tell search engine
 * crawlers which URLs they can access on your site
 *
 * @returns The `robots.txt` file
 */
const buildRobots = (): MetadataRoute.Robots => {

  const { siteUrl } = useConfig();
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
};

export default buildRobots;
