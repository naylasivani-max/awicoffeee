import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { DETIK_ARTICLE } from '../../data/site';

const milestones = [
{ year: '1945', text: 'Founded as a family coffee roastery in Binjai, North Sumatra' },
{ year: '2012', text: 'First export of roasted coffee, to a customer in Singapore' },
{ year: '2016', text: 'Joined the Indonesian Coffee Exporters Association (AEKI)' },
{ year: '2018–21', text: 'Invited to the Specialty Coffee Association of Japan event' }];


export function CredibilitySection() {
  return (
    <section aria-labelledby="credibility-title" className="border-y border-line bg-surface">
      <div className="container-site grid gap-10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <h2 id="credibility-title" className="text-sm text-muted">
            As featured in
          </h2>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight">detikFinance</p>
          <p className="mt-3 text-sm italic leading-relaxed text-muted">“{DETIK_ARTICLE.title}”</p>
          <a
            href={DETIK_ARTICLE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow mt-4">
            
            Read Full Article
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens detikFinance in a new tab)</span>
          </a>
        </div>
        <div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) =>
            <li key={m.year} className="border-l border-line pl-4">
                <p className="font-display text-2xl text-sage-ink">{m.year}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.text}</p>
              </li>
            )}
          </ul>
          <p className="mt-6 text-xs text-muted">Milestones as reported by detikFinance, December 2023.</p>
        </div>
      </div>
    </section>);

}