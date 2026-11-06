import React from 'react';

export function DraftTag({ label = 'Draft' }: {label?: string;}) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted">
      {label}
    </span>);

}