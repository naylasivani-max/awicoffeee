import { useEffect } from 'react';
import { SITE } from '../data/site';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function Seo({ title, description, path, image = SITE.ogImage, type = 'website', jsonLd }: SeoProps) {
  const schemaString = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const fullTitle = path === '/' ? title : `${title} | AWICOFFEE`;
    const url = `${SITE.url}${path}`;
    document.title = fullTitle;
    document.documentElement.lang = 'en';

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const existing = document.getElementById('page-jsonld');
    if (existing) existing.remove();
    if (schemaString) {
      const script = document.createElement('script');
      script.id = 'page-jsonld';
      script.type = 'application/ld+json';
      script.textContent = schemaString;
      document.head.appendChild(script);
    }
  }, [title, description, path, image, type, schemaString]);

  return null;
}