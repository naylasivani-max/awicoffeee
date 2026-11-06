import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { FORMS, NAVIGATION, SITE, SOCIAL_LINKS, WHATSAPP } from '../../data/site';
import { stores } from '../../data/stores';
import { BrandIcon } from '../BrandIcon';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-espresso text-brand-cream">
      <div className="container-site">
        <div className="flex flex-col gap-6 border-b border-brand-cream/15 py-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl">Share your feedback</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-cream/70">
              A short website experience survey helps us make ordering from AWICOFFEE easier. It takes a few minutes.
            </p>
          </div>
          <a
            href={FORMS.surveyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn shrink-0 bg-brand-cream text-espresso hover:bg-white">
            
            Take the survey
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo className="text-brand-cream" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-cream/70">
              {SITE.tagline} Roasting in North Sumatra since 1945, now pairing coffee with soybean innovation.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIAL_LINKS.map((s) =>
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`AWICOFFEE on ${s.label} (opens in a new tab)`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/20 transition-[border-color] duration-150 hover:border-brand-cream/60">
                
                  <BrandIcon name={s.id} className="h-[18px] w-[18px]" />
                </a>
              )}
            </div>
            <dl className="mt-6 space-y-2 text-sm">
              <div>
                <dt className="text-brand-cream/60">Orders & partnerships</dt>
                <dd>
                  <a href={WHATSAPP.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    WhatsApp {WHATSAPP.display}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {NAVIGATION.map((group) =>
          <div key={group.label}>
              <h2 className="text-sm font-medium">{group.label}</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-cream/70">
                {group.items.map((item) =>
              <li key={item.to}>
                    <Link to={item.to} className="transition-colors duration-150 hover:text-brand-cream">
                      {item.label}
                    </Link>
                  </li>
              )}
                {group.label === 'Product' &&
              <li>
                    <a
                  href="https://shopee.co.id/awicoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-brand-cream">
                  
                      Shopee store
                    </a>
                  </li>
              }
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-brand-cream/15 py-8">
          <h2 className="text-sm font-medium">Store locations</h2>
          <ul className="mt-4 grid gap-4 text-sm text-brand-cream/70 md:grid-cols-3">
            {stores.map((s) =>
            <li key={s.id}>
                <span className="block text-brand-cream">{s.city}</span>
                <span className="mt-1 block leading-relaxed">{s.address}</span>
                <a
                href={s.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block text-brand-cream underline decoration-brand-cream/30 underline-offset-4 hover:decoration-brand-cream">
                
                  Get directions<span className="sr-only"> to {s.city} store (opens in a new tab)</span>
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-brand-cream/15 py-6 text-xs text-brand-cream/60 md:flex-row md:justify-between">
          <p>© {year} AWICOFFEE. All rights reserved.</p>
          <p>Shipping, payment, and order terms are confirmed individually via WhatsApp.</p>
        </div>
      </div>
    </footer>);

}