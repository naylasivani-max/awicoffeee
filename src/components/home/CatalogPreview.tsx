import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { products } from '../../data/products';
import { Product } from '../../types/product';
import { ProductCard } from '../product/ProductCard';

type Tab = 'featured' | 'new' | 'bestsellers' | 'promotions';

const tabs: {id: Tab;label: string;filter: (p: Product) => boolean;}[] = [
{ id: 'featured', label: 'Featured', filter: (p) => p.featured },
{ id: 'new', label: 'New Arrivals', filter: (p) => p.badge === 'New' },
{ id: 'bestsellers', label: 'Bestsellers', filter: (p) => p.badge === 'Bestseller' },
{ id: 'promotions', label: 'Promotions', filter: (p) => p.badge === 'Promo' }];


export function CatalogPreview() {
  const [active, setActive] = useState<Tab>('featured');
  const current = tabs.find((t) => t.id === active) ?? tabs[0];
  const items = products.filter(current.filter).slice(0, 4);

  return (
    <section id="shop" aria-labelledby="catalog-title" className="border-t border-line py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 id="catalog-title" className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              Shop the collection
            </h2>
            <p className="mt-3 text-sm text-muted">Product names and prices shown are editable placeholders pending confirmation.</p>
          </div>
          <div role="tablist" aria-label="Product collections" className="flex gap-1 overflow-x-auto rounded-full border border-line bg-surface p-1">
            {tabs.map((t) =>
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              aria-controls="catalog-panel"
              onClick={() => setActive(t.id)}
              className={`h-9 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors duration-150 ${
              active === t.id ? 'bg-primary text-on-primary' : 'text-muted hover:text-ink'}`
              }>
              
                {t.label}
              </button>
            )}
          </div>
        </div>
        <div id="catalog-panel" role="tabpanel" className="mt-10">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((p) =>
            <li key={p.id}>
                <ProductCard product={p} />
              </li>
            )}
          </ul>
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/products" className="btn btn-secondary">
            View All Products
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>);

}