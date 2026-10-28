/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  PageRoute,
  ProductCategory,
  ProductItem,
  resolveRouteFromLocation,
} from './data/hopeseraData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductMonographModal } from './components/ProductMonographModal';
import { ChatbotWidget } from './components/ChatbotWidget';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VisionPage } from './pages/VisionPage';
import { ProductsPage } from './pages/ProductsPage';
import { CareersPage } from './pages/CareersPage';
import { FaqsPage } from './pages/FaqsPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPages';

const ROUTE_TO_PATH: Record<PageRoute, string> = {
  home: '/',
  about: '/about',
  vision: '/vision',
  products: '/products',
  careers: '/careers',
  faqs: '/faqs',
  contact: '/contact',
  'privacy-policy': '/privacy-policy',
  'terms-conditions': '/terms-conditions',
};

const ROUTE_TITLES: Record<PageRoute, string> = {
  home: 'Hope Sera Pvt. Ltd. (Hopesera) — Reproductive Wellness & Pharmaceutical Formulations',
  about: 'About Us — Hope Sera Pvt. Ltd. | Pharmaceutical Excellence in Pune',
  vision: 'Vision & Mission — Hope Sera Pvt. Ltd. | Always For You...',
  products: 'Products Catalogue — Hope Sera Pvt. Ltd. | Fertility & Maternal Formulations',
  careers: 'Careers — Hope Sera Pvt. Ltd. | Scientific & QA Opportunities',
  faqs: 'FAQs — Hope Sera Pvt. Ltd. | Manufacturing & B2B Information',
  contact: 'Contact Us — Hope Sera Pvt. Ltd. | Pune Headquarters & Enquiries',
  'privacy-policy': 'Privacy Policy — Hope Sera Pvt. Ltd.',
  'terms-conditions': 'Terms & Conditions — Hope Sera Pvt. Ltd.',
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);
  const [prefillSubject, setPrefillSubject] = useState<string>('');
  const [prefillMessage, setPrefillMessage] = useState<string>('');

  // Sync state with browser location (including legacy .html redirects & hash anchors)
  const syncFromWindowLocation = useCallback(() => {
    const { pathname, hash } = window.location;
    const resolved = resolveRouteFromLocation(pathname, hash);

    if (resolved.shouldRedirectHtml) {
      const targetUrl = `${resolved.canonicalPath}${hash || ''}`;
      window.history.replaceState({}, '', targetUrl);
    }

    setCurrentRoute(resolved.route);
    if (resolved.category) {
      setSelectedCategory(resolved.category);
    } else if (resolved.route === 'products' && !hash) {
      setSelectedCategory('All');
    }
  }, []);

  useEffect(() => {
    syncFromWindowLocation();
    const onPopState = () => syncFromWindowLocation();
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onPopState);
    };
  }, [syncFromWindowLocation]);

  // Update document title on route change
  useEffect(() => {
    document.title = ROUTE_TITLES[currentRoute] || ROUTE_TITLES.home;
  }, [currentRoute]);

  const handleNavigate = useCallback(
    (route: PageRoute, category?: ProductCategory, hash?: string) => {
      const basePath = ROUTE_TO_PATH[route] || '/';
      const cleanHash = hash ? (hash.startsWith('#') ? hash : `#${hash}`) : '';
      const targetUrl = `${basePath}${cleanHash}`;

      if (window.location.pathname + window.location.hash !== targetUrl) {
        window.history.pushState({}, '', targetUrl);
      }

      setCurrentRoute(route);
      if (category) {
        setSelectedCategory(category);
      } else if (route === 'products' && cleanHash) {
        const resolved = resolveRouteFromLocation('/products', cleanHash);
        setSelectedCategory(resolved.category || 'All');
      } else if (route === 'products') {
        setSelectedCategory('All');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  // Triggered when user clicks "Enquire" on a specific product card or monograph
  const handleInquireProduct = useCallback(
    (product: ProductItem) => {
      setActiveProductModal(null);
      setPrefillSubject(`Product Enquiry: ${product.name} (${product.code})`);
      setPrefillMessage(
        `Hello Hope Sera team, I would like to inquire about wholesale availability, pricing, and formulation monograph details for ${product.name} (${product.packaging}).`
      );
      handleNavigate('contact');
    },
    [handleNavigate]
  );

  // Triggered when user clicks "Apply for Position" on Careers page
  const handleApplyRole = useCallback(
    (roleTitle: string) => {
      setPrefillSubject(`Career Application: ${roleTitle}`);
      setPrefillMessage(
        `Hello Hope Sera HR & Compliance team, I am writing to express my interest in the ${roleTitle} position in Pune.`
      );
      handleNavigate('contact');
    },
    [handleNavigate]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#0A6EBD] selection:text-white">
      {/* Skip to Main Content for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#004C8C] focus:text-white focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Page View Container with Subtle Motion Transitions */}
      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {currentRoute === 'home' && (
              <HomePage
                onNavigate={(route, hash) => handleNavigate(route, undefined, hash)}
                onSelectProduct={(product) => setActiveProductModal(product)}
                onInquireProduct={handleInquireProduct}
              />
            )}

            {currentRoute === 'about' && (
              <AboutPage onNavigate={(route) => handleNavigate(route)} />
            )}

            {currentRoute === 'vision' && (
              <VisionPage onNavigate={(route) => handleNavigate(route)} />
            )}

            {currentRoute === 'products' && (
              <ProductsPage
                initialCategory={selectedCategory}
                onSelectProduct={(product) => setActiveProductModal(product)}
                onInquireProduct={handleInquireProduct}
              />
            )}

            {currentRoute === 'careers' && (
              <CareersPage
                onApplyRole={handleApplyRole}
                onNavigate={(route) => handleNavigate(route)}
              />
            )}

            {currentRoute === 'faqs' && (
              <FaqsPage onNavigate={(route) => handleNavigate(route)} />
            )}

            {currentRoute === 'contact' && (
              <ContactPage
                prefillSubject={prefillSubject}
                prefillMessage={prefillMessage}
              />
            )}

            {(currentRoute === 'privacy-policy' ||
              currentRoute === 'terms-conditions') && (
              <LegalPage
                type={currentRoute}
                onNavigate={(route) => handleNavigate(route)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-Over Product Monograph Drawer */}
      <ProductMonographModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onEnquireProduct={handleInquireProduct}
      />

      {/* Hope Sera Assistant (Client-Side Instant Knowledge Engine) */}
      <ChatbotWidget />
    </div>
  );
}
