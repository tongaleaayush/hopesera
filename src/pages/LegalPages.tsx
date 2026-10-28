import React from 'react';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { VERIFIED_COMPANY, PageRoute } from '../data/hopeseraData';
import { MolecularBackdrop } from '../components/MolecularBackdrop';

interface LegalPageProps {
  type: 'privacy-policy' | 'terms-conditions';
  onNavigate: (route: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy-policy';

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#004C8C] via-[#053A6B] to-[#0A6EBD] text-white py-14 lg:py-18 border-b border-white/10 overflow-hidden">
        <MolecularBackdrop variant="dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#93C5FD] hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#6EE7B7]">
            CORPORATE GOVERNANCE &amp; COMPLIANCE · HOPE SERA PVT. LTD.
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-200">
            Effective for Hope Sera Pvt. Ltd. ({VERIFIED_COMPANY.email}) · Pune,
            Maharashtra, India
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-10 shadow-xs space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            {isPrivacy ? (
              <>
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    1. Information Collection &amp; B2B Inquiries
                  </h2>
                  <p>
                    Hope Sera Pvt. Ltd. (&ldquo;Hopesera&rdquo;) collects contact and business
                    identification details voluntarily submitted through our contact forms,
                    career application channels, or direct email communications. This includes
                    your name, organization name, email address, telephone number, and enquiry
                    message.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    2. Use of Information
                  </h2>
                  <p>
                    Information provided to Hope Sera Pvt. Ltd. is used strictly to respond to
                    product inquiries, provide formulation monographs or Certificates of
                    Analysis (CoA) to authorized clinical partners, evaluate career
                    applications, and manage wholesale pharmaceutical distribution
                    relationships.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    3. Data Protection &amp; Confidentiality
                  </h2>
                  <p>
                    We do not sell, rent, or trade your personal or institutional contact
                    information to third-party marketers. Access to inquiry records is
                    restricted to authorized personnel at Hope Sera Pvt. Ltd.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    4. Contacting Us Regarding Privacy
                  </h2>
                  <p>
                    For any questions regarding this Privacy Policy or to request updates to
                    your business contact records, please contact us at{' '}
                    <a
                      href={`mailto:${VERIFIED_COMPANY.email}`}
                      className="text-[#0A6EBD] font-semibold underline"
                    >
                      {VERIFIED_COMPANY.email}
                    </a>{' '}
                    or write to our Registered Office at{' '}
                    {VERIFIED_COMPANY.locations.officeAddress}.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    1. Informational Purpose &amp; Medical Disclaimer
                  </h2>
                  <p>
                    All content on the Hope Sera Pvt. Ltd. website — including product
                    descriptions, active ingredient summaries, and formulation categories for
                    Fertserum-M, Fertserum-F, Letroserum-2.5, Estradial, Irosera-XT, VitroArg,
                    and 9 PRO Protein Powder — is provided solely for general informational and
                    B2B reference purposes. Nothing on this website constitutes medical
                    diagnosis, prescription, or treatment advice.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    2. Prescription Formulations &amp; Supervision
                  </h2>
                  <p>
                    Prescription pharmaceutical products manufactured or marketed by Hope Sera
                    Pvt. Ltd. are supplied exclusively through licensed pharmacies, hospitals,
                    and clinical distributors and must be used strictly under the guidance of a
                    qualified healthcare practitioner.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    3. Intellectual Property
                  </h2>
                  <p>
                    The Hope Sera Pvt. Ltd. name, &ldquo;Always For You...&rdquo; tagline,
                    corporate logos, product pack photography, and website design are the
                    intellectual property of Hope Sera Pvt. Ltd. Unauthorized reproduction or
                    commercial misuse of our product imagery or brand assets is prohibited.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    4. Governing Law &amp; Jurisdiction
                  </h2>
                  <p>
                    These Terms &amp; Conditions are governed by the laws of India, with
                    jurisdiction in Pune, Maharashtra. For official correspondence, contact{' '}
                    <a
                      href={`mailto:${VERIFIED_COMPANY.email}`}
                      className="text-[#0A6EBD] font-semibold underline"
                    >
                      {VERIFIED_COMPANY.email}
                    </a>
                    .
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
