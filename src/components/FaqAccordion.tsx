import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { Faq } from '../types/content';

export function FaqAccordion({ items }: {items: Faq[];}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((faq) => {
        const open = openId === faq.id;
        const panelId = `faq-panel-${faq.id}`;
        const buttonId = `faq-button-${faq.id}`;
        return (
          <li key={faq.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : faq.id)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left">
                
                <span className="text-base font-medium md:text-lg">{faq.question}</span>
                <PlusIcon
                  className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-200 ease-out-strong ${open ? 'rotate-45' : ''}`}
                  aria-hidden="true" />
                
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-200 ease-out-strong ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-5 pr-10 text-[15px] leading-relaxed text-muted">{faq.answer}</p>
              </div>
            </div>
          </li>);

      })}
    </ul>);

}