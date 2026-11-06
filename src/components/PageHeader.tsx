import React from 'react';
import { Breadcrumbs, Crumb } from './Breadcrumbs';

interface PageHeaderProps {
  breadcrumbs: Crumb[];
  title: string;
  intro?: string;
  children?: React.ReactNode;
}

export function PageHeader({ breadcrumbs, title, intro, children }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-tint">
      <div className="container-site py-10 md:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{intro}</p>}
        {children}
      </div>
    </section>);

}