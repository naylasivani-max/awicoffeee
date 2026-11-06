import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { FormEmbed } from '../../components/FormEmbed';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';
import { FORMS, WHATSAPP } from '../../data/site';

const opportunities = [
{ title: 'Event sponsorship', text: 'Coffee for community, campus, and corporate events that fit our values. Apply using the form below.' },
{ title: 'Retail & reseller', text: 'Stock AWICOFFEE products in your café, shop, or office pantry.' },
{ title: 'Corporate gifting', text: 'Gift sets and bulk orders for clients, partners, and employees.' },
{ title: 'Community collaborations', text: 'Joint initiatives with farmer groups, schools, and local organizations.' }];


export function Partnership() {
  return (
    <>
      <Seo
        title="Partnership & Sponsorship"
        description="Partner with AWICOFFEE. Event organizers and organizations can submit sponsorship proposals and explore retail, gifting, and community collaborations."
        path="/connect/partnership" />
      
      <PageHeader
        breadcrumbs={[{ label: 'Connect', to: '/connect/contact' }, { label: 'Partnership' }]}
        title="Partner with AWICOFFEE"
        intro="We’re open to collaborations that bring good coffee to more people and support local communities." />
      
      <div className="container-site py-12 md:py-16">
        <section aria-labelledby="ways-title">
          <h2 id="ways-title" className="font-display text-3xl">Ways to work together</h2>
          <dl className="mt-8 grid gap-x-10 gap-y-8 border-t border-line pt-8 md:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((o) =>
            <div key={o.title}>
                <dt className="font-display text-2xl">{o.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{o.text}</dd>
              </div>
            )}
          </dl>
          <p className="mt-8 text-sm text-muted">
            For retail, gifting, or community enquiries, message us on{' '}
            <a href={WHATSAPP.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              WhatsApp {WHATSAPP.display}
            </a>
            .
          </p>
        </section>

        <section id="sponsorship" aria-labelledby="sponsorship-title" className="mt-20 scroll-mt-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 id="sponsorship-title" className="font-display text-4xl font-medium tracking-tight">Sponsorship application</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Event organizers and prospective partners can submit sponsorship proposals through this form. Submissions go
                directly to the AWICOFFEE team, who will follow up if there’s a fit.
              </p>
            </div>
            <a href={FORMS.sponsorshipUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary shrink-0">
              Apply for Sponsorship
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens Google Forms in a new tab)</span>
            </a>
          </div>
          <div className="mt-8">
            <FormEmbed
              title="AWICOFFEE sponsorship application form"
              embedUrl={FORMS.sponsorshipEmbed}
              externalUrl={FORMS.sponsorshipUrl}
              externalLabel="Open form"
              height={1000} />
            
          </div>
        </section>
      </div>
    </>);

}