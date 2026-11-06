import React, { useState } from 'react';
import { ArrowUpRightIcon, LoaderCircleIcon } from 'lucide-react';

interface FormEmbedProps {
  title: string;
  embedUrl: string;
  externalUrl: string;
  externalLabel: string;
  height?: number;
}

/** Embeds a public Google Form with a loading state and an always-available external link. */
export function FormEmbed({ title, embedUrl, externalUrl, externalLabel, height = 900 }: FormEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="flex flex-col gap-3 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Form not loading? Open it in a new tab instead.</p>
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary h-10 px-4">
          {externalLabel}
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
      <div className="relative bg-white" style={{ height }}>
        {!loaded &&
        <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-[#6B5B50]" role="status">
            <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
            Loading form…
          </div>
        }
        <iframe
          title={title}
          src={embedUrl}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="relative h-full w-full border-0" />
        
      </div>
    </div>);

}