import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
{ title: 'Explore our products', text: 'Browse the catalog by format or collection and open any product for details.' },
{ title: 'Add to your cart', text: 'Choose quantities and review your order. Your cart stays saved while you keep browsing.' },
{ title: 'Order through WhatsApp', text: 'Enter your name and address, and send the prepared message. Our team confirms shipping and payment.' }];


export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 id="how-title" className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            Ordering takes three steps
          </h2>
          <p className="mt-4 leading-relaxed text-muted">No account needed. Payment is arranged directly with our team.</p>
        </div>
        <div className="relative mt-14">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" aria-hidden="true" />
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) =>
            <li key={s.title} className="relative">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-line bg-canvas font-display text-xl">
                {i + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-muted">{s.text}</p>
            </li>
            )}
        </ol>
        </div>
        <Link to="/products" className="btn btn-primary mt-14">
          Browse the catalog
        </Link>
      </div>
    </section>);

}