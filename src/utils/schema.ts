import { SITE, SOCIAL_LINKS } from '../data/site';
import { Post } from '../types/content';
import { Product } from '../types/product';
import { Store } from '../types/content';

type Schema = Record<string, unknown>;

export function organizationSchema(): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    foundingDate: '1945',
    foundingLocation: 'Binjai, North Sumatra, Indonesia',
    sameAs: SOCIAL_LINKS.map((s) => s.url)
  };
}

export function websiteSchema(): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url
  };
}

/** Offers are omitted while product data is a placeholder. */
export function productSchema(product: Product): Schema {
  const base: Schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { '@type': 'Brand', name: SITE.name }
  };
  if (!product.isPlaceholder) {
    base.offers = {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: product.price,
      url: `${SITE.url}/products/${product.slug}`
    };
  }
  return base;
}

export function articleSchema(post: Post): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': post.section === 'news' ? 'NewsArticle' : 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    publisher: { '@type': 'Organization', name: SITE.name },
    ...(post.source ? { citation: post.source.url } : {})
  };
}

export function storeSchema(stores: Store[]): Schema[] {
  return stores.
  filter((s) => s.verified).
  map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: `${SITE.name} ${s.city}`,
    address: { '@type': 'PostalAddress', streetAddress: s.address, addressCountry: 'ID' },
    hasMap: s.mapsUrl
  }));
}