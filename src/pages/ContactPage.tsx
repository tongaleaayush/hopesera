import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  Building2,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';
import {
  VERIFIED_COMPANY,
  validateContactForm,
  PRODUCTS,
} from '../data/hopeseraData';
import { MolecularBackdrop } from '../components/MolecularBackdrop';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzHCPZVjYVKRFXJbH19phc6KnkBKBdnzsBHX2VufcI837ei2kPCAH3ytkfjNEVeVGhobw/exec';

interface ContactPageProps {
  prefillSubject?: string;
  prefillMessage?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  prefillSubject = '',
  prefillMessage = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(prefillSubject);
  const [message, setMessage] = useState(prefillMessage);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefillSubject) setSubject(prefillSubject);
    if (prefillMessage) setMessage(prefillMessage);
  }, [prefillSubject, prefillMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const validation = validateContactForm({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (!validation.valid) {
      setStatus('error');
      setErrorMessage(validation.error || 'Please check the form fields.');
      return;
    }

    setStatus('submitting');

    try {
      const formData = new FormData();
      formData.append('Name', name.trim());
      formData.append('Email', email.trim());
      formData.append('Phone', phone.trim());
      formData.append(
        'Subject',
        phone.trim() ? `${subject.trim()} (Tel: ${phone.trim()})` : subject.trim()
      );
      formData.append('Message', message.trim());
      formData.append('Date', new Date().toLocaleString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage(
        'Something went wrong while sending your enquiry. Please try again or call us directly.'
      );
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#004C8C] via-[#053A6B] to-[#0A6EBD] text-white py-16 lg:py-22 border-b border-white/10 overflow-hidden">
        <MolecularBackdrop variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#93C5FD]">
              PUNE HEADQUARTERS · CLINICAL &amp; B2B PARTNERSHIPS
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Connect With{' '}
              <span className="font-serif italic font-semibold text-[#6EE7B7]">
                Hope Sera Pvt. Ltd.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Reach out for wholesale pharmaceutical distribution, formulation monographs,
              Certificates of Analysis (CoA), or institutional partnership enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Columns: Verified Company Addresses & Direct Contacts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Official Communications */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0A6EBD] font-semibold">
                  OFFICIAL ENQUIRY &amp; COMMUNICATIONS
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For wholesale distribution, institutional supply, regulatory documentation, and product inquiries, reach our official desk directly via email or the form.
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 font-medium">Official Email:</span>
                  <a
                    href={`mailto:${VERIFIED_COMPANY.email}`}
                    className="font-mono font-semibold text-[#0A6EBD] hover:text-[#004C8C]"
                  >
                    {VERIFIED_COMPANY.email}
                  </a>
                </div>
              </div>

              {/* Verified Office & Company Addresses */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0A6EBD] font-semibold">
                  VERIFIED PUNE LOCATIONS
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#004C8C] font-semibold">
                      <Building2 className="w-4 h-4 text-[#0A6EBD]" />
                      <span>Office Address (Phursungi, Pune)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {VERIFIED_COMPANY.locations.officeAddress}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#004C8C] font-semibold">
                      <MapPin className="w-4 h-4 text-[#38B000]" />
                      <span>Company Address (Undri, Pune)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {VERIFIED_COMPANY.locations.companyAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive B2B & Clinical Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#2B8A00] font-semibold">
                    DIRECT ENQUIRY TRANSMISSION
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Send Us a Message or Product Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Complete the form below and our team in Pune will respond promptly. You can
                    also select a specific formulation below to pre-fill your enquiry.
                  </p>
                </div>

                {/* Quick Product Topic Selector */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    Quick Topic Selection (Optional)
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {PRODUCTS.map((prod) => (
                      <button
                        key={prod.id}
                        type="button"
                        onClick={() => {
                          setSubject(`Product Enquiry: ${prod.name}`);
                          if (!message) {
                            setMessage(
                              `Hello Hope Sera team, I would like to request B2B distribution and monograph details for ${prod.name} (${prod.packaging}).`
                            );
                          }
                        }}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#EBF4FC] text-slate-700 hover:text-[#0A6EBD] text-xs font-medium transition-colors cursor-pointer"
                      >
                        + {prod.shortName}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                      >
                        Full Name / Organization *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. / Pharmacy / Distributor Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] focus:bg-white border border-slate-200 focus:border-[#0A6EBD] text-sm text-slate-900 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] focus:bg-white border border-slate-200 focus:border-[#0A6EBD] text-sm text-slate-900 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your contact number (optional)"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] focus:bg-white border border-slate-200 focus:border-[#0A6EBD] text-sm text-slate-900 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                      >
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Wholesale Distribution / Product Dossier"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] focus:bg-white border border-slate-200 focus:border-[#0A6EBD] text-sm text-slate-900 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Enquiry Details *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify products of interest, location, or clinical documentation requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] focus:bg-white border border-slate-200 focus:border-[#0A6EBD] text-sm text-slate-900 outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* Validation or Success Feedback */}
                  {status === 'error' && errorMessage && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {status === 'success' && (
                    <div
                      role="status"
                      className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#38B000]" />
                      <div>
                        <span className="font-bold">Thank you!</span> Your message has been
                        sent successfully. Our team at Hope Sera Pvt. Ltd. will get back to you
                        shortly.
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-slate-500">
                      * Required fields. Direct B2B &amp; informational enquiries only.
                    </span>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A6EBD] hover:bg-[#004C8C] disabled:opacity-60 text-white text-sm font-semibold shadow-md transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {status === 'submitting' ? 'Sending Enquiry...' : 'Submit Enquiry'}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
