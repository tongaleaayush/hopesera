import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Microscope,
  ShieldCheck,
  FlaskConical,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileText,
  Building2,
  PhoneCall,
} from 'lucide-react';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  CORE_STRENGTHS,
  VALUE_PILLARS,
  EMPOWERMENT_COMMITMENTS,
  VERIFIED_COMPANY,
  PageRoute,
  ProductCategory,
  ProductItem,
  filterProducts,
} from '../data/hopeseraData';
import { MolecularBackdrop } from '../components/MolecularBackdrop';

interface HomePageProps {
  onNavigate: (route: PageRoute, hash?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onInquireProduct: (product: ProductItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onInquireProduct,
}) => {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const bgVideoRef = React.useRef<HTMLVideoElement | null>(null);

  // Ensure background hero video plays automatically in a continuous loop
  useEffect(() => {
    const videoEl = bgVideoRef.current;
    if (!videoEl) return;
    videoEl.muted = true;
    videoEl.loop = true;
    videoEl.playsInline = true;
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsVideoPlaying(true))
        .catch(() => {
          // Retry muted playback if browser policies require explicit muted attribute
          videoEl.muted = true;
          videoEl.play().catch(() => { });
        });
    }
  }, []);

  // Auto-advance product spotlight every 5.5s
  useEffect(() => {
    const timer = window.setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const activeSpotlight = PRODUCTS[spotlightIndex];
  const filteredHomeProducts = filterProducts(PRODUCTS, selectedCategory);

  const toggleVideoPlay = () => {
    if (!bgVideoRef.current) return;
    if (bgVideoRef.current.paused) {
      bgVideoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      bgVideoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION — Full-Bleed Continuous Loop Background Video + Clinical Overlay */}
      <section className="relative bg-[#021B38] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-white/10 overflow-hidden">
        {/* Continuous Loop Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={bgVideoRef}
            id="heroBackgroundVideo"
            src="/images/home_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center scale-[1.02]"
          />
          {/* Balanced Clinical Scrim so Video Shines Through While Preserving Contrast */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#021B38]/90 via-[#004C8C]/74 to-[#021B38]/68"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#021B38]/85 via-transparent to-[#021B38]/40"
          />
        </div>

        <MolecularBackdrop variant="dark" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left 7 Columns: Editorial Narrative & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#7CC4FA]">
                <span>HOPE SERA PVT. LTD.</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#6EE7B7]">REPRODUCTIVE WELLNESS</span>
                <span aria-hidden="true">·</span>
                <span>PUNE, INDIA</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.55rem] font-bold tracking-tight leading-[1.06] text-white drop-shadow-sm">
                Advancing Reproductive{' '}
                <span className="font-serif italic font-semibold text-[#93C5FD]">
                  Wellness
                </span>{' '}
                Through Precision Formulation
              </h1>

              <p className="text-base sm:text-lg text-slate-100/95 leading-relaxed max-w-2xl drop-shadow-xs">
                {VERIFIED_COMPANY.overview} Focused on fertility tablets, hormone therapy,
                maternal hematinics, and amino-acid supplementation — guided by our commitment:{' '}
                <span className="font-serif italic text-white font-semibold">
                  &ldquo;{VERIFIED_COMPANY.tagline}&rdquo;
                </span>
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#38B000] hover:bg-[#2F9600] text-white font-semibold text-sm shadow-lg shadow-[#38B000]/25 transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Explore Product Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 font-semibold text-sm backdrop-blur-md transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <PhoneCall className="w-4 h-4 text-[#7CC4FA]" />
                  <span>Partner &amp; B2B Enquiry</span>
                </button>
              </div>

              {/* Architectural Ledger Metrics (Grounded strictly in verified data) */}
              <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                    07
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5">
                    Specialized Formulations
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#6EE7B7] tabular-nums">
                    05
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5">
                    Therapeutic Categories
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#93C5FD]">
                    WHO-GMP
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5">
                    Aligned QA Standards
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right 5 Columns: Interactive Formulation Spotlight Console */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-[#021E3D]/75 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">


                {/* Spotlight Content */}
                <div className="p-5 sm:p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`spotlight-${activeSpotlight.id}`}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-[#93C5FD]">
                        <span>
                          {activeSpotlight.code} · {activeSpotlight.category}
                        </span>
                        <span>
                          {spotlightIndex + 1} / {PRODUCTS.length}
                        </span>
                      </div>

                      {/* Pack Image Stage */}
                      <div
                        onClick={() => onSelectProduct(activeSpotlight)}
                        className="group relative h-56 sm:h-64 rounded-xl bg-gradient-to-b from-white via-[#F4F9FE] to-[#E5F0FA] p-4 flex items-center justify-center cursor-pointer overflow-hidden shadow-inner"
                      >
                        <motion.img
                          src={activeSpotlight.image}
                          alt={activeSpotlight.name}
                          className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-2.5 right-2.5 bg-[#004C8C]/90 text-white text-[11px] font-medium px-2.5 py-1 rounded-md opacity-90 group-hover:bg-[#0A6EBD] transition-colors">
                          Inspect Monograph →
                        </div>
                      </div>

                      {/* Product Spotlight Metadata */}
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h2 className="text-xl font-bold text-white">
                            {activeSpotlight.name}
                          </h2>
                          <span className="text-xs font-mono text-[#6EE7B7] shrink-0">
                            {activeSpotlight.packaging.split('(')[0].trim()}
                          </span>
                        </div>
                        <p className="text-xs text-slate-200 mt-1.5 line-clamp-2 leading-relaxed">
                          {activeSpotlight.description}
                        </p>
                      </div>

                      {/* Carousel Controls */}
                      <div className="pt-2 flex items-center justify-between border-t border-white/15">
                        <div className="flex items-center gap-1.5">
                          {PRODUCTS.map((item, idx) => (
                            <button
                              key={item.id}
                              type="button"
                              aria-label={`Show ${item.name}`}
                              onClick={() => setSpotlightIndex(idx)}
                              className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === spotlightIndex
                                ? 'w-6 bg-[#38B000]'
                                : 'w-1.5 bg-white/30 hover:bg-white/60'
                                }`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            aria-label="Previous product"
                            onClick={() =>
                              setSpotlightIndex(
                                (prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length
                              )
                            }
                            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            aria-label="Next product"
                            onClick={() =>
                              setSpotlightIndex((prev) => (prev + 1) % PRODUCTS.length)
                            }
                            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPLETE FORMULATION MATRIX (Interactive Catalogue Preview) */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#0A6EBD] font-semibold">
                THERAPEUTIC PORTFOLIO · 07 VERIFIED FORMULATIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                Precision Formulations for{' '}
                <span className="font-serif italic font-semibold text-[#004C8C]">
                  Reproductive Health
                </span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Explore our complete line of fertility tablets, hormone therapy formulations,
              hematinic supplements, amino-acid sachets, and maternal protein nutrition.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
            {PRODUCT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${isSelected
                    ? 'bg-[#004C8C] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-[#EBF4FC] hover:text-[#0A6EBD] border border-slate-200/90'
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            <AnimatePresence mode="popLayout">
              {filteredHomeProducts.map((product, idx) => (
                <motion.article
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0A6EBD]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Top Metadata Bar */}
                  <div className="px-5 py-3 bg-[#F8FAFC] border-b border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>
                      {product.code} · {product.category}
                    </span>
                    <span
                      className={
                        product.prescriptionRequired
                          ? 'text-[#004C8C] font-semibold'
                          : 'text-[#2B8A00] font-semibold'
                      }
                    >
                      {product.prescriptionRequired ? 'Rx Only' : 'Nutraceutical'}
                    </span>
                  </div>

                  {/* Product Pack Photography */}
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="relative h-56 bg-gradient-to-b from-white to-[#F0F7FD] p-6 flex items-center justify-center cursor-pointer overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5">
                      <div className="text-xs font-medium text-[#0A6EBD]">
                        {product.classification} · {product.packaging.split('(')[0].trim()}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0A6EBD] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-3 border-t border-slate-100">
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Key Composition
                        </div>
                        <p className="text-xs text-slate-700 font-medium line-clamp-2">
                          {product.compositionSummary}
                        </p>
                      </div>

                      <div className="flex items-center gap-2.5 pt-1">
                        <button
                          type="button"
                          onClick={() => onSelectProduct(product)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#EBF4FC] hover:bg-[#0A6EBD] text-[#004C8C] hover:text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>View Monograph</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => onInquireProduct(product)}
                          className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-[#38B000] hover:bg-[#38B000]/5 text-slate-700 hover:text-[#2B8A00] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Catalogue CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-slate-900">
                Looking for complete formulation specifications or wholesale availability?
              </div>
              <p className="text-xs text-slate-600">
                View our dedicated Product Catalogue with active ingredient breakdowns and batch
                packaging details.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0A6EBD] hover:bg-[#004C8C] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Open Full Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: SCIENTIFIC ARCHITECTURE & 6 CORE STRENGTHS */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Editorial Overview + Lab Photography */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#0A6EBD] font-semibold">
                SCIENTIFIC EXCELLENCE · OUR CORE STRENGTHS
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Engineered Around{' '}
                <span className="font-serif italic font-semibold text-[#004C8C]">
                  Reproductive Care
                </span>{' '}
                &amp; Quality Assurance.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {VERIFIED_COMPANY.mission} Every formulation is backed by rigorous analytical
                verification and ethical distribution practices across India.
              </p>

              {/* Actual Laboratory Image from Zip Archive (/images/about_1.jpeg) */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
                <img
                  src="/images/about_1.jpeg"
                  alt="Hope Sera Pharmaceutical Research and Quality Control"
                  loading="lazy"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004C8C]/90 via-[#004C8C]/25 to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6EE7B7]">
                      QUALITY ASSURANCE &amp; FORMULATION R&amp;D
                    </div>
                    <p className="text-sm font-medium text-slate-100">
                      Dedicated to supporting families and healthcare practitioners with
                      dependable fertility and maternal health medicines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#004C8C] hover:bg-[#0A6EBD] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>About Hope Sera</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('vision')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-[#0A6EBD] text-slate-700 hover:text-[#0A6EBD] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Vision &amp; Mission</span>
                </button>
              </div>
            </div>

            {/* Right Column: 6 Core Strengths Grid with Supplied Technical Emblems */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CORE_STRENGTHS.map((strength, index) => (
                <motion.div
                  key={strength.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="p-6 rounded-2xl bg-[#F8FAFC] hover:bg-white border border-slate-200/90 hover:border-[#0A6EBD]/40 hover:shadow-lg transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center shadow-xs overflow-hidden">
                      <img
                        src={strength.image}
                        alt={strength.title}
                        className="w-full h-full object-contain scale-135"
                      />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {strength.index} · {strength.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900">{strength.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHARMACEUTICAL PROTOCOL & EMPOWERMENT COMMITMENTS */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#EBF4FC] to-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 3 Architectural Value Pillars */}
          <div>
            <div className="max-w-3xl mb-10">
              <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#0A6EBD] font-semibold">
                PHARMACEUTICAL STANDARDS · THREE-STAGE PROTOCOL
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                From Verified Raw APIs to{' '}
                <span className="font-serif italic font-semibold text-[#004C8C]">
                  Clinical Delivery
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VALUE_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0A6EBD] font-semibold">
                      STAGE {pillar.index}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#38B000]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Empowering Women, Supporting Families Commitments */}
          <div className="rounded-3xl bg-[#004C8C] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#6EE7B7]">
                  EMPOWERING WOMEN · SUPPORTING FAMILIES
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Committed to Every Stage of the Reproductive Journey.
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {VERIFIED_COMPANY.vision}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#38B000] hover:bg-[#2F9600] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Connect With Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EMPOWERMENT_COMMITMENTS.map((item) => (
                  <div
                    key={item.index}
                    className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs space-y-1.5"
                  >
                    <div className="text-xs font-mono text-[#93C5FD]">
                      {item.index} · {item.title}
                    </div>
                    <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
