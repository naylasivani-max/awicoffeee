import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { BrandIcon } from '../../components/BrandIcon';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';
import { images } from '../../data/images';
import { SOCIAL_LINKS, SocialId } from '../../data/site';

const previews: Record<SocialId, string[]> = {
  instagram: [images.hero, images.brewing, images.flatlay],
  tiktok: [images.community, images.store, images.dripbag],
  shopee: [images.pouch, images.beansSack, images.bottle]
};

const ctaLabel: Record<SocialId, string> = {
  instagram: 'Follow on Instagram',
  tiktok: 'Watch on TikTok',
  shopee: 'Visit Shopee store'
};

export function SocialMedia() {
  return (
    <>
      <Seo
        title="Social Media — Instagram, TikTok & Shopee"
        description="Follow AWICOFFEE on Instagram and TikTok, and shop our official Shopee storefront."
        path="/connect/social-media" />
      
      <PageHeader
        breadcrumbs={[{ label: 'Connect', to: '/connect/contact' }, { label: 'Social Media' }]}
        title="Follow AWICOFFEE"
        intro="See what’s brewing, from the roastery to our stores. Preview images below are curated visuals, not live feeds — visit each account for the latest posts." />
      
      <div className="container-site space-y-6 py-12 md:py-16">
        {SOCIAL_LINKS.map((s) =>
        <article key={s.id} className="grid items-center gap-6 rounded-[2rem] border border-line bg-surface p-5 md:grid-cols-[1fr_1.4fr] md:p-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-tint">
                  <BrandIcon name={s.id} />
                </span>
                <div>
                  <h2 className="font-display text-2xl">{s.label}</h2>
                  <p className="text-sm text-muted">{s.handle}</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm leading-relaxed text-muted">{s.description}</p>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">
                {ctaLabel[s.id]}
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3" aria-hidden="true">
              {previews[s.id].map((src) =>
            <div key={src} className="aspect-square overflow-hidden rounded-2xl bg-tint">
                  <img src={src} alt="" loading="lazy" width={300} height={300} className="h-full w-full object-cover" />
                </div>
            )}
            </div>
          </article>
        )}
      </div>
    </>);

}