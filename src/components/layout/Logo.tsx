import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ className = '' }: {className?: string;}) {
  return (
    <Link to="/" aria-label="AWICOFFEE home" className={`inline-flex items-baseline gap-1 ${className}`}>
      <span className="font-display text-2xl font-semibold tracking-tight">AWI</span>
      <span className="text-[11px] font-medium tracking-[0.28em]">COFFEE</span>
    </Link>);

}