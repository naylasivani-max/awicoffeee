import React from 'react';
import { Link } from 'react-router-dom';

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="pb-20 md:pb-28">
      <div className="container-site">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-brand-sage px-6 py-14 text-espresso md:grid-cols-[1.4fr_1fr] md:items-end md:px-14 md:py-20">
          <div>
            <h2 id="final-cta-title" className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              Make Every Cup Count.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-espresso/85">
              Every order supports a family roastery that has been part of North Sumatra’s coffee story since 1945 — and the
              communities we want to grow with.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end lg:flex-row lg:justify-end">
            <Link to="/products" className="btn h-[52px] bg-espresso px-7 text-brand-cream hover:bg-espresso/90">
              Shop AWICOFFEE
            </Link>
            <Link to="/connect/partnership" className="btn h-[52px] border border-espresso/40 px-7 text-espresso hover:border-espresso">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>);

}