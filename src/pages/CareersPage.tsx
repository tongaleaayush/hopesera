import React from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Users,
  GraduationCap,
  FileText,
  Briefcase,
  Building2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { VERIFIED_COMPANY, PageRoute } from '../data/hopeseraData';
import { MolecularBackdrop } from '../components/MolecularBackdrop';

interface CareersPageProps {
  onApplyRole: (roleTitle: string) => void;
  onNavigate: (route: PageRoute) => void;
}

const TALENT_AREAS = [
  {
    icon: FlaskConical,
    title: 'Formulation & Analytical R&D',
    description:
      'Solid oral dosages, hormone therapy formulations, bioavailability enhancement, and reproductive wellness supplements.',
    tag: 'Scientific',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance & Quality Control (QA/QC)',
    description:
      'Batch record review, dissolution testing, analytical method validation, cGMP compliance, and stability documentation.',
    tag: 'Quality',
  },
  {
    icon: FileText,
    title: 'Regulatory Affairs & Documentation',
    description:
      'Dossier compilation, Certificate of Analysis (CoA) filings, state drug authority compliance, and product licenses.',
    tag: 'Compliance',
  },
  {
    icon: Users,
    title: 'Medical Outreach & Field Representatives',
    description:
      'Engaging with gynecologists, fertility specialists, and hospital clinicians across Maharashtra and Western India.',
    tag: 'Commercial',
  },
  {
    icon: Building2,
    title: 'Supply Chain, Production & Logistics',
    description:
      'Finished goods inventory management, cold-chain logistics, raw material sourcing, and distributor coordination.',
    tag: 'Operations',
  },
  {
    icon: GraduationCap,
    title: 'Trainees & Early Career Scientists',
    description:
      'Internship and entry-level positions for B.Pharm, M.Pharm, and Life Science graduates looking to learn cGMP best practices.',
    tag: 'Entry Level',
  },
];

export const CareersPage: React.FC<CareersPageProps> = ({ onApplyRole, onNavigate }) => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#004C8C] via-[#053A6B] to-[#0A6EBD] text-white py-16 lg:py-22 border-b border-white/10 overflow-hidden">
        <MolecularBackdrop variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#93C5FD]">
              <Sparkles className="w-3.5 h-3.5 text-[#6EE7B7]" />
              <span>Careers &amp; Talent Enquiry · Pune</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Build Your Career in{' '}
              <span className="font-serif italic font-semibold text-[#6EE7B7]">
                Reproductive Healthcare
              </span>{' '}
              With Us.
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              At Hope Sera Pvt. Ltd., we are always excited to connect with motivated
              pharmaceutical scientists, regulatory analysts, and healthcare professionals.
              Submit your resume for general career consideration and future requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main General Enquiry Callout Section */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#004C8C] to-[#0A6EBD] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#93C5FD] font-semibold">
                  TALENT ACQUISITION &amp; HR PORTAL
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  General Career Enquiry
                </h2>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                  We are not hiring for specific public vacancies at this moment, but we
                  continually review qualified profiles for upcoming expansion in Pune.
                  Whether you are an experienced researcher or a recent pharmacy graduate, we
                  would love to hear from you.
                </p>
              </div>

              {/* What to include list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6EE7B7] shrink-0" />
                  <span>Updated Resume / Curriculum Vitae</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6EE7B7] shrink-0" />
                  <span>Area of Expertise &amp; Qualification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6EE7B7] shrink-0" />
                  <span>Current Location &amp; Notice Period</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6EE7B7] shrink-0" />
                  <span>Brief Cover Note on Your Career Goals</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onApplyRole('General Career Enquiry')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#004C8C] hover:bg-slate-100 text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-[#0A6EBD]" />
                  <span>Submit Career Enquiry Online</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`mailto:${VERIFIED_COMPANY.email}?subject=General%20Career%20Enquiry%20-%20Hope%20Sera`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold transition-all"
                >
                  <Mail className="w-4 h-4 text-[#6EE7B7]" />
                  <span>Email CV to {VERIFIED_COMPANY.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Functional Areas We Welcome Resumes For */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#0A6EBD] font-semibold">
              FUNCTIONAL DISCIPLINES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Areas of Professional Interest
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Explore the core departments where we regularly review profiles for upcoming
              opportunities at our Pune headquarters and operational teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TALENT_AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#0A6EBD]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#EBF4FC] flex items-center justify-center text-[#0A6EBD]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        {area.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {area.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onApplyRole(area.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A6EBD] hover:text-[#004C8C] transition-colors cursor-pointer"
                    >
                      <span>Enquire for this discipline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Hope Sera */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#0A6EBD] font-semibold">
              OUR WORK CULTURE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Build Your Career at Hope Sera?
            </h2>
            <p className="text-sm text-slate-600">
              A commitment to pharmaceutical integrity, scientific dedication, and patient wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
              <FlaskConical className="w-6 h-6 text-[#0A6EBD]" />
              <h3 className="text-lg font-bold text-slate-900">
                Formulation &amp; Analytical Rigor
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Work directly with specialized fertility tablets, hormone therapy formulations,
                and maternal nutrition lines backed by strict quality control protocols.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#38B000]" />
              <h3 className="text-lg font-bold text-slate-900">
                Ethical &amp; Compliant Culture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We prioritize transparency, empirical accuracy, and WHO-GMP aligned standards
                across every stage of development, production, and distribution.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
              <Users className="w-6 h-6 text-[#004C8C]" />
              <h3 className="text-lg font-bold text-slate-900">
                Meaningful Patient Impact
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every batch we release supports clinicians and families navigating reproductive
                health, maternal care, and nutritional recovery across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process / FAQ */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              How We Handle General Job Enquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our streamlined talent database ensures every submission is thoughtfully reviewed.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200/90 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-900">
                1. How are unsolicited resumes reviewed?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All submitted resumes are indexed in our internal talent pool by our HR team.
                When new positions or operational expansions arise in Pune, relevant candidates
                are contacted directly for interviews.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200/90 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-900">
                2. Can fresh pharmacy graduates submit applications?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes! We welcome applications from enthusiastic B.Pharm, M.Pharm, and Life Science
                graduates looking to begin their journey in quality analysis, formulation, or field
                representation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200/90 space-y-1.5">
              <h4 className="text-sm font-bold text-slate-900">
                3. Can I visit or submit my CV in person?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Physical resumes can also be mailed or dropped at our Corporate Office:
                <br />
                <span className="font-semibold text-slate-800">
                  {VERIFIED_COMPANY.addresses.office.address}
                </span>
              </p>
            </div>
          </div>

          {/* Bottom Contact Link */}
          <div className="mt-10 text-center">
            <p className="text-xs sm:text-sm text-slate-600">
              Have questions regarding career opportunities?{' '}
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="font-semibold text-[#0A6EBD] hover:underline cursor-pointer"
              >
                Reach out via our Contact Page &rarr;
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
