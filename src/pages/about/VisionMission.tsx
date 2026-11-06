import React from 'react';
import { ContentNotice } from '../../components/ContentNotice';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';

const mission = [
'Craft distinctive coffee that brings Indonesian soybeans and coffee together.',
'Build fair, long-term relationships with local coffee and soybean farmers.',
'Run a careful, efficient business that grows responsibly.',
'Share coffee knowledge with our communities.'];


const values = [
{ title: 'Humility', text: 'Learn from customers and critics alike.' },
{ title: 'Perseverance', text: 'Respect the process, from roasting to relationships.' },
{ title: 'Thrift', text: 'Use resources wisely; waste nothing that still works.' },
{ title: 'Community', text: 'Grow together with the people around us.' }];


export function VisionMission() {
  return (
    <>
      <Seo
        title="Vision & Mission"
        description="AWICOFFEE’s direction and values: distinctive Indonesian soybean coffee, responsible growth, and support for local agricultural communities."
        path="/about/vision-mission" />
      
      <PageHeader
        breadcrumbs={[{ label: 'About Us', to: '/about/company-profile' }, { label: 'Vision & Mission' }]}
        title="Vision & Mission"
        intro="Where AWICOFFEE is heading, and the values that guide us." />
      
      <div className="container-site py-14 md:py-20">
        <ContentNotice title="Editable draft — not an official statement">
          The wording below is draft copy for AWICOFFEE to review and replace with its official vision and mission.
        </ContentNotice>

        <section aria-labelledby="vision-title" className="mt-14">
          <h2 id="vision-title" className="text-sm text-muted">Vision</h2>
          <p className="mt-3 max-w-4xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            To be Indonesia’s most loved soybean coffee brand — and proof that a family roastery can grow while lifting the
            communities around it.
          </p>
        </section>

        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <section aria-labelledby="mission-title">
            <h2 id="mission-title" className="font-display text-3xl">Mission</h2>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {mission.map((m, i) =>
              <li key={m} className="flex gap-5 py-5">
                  <span className="font-display text-xl text-sage-ink">{i + 1}</span>
                  <span className="leading-relaxed">{m}</span>
                </li>
              )}
            </ol>
          </section>
          <section aria-labelledby="values-title">
            <h2 id="values-title" className="font-display text-3xl">Values</h2>
            <dl className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {values.map((v) =>
              <div key={v.title}>
                  <dt className="font-display text-2xl">{v.title}</dt>
                  <dd className="mt-1.5 leading-relaxed text-muted">{v.text}</dd>
                </div>
              )}
            </dl>
          </section>
        </div>
      </div>
    </>);

}