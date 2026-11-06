import React from 'react';
import { MapPinIcon, NavigationIcon } from 'lucide-react';
import { Store } from '../types/content';
import { DraftTag } from './DraftTag';

export function StoreCard({ store }: {store: Store;}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="aspect-[4/3] bg-tint">
        <iframe
          title={`Map of ${store.listingName}, ${store.city}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(store.embedQuery)}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0" />
        
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-display text-3xl">{store.city}</h2>
          {!store.verified && <DraftTag label="Needs verification" />}
        </div>
        <p className="mt-1 text-sm text-muted">
          {store.region} · Map listing: {store.listingName}
        </p>
        <p className="mt-4 flex gap-2 text-[15px] leading-relaxed">
          <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-sage-ink" aria-hidden="true" />
          {store.address}
        </p>
        {store.note && <p className="mt-3 rounded-xl bg-tint px-3.5 py-3 text-sm leading-relaxed text-muted">{store.note}</p>}
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-muted">Opening hours</dt>
            <dd>To be confirmed</dd>
          </div>
          <div>
            <dt className="text-muted">Store phone</dt>
            <dd>To be confirmed</dd>
          </div>
        </dl>
        <div className="mt-auto pt-6">
          <a href={store.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
            <NavigationIcon className="h-4 w-4" aria-hidden="true" />
            Get Directions
            <span className="sr-only"> to {store.city} (opens Google Maps in a new tab)</span>
          </a>
        </div>
      </div>
    </article>);

}