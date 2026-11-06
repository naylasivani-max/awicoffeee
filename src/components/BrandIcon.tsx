import React from 'react';
import { ShoppingBagIcon, MessageCircleIcon } from 'lucide-react';

type BrandIconName = 'instagram' | 'tiktok' | 'shopee' | 'whatsapp';

export function BrandIcon({ name, className = 'h-5 w-5' }: {name: BrandIconName;className?: string;}) {
  if (name === 'shopee') return <ShoppingBagIcon className={className} aria-hidden="true" />;
  if (name === 'whatsapp') return <MessageCircleIcon className={className} aria-hidden="true" />;
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>);

  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66a5.68 5.68 0 0 0-6.46 5.64A5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.68-5.69V9.01a7.33 7.33 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48Z" />
    </svg>);

}