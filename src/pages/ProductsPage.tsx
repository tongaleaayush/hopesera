import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  FileText,
  SlidersHorizontal,
  CheckCircle2,
  ShieldAlert,
  Package,
  Sparkles,
  ArrowUpRight,
  RotateCcw,
} from 'lucide-react';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  ProductCategory,
  ProductItem,
  filterProducts,
} from '../data/hopeseraData';
import { MolecularBackdrop } from '../components/MolecularBackdrop';

interface ProductsPageProps {
  initialCategory?: ProductCategory;
  onSelectProduct: (product: ProductItem) => void;
  onInquireProduct: (product: ProductItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory = 'All',
  onSelectProduct,
  onInquireProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [rxFilter, setRxFilter] = useState<'all' | 'rx' | 'nutra'>('all');

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const baseFiltered = filterProducts(PRODUCTS, selectedCategory, searchQuery);
  const displayedProducts = baseFiltered.filter((item) => {
    if (rxFilter === 'rx') return item.prescriptionRequired;
    if (rxFilter === 'nutra') return !item.prescriptionRequired;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-[#004C8C] via-[#063F73] to-[#0A6EBD] text-white py-16 lg:py-20 border-b border-white/10 overflow-hidden">
        <MolecularBackdrop variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#93C5FD]">
              HOPE SERA FORMULATION COMPENDIUM · 07 PRODUCTS
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Pharmaceutical &amp; Nutraceutical{' '}
              <span className="font-serif italic font-semibold text-[#6EE7B7]">
                Product Catalogue
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Inspect our specialized portfolio of fertility tablets, hormone replacement
              formulations, iron supplementation, L-Arginine sachets, and enriched protein
              powders. Click any formulation to view its technical monograph and pack gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <section className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 space-y-3">
          {/* Row 1: Search Input & Classification Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulation name or active ingredient..."
                aria-label="Search products or active ingredients"
                className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#0A6EBD] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors"
              />
            </div>

            <div className="inline-flex self-start sm:self-auto rounded-xl bg-slate-100 p-1 border border-slate-200">
              {(
                [
                  { id: 'all', label: 'All Types' },
                  { id: 'nutra', label: 'Nutraceutical' },
                  { id: 'rx', label: 'Prescription (Rx)' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setRxFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    rxFilter === tab.id
                      ? 'bg-white text-[#004C8C] shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Category Tabs */}
          <div
            role="tablist"
            aria-label="Product categories"
            className="flex items-center gap-2 overflow-x-auto lg:flex-wrap pb-1 lg:pb-0 no-scrollbar"
          >
            {PRODUCT_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#004C8C] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-[#EBF4FC] hover:text-[#0A6EBD]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Catalogue Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 text-xs font-mono text-slate-500">
            <span>
              SHOWING {displayedProducts.length} OF {PRODUCTS.length} FORMULATIONS
            </span>
            {(selectedCategory !== 'All' || searchQuery || rxFilter !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setRxFilter('all');
                }}
                className="inline-flex items-center gap-1.5 text-[#0A6EBD] hover:text-[#004C8C] font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {displayedProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4">
              <div className="text-lg font-bold text-slate-900">
                No matching formulations found
              </div>
              <p className="text-sm text-slate-600">
                Try clearing your search term or selecting &ldquo;All&rdquo; categories to view
                all 7 Hope Sera formulations.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setRxFilter('all');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0A6EBD] text-white text-xs font-semibold cursor-pointer"
              >
                Show All 7 Products
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <AnimatePresence mode="popLayout">
                {displayedProducts.map((product, index) => (
                  <motion.article
                    layout
                    key={product.id}
                    id={product.sectionAnchor}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#0A6EBD]/50 shadow-xs hover:shadow-lg transition-all overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Left 4 Columns: Studio Pack Showcase */}
                      <div
                        onClick={() => onSelectProduct(product)}
                        className="lg:col-span-4 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EBF4FC] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 cursor-pointer group"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                          <span>{product.code}</span>
                          <span
                            className={
                              product.prescriptionRequired
                                ? 'text-[#004C8C] font-semibold'
                                : 'text-[#2B8A00] font-semibold'
                            }
                          >
                            {product.prescriptionRequired
                              ? 'Rx · Medical Supervision'
                              : 'Nutraceutical Formulation'}
                          </span>
                        </div>

                        <div className="my-6 h-52 sm:h-60 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex items-center justify-between text-xs text-[#0A6EBD] font-semibold">
                          <span>{product.dosageForm}</span>
                          <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            <span>Inspect Pack</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* Right 8 Columns: Complete Technical Specification */}
                      <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="text-xs font-mono uppercase tracking-wider text-[#0A6EBD] font-semibold">
                              {product.category} · {product.classification}
                            </div>
                            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600">
                              <Package className="w-3.5 h-3.5 text-[#38B000]" />
                              <span>{product.packaging}</span>
                            </div>
                          </div>

                          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            {product.name}
                          </h2>

                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Composition & Active Ingredients */}
                          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-2.5">
                            <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                              DOCUMENTED COMPOSITION PROFILE
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                              {product.compositionSummary}
                            </p>
                            <div className="pt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
                              {product.activeIngredients.map((ing, i) => (
                                <React.Fragment key={ing}>
                                  <span className="font-medium text-[#004C8C]">{ing}</span>
                                  {i < product.activeIngredients.length - 1 && (
                                    <span aria-hidden="true" className="text-slate-300">
                                      ·
                                    </span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Footer: Clinical Note & Action Buttons */}
                        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                            {product.administrationNote}
                          </p>

                          <div className="flex items-center gap-3 shrink-0">
                            <button
                              type="button"
                              onClick={() => onSelectProduct(product)}
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EBF4FC] hover:bg-[#0A6EBD] text-[#004C8C] hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                            >
                              <FileText className="w-4 h-4" />
                              <span>Full Monograph</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => onInquireProduct(product)}
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#38B000] hover:bg-[#2F9600] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                            >
                              <span>B2B Enquiry</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Informational Medical Disclaimer */}
          <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3.5 text-xs text-slate-600 leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-[#0A6EBD] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900">
                Clinical &amp; Regulatory Notice:
              </span>{' '}
              Product information on this website is provided strictly for informational and B2B
              pharmaceutical reference. It does not constitute medical diagnosis or treatment
              advice. Prescription formulations (such as Letroserum-2.5 and Estradial) must be
              administered strictly under the supervision of a qualified medical practitioner.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
