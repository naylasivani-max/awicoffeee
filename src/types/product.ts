export type ProductCategoryId =
'ground-coffee' |
'whole-bean' |
'drip-bag' |
'ready-to-drink' |
'gift-sets';

export type ProductBadge = 'Bestseller' | 'New' | 'Promo';

export interface ProductCategory {
  id: ProductCategoryId;
  label: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategoryId;
  badge?: ProductBadge;
  shortDescription: string;
  description: string;
  highlights: string[];
  price: number;
  compareAtPrice?: number;
  size: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  /** true while name, size and price are awaiting confirmation from AWICOFFEE */
  isPlaceholder: boolean;
}