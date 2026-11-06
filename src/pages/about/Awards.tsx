import React from 'react';
import { ArrowUpRightIcon, AwardIcon } from 'lucide-react';
import { ContentNotice } from '../../components/ContentNotice';
import { DraftTag } from '../../components/DraftTag';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';
import { DETIK_ARTICLE } from '../../data/site';

const reported = [
{ year: '2014', name: 'Product Quality Award', issuer: 'Marketing magazine' },
{ year: '2014', name: 'Indonesia Top Regional', issuer: 'SWA magazine' }];


const pendingFields = ['Exact award name', 'Recipient entity', 'Award category', 'Award years (2022–2025)'];

export function Awards() {
  return (
    <>
      <Seo
        title="Awards & Recognition"
        description="Recognition received by AWICOFFEE, as reported by detikFinance, with further awards published once verified."
        path="/about/awards" />
      
      <PageHeader
        breadcrumbs={[{ label: 'About Us', to: '/about/company-profile' }, { label: 'Awards' }]}
        title="Awards & Recognition"
        intro="We publish recognition only once its details can be verified." />
      
      <div className="container-site py-14 md:py-20">
        <section aria-labelledby="reported-title">
          <h2 id="reported-title" className="font-display text-3xl">Reported recognition</h2>
          <p className="mt-2 text-sm text-muted">As reported by {DETIK_ARTICLE.publication}, December 2023.</p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {reported.map((a) =>
            <li key={a.name} className="grid items-center gap-2 py-6 sm:grid-cols-[100px_1fr_auto] sm:gap-8">
                <span className="font-display text-2xl text-sage-ink">{a.year}</span>
                <span className="font-display text-2xl">{a.name}</span>
                <span className="text-sm text-muted">{a.issuer}</span>
              </li>
            )}
          </ul>
          <a href={DETIK_ARTICLE.url} target="_blank" rel="noopener noreferrer" className="link-arrow mt-5">
            View source
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens detikFinance in a new tab)</span>
          </a>
        </section>

        <section aria-labelledby="pending-title" className="mt-20 grid gap-8 rounded-3xl border border-dashed border-muted/40 bg-surface p-6 md:grid-cols-[auto_1fr] md:p-10">
          <AwardIcon className="h-10 w-10 text-brand-rose" aria-hidden="true" />
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 id="pending-title" className="font-display text-3xl">Top Brand 2022–2025</h2>
              <DraftTag label="Pending verification" />
            </div>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              Information about a Top Brand recognition has been supplied but is not yet published as an award claim. It will
              appear here once the following details are confirmed:
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {pendingFields.map((f) =>
              <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted" aria-hidden="true" />
                  {f}
                </li>
              )}
            </ul>
          </div>
        </section>

        <ContentNotice title="For the AWICOFFEE team" className="mt-10">
          Send certificates or official announcements to update this page. Award badges and logos will be added only with the
          issuer’s permission.
        </ContentNotice>
      </div>
    </>);

}