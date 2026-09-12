import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'WEXEL';
const BASE_URL = 'https://wexel.ai';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * SEOHead — drop-in per-page meta tag manager.
 *
 * Props:
 *   title       — page title (appended with " | WEXEL")
 *   description — meta description (max ~160 chars)
 *   canonical   — canonical URL path, e.g. "/voice"
 *   image       — OG image URL (optional, falls back to default)
 *   noIndex     — set true for pages that should not be indexed
 */
export default function SEOHead({
  title,
  description,
  canonical = '/',
  image = DEFAULT_IMAGE,
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | AI Automation & Infrastructure`;
  const canonicalUrl = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wexel_ai" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
