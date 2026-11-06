import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBagIcon, XIcon } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { formatRupiah } from '../../utils/currency';
import { CartLineItem } from './CartLineItem';

export function CartDrawer() {
  const { lines, itemCount, total, isDrawerOpen, closeDrawer } = useCart();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isDrawerOpen) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeDrawer();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isDrawerOpen, closeDrawer]);

  return (
    <AnimatePresence>
      {isDrawerOpen &&
      <div className="fixed inset-0 z-50">
          <motion.div
          className="absolute inset-0 bg-espresso/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeDrawer}
          aria-hidden="true" />
        
          <motion.aside
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-drawer-title"
          className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-canvas"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
          
            <div className="flex h-16 items-center justify-between border-b border-line px-5 md:h-[72px]">
              <h2 id="cart-drawer-title" className="font-display text-2xl">
                Your cart <span className="text-base text-muted">({itemCount})</span>
              </h2>
              <button
              ref={closeRef}
              type="button"
              onClick={closeDrawer}
              aria-label="Close cart"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line">
              
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {lines.length === 0 ?
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <ShoppingBagIcon className="h-10 w-10 text-muted" aria-hidden="true" />
                <p className="mt-4 font-display text-xl">Your cart is empty</p>
                <p className="mt-1 text-sm text-muted">Browse the catalog and add something you’d like to try.</p>
                <Link to="/products" onClick={closeDrawer} className="btn btn-primary mt-6">
                  Browse products
                </Link>
              </div> :

          <>
                <ul className="flex-1 divide-y divide-line overflow-y-auto px-5">
                  {lines.map((line) =>
              <CartLineItem key={line.product.id} line={line} onNavigate={closeDrawer} />
              )}
                </ul>
                <div className="border-t border-line px-5 py-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-muted">Total</span>
                    <span className="text-xl font-semibold tabular-nums">{formatRupiah(total)}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted">Shipping isn’t included — AWICOFFEE confirms it on WhatsApp.</p>
                  <div className="mt-4 grid gap-2">
                    <Link to="/cart#checkout" onClick={closeDrawer} className="btn btn-primary w-full">
                      Checkout via WhatsApp
                    </Link>
                    <button type="button" onClick={closeDrawer} className="btn btn-secondary w-full">
                      Continue shopping
                    </button>
                  </div>
                </div>
              </>
          }
          </motion.aside>
        </div>
      }
    </AnimatePresence>);

}