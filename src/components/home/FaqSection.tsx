import React from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../../data/faqs';
import { FaqAccordion } from '../FaqAccordion';

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 id="faq-title" className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            Can’t find what you’re looking for? Our team is happy to help.
          </p>
          <Link to="/connect/contact" className="link-arrow mt-6">
            Contact us
          </Link>
        </div>
        <FaqAccordion items={faqs} />
      </div>
    </section>);

}