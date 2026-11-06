import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../data/images';

const today = [
'Three generations of family roasting, rooted in Binjai, North Sumatra, since 1945.',
'Bringing Indonesian roasted coffee to customers in Singapore, Japan, and other markets, as reported by detikFinance.',
'Local stores in Surabaya, Jakarta, and Medan that keep us close to the people we serve.'];


const planned = [
{ title: 'Farmer partnerships', text: 'Longer-term relationships with local coffee and soybean growers.' },
{ title: 'Community education', text: 'Workshops sharing roasting and brewing knowledge.' },
{ title: 'CSR programme', text: 'A structured plan with public reporting once initiatives are underway.' }];


export function ImpactSection() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="scroll-mt-24 bg-espresso py-20 text-brand-cream md:py-28">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 id="impact-title" className="font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Coffee that gives back to where it comes from
            </h2>
            <div className="mt-10 aspect-[3/2] overflow-hidden rounded-3xl">
              <img
                src={images.farmers}
                alt="Farmers’ hands holding freshly harvested soybeans and coffee cherries"
                loading="lazy"
                width={900}
                height={600}
                className="h-full w-full object-cover" />
              
            </div>
          </div>
          <div className="lg:pt-4">
            <h3 className="font-display text-2xl">Where we stand today</h3>
            <ul className="mt-5 space-y-4">
              {today.map((t) =>
              <li key={t} className="flex gap-3 leading-relaxed text-brand-cream/80">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage" aria-hidden="true" />
                  {t}
                </li>
              )}
            </ul>

            <div className="mt-12 border-t border-brand-cream/15 pt-8">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl">What we’re building toward</h3>
                <span className="rounded-full border border-dashed border-brand-cream/40 px-2 py-0.5 text-[11px] text-brand-cream/70">
                  Future plans
                </span>
              </div>
              <dl className="mt-5 space-y-4">
                {planned.map((p) =>
                <div key={p.title}>
                    <dt className="font-medium">{p.title}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-brand-cream/70">{p.text}</dd>
                  </div>
                )}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-brand-cream/60">
                Plans are shared transparently and are not presented as completed programs. Results will be published only once
                verified.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/impact" className="btn bg-brand-cream text-espresso hover:bg-white">
                Explore our impact
              </Link>
              <Link to="/impact/csr" className="btn border border-brand-cream/30 text-brand-cream hover:border-brand-cream/70">
                CSR initiatives
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}