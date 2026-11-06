import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2Icon } from 'lucide-react';
import { CartLine, useCart } from '../../contexts/CartContext';
import { formatRupiah } from '../../utils/currency';
import { QuantityControl } from './QuantityControl';

interface CartLineItemProps {
  line: CartLine;
  onNavigate?: () => void;
}

export function CartLineItem({ line, onNavigate }: CartLineItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity, subtotal } = line;

  return (
    <li className="flex gap-4 py-5">
      <Link
        to={`/products/${product.slug}`}
        onClick={onNavigate}
        className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-tint"
        tabIndex={-1}
        aria-hidden="true">
        
        <img src={product.image} alt="" width={80} height={80} loading="lazy" className="h-full w-full object-cover" />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link to={`/products/${product.slug}`} onClick={onNavigate} className="font-medium leading-snug hover:underline">
              {product.name}
            </Link>
            <p className="mt-0.5 text-sm text-muted">
              {formatRupiah(product.price)} · {product.size}
            </p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            aria-label={`Remove ${product.name} from cart`}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-tint hover:text-ink">
            
            <Trash2Icon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <QuantityControl size="sm" value={quantity} label={product.name} onChange={(q) => updateQuantity(product.id, q)} />
          <p className="text-sm font-semibold tabular-nums">
            <span className="sr-only">Subtotal </span>
            {formatRupiah(subtotal)}
          </p>
        </div>
      </div>
    </li>);

}