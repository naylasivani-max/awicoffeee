import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { BrandIcon } from '../../components/BrandIcon';
import { FormEmbed } from '../../components/FormEmbed';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';
import { FORMS, SOCIAL_LINKS, WHATSAPP } from '../../data/site';

export function Contact() {
  return (
    <>
      <Seo
        title="Contact AWICOFFEE"
        description="Contact AWICOFFEE on WhatsApp for orders and partnerships, follow us on Instagram and TikTok, or share feedback on our website."
        path="/connect/contact" />
      
      <PageHeader
        breadcrumbs={[{ label: 'Connect', to: '/connect/contact' }, { label: 'Contact' }]}
        title="Get in touch"
        intro="For orders, product questions, and partnerships, WhatsApp is the fastest way to reach our team." />
      
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-[2rem] bg-brand-sage p-8 text-espresso md:p-10">
            
            <BrandIcon name="whatsapp" className="h-8 w-8" />
            <div className="mt-16">
              <p className="text-sm text-espresso/80">WhatsApp</p>
              <p className="mt-1 font-display text-4xl md:text-5xl">{WHATSAPP.display}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 font-medium">
                Start a chat
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 ease-out-strong group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </p>
            </div>
            <span className="sr-only">(opens WhatsApp in a new tab)</span>
          </a>
          <div>
            <h2 className="font-display text-2xl">Follow and shop</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {SOCIAL_LINKS.map((s) =>
              <li key={s.id}>
                  <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-4 transition-colors duration-150 hover:text-sage-ink">
                  
                    <BrandIcon name={s.id} />
                    <span className="flex-1">
                      <span className="block font-medium">{s.label}</span>
                      <span className="block text-sm text-muted">{s.handle}</span>
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              )}
            </ul>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link to="/connect/stores" className="btn btn-secondary">Store locations</Link>
              <Link to="/connect/partnership" className="btn btn-secondary">Partnerships</Link>
            </div>
          </div>
        </div>

        <section id="feedback" aria-labelledby="feedback-title" className="mt-20 scroll-mt-24">
          <div className="max-w-2xl">
            <h2 id="feedback-title" className="font-display text-4xl font-medium tracking-tight">Website experience survey</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Tell us how easy it was to find products, use the cart, and order on WhatsApp. Your answers help AWICOFFEE improve
              this website.
            </p>
          </div>
          <div className="mt-8">
            <FormEmbed
              title="AWICOFFEE website experience survey"
              embedUrl={FORMS.surveyEmbed}
              externalUrl={FORMS.surveyUrl}
              externalLabel="Open survey" />
            
          </div>
        </section>
      </div>
    </>);

}