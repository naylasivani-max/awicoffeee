import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useTheme } from '../../contexts/ThemeContext';
import { CartDrawer } from '../product/CartDrawer';
import { BackToTop } from './BackToTop';
import { ChatwayWidget } from './ChatwayWidget';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollManager } from './ScrollManager';

export function Layout() {
  const { theme } = useTheme();
  return (
    <div className="flex min-h-screen w-full flex-col bg-canvas text-ink">
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-primary px-4 py-2 text-on-primary focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <BackToTop />
      <ChatwayWidget />
      <Toaster theme={theme} position="bottom-left" richColors={false} closeButton />
    </div>);

}