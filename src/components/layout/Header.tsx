import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, ShoppingBagIcon } from 'lucide-react';
import { NAVIGATION } from '../../data/site';
import { useCart } from '../../contexts/CartContext';
import { Logo } from './Logo';
import { NavDropdown } from './NavDropdown';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const { itemCount, openDrawer } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b bg-canvas/90 backdrop-blur-md transition-[border-color] duration-200 ${
        scrolled ? 'border-line' : 'border-transparent'}`
        }>
        
        <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Logo />
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAVIGATION.map((group) =>
              <li key={group.label}>
                  <NavDropdown group={group} />
                </li>
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              onClick={openDrawer}
              aria-label={`Open cart, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition-[border-color] duration-150 hover:border-ink/30">
              
              <ShoppingBagIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              {itemCount > 0 &&
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-brand-sage px-1 text-[11px] font-semibold text-espresso">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              }
            </button>
            <Link to="/products" className="btn btn-primary hidden h-10 px-5 xl:inline-flex">
              Shop Our Coffee
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden">
              
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={closeMobile} />
    </>);

}