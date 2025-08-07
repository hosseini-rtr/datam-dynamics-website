import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs/promises';

async function generateSitemap() {
  // Define your website routes
  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/blog', changefreq: 'daily', priority: 0.9 },
    { url: '/how-it-works', changefreq: 'weekly', priority: 0.8 },
    { url: '/explore', changefreq: 'weekly', priority: 0.8 },
    { url: '/partners', changefreq: 'monthly', priority: 0.7 },
    { url: '/help-center', changefreq: 'monthly', priority: 0.6 },
    { url: '/terms-and-services', changefreq: 'monthly', priority: 0.5 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'https://datamdynamics.com' });

  // Return a promise that resolves with your XML string
  const sitemap = await streamToPromise(
    Readable.from(routes).pipe(stream)
  ).then((data) => data.toString());

  // Write sitemap to file
  await fs.writeFile('./dist/sitemap.xml', sitemap);

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://datamdynamics.com/sitemap.xml`;
  await fs.writeFile('./dist/robots.txt', robotsTxt);

  console.log('Sitemap and robots.txt generated successfully!');
}

generateSitemap().catch(console.error);