/**
 * The `next-sitemap` config used to configure how the
 * `sitemap.xml` and `robots.txt` files are generated
 *
 * @type {import('next-sitemap').IConfig}
 */
const sitemapConfig = {
  siteUrl: process.env.SITE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
};

export default sitemapConfig;
