import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';
import { categories, products } from '../../data/products';

export function ProductCategories() {
  return (
    <>
      <Seo
        title="Product Categories"
        description="Shop AWICOFFEE by format: ground soybean coffee, whole bean, drip bags, ready-to-drink, and gift sets."
        path="/products/categories" />
      
      <PageHeader
        breadcrumbs={[{ label: 'Products', to: '/products' }, { label: 'Categories' }]}
        title="Product Categories"
        intro="Find the format that suits how — and where — you like to drink your coffee." />
      
      <div className="container-site py-12 md:py-16">
        <ul className="divide-y divide-line border-y border-line">
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.id).length;
            return (
              <li key={c.id}>
                <Link
                  to={`/products?category=${c.id}`}
                  className="group grid items-center gap-5 py-6 sm:grid-cols-[160px_1fr_auto] sm:gap-8">
                  
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-tint">
                    <img src={c.image} alt="" loading="lazy" width={320} height={240} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl">{c.label}</h2>
                    <p className="mt-1.5 max-w-lg leading-relaxed text-muted">{c.description}</p>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-medium">
                    {count} {count === 1 ? 'product' : 'products'}
                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform duration-150 ease-out-strong group-hover:translate-x-1"
                      aria-hidden="true" />
                    
                  </span>
                </Link>
              </li>);

          })}
        </ul>
      </div>
    </>);

}