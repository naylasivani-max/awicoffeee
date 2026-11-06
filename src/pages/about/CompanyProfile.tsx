import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';
import { images } from '../../data/images';
import { organizationSchema } from '../../utils/schema';

const facts = [
{ label: 'Roots', value: 'Binjai, North Sumatra, 1945' },
{ label: 'Stores', value: 'Surabaya · Jakarta · Medan' },
{ label: 'Online', value: 'This website (WhatsApp checkout) and Shopee' },
{ label: 'Industry body', value: 'Indonesian Coffee Exporters Association (AEKI), since 2016' }];


const sections = [
{
  title: 'Business concept',
  body: 'AWICOFFEE is an Indonesian coffee brand built on a family roastery founded in Binjai, North Sumatra, in 1945. Today, the brand is known for soybean coffee (kopi kedelai) — bringing roasted soybeans and coffee together in products designed for everyday Indonesian coffee drinkers.'
},
{
  title: 'Products',
  body: 'The range covers soybean coffee alongside classic roasts, in formats such as ground coffee, whole beans, and single-serve drip bags. Full product specifications will be published on each product page once confirmed.'
},
{
  title: 'Brand positioning',
  body: 'Premium but approachable: a heritage roastery with a distinctive product, aimed at young professionals, conscious consumers, and businesses looking for an Indonesian brand with a real story.'
},
{
  title: 'Operations',
  body: 'According to detikFinance, the business sells through physical stores, its own website, and e-commerce platforms, and has exported roasted coffee to markets including Singapore, Hong Kong, Japan, China, Malaysia, Taiwan, Europe, the United States, and Australia. It has also obtained halal certification.'
}];


export function CompanyProfile() {
  return (
    <>
      <Seo
        title="Company Profile"
        description="AWICOFFEE is an Indonesian soybean coffee brand built on a North Sumatran family roastery founded in 1945. Learn about our products, positioning, and operations."
        path="/about/company-profile"
        jsonLd={organizationSchema()} />
      
      <PageHeader
        breadcrumbs={[{ label: 'About Us', to: '/about/company-profile' }, { label: 'Company Profile' }]}
        title="Company Profile"
        intro="A heritage Indonesian roastery, now known for soybean coffee." />
      
      <div className="container-site grid gap-14 py-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20 md:py-20">
        <div className="space-y-12">
          {sections.map((s) =>
          <section key={s.title} aria-labelledby={`cp-${s.title}`}>
              <h2 id={`cp-${s.title}`} className="font-display text-3xl">
                {s.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-muted">{s.body}</p>
            </section>
          )}
          <p className="text-sm text-muted">
            Historical and operational facts are drawn from detikFinance’s December 2023 profile.{' '}
            <Link to="/about/brand-story" className="underline underline-offset-4">
              Read our brand story
            </Link>
            .
          </p>
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <img src={images.store} alt="Interior of a warm, minimalist AWICOFFEE-style coffee shop" loading="lazy" width={600} height={450} className="h-full w-full object-cover" />
          </div>
          <h2 className="mt-8 font-display text-2xl">At a glance</h2>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {facts.map((f) =>
            <div key={f.label} className="grid grid-cols-[120px_1fr] gap-4 py-3.5 text-sm">
                <dt className="text-muted">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            )}
          </dl>
        </aside>
      </div>
    </>);

}