import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, XIcon } from 'lucide-react';
import { NAVIGATION, SOCIAL_LINKS } from '../../data/site';
import { BrandIcon } from '../BrandIcon';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>('Product');
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
          className="absolute inset-0 bg-espresso/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          aria-hidden="true" />
        
          <motion.nav
          aria-label="Mobile navigation"
          className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-canvas"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
          
            <div className="flex h-16 items-center justify-between border-b border-line px-5">
              <Logo />
              <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line">
              
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {NAVIGATION.map((group) => {
              const isOpen = expanded === group.label;
              return (
                <div key={group.label} className="border-b border-line">
                    <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : group.label)}
                    className="flex w-full items-center justify-between py-4 font-display text-xl">
                    
                      {group.label}
                      <ChevronDownIcon
                      className={`h-5 w-5 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true" />
                    
                    </button>
                    {isOpen &&
                  <ul className="pb-4">
                        {group.items.map((item) =>
                    <li key={item.to}>
                            <Link to={item.to} onClick={onClose} className="block py-2 text-[15px] text-muted hover:text-ink">
                              {item.label}
                            </Link>
                          </li>
                    )}
                      </ul>
                  }
                  </div>);

            })}
              <Link to="/cart" onClick={onClose} className="block border-b border-line py-4 font-display text-xl">
                Cart
              </Link>
            </div>
            <div className="border-t border-line px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {SOCIAL_LINKS.map((s) =>
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`AWICOFFEE on ${s.label} (opens in a new tab)`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line">
                  
                      <BrandIcon name={s.id} className="h-[18px] w-[18px]" />
                    </a>
                )}
                </div>
                <ThemeToggle />
              </div>
              <Link to="/products" onClick={onClose} className="btn btn-primary mt-4 w-full">
                Shop Our Coffee
              </Link>
            </div>
          </motion.nav>
        </div>
      }
    </AnimatePresence>);

}