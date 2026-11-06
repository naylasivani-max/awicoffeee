import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';
import { images } from '../../data/images';
import { DETIK_ARTICLE } from '../../data/site';

const timeline = [
{ year: '1945', title: 'A roastery in Binjai', text: 'Jio Oen Jiaw founds a coffee roasting business in Binjai, North Sumatra, under the Soe Lie Hin name, with a two-tiger logo.' },
{ year: '1970s', title: 'The second generation', text: 'The business passes to his son, Jio Seng Beng. The shop later becomes known as Toko Segar Harum.' },
{ year: '2005', title: 'Coming home', text: 'Darwin Jasmin — Koh Awi — returns from a finance career in Singapore and begins roasting with a stove and wok, then a hand-turned 1 kg drum.' },
{ year: '2009', title: 'Beyond Binjai', text: 'A branch opens on Jalan Mojopahit in Medan, and the business launches its first website.' },
{ year: '2012', title: 'First export', text: 'A customer from Singapore visits the roastery and becomes the first overseas buyer.' },
{ year: '2013–14', title: 'Online marketplaces', text: 'AWICOFFEE begins selling on Indonesian e-commerce platforms, including Shopee.' },
{ year: '2016', title: 'Growing up', text: 'Koh Awi establishes PT Dua Harimau Sumatera, joins AEKI, upgrades grinding equipment and packaging, and obtains halal certification.' },
{ year: '2022', title: 'Jakarta reopens', text: 'After a pandemic-shortened opening in March 2020, the Muara Karang, Jakarta store reopens in May 2022.' }];


export function BrandStory() {
  return (
    <>
      <Seo
        title="Brand Story — Since 1945"
        description="The AWICOFFEE story: three generations of coffee roasting from Binjai, North Sumatra, to stores in Medan, Jakarta, and Surabaya and customers abroad."
        path="/about/brand-story" />
      
      <PageHeader
        breadcrumbs={[{ label: 'About Us', to: '/about/company-profile' }, { label: 'Brand Story' }]}
        title="Three generations, one roastery"
        intro="From a small shop in Binjai to customers across Indonesia and abroad." />
      
      <div className="container-site py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <img src={images.beansSack} alt="Roasted coffee beans and soybeans in a kraft bag" loading="lazy" width={600} height={750} className="h-full w-full object-cover" />
            </div>
            <blockquote className="mt-8 border-l-2 border-brand-sage pl-5">
              <p className="font-display text-2xl leading-snug">
                “Humility, defeating ego, and patience with the process.”
              </p>
              <footer className="mt-3 text-sm text-muted">
                How detikFinance summarised Koh Awi’s path (translated from Indonesian).
              </footer>
            </blockquote>
          </div>
          <ol className="relative border-l border-line">
            {timeline.map((t) =>
            <li key={t.year} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-brand-sage" aria-hidden="true" />
                <p className="font-display text-xl text-sage-ink">{t.year}</p>
                <h2 className="mt-1 font-display text-2xl">{t.title}</h2>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">{t.text}</p>
              </li>
            )}
          </ol>
        </div>
        <div className="mt-16 flex flex-col gap-4 rounded-3xl bg-tint p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            This timeline is based on reporting by {DETIK_ARTICLE.publication} ({DETIK_ARTICLE.dateLabel}). How soybean coffee
            entered the AWICOFFEE story will be added once confirmed by the team.
          </p>
          <a href={DETIK_ARTICLE.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary shrink-0">
            Read Full Article
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </>);

}