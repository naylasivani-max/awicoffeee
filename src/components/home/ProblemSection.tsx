import React from 'react';

const challenges = [
{
  title: 'Coffee drinkers are looking for something new',
  text: 'Indonesia has a deep coffee culture, and many customers now want cups with a clear story and a character of their own — not another version of the same blend.'
},
{
  title: 'Farming communities need lasting partners',
  text: 'Coffee and soybean growers benefit when local brands buy consistently and build relationships over years, not single seasons.'
},
{
  title: 'Responsible business is now an expectation',
  text: 'Customers and corporate buyers increasingly ask where products come from and how they are made. Brands need to answer honestly, with facts rather than slogans.'
}];


export function ProblemSection() {
  return (
    <section aria-labelledby="problem-title" className="py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="problem-title" className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            The opportunity in a different kind of cup
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            We see three shifts shaping how Indonesians buy coffee — and each one is a reason AWICOFFEE does things the way it
            does.
          </p>
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {challenges.map((c) =>
          <li key={c.title} className="py-8">
              <h3 className="font-display text-2xl leading-snug">{c.title}</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{c.text}</p>
            </li>
          )}
        </ol>
      </div>
    </section>);

}