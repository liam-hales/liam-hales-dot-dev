import { MetadataRoute } from 'next';
import { useConfig } from '../hooks/server';
import { useDate } from '../hooks';

/**
 * Used to build the `sitemap.xml` file to help search
 * engine crawlers crawl your site more efficiently
 *
 * @returns The `sitemap.xml` file
 */
const buildSitemap = (): MetadataRoute.Sitemap => {

  const { siteUrl } = useConfig();
  const { utc } = useDate();

  const lastModified = utc().toDate();
  return [
    {
      url: siteUrl,
      lastModified: lastModified,
    },
    {
      url: `${siteUrl}/cv`,
      lastModified: lastModified,
    },
    {
      url: `${siteUrl}/cv/timeline`,
      lastModified: lastModified,
    },
    {
      url: `${siteUrl}/cv/skills`,
      lastModified: lastModified,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: lastModified,
    },
    {
      url: `${siteUrl}/brand`,
      lastModified: lastModified,
    },
  ];
};

export default buildSitemap;
