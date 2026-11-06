import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you are looking for could not be found." path="/404" />
      <section className="container-site flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="font-display text-7xl text-sage-ink">404</p>
        <h1 className="mt-4 font-display text-4xl font-medium">This page has gone cold</h1>
        <p className="mt-3 max-w-md text-muted">The page you’re looking for doesn’t exist or has moved.</p>
        <div className="mt-8 flex gap-3">
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/products" className="btn btn-secondary">Shop products</Link>
        </div>
      </section>
    </>);

}