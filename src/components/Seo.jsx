import { Helmet } from 'react-helmet-async';

const Seo = ({
  title = 'Datam Dynamics - Innovative Technology Solutions',
  description = 'Datam Dynamics provides cutting-edge technology solutions, AI integration, and digital transformation services to help businesses thrive in the modern era.',
  canonical,
  image = '/datamdynamics.svg',
  type = 'website',
  schemaMarkup
}) => {
  const siteUrl = 'https://datamdynamics.com';
  const pageUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content="Datam Dynamics" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={pageUrl} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Schema.org Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;