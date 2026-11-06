import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowUpRightIcon, CheckIcon } from 'lucide-react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ContentNotice } from '../../components/ContentNotice';
import { Seo } from '../../components/Seo';
import { ProductBadge } from '../../components/product/ProductBadge';
import { ProductCard } from '../../components/product/ProductCard';
import { QuantityControl } from '../../components/product/QuantityControl';
import { useCart } from '../../contexts/CartContext';
import { getCategory, getProductBySlug, products } from '../../data/products';
import { formatRupiah } from '../../utils/currency';
import { productSchema } from '../../utils/schema';
import { NotFound } from '../NotFound';

export function ProductDetail() {
  const { slug = '' } = useParams();
  const product = getProductBySlug(slug);
  const { addItem, openDrawer } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return <NotFound />;

  const category = getCategory(product.category);
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).concat(
    products.filter((p) => p.id !== product.id && p.category !== product.category)
  ).slice(0, 4);

  const handleAdd = () => {
    addItem(product.id, quantity);
    toast.success(`${quantity} × ${product.name} added to cart`, {
      action: { label: 'View cart', onClick: openDrawer }
    });
    setQuantity(1);
  };

  return (
    <>
      <Seo
        title={product.name}
        description={`${product.shortDescription} Order AWICOFFEE online and confirm via WhatsApp.`}
        path={`/products/${product.slug}`}
        image={product.image}
        type="product"
        jsonLd={productSchema(product)} />
      
      <div className="container-site py-8 md:py-12">
        <Breadcrumbs
          items={[
          { label: 'Products', to: '/products' },
          ...(category ? [{ label: category.label, to: `/products?category=${category.id}` }] : []),
          { label: product.name }]
          } />
        
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-tint">
            <img src={product.image} alt={product.imageAlt} width={800} height={800} className="h-full w-full object-cover" />
            {product.badge && <ProductBadge badge={product.badge} className="absolute left-5 top-5" />}
          </div>
          <div className="lg:py-4">
            <p className="text-sm text-muted">
              {category?.label} · {product.size}
            </p>
            <h1 className="mt-2 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">{product.name}</h1>
            <p className="mt-5 flex items-baseline gap-3">
              <span className="text-2xl font-semibold">{formatRupiah(product.price)}</span>
              {product.compareAtPrice &&
              <span className="text-lg text-muted line-through">
                  <span className="sr-only">Was </span>
                  {formatRupiah(product.compareAtPrice)}
                </span>
              }
            </p>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">{product.description}</p>
            <ul className="mt-6 space-y-2">
              {product.highlights.map((h) =>
              <li key={h} className="flex items-center gap-2.5 text-[15px]">
                  <CheckIcon className="h-4 w-4 text-sage-ink" aria-hidden="true" />
                  {h}
                </li>
              )}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuantityControl value={quantity} onChange={setQuantity} label={product.name} />
              <button type="button" onClick={handleAdd} className="btn btn-primary flex-1">
                Add to Cart — {formatRupiah(product.price * quantity)}
              </button>
            </div>
            <a
              href="https://shopee.co.id/awicoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-5">
              
              Or buy on Shopee
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>

            {product.isPlaceholder &&
            <ContentNotice title="Placeholder product information" className="mt-8">
                This product’s name, size, description, and price are editable placeholders. AWICOFFEE will confirm final details
                when you order.
              </ContentNotice>
            }
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Shipping is not included and is confirmed on WhatsApp. <Link to="/#faq" className="underline underline-offset-4">Read the FAQ</Link>.
            </p>
          </div>
        </div>

        <section aria-labelledby="related-title" className="mt-24 border-t border-line pt-14">
          <h2 id="related-title" className="font-display text-3xl">You may also like</h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) =>
            <li key={p.id}>
                <ProductCard product={p} />
              </li>
            )}
          </ul>
        </section>
      </div>
    </>);

}