import { useEffect } from 'react';

/**
 * Zero-dependency per-page SEO for CRA (no react-helmet needed).
 * Sets document.title, meta description, and canonical URL on mount.
 * Google renders JavaScript, so this works fine for a small local site.
 *
 * Usage: <Seo title="Privacy Policy | Apex Solar and Construction"
 *             description="..." path="/privacy" />
 *
 * SITE_URL: update once the domain is purchased.
 */
const SITE_URL = 'https://www.arkhamsolar.com';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo({ title, description, path = '' }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      upsertMeta('property', 'og:title', title);
    }
    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
    }

    const url = `${SITE_URL}${path}`;
    upsertMeta('property', 'og:url', url);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, path]);

  return null;
}
