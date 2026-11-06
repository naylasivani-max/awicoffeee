import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { SITE } from '../data/site';

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: {items: Crumb[];}) {
  const all: Crumb[] = [{ label: 'Home', to: '/' }, ...items];
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: `${SITE.url}${c.to}` } : {})
    }))
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'breadcrumb-jsonld';
    script.type = 'application/ld+json';
    script.textContent = schema;
    document.getElementById('breadcrumb-jsonld')?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [schema]);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {all.map((crumb, i) => {
          const last = i === all.length - 1;
          return (
            <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
              {crumb.to && !last ?
              <Link to={crumb.to} className="transition-colors duration-150 hover:text-ink">
                  {crumb.label}
                </Link> :

              <span aria-current={last ? 'page' : undefined} className={last ? 'text-ink' : undefined}>
                  {crumb.label}
                </span>
              }
              {!last && <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />}
            </li>);

        })}
      </ol>
    </nav>);

}