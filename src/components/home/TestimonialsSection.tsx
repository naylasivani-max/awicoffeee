import React from 'react';
import { ArrowUpRightIcon, QuoteIcon } from 'lucide-react';
import { FORMS, SOCIAL_LINKS } from '../../data/site';

export function TestimonialsSection() {
  const instagram = SOCIAL_LINKS.find((s) => s.id === 'instagram');
  return (
    <section aria-labelledby="testimonials-title" className="bg-tint-rose py-20 md:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 id="testimonials-title" className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            In our customers’ words
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            We only publish feedback from real, verified AWICOFFEE customers. This space is ready for their stories.
          </p>
        </div>
        <div className="rounded-3xl border border-dashed border-ink/20 bg-surface p-8 md:p-10">
          <QuoteIcon className="h-8 w-8 text-brand-rose" aria-hidden="true" />
          <p className="mt-4 font-display text-2xl leading-snug text-muted">
            Verified customer reviews will appear here once collected and approved.
          </p>
          <p className="mt-3 text-sm text-muted">Placeholder — no customer names, ratings, or reviews have been added.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={FORMS.surveyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Share your feedback
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            {instagram &&
            <a href={instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                See us on Instagram
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            }
          </div>
        </div>
      </div>
    </section>);

}