import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { ProductCatalog } from './pages/products/ProductCatalog';
import { ProductCategories } from './pages/products/ProductCategories';
import { ProductDetail } from './pages/products/ProductDetail';
import { ImpactListing } from './pages/impact/ImpactListing';
import { PostDetail } from './pages/impact/PostDetail';
import { CompanyProfile } from './pages/about/CompanyProfile';
import { BrandStory } from './pages/about/BrandStory';
import { VisionMission } from './pages/about/VisionMission';
import { Awards } from './pages/about/Awards';
import { StoreLocations } from './pages/connect/StoreLocations';
import { Contact } from './pages/connect/Contact';
import { Partnership } from './pages/connect/Partnership';
import { SocialMedia } from './pages/connect/SocialMedia';

export function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="products" element={<ProductCatalog mode="all" />} />
              <Route path="products/promotions" element={<ProductCatalog mode="promotions" />} />
              <Route path="products/categories" element={<ProductCategories />} />
              <Route path="products/:slug" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />

              <Route path="impact" element={<ImpactListing section="all" />} />
              <Route path="impact/news" element={<ImpactListing section="news" />} />
              <Route path="impact/events" element={<ImpactListing section="events" />} />
              <Route path="impact/articles" element={<ImpactListing section="articles" />} />
              <Route path="impact/csr" element={<ImpactListing section="csr" />} />
              <Route path="impact/:section/:slug" element={<PostDetail />} />

              <Route path="about" element={<Navigate to="/about/company-profile" replace />} />
              <Route path="about/company-profile" element={<CompanyProfile />} />
              <Route path="about/brand-story" element={<BrandStory />} />
              <Route path="about/vision-mission" element={<VisionMission />} />
              <Route path="about/awards" element={<Awards />} />

              <Route path="connect" element={<Navigate to="/connect/contact" replace />} />
              <Route path="connect/stores" element={<StoreLocations />} />
              <Route path="connect/contact" element={<Contact />} />
              <Route path="connect/partnership" element={<Partnership />} />
              <Route path="connect/social-media" element={<SocialMedia />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>);

}