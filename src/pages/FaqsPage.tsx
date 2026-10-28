import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { FAQS, FaqItem, PageRoute, VERIFIED_COMPANY } from '../data/hopeseraData';
import { MolecularBackdrop } from '../components/MolecularBackdrop';

interface FaqsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string>(FAQS[0]?.id || 'faq-1');
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | FaqItem['category']
  >('All');

  const categories: Array<'All' | FaqItem['category']> = [
    'All',
    'Quality & Manufacturing',
    'Formulations',
    'B2B & Logistics',
  ];

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQS
      : FAQS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#004C8C] via-[#053A6B] to-[#0A6EBD] text-white py-16 lg:py-22 border-b border-white/10 overflow-hidden">
        <MolecularBackdrop variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#93C5FD]">
              TECHNICAL &amp; DISTRIBUTION KNOWLEDGE BASE
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Frequently Asked{' '}
              <span className="font-serif italic font-semibold text-[#6EE7B7]">
                Questions
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Clear answers regarding our WHO-GMP aligned manufacturing standards, formulation
              bio-equivalence, Certificates of Analysis (CoA), and B2B procurement protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Category Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#004C8C] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-[#EBF4FC] hover:text-[#0A6EBD] border border-slate-200/90'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#0A6EBD] shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#0A6EBD] font-semibold">
                        0{index + 1} · {faq.category}
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h2>
                    </div>

                    <div
                      className={`mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#0A6EBD] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Direct Support Card */}
          <div className="mt-10 rounded-2xl bg-[#004C8C] text-white p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1.5 max-w-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6EE7B7]">
                DIRECT COMPLIANCE &amp; B2B DESK
              </div>
              <h3 className="text-xl font-bold">
                Need batch documentation or have a specific clinical question?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Reach out to our Pune headquarters at {VERIFIED_COMPANY.email}.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#38B000] hover:bg-[#2F9600] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
