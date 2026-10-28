import { MapPin, Mail, ArrowUpRight } from 'lucide-react';
import {
  PageRoute,
  ProductCategory,
  VERIFIED_COMPANY,
} from '../data/hopeseraData';

interface FooterProps {
  onNavigate: (route: PageRoute, category?: ProductCategory, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: PageRoute,
    category?: ProductCategory,
    hash?: string
  ) => {
    e.preventDefault();
    onNavigate(route, category, hash);
  };

  return (
    <footer className="relative overflow-hidden bg-[#00284D] text-slate-300 bg-dark-clinical-grid border-t border-[#0A6EBD]/30">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="/"
              onClick={(e) => handleLink(e, 'home')}
              className=""
              aria-label="Hope Sera Pvt. Ltd. — Home"
            >
              <img
                src="/images/flogo.png"
                alt="Hope Sera Pvt. Ltd. — Always For You..."
                className="h-40 w-auto object-contain"
              />
            </a>

            <p className="text-sm leading-relaxed text-slate-300/90 max-w-sm">
              {VERIFIED_COMPANY.company.description}
            </p>

            <div className="pt-1 text-xs text-sky-200/80">
              <span className="font-semibold text-white">
                {VERIFIED_COMPANY.company.name}
              </span>{' '}
              <span aria-hidden="true">·</span>{' '}
              <span className="font-serif-editorial italic text-base text-[#70E000]">
                “{VERIFIED_COMPANY.company.tagline}”
              </span>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">
              Corporate
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, 'home')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink(e, 'about')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/vision"
                  onClick={(e) => handleLink(e, 'vision')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Vision & Mission
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  onClick={(e) => handleLink(e, 'products', 'All')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Products Catalogue
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  onClick={(e) => handleLink(e, 'careers')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  onClick={(e) => handleLink(e, 'faqs')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink(e, 'contact')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Therapeutic Portfolio (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">
              Product Focus
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/products#tablets"
                  onClick={(e) =>
                    handleLink(e, 'products', 'Fertility Tablets', 'tablets')
                  }
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Fertility Tablets
                </a>
              </li>
              <li>
                <a
                  href="/products#injections"
                  onClick={(e) =>
                    handleLink(
                      e,
                      'products',
                      'Hormone Therapy Tablets',
                      'injections'
                    )
                  }
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Hormone Therapy Tablets
                </a>
              </li>
              <li>
                <a
                  href="/products#protein"
                  onClick={(e) =>
                    handleLink(e, 'products', 'Protein Supplement', 'protein')
                  }
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Protein Supplement
                </a>
              </li>
              <li>
                <a
                  href="/products#womens-health"
                  onClick={(e) =>
                    handleLink(
                      e,
                      'products',
                      "Women's Healthcare",
                      'womens-health'
                    )
                  }
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Women&apos;s Healthcare
                </a>
              </li>
              <li>
                <a
                  href="/products#supplements"
                  onClick={(e) =>
                    handleLink(
                      e,
                      'products',
                      'Nutritional Supplements',
                      'supplements'
                    )
                  }
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Nutritional Supplements
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Addresses & Direct Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">
              Verified Locations & Contacts
            </h3>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#38B000]" />
                <div>
                  <div className="font-semibold text-white">
                    {VERIFIED_COMPANY.addresses.office.label}
                  </div>
                  <p className="text-slate-300">
                    {VERIFIED_COMPANY.addresses.office.address}
                  </p>
                  <a
                    href={VERIFIED_COMPANY.addresses.office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 font-semibold text-sky-300 hover:text-white"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <div>
                  <div className="font-semibold text-white">
                    {VERIFIED_COMPANY.addresses.company.label}
                  </div>
                  <p className="text-slate-300">
                    {VERIFIED_COMPANY.addresses.company.address}
                  </p>
                  <a
                    href={VERIFIED_COMPANY.addresses.company.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 font-semibold text-sky-300 hover:text-white"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                <a
                  href={`mailto:${VERIFIED_COMPANY.email}`}
                  className="font-semibold text-white hover:text-sky-300"
                >
                  {VERIFIED_COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; 2026 {VERIFIED_COMPANY.company.name} All rights reserved.
            Information is for educational and B2B reference only.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLink(e, 'privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-conditions"
              onClick={(e) => handleLink(e, 'terms-conditions')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
