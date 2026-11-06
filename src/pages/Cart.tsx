import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Seo } from '../components/Seo';
import { CartLineItem } from '../components/product/CartLineItem';
import { CheckoutForm } from '../components/product/CheckoutForm';
import { useCart } from '../contexts/CartContext';
import { formatRupiah } from '../utils/currency';

export function Cart() {
  const { lines, itemCount, total } = useCart();

  return (
    <>
      <Seo
        title="Your Cart & WhatsApp Checkout"
        description="Review your AWICOFFEE order, adjust quantities, and send it to our team through WhatsApp."
        path="/cart" />
      
      <PageHeader
        breadcrumbs={[{ label: 'Cart' }]}
        title="Your cart"
        intro="Review your items, then send your order to AWICOFFEE on WhatsApp." />
      
      <div className="container-site py-10 md:py-14">
        {lines.length === 0 ?
        <div className="mx-auto max-w-md py-16 text-center">
            <ShoppingBagIcon className="mx-auto h-10 w-10 text-muted" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl">Your cart is empty</h2>
            <p className="mt-2 text-muted">Explore our soybean coffee and classic roasts to get started.</p>
            <Link to="/products" className="btn btn-primary mt-8">
              Shop Our Coffee
            </Link>
          </div> :

        <div className="grid gap-12 lg:grid-cols-[1fr_440px] lg:gap-16">
            <section aria-labelledby="cart-items-title">
              <div className="flex items-baseline justify-between">
                <h2 id="cart-items-title" className="font-display text-2xl">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </h2>
                <Link to="/products" className="text-sm text-muted underline underline-offset-4 hover:text-ink">
                  Continue shopping
                </Link>
              </div>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {lines.map((line) =>
              <CartLineItem key={line.product.id} line={line} />
              )}
              </ul>
              <dl className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">Subtotal</dt>
                  <dd className="tabular-nums">{formatRupiah(total)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Shipping</dt>
                  <dd>Confirmed on WhatsApp</dd>
                </div>
                <div className="flex justify-between border-t border-line pt-3 text-base">
                  <dt className="font-medium">Total order</dt>
                  <dd className="text-xl font-semibold tabular-nums">{formatRupiah(total)}</dd>
                </div>
              </dl>
            </section>

            <section id="checkout" aria-labelledby="checkout-title" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-line bg-tint p-6 md:p-8">
                <h2 id="checkout-title" className="font-display text-3xl">Checkout</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We’ll prepare your order as a WhatsApp message to <span className="text-ink">AWICOFFEE</span>. Send it, then
                  wait for our team to confirm.
                </p>
                <div className="mt-6">
                  <CheckoutForm />
                </div>
              </div>
            </section>
          </div>
        }
      </div>
    </>);

}