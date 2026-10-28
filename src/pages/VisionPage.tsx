import React from 'react';
import { motion } from 'motion/react';
import { Compass, Target, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import {
  VERIFIED_COMPANY,
  GUIDING_VALUES,
  VALUE_PILLARS,
  PageRoute,
} from '../data/hopeseraData';
import { MolecularBackdrop } from '../components/MolecularBackdrop';

interface VisionPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const VisionPage: React.FC<VisionPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#004C8C] via-[#053B6E] to-[#0A6EBD] text-white py-16 lg:py-22 border-b border-white/10 overflow-hidden">
        <MolecularBackdrop variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#93C5FD]">
              DIRECTION &amp; ETHOS · HOPE SERA PVT. LTD.
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Our Vision, Mission &amp;{' '}
              <span className="font-serif italic font-semibold text-[#6EE7B7]">
                Guiding Principles
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Anchored by scientific integrity, consistent pharmaceutical quality, and empathy
              for every family&rsquo;s reproductive wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Vision & Mission Architectural Cards */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl bg-gradient-to-br from-[#004C8C] to-[#0A6EBD] text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#93C5FD]">
                    01 · OUR VISION
                  </span>
                  <Compass className="w-7 h-7 text-[#6EE7B7]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
                  A Trusted Leader in Reproductive Healthcare &amp; Maternal Wellness
                </h2>
                <p className="text-base text-slate-100 leading-relaxed">
                  {VERIFIED_COMPANY.vision}
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 text-xs font-mono text-[#93C5FD]">
                HOPE SERA PVT. LTD. · &ldquo;{VERIFIED_COMPANY.tagline}&rdquo;
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#0A6EBD] font-semibold">
                    02 · OUR MISSION
                  </span>
                  <Target className="w-7 h-7 text-[#38B000]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                  Safe, Effective &amp; High-Quality Formulations Through Innovation
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {VERIFIED_COMPANY.mission}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-mono text-slate-500">
                ETHICAL PRACTICES · SCIENTIFIC EXCELLENCE · PATIENT SAFETY
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Guiding Values */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#0A6EBD] font-semibold">
              ETHICAL FRAMEWORK · GUIDING VALUES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              Principles That Govern Every Batch We Produce
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {GUIDING_VALUES.map((val, index) => (
              <motion.div
                key={val.index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs space-y-3"
              >
                <div className="text-xs font-mono uppercase tracking-widest text-[#0A6EBD] font-semibold">
                  PRINCIPLE {val.index}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Dissolution Protocol */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#EBF4FC] border border-[#0A6EBD]/20 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#004C8C] font-semibold">
                EXPLORE OUR FORMULATIONS
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                See How Our Vision Translates Into Specialized Healthcare Products
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Inspect our 7 verified reproductive wellness and nutritional formulations or
                connect with our Pune team for institutional distribution inquiries.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#004C8C] hover:bg-[#0A6EBD] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>View Product Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#004C8C] border border-slate-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
