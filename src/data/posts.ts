import { images } from './images';
import { DETIK_ARTICLE } from './site';
import { Post, PostSection } from '../types/content';

export const sectionLabels: Record<PostSection, {title: string;intro: string;}> = {
  news: {
    title: 'News',
    intro: 'Media coverage and announcements about AWICOFFEE.'
  },
  events: {
    title: 'Events',
    intro: 'Coffee events AWICOFFEE has taken part in, and community sessions we are planning.'
  },
  articles: {
    title: 'Articles',
    intro: 'Stories about our roastery, coffee, and soybeans.'
  },
  csr: {
    title: 'Corporate Social Responsibility',
    intro: 'Initiatives with local farmers and communities. Items marked as drafts are plans, not completed programs.'
  }
};

const detikSource = {
  name: DETIK_ARTICLE.publication,
  url: DETIK_ARTICLE.url,
  author: DETIK_ARTICLE.author
};

export const posts: Post[] = [
{
  slug: 'detikfinance-koh-awi-family-coffee-business',
  section: 'news',
  category: 'Media coverage',
  title: DETIK_ARTICLE.title,
  subtitle: DETIK_ARTICLE.titleEnglish,
  excerpt: DETIK_ARTICLE.summary,
  body: [
  'In December 2023, detikFinance published a profile of Darwin Jasmin — better known as Koh Awi — and the coffee business his family has run in Binjai, North Sumatra, since 1945.',
  'The article describes how his grandfather founded the roastery, how the business passed to his father in the 1970s, and how it slowed in the early 2000s. In 2005, Koh Awi returned from a finance career in Singapore to continue it, starting by roasting coffee by hand.',
  'It goes on to cover the opening of a Medan branch on Jalan Mojopahit in 2009, a first export customer from Singapore in 2012, sales on Indonesian e-commerce platforms from 2013–2014, and later invitations to international coffee events.',
  'The summary above is written in our own words. Read the original Indonesian article on detikFinance for the full story.'],

  dateLabel: '8 Dec 2023',
  image: images.store,
  imageAlt: 'Warm, minimalist coffee shop interior with a wooden counter',
  status: 'published',
  source: detikSource
},
{
  slug: 'scaj-specialty-coffee-association-of-japan',
  section: 'events',
  category: 'International event',
  title: 'Specialty Coffee Association of Japan (SCAJ)',
  excerpt:
  'According to detikFinance, AWICOFFEE was invited to the SCAJ event in Japan in 2018, 2019, and 2021.',
  body: [
  'As reported by detikFinance, AWICOFFEE received invitations to the Specialty Coffee Association of Japan (SCAJ) event in 2018, 2019, and 2021.',
  'Photos and further details from these events will be added once supplied by AWICOFFEE.'],

  dateLabel: '2018, 2019 & 2021',
  image: images.brewing,
  imageAlt: 'Barista pouring hot water into a pour-over coffee brewer',
  status: 'published',
  source: detikSource
},
{
  slug: 'indonesian-coffee-festival-moscow',
  section: 'events',
  category: 'International event',
  title: '3rd Indonesian Coffee Festival, Moscow',
  excerpt: 'detikFinance reports that AWICOFFEE took part in the 3rd Indonesian Coffee Festival in Moscow in 2021.',
  body: [
  'According to detikFinance, AWICOFFEE was among the Indonesian coffee businesses invited to the 3rd Indonesian Coffee Festival held in Moscow, Russia, in 2021.',
  'Additional details will be added once supplied by AWICOFFEE.'],

  dateLabel: '2021',
  image: images.community,
  imageAlt: 'People sharing cups of coffee at a wooden table',
  status: 'published',
  source: detikSource
},
{
  slug: 'community-cupping-session',
  section: 'events',
  category: 'Upcoming',
  title: 'Community Cupping Session',
  excerpt: 'A planned tasting session introducing soybean coffee to our local community. Date and venue to be announced.',
  body: [
  'This is draft content for a planned event. AWICOFFEE intends to host tasting sessions where guests can try soybean coffee alongside traditional brews and meet the team.',
  'Date, venue, and registration details will be published here once confirmed.'],

  dateLabel: 'Date to be announced',
  image: images.community,
  imageAlt: 'Hands sharing cups of coffee and bowls of soybeans at a tasting table',
  status: 'draft'
},
{
  slug: 'from-binjai-to-the-world',
  section: 'articles',
  category: 'Brand history',
  title: 'From Binjai to the World: A Family Roastery Since 1945',
  excerpt:
  'How a small roastery in North Sumatra passed through three generations and found customers far beyond its hometown.',
  body: [
  'AWICOFFEE’s story begins in Binjai, North Sumatra, where Jio Oen Jiaw founded a coffee roasting business in 1945 under the Soe Lie Hin name, with a logo of two tigers. After earlier ventures that did not work out, coffee was the one that lasted.',
  'In the 1970s, the business passed to his son, Jio Seng Beng, and the shop later became known as Toko Segar Harum. By the early 2000s, it had slowed, and none of the next generation planned to take it on.',
  'That changed in 2005, when Darwin Jasmin — Koh Awi — returned from Singapore. He began roasting with a stove and wok before investing in a hand-operated 1 kg rotating drum, which served the business until 2012.',
  'In 2009, the business opened a branch on Jalan Mojopahit in Medan and launched its first website. That website led to a Singaporean customer who visited the roastery in 2012 and became AWICOFFEE’s first export buyer.',
  'Facts in this article are drawn from detikFinance’s December 2023 profile. Read the original for the full account.'],

  dateLabel: 'Based on reporting from Dec 2023',
  image: images.beansSack,
  imageAlt: 'Roasted coffee beans and soybeans in a kraft bag',
  status: 'published',
  source: detikSource
},
{
  slug: 'what-is-soybean-coffee',
  section: 'articles',
  category: 'Coffee guide',
  title: 'What Is Soybean Coffee?',
  excerpt: 'An introduction to soybean coffee (kopi kedelai) and how it fits into Indonesian coffee culture.',
  body: [
  'Draft article. Soybean coffee — kopi kedelai — brings roasted soybeans into the coffee cup, either blended with coffee or brewed on their own, for a nutty, toasty character.',
  'AWICOFFEE will publish details on how its soybean coffee is made, its ingredients, and recommended brewing methods once the content has been reviewed and approved.'],

  dateLabel: 'Draft',
  image: images.flatlay,
  imageAlt: 'Bowls of roasted soybeans and coffee beans side by side',
  status: 'draft'
},
{
  slug: 'local-farmer-partnerships',
  section: 'csr',
  category: 'Planned initiative',
  title: 'Local Coffee and Soybean Farmer Partnerships',
  excerpt:
  'A planned program to build longer-term relationships with Indonesian coffee and soybean growers.',
  body: [
  'Draft — future plan. AWICOFFEE aims to develop direct, longer-term relationships with local coffee and soybean farmers.',
  'Program scope, partner communities, and results will only be published once the initiative is underway and verified.'],

  dateLabel: 'Planned initiative',
  image: images.farmers,
  imageAlt: 'Farmers’ hands holding harvested soybeans and coffee cherries',
  status: 'draft'
},
{
  slug: 'community-coffee-education',
  section: 'csr',
  category: 'Planned initiative',
  title: 'Community Coffee Education',
  excerpt: 'A planned series of workshops sharing roasting and brewing knowledge with local communities.',
  body: [
  'Draft — future plan. AWICOFFEE intends to share coffee knowledge through workshops for young people and aspiring small business owners.',
  'Dates, partners, and outcomes will be added once confirmed.'],

  dateLabel: 'Planned initiative',
  image: images.brewing,
  imageAlt: 'Hands demonstrating pour-over coffee brewing',
  status: 'draft'
}];


export function getPost(section: string, slug: string): Post | undefined {
  return posts.find((p) => p.section === section && p.slug === slug);
}