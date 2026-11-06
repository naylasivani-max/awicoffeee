import { images } from './images';
import { Product, ProductCategory } from '../types/product';

/*
 * IMPORTANT: Every product below is an EDITABLE PLACEHOLDER.
 * Names, sizes, descriptions and prices must be replaced with official
 * AWICOFFEE product data before launch. Set `isPlaceholder: false` once confirmed.
 */

export const categories: ProductCategory[] = [
{
  id: 'ground-coffee',
  label: 'Ground Coffee',
  description: 'Ready to brew at home with a filter, French press, or traditional tubruk.',
  image: images.pouch
},
{
  id: 'whole-bean',
  label: 'Whole Bean',
  description: 'For those who grind fresh, right before every cup.',
  image: images.beansSack
},
{
  id: 'drip-bag',
  label: 'Drip Bags',
  description: 'Single-serve pour-over for the office, travel, or gifting.',
  image: images.dripbag
},
{
  id: 'ready-to-drink',
  label: 'Ready to Drink',
  description: 'Bottled soy coffee, chilled and ready when you are.',
  image: images.bottle
},
{
  id: 'gift-sets',
  label: 'Gift Sets',
  description: 'Curated sets for colleagues, clients, and family.',
  image: images.flatlay
}];


export const products: Product[] = [
{
  id: 'p-signature-soybean',
  slug: 'signature-soybean-coffee',
  name: 'Signature Soybean Coffee',
  category: 'ground-coffee',
  badge: 'Bestseller',
  shortDescription: 'Our everyday ground blend pairing roasted soybeans with coffee.',
  description:
  'A ground blend that brings roasted soybeans and coffee together in one cup. Designed for daily brewing at home. Final composition, roast notes, and brewing guidance to be confirmed by AWICOFFEE.',
  highlights: ['Ground, ready to brew', 'Soybean and coffee blend', 'Resealable pouch'],
  price: 45000,
  size: '200 g',
  image: images.pouch,
  imageAlt: 'Kraft paper pouch of AWICOFFEE soybean coffee beside soybeans and coffee beans',
  featured: true,
  isPlaceholder: true
},
{
  id: 'p-whole-bean-blend',
  slug: 'soybean-coffee-whole-bean-blend',
  name: 'Soybean Coffee Whole Bean Blend',
  category: 'whole-bean',
  shortDescription: 'Whole roasted coffee and soybeans for grinding fresh at home.',
  description:
  'Whole roasted beans for customers who prefer to grind right before brewing. Origin, roast level, and blend ratio to be confirmed by AWICOFFEE.',
  highlights: ['Whole beans', 'Grind to your method', 'Larger pack size'],
  price: 95000,
  size: '500 g',
  image: images.beansSack,
  imageAlt: 'Open kraft bag filled with roasted coffee beans and soybeans',
  featured: true,
  isPlaceholder: true
},
{
  id: 'p-roasted-soybean-brew',
  slug: 'roasted-soybean-brew',
  name: 'Roasted Soybean Brew',
  category: 'ground-coffee',
  badge: 'New',
  shortDescription: 'A soybean-forward brew for a gentler, nutty cup.',
  description:
  'A soybean-forward ground product with a nutty, toasty character. Ingredient list and caffeine information to be confirmed by AWICOFFEE before publication.',
  highlights: ['Soybean-forward', 'Nutty and toasty', 'Ground, ready to brew'],
  price: 38000,
  size: '250 g',
  image: images.flatlay,
  imageAlt: 'Two ceramic bowls holding roasted soybeans and roasted coffee beans',
  featured: true,
  isPlaceholder: true
},
{
  id: 'p-drip-bag-10',
  slug: 'soybean-coffee-drip-bag-10',
  name: 'Soybean Coffee Drip Bags',
  category: 'drip-bag',
  badge: 'Promo',
  shortDescription: 'Ten single-serve pour-over bags. Just add hot water.',
  description:
  'Single-serve drip bags for brewing a fresh cup anywhere. Hang over a cup, pour hot water, and enjoy. Promotional pricing shown is a placeholder until confirmed.',
  highlights: ['10 single-serve bags', 'No equipment needed', 'Great for the office'],
  price: 55000,
  compareAtPrice: 65000,
  size: '10 × 12 g',
  image: images.dripbag,
  imageAlt: 'Drip coffee bag hanging on a ceramic cup with pink envelopes beside it',
  featured: true,
  isPlaceholder: true
},
{
  id: 'p-soy-latte-bottle',
  slug: 'soy-coffee-latte-bottle',
  name: 'Soy Coffee Latte',
  category: 'ready-to-drink',
  badge: 'New',
  shortDescription: 'Bottled soy coffee latte, best served chilled.',
  description:
  'A ready-to-drink soy coffee latte. Storage instructions, shelf life, and delivery availability to be confirmed by AWICOFFEE — perishable items may only be available in selected cities.',
  highlights: ['Ready to drink', 'Serve chilled', 'Single bottle'],
  price: 25000,
  size: '250 ml',
  image: images.bottle,
  imageAlt: 'Glass bottle of iced soy coffee latte with a blank label',
  featured: false,
  isPlaceholder: true
},
{
  id: 'p-classic-ground',
  slug: 'classic-sumatra-ground-coffee',
  name: 'Classic Sumatra Ground Coffee',
  category: 'ground-coffee',
  badge: 'Bestseller',
  shortDescription: 'A traditional ground coffee from our North Sumatra roastery.',
  description:
  'A classic ground coffee roasted in the family tradition. Origin details, roast profile, and pack sizes to be confirmed by AWICOFFEE.',
  highlights: ['Traditional roast', 'Ground coffee', 'Family roastery'],
  price: 60000,
  size: '250 g',
  image: images.pouch,
  imageAlt: 'Kraft coffee pouch on a cream surface with beans scattered around',
  featured: false,
  isPlaceholder: true
},
{
  id: 'p-drip-sampler',
  slug: 'drip-bag-sampler',
  name: 'Drip Bag Sampler',
  category: 'drip-bag',
  shortDescription: 'Five drip bags to try before choosing a favourite.',
  description:
  'A small sampler of single-serve drip bags. Included variants to be confirmed by AWICOFFEE.',
  highlights: ['5 single-serve bags', 'Mixed selection', 'Easy gift'],
  price: 30000,
  size: '5 × 12 g',
  image: images.dripbag,
  imageAlt: 'Drip coffee bag brewing over a ceramic cup',
  featured: false,
  isPlaceholder: true
},
{
  id: 'p-gift-set',
  slug: 'soybean-coffee-gift-set',
  name: 'Soybean Coffee Gift Set',
  category: 'gift-sets',
  badge: 'Promo',
  shortDescription: 'A curated set for gifting to clients, colleagues, or family.',
  description:
  'A gift set combining a selection of AWICOFFEE products. Contents, packaging, and corporate order options to be confirmed by AWICOFFEE.',
  highlights: ['Curated selection', 'Gift-ready', 'Corporate orders via WhatsApp'],
  price: 150000,
  compareAtPrice: 175000,
  size: 'Set',
  image: images.flatlay,
  imageAlt: 'Roasted soybeans and coffee beans arranged in ceramic bowls for a gift set',
  featured: false,
  isPlaceholder: true
}];


export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategory(id: string): ProductCategory | undefined {
  return categories.find((c) => c.id === id);
}