import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import compression from 'compression';
import sirv from 'sirv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Enable compression
app.use(compression());

// Serve static files
app.use(sirv('dist', { 
  dev: process.env.NODE_ENV === 'development',
  gzip: true
}));

// Handle all routes
app.get('*', async (req, res) => {
  try {
    const template = await generateTemplate(req.url);
    res.send(template);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
});

async function generateTemplate(url) {
  const metaTags = generateMetaTags(url);
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/datamdynamics.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        ${metaTags}
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  `;
}

function generateMetaTags(url) {
  // Base meta tags
  const baseTitle = 'Datam Dynamics - Innovative Technology Solutions';
  const baseDescription = 'Datam Dynamics provides cutting-edge technology solutions, AI integration, and digital transformation services to help businesses thrive in the modern era.';
  const baseImage = '/datamdynamics.svg';
  
  // Route-specific meta tags
  const routeMetaTags = {
    '/blog': {
      title: 'Blog - Latest Insights & News | Datam Dynamics',
      description: 'Stay updated with the latest developments in autonomous technology and industry insights from Datam Dynamics.',
      type: 'blog'
    },
    // Add more routes as needed
  };

  const routeData = routeMetaTags[url] || {};
  const title = routeData.title || baseTitle;
  const description = routeData.description || baseDescription;
  const type = routeData.type || 'website';

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="Datam Dynamics, technology, AI, digital transformation, innovation, business solutions" />
    <meta name="author" content="Datam Dynamics" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="https://datamdynamics.com${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${baseImage}" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://datamdynamics.com${url}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${description}" />
    <meta property="twitter:image" content="${baseImage}" />
  `;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});