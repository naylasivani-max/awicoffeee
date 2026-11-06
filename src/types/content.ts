export type PostSection = 'news' | 'events' | 'articles' | 'csr';

export interface PostSource {
  name: string;
  url: string;
  author?: string;
}

export interface Post {
  slug: string;
  section: PostSection;
  category: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  body: string[];
  dateLabel: string;
  image: string;
  imageAlt: string;
  status: 'published' | 'draft';
  source?: PostSource;
}

export interface Store {
  id: string;
  city: string;
  region: string;
  listingName: string;
  address: string;
  mapsUrl: string;
  embedQuery: string;
  verified: boolean;
  note?: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  to: string;
  description: string;
}

export interface NavGroup {
  label: string;
  basePath: string;
  items: NavLink[];
}