import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useCart } from '../../contexts/CartContext';
import { getCategory } from '../../data/products';
import { Product } from '../../types/product';
import { formatRupiah } from '../../utils/currency';
import { ProductBadge } from './ProductBadge';

export function ProductCard({ product }: {product: Product;}) {
  const { addItem, openDrawer } = useCart();
  const category = getCategory(product.category);
  const href = `/products/${product.slug}`;

  const handleAdd = () => {
    addItem(product.id, 1);
    toast.success(`${product.name} added to cart`, {
      action: { label: 'View cart', onClick: openDrawer }
    });
  };

  return (
    <article className="group flex h-full flex-col">
      <Link to={href} className="relative block aspect-square overflow-hidden rounded-2xl bg-tint" tabIndex={-1} aria-hidden="true">
        <img
          src={product.image}
          alt=""
          loading="lazy"
          width={600}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.03]" />
        
        {product.badge && <ProductBadge badge={product.badge} className="absolute left-3 top-3" />}
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs text-muted">
          {category?.label} · {product.size}
        </p>
        <h3 className="mt-1 font-display text-xl leading-snug">
          <Link to={href} className="hover:underline hover:decoration-line hover:underline-offset-4">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{product.shortDescription}</p>
        <div className="mt-auto pt-4">
          <p className="flex items-baseline gap-2">
            <span className="text-base font-semibold">{formatRupiah(product.price)}</span>
            {product.compareAtPrice &&
            <span className="text-sm text-muted line-through">
                <span className="sr-only">Was </span>
                {formatRupiah(product.compareAtPrice)}
              </span>
            }
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link to={href} className="btn btn-secondary h-10 px-3" aria-label={`View details for ${product.name}`}>
              View Details
            </Link>
            <button type="button" onClick={handleAdd} className="btn btn-primary h-10 px-3" aria-label={`Add ${product.name} to cart`}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </article>);

}