import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import {
  PageRoute,
  ProductCategory,
  PRODUCTS,
} from '../data/hopeseraData';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, category?: ProductCategory, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsPreviewOpen, setProductsPreviewOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsPreviewOpen(false);
  }, [currentRoute]);

  const navItems: { label: string; route: PageRoute; href: string }[] = [
    { label: 'Home', route: 'home', href: '/' },
    { label: 'About', route: 'about', href: '/about' },
    { label: 'Vision & Mission', route: 'vision', href: '/vision' },
    { label: 'Products', route: 'products', href: '/products' },
    { label: 'Careers', route: 'careers', href: '/careers' },
    { label: 'FAQs', route: 'faqs', href: '/faqs' },
    { label: 'Contact', route: 'contact', href: '/contact' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: PageRoute,
    category?: ProductCategory,
    hash?: string
  ) => {
    e.preventDefault();
    onNavigate(route, category, hash);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs'
          : 'bg-white border-b border-slate-200/70'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A6EBD] rounded-md"
          aria-label="Hope Sera Pvt. Ltd. — Home"
        >
          <img
            src="/images/logo.png"
            alt="Hope Sera Pvt. Ltd. — Always For You..."
            className="h-12 sm:h-13 w-auto object-contain scale-250 origin-left"
          />
        </a>

        {/* Zone 2: Primary Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;

            if (item.route === 'products') {
              return (
                <div
                  key={item.route}
                  className="relative"
                  onMouseEnter={() => setProductsPreviewOpen(true)}
                  onMouseLeave={() => setProductsPreviewOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, 'products', 'All')}
                      className={`relative py-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A6EBD] rounded-xs ${
                        isActive
                          ? 'text-[#0A6EBD] font-semibold'
                          : 'text-slate-600 hover:text-[#004C8C]'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#0A6EBD]"
                        />
                      )}
                    </a>
                    <button
                      type="button"
                      aria-label="Toggle products quick menu"
                      aria-expanded={productsPreviewOpen}
                      onClick={() => setProductsPreviewOpen((prev) => !prev)}
                      className="p-1 text-slate-500 hover:text-[#0A6EBD] rounded-xs focus-visible:outline-2 focus-visible:outline-[#0A6EBD]"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-150 ${
                          productsPreviewOpen ? 'rotate-180 text-[#0A6EBD]' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Mega-Preview Dropdown for All 7 Formulations */}
                  <AnimatePresence>
                    {productsPreviewOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.16 }}
                        className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3"
                      >
                        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xl">
                          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5">
                            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                              Therapeutic Formulations (07)
                            </span>
                            <a
                              href="/products"
                              onClick={(e) => {
                                setProductsPreviewOpen(false);
                                handleLinkClick(e, 'products', 'All');
                              }}
                              className="text-xs font-semibold text-[#0A6EBD] hover:text-[#004C8C] flex items-center gap-1 whitespace-nowrap"
                            >
                              View Complete Catalogue
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          </div>

                          <div className="grid grid-cols-2 gap-2.5">
                            {PRODUCTS.map((prod) => (
                              <a
                                key={prod.id}
                                href={`/products#${prod.sectionAnchor}`}
                                onClick={(e) => {
                                  setProductsPreviewOpen(false);
                                  handleLinkClick(
                                    e,
                                    'products',
                                    prod.category,
                                    prod.sectionAnchor
                                  );
                                }}
                                className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-[#EBF4FC]/60"
                              >
                                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-md border border-slate-200/80 bg-slate-50 p-1">
                                  <img
                                    src={prod.image}
                                    alt={prod.name}
                                    className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="truncate text-xs font-semibold text-slate-900 group-hover:text-[#0A6EBD]">
                                    {prod.name}
                                  </div>
                                  <div className="truncate text-[11px] text-slate-500">
                                    {prod.category}
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={item.route}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.route)}
                className={`relative py-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A6EBD] rounded-xs ${
                  isActive
                    ? 'text-[#0A6EBD] font-semibold'
                    : 'text-slate-600 hover:text-[#004C8C]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#0A6EBD]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#0A6EBD] px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-150 hover:bg-[#004C8C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A6EBD] whitespace-nowrap shrink-0"
          >
            <span>Partner Enquiry</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden focus-visible:outline-2 focus-visible:outline-[#0A6EBD]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-[1280px] px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <a
                    key={item.route}
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleLinkClick(e, item.route);
                    }}
                    className={`flex items-center justify-between rounded-lg px-3.5 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#EBF4FC] text-[#004C8C] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.route === 'products' && (
                      <span className="font-mono-tech text-xs text-slate-400">
                        07 Formulations
                      </span>
                    )}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-100">
                <a
                  href="/contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, 'contact');
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A6EBD] px-4 py-3 text-sm font-semibold text-white hover:bg-[#004C8C]"
                >
                  <span>Partner Enquiry</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
