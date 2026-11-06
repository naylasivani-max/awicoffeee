import React from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { MAX_QUANTITY } from '../../contexts/CartContext';

interface QuantityControlProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  size?: 'sm' | 'md';
}

export function QuantityControl({ value, onChange, label, size = 'md' }: QuantityControlProps) {
  const h = size === 'sm' ? 'h-9' : 'h-12';
  const w = size === 'sm' ? 'w-9' : 'w-11';
  return (
    <div role="group" aria-label={`Quantity for ${label}`} className={`inline-flex ${h} items-center rounded-full border border-line bg-surface`}>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label={`Decrease quantity of ${label}`}
        className={`inline-flex ${h} ${w} items-center justify-center rounded-full text-ink transition-colors duration-150 hover:bg-tint disabled:opacity-40`}>
        
        <MinusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
      <span aria-live="polite" className="min-w-[2rem] text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= MAX_QUANTITY}
        aria-label={`Increase quantity of ${label}`}
        className={`inline-flex ${h} ${w} items-center justify-center rounded-full text-ink transition-colors duration-150 hover:bg-tint disabled:opacity-40`}>
        
        <PlusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>);

}