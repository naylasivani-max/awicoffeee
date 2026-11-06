import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, MapPinIcon, MessageCircleIcon, ShoppingBagIcon } from 'lucide-react';
import { categories } from '../../data/products';

const buyingOptions = [
{
  icon: MessageCircleIcon,
  title: 'Order here, confirm on WhatsApp',
  text: 'Build your cart and send it to our team in one message.',
  to: '/products',
  external: false
},
{
  icon: ShoppingBagIcon,
  title: 'Shop on Shopee',
  text: 'Prefer a marketplace? Visit our official storefront.',
  to: 'https://shopee.co.id/awicoffee',
  external: true
},
{
  icon: MapPinIcon,
  title: 'Visit a store',
  text: 'Surabaya, Jakarta, and Medan.',
  to: '/connect/stores',
  external: false
}];


export function ProductFormatsSection() {
  const formats = categories.slice(0, 4);
  return (
    <section aria-labelledby="formats-title" className="py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 id="formats-title" className="max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            One idea, made for the way you drink
          </h2>
          <p className="max-w-sm leading-relaxed text-muted">
            From a morning tubruk to a chilled bottle on the go — choose the format that fits your day.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((c) =>
          <li key={c.id}>
              <Link to={`/products?category=${c.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-tint">
                  <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  width={500}
                  height={625}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.03]" />
                
                </div>
                <h3 className="mt-4 font-display text-2xl">{c.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{c.description}</p>
              </Link>
            </li>
          )}
        </ul>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {buyingOptions.map((o) => {
            const Icon = o.icon;
            const content =
            <>
                <Icon className="h-5 w-5 text-sage-ink" aria-hidden="true" />
                <span className="mt-4 flex items-center gap-1.5 font-medium">
                  {o.title}
                  {o.external && <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />}
                </span>
                <span className="mt-1 block text-sm text-muted">{o.text}</span>
              </>;

            const cls = 'block bg-surface p-6 transition-colors duration-150 hover:bg-tint';
            return o.external ?
            <a key={o.title} href={o.to} target="_blank" rel="noopener noreferrer" className={cls}>
                {content}
                <span className="sr-only">(opens in a new tab)</span>
              </a> :

            <Link key={o.title} to={o.to} className={cls}>
                {content}
              </Link>;

          })}
        </div>
      </div>
    </section>);

}