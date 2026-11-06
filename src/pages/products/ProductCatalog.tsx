import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';
import { ContentNotice } from '../../components/ContentNotice';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';
import { ProductCard } from '../../components/product/ProductCard';
import { categories, products } from '../../data/products';

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'name';

interface ProductCatalogProps {
  mode: 'all' | 'promotions';
}

export function ProductCatalog({ mode }: ProductCatalogProps) {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortKey>('featured');
  const category = params.get('category') ?? 'all';
  const isPromo = mode === 'promotions';

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.
    filter((p) => isPromo ? Boolean(p.compareAtPrice) || p.badge === 'Promo' : true).
    filter((p) => category === 'all' || p.category === category).
    filter((p) => !q || `${p.name} ${p.shortDescription}`.toLowerCase().includes(q));
    const sorted = [...list];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'featured') sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    return sorted;
  }, [query, sort, category, isPromo]);

  const setCategory = (id: string) => {
    const next = new URLSearchParams(params);
    if (id === 'all') next.delete('category');else
    next.set('category', id);
    setParams(next, { replace: true });
  };

  const title = isPromo ? 'Promotions' : 'All Products';
  const path = isPromo ? '/products/promotions' : '/products';

  return (
    <>
      <Seo
        title={isPromo ? 'Coffee Promotions & Bundles' : 'Shop Soybean Coffee — All Products'}
        description={
        isPromo ?
        'Current AWICOFFEE offers on soybean coffee, drip bags, and gift sets. Order online and confirm via WhatsApp.' :
        'Browse the AWICOFFEE catalog of soybean coffee, ground and whole bean coffee, drip bags, and gift sets from an Indonesian family roastery.'
        }
        path={path} />
      
      <PageHeader
        breadcrumbs={isPromo ? [{ label: 'Products', to: '/products' }, { label: 'Promotions' }] : [{ label: 'Products' }]}
        title={title}
        intro={
        isPromo ?
        'Current offers on selected AWICOFFEE products.' :
        'Soybean coffee and classic roasts from our North Sumatra roastery. Add to cart and confirm your order on WhatsApp.'
        } />
      

      <div className="container-site py-10 md:py-14">
        <ContentNotice title="Sample product data">
          Product names, sizes, descriptions, and prices are editable placeholders awaiting confirmation from AWICOFFEE. The team
          confirms final availability and price when you send your order.
        </ContentNotice>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by category">
            {[{ id: 'all', label: 'All' }, ...categories].map((c) => {
              const active = category === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(c.id)}
                  className={`h-10 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors duration-150 ${
                  active ? 'border-primary bg-primary text-on-primary' : 'border-line bg-surface text-muted hover:text-ink'}`
                  }>
                  
                  {c.label}
                </button>);

            })}
          </div>
          <div className="flex gap-3">
            <div className="relative flex-1 lg:w-64">
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="input h-10 py-0 pl-10" />
              
            </div>
            <label htmlFor="product-sort" className="sr-only">
              Sort products
            </label>
            <select
              id="product-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="input h-10 w-auto py-0 pr-8">
              
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          {results.length} {results.length === 1 ? 'product' : 'products'}
        </p>

        {results.length > 0 ?
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((p) =>
          <li key={p.id}>
                <ProductCard product={p} />
              </li>
          )}
          </ul> :

        <div className="mt-6 rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <p className="font-display text-2xl">No products match your filters</p>
            <p className="mt-2 text-sm text-muted">Try a different search term or category.</p>
            <button
            type="button"
            onClick={() => {
              setQuery('');
              setCategory('all');
            }}
            className="btn btn-secondary mt-6">
            
              Clear filters
            </button>
          </div>
        }

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">Prefer to shop on a marketplace?</p>
          <div className="flex gap-3">
            <Link to="/products/categories" className="btn btn-secondary h-10 px-4">
              Browse categories
            </Link>
            <a href="https://shopee.co.id/awicoffee" target="_blank" rel="noopener noreferrer" className="btn btn-secondary h-10 px-4">
              Shop on Shopee<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </>);

}