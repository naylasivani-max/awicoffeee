import React from 'react';
import { InfoIcon } from 'lucide-react';

interface ContentNoticeProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentNotice({ title, children, className = '' }: ContentNoticeProps) {
  return (
    <div
      role="note"
      className={`flex gap-3 rounded-2xl border border-dashed border-muted/40 bg-surface px-4 py-3.5 text-sm ${className}`}>
      
      <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-ink" aria-hidden="true" />
      <div>
        <p className="font-medium text-ink">{title}</p>
        <div className="mt-0.5 leading-relaxed text-muted">{children}</div>
      </div>
    </div>);

}