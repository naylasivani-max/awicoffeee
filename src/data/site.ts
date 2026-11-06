import { images } from './images';
import { NavGroup } from '../types/content';

export const SITE = {
  name: 'AWICOFFEE',
  // Replace with the confirmed production domain before launch.
  url: 'https://www.awicoffee.com',
  ogImage: images.hero,
  tagline: 'Soybean coffee from an Indonesian family roastery.',
  description:
  'Discover AWICOFFEE, an Indonesian coffee brand combining coffee and soybean innovation with a commitment to local agricultural communities. Explore our products and shop online.'
};

export const WHATSAPP = {
  display: '0815-1578-7757',
  international: '628151578989',
  url: 'https://wa.me/628151578989'
};

export type SocialId = 'instagram' | 'tiktok' | 'shopee';

export const SOCIAL_LINKS: {id: SocialId;label: string;handle: string;url: string;description: string;}[] = [
{
  id: 'instagram',
  label: 'Instagram',
  handle: '@awicoffee',
  url: 'https://www.instagram.com/awicoffee/',
  description: 'Product drops, brewing moments, and store updates.'
},
{
  id: 'tiktok',
  label: 'TikTok',
  handle: '@awicoffee',
  url: 'https://www.tiktok.com/@awicoffee',
  description: 'Short videos from the roastery and our stores.'
},
{
  id: 'shopee',
  label: 'Shopee',
  handle: 'shopee.co.id/awicoffee',
  url: 'https://shopee.co.id/awicoffee',
  description: 'Our official marketplace storefront.'
}];


export const FORMS = {
  sponsorshipUrl:
  'https://docs.google.com/forms/d/1_E4p3HybkpGczARko-DEXn39vgBg59uMyVTJfHE-na0/viewform',
  sponsorshipEmbed:
  'https://docs.google.com/forms/d/1_E4p3HybkpGczARko-DEXn39vgBg59uMyVTJfHE-na0/viewform?embedded=true',
  surveyUrl:
  'https://docs.google.com/forms/d/e/1FAIpQLScExfNTFLkrIRIfOHWmqcbN7PTPEoDseMV51UA2UAa25o1qVw/viewform',
  surveyEmbed:
  'https://docs.google.com/forms/d/e/1FAIpQLScExfNTFLkrIRIfOHWmqcbN7PTPEoDseMV51UA2UAa25o1qVw/viewform?embedded=true'
};

export const DETIK_ARTICLE = {
  publication: 'detikFinance',
  title: 'Pria Ini Tinggalkan Pekerjaan di Singapura Lanjutkan Bisnis Kopi, Ini Hasilnya',
  titleEnglish: 'This man left his job in Singapore to continue a coffee business — here are the results',
  author: 'Samuel Gading',
  dateLabel: '8 December 2023',
  url: 'https://finance.detik.com/solusiukm/d-7076673/pria-ini-tinggalkan-pekerjaan-di-singapura-lanjutkan-bisnis-kopi-ini-hasilnya',
  summary:
  'detikFinance profiles Darwin Jasmin, known as Koh Awi, who returned from a finance career in Singapore in 2005 to continue the coffee roasting business his grandfather started in Binjai, North Sumatra, in 1945 — and grew it into a brand with stores, online sales, and export customers abroad.'
};

export const NAVIGATION: NavGroup[] = [
{
  label: 'Product',
  basePath: '/products',
  items: [
  { label: 'All Products', to: '/products', description: 'The full AWICOFFEE catalog.' },
  { label: 'Promotions', to: '/products/promotions', description: 'Current offers and bundles.' },
  { label: 'Product Categories', to: '/products/categories', description: 'Shop by format.' }]

},
{
  label: 'Impact',
  basePath: '/impact',
  items: [
  { label: 'News', to: '/impact/news', description: 'Media coverage and announcements.' },
  { label: 'Events', to: '/impact/events', description: 'Where we have shown up, and what is next.' },
  { label: 'Articles', to: '/impact/articles', description: 'Stories on coffee and soybeans.' },
  { label: 'CSR', to: '/impact/csr', description: 'Community and farmer initiatives.' }]

},
{
  label: 'About Us',
  basePath: '/about',
  items: [
  { label: 'Company Profile', to: '/about/company-profile', description: 'What we make and how we work.' },
  { label: 'Brand Story', to: '/about/brand-story', description: 'Three generations, since 1945.' },
  { label: 'Vision & Mission', to: '/about/vision-mission', description: 'Where we are heading.' },
  { label: 'Awards', to: '/about/awards', description: 'Recognition we have received.' }]

},
{
  label: 'Connect',
  basePath: '/connect',
  items: [
  { label: 'Store Locations', to: '/connect/stores', description: 'Surabaya, Jakarta, and Medan.' },
  { label: 'Contact', to: '/connect/contact', description: 'WhatsApp, social, and feedback.' },
  { label: 'Partnership', to: '/connect/partnership', description: 'Sponsorship and collaboration.' },
  { label: 'Social Media', to: '/connect/social-media', description: 'Instagram, TikTok, and Shopee.' }]

}];