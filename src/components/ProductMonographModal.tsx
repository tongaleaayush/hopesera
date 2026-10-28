import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, ShieldAlert, Check, Layers, PackageCheck } from 'lucide-react';
import { ProductItem } from '../data/hopeseraData';

interface ProductMonographModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onEnquireProduct: (product: ProductItem) => void;
}

export const ProductMonographModal: React.FC<ProductMonographModalProps> = ({
  product,
  onClose,
  onEnquireProduct,
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  useEffect(() => {
    setSelectedImageIdx(0);
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-end bg-slate-950/55 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="monograph-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-full w-full max-w-2xl flex-col overflow-y-auto bg-white shadow-2xl"
          >
            {/* Sticky Drawer Top Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono-tech font-semibold text-[#0A6EBD]">
                    {product.code}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.classification}</span>
                </div>
                <h2
                  id="monograph-title"
                  className="mt-0.5 text-xl font-bold text-slate-900"
                >
                  {product.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close product monograph"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-[#0A6EBD]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body Content */}
            <div className="flex-1 space-y-6 p-6 sm:p-8">
              {/* Product Pack Studio Viewer */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                <div className="relative flex h-72 sm:h-80 w-full items-center justify-center">
                  <motion.img
                    key={product.galleryImages[selectedImageIdx] || product.image}
                    initial={{ opacity: 0.4, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    src={product.galleryImages[selectedImageIdx] || product.image}
                    alt={`${product.name} packaging view ${selectedImageIdx + 1}`}
                    className="max-h-full max-w-full rounded-xl object-contain shadow-md"
                  />
                </div>

                {/* Multi-Angle Studio Switcher if multiple photos exist */}
                {product.galleryImages.length > 1 && (
                  <div className="mt-4 flex items-center justify-center gap-3 border-t border-slate-200/80 pt-4">
                    <span className="text-xs font-medium text-slate-500">
                      Pack Perspectives:
                    </span>
                    {product.galleryImages.map((imgSrc, idx) => (
                      <button
                        key={imgSrc}
                        type="button"
                        onClick={() => setSelectedImageIdx(idx)}
                        aria-label={`View pack angle ${idx + 1}`}
                        className={`h-14 w-16 overflow-hidden rounded-lg border-2 p-1 transition-all ${
                          selectedImageIdx === idx
                            ? 'border-[#0A6EBD] bg-white shadow-xs'
                            : 'border-slate-200 bg-white/60 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt={`${product.name} thumbnail ${idx + 1}`}
                          className="h-full w-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Technical Metadata Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <PackageCheck className="h-4 w-4 text-[#0A6EBD]" />
                    <span>Packaging Specification</span>
                  </div>
                  <p className="mt-1.5 font-mono-tech text-sm font-semibold text-slate-900">
                    {product.packaging}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Layers className="h-4 w-4 text-[#38B000]" />
                    <span>Dosage Form</span>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-slate-900">
                    {product.dosageForm}
                  </p>
                </div>
              </div>

              {/* Full Composition & Overview */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase">
                  Formulation Profile
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>
                <div className="rounded-xl border border-[#0A6EBD]/20 bg-[#EBF4FC]/60 p-4">
                  <div className="text-xs font-semibold text-[#004C8C]">
                    Label Composition Statement
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {product.compositionSummary}
                  </p>
                </div>
              </div>

              {/* Active Ingredients Breakdown */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase">
                  Key Active Constituents ({product.activeIngredients.length})
                </h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {product.activeIngredients.map((ingredient) => (
                    <div
                      key={ingredient}
                      className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#38B000]" />
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medical & Informational Guidance Notice */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#0A6EBD]" />
                  <div className="text-xs leading-relaxed text-slate-600">
                    <span className="font-semibold text-slate-900">
                      Clinical & Informational Notice:{' '}
                    </span>
                    {product.administrationNote} Product information on this portal is
                    provided strictly for educational and B2B reference and does not
                    constitute medical diagnosis or treatment advice.
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Bottom Action Bar */}
            <div className="sticky bottom-0 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 bg-white px-6 py-4">
              <div className="text-xs text-slate-500">
                Available for B2B hospital, clinic & wholesale procurement
              </div>
              <button
                type="button"
                onClick={() => onEnquireProduct(product)}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#0A6EBD] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#004C8C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A6EBD] whitespace-nowrap"
              >
                <span>Enquire About {product.shortName}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
