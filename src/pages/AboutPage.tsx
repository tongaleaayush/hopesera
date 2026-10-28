import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  MapPin,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Microscope,
} from 'lucide-react';
import {
  VERIFIED_COMPANY,
  CORE_STRENGTHS,
  EMPOWERMENT_COMMITMENTS,
  PageRoute,
} from '../data/hopeseraData';
import { MolecularBackdrop } from '../components/MolecularBackdrop';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#004C8C] via-[#04396B] to-[#0A6EBD] text-white py-16 lg:py-22 border-b border-white/10 overflow-hidden">
        <MolecularBackdrop variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#93C5FD]">
              CORPORATE PROFILE · HOPE SERA PVT. LTD.
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Science-Led Pharmaceutical Care for{' '}
              <span className="font-serif italic font-semibold text-[#6EE7B7]">
                Reproductive Wellness.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {VERIFIED_COMPANY.overview} Guided by our enduring promise —{' '}
              <span className="font-serif italic font-semibold text-white">
                &ldquo;{VERIFIED_COMPANY.tagline}&rdquo;
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story & Laboratory Visual */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#0A6EBD] font-semibold">
                WHO WE ARE · PUNE, MAHARASHTRA
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Dedicated to Supporting Clinicians and Families Across India.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {VERIFIED_COMPANY.overview}
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                {VERIFIED_COMPANY.mission}
              </p>

              {/* Verified Corporate Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#004C8C] font-semibold">
                    <Building2 className="w-4 h-4 text-[#0A6EBD]" />
                    <span>Registered Office</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {VERIFIED_COMPANY.locations.officeAddress}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#004C8C] font-semibold">
                    <MapPin className="w-4 h-4 text-[#38B000]" />
                    <span>Company Address</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {VERIFIED_COMPANY.locations.companyAddress}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right 6 Columns: Actual About Photo + Video Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
                <img
                  src="/images/about_1.jpeg"
                  alt="Hope Sera Pharmaceutical Formulation and Quality Control"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              <div className="p-5 rounded-2xl bg-[#EBF4FC] border border-[#0A6EBD]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#004C8C] font-semibold">
                    THERAPEUTIC PORTFOLIO
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700">
                    7 specialized formulations spanning fertility tablets, hormone therapy, and
                    maternal nutrition.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0A6EBD] hover:bg-[#004C8C] text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>View Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 Core Strengths with Supplied /images/about/1..6.png */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#0A6EBD] font-semibold">
              OPERATIONAL PILLARS · CORE STRENGTHS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              Six Foundations of Hope Sera&rsquo;s Pharmaceutical Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {CORE_STRENGTHS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-1.5 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain scale-135"
                    />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0A6EBD]">
                    {item.index} · {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowering Women, Supporting Families */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#2B8A00] font-semibold">
              OUR COMMITMENT · EMPOWERING WOMEN, SUPPORTING FAMILIES
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              How We Uphold Our Responsibility in Reproductive Healthcare
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMPOWERMENT_COMMITMENTS.map((commitment) => (
              <div
                key={commitment.index}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-2"
              >
                <div className="text-xs font-mono font-bold text-[#0A6EBD]">
                  {commitment.index} · {commitment.title}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
