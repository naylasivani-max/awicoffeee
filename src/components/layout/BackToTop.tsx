import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible &&
      <motion.button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        className="fixed bottom-24 right-5 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-[0_8px_24px_-8px_rgba(43,31,25,0.3)] md:right-7">
        
          <ArrowUpIcon className="h-[18px] w-[18px]" aria-hidden="true" />
        </motion.button>
      }
    </AnimatePresence>);

}