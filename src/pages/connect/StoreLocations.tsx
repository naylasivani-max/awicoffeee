import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { Seo } from '../../components/Seo';
import { StoreCard } from '../../components/StoreCard';
import { stores } from '../../data/stores';
import { storeSchema } from '../../utils/schema';

export function StoreLocations() {
  return (
    <>
      <Seo
        title="Store Locations — Surabaya, Jakarta & Medan"
        description="Visit AWICOFFEE in Surabaya, Jakarta, and Medan. Find addresses and get directions on Google Maps."
        path="/connect/stores"
        jsonLd={storeSchema(stores)} />
      
      <PageHeader
        breadcrumbs={[{ label: 'Connect', to: '/connect/contact' }, { label: 'Store Locations' }]}
        title="Visit us"
        intro="Taste AWICOFFEE in person at one of our stores. Opening hours and store phone numbers will be added once confirmed." />
      
      <div className="container-site py-12 md:py-16">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((s) =>
          <li key={s.id}>
              <StoreCard store={s} />
            </li>
          )}
        </ul>
      </div>
    </>);

}