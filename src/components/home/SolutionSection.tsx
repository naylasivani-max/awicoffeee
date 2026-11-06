import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../data/images';

const pillars = [
{
  title: 'The product',
  text: 'Soybean coffee — roasted soybeans brought into the cup alongside coffee, for a nutty, toasty character that stands apart.'
},
{
  title: 'The experience',
  text: 'Available in our stores in Surabaya, Jakarta, and Medan, on Shopee, and to order here with checkout through WhatsApp.'
},
{
  title: 'The connection',
  text: 'A roastery rooted in North Sumatra since 1945, working to grow alongside the farmers and communities that supply it.'
}];


export function SolutionSection() {
  return (
    <section aria-labelledby="solution-title" className="bg-tint py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 aspect-[3/4] overflow-hidden rounded-3xl">
            <img
              src={images.brewing}
              alt="A barista pouring water over a pour-over coffee brewer"
              loading="lazy"
              width={600}
              height={800}
              className="h-full w-full object-cover" />
            
          </div>
          <div className="col-span-2 mt-16 aspect-[3/4] overflow-hidden rounded-3xl">
            <img
              src={images.flatlay}
              alt="Roasted soybeans and roasted coffee beans in two ceramic bowls"
              loading="lazy"
              width={400}
              height={530}
              className="h-full w-full object-cover" />
            
          </div>
        </div>
        <div>
          <h2 id="solution-title" className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Where coffee culture meets soybean innovation
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">
            AWICOFFEE takes three generations of roasting know-how and applies it to a distinctly Indonesian idea: coffee made
            with soybeans.
          </p>
          <dl className="mt-10 space-y-7">
            {pillars.map((p) =>
            <div key={p.title} className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="font-medium">{p.title}</dt>
                <dd className="leading-relaxed text-muted">{p.text}</dd>
              </div>
            )}
          </dl>
          <Link to="/about/brand-story" className="btn mt-10 border border-line bg-white text-espresso hover:bg-[#f5f0e8]">
            Read our brand story
          </Link>
        </div>
      </div>
    </section>);

}