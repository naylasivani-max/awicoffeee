import React, { useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { NavGroup } from '../../types/content';

export function NavDropdown({ group }: {group: NavGroup;}) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const panelId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = pathname.startsWith(group.basePath);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!wrapperRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}>
      
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={`flex h-10 items-center gap-1 rounded-full px-3.5 text-sm font-medium transition-colors duration-150 hover:text-ink ${
        active ? 'text-ink' : 'text-muted'}`
        }>
        
        {group.label}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true" />
        
      </button>
      <AnimatePresence>
        {open &&
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
            <motion.div
            id={panelId}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="w-[320px] rounded-2xl border border-line bg-surface p-2 shadow-[0_12px_40px_-12px_rgba(43,31,25,0.25)]">
            
              <ul>
                {group.items.map((item) =>
              <li key={item.to}>
                    <Link
                  to={item.to}
                  aria-current={pathname === item.to ? 'page' : undefined}
                  className="block rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-tint">
                  
                      <span className="block text-sm font-medium text-ink">{item.label}</span>
                      <span className="mt-0.5 block text-sm text-muted">{item.description}</span>
                    </Link>
                  </li>
              )}
              </ul>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </div>);

}