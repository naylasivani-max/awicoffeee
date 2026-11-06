import React from 'react';
import { ProductBadge as Badge } from '../../types/product';

const styles: Record<Badge, string> = {
  Bestseller: 'bg-brand-cream text-espresso',
  New: 'bg-brand-sage text-espresso',
  Promo: 'bg-brand-rose text-espresso'
};

export function ProductBadge({ badge, className = '' }: {badge: Badge;className?: string;}) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[badge]} ${className}`}>
      {badge}
    </span>);

}