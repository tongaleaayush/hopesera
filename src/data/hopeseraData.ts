import { COMPANY_KNOWLEDGE } from './companyKnowledge';

export type PageRoute =
  | 'home'
  | 'about'
  | 'vision'
  | 'products'
  | 'careers'
  | 'faqs'
  | 'contact'
  | 'privacy-policy'
  | 'terms-conditions';

export type ProductCategory =
  | 'All'
  | 'Fertility Tablets'
  | 'Hormone Therapy Tablets'
  | 'Protein Supplement'
  | "Women's Healthcare"
  | 'Nutritional Supplements';

export interface ProductItem {
  id: string;
  code: string;
  name: string;
  shortName: string;
  category: Exclude<ProductCategory, 'All'>;
  sectionAnchor: string;
  classification: string;
  prescriptionRequired: boolean;
  image: string;
  galleryImages: string[];
  description: string;
  compositionSummary: string;
  activeIngredients: string[];
  packaging: string;
  dosageForm: string;
  clinicalFocus: string;
  administrationNote: string;
}

export const VERIFIED_COMPANY = {
  ...COMPANY_KNOWLEDGE,
  tagline: COMPANY_KNOWLEDGE.company.tagline,
  overview: COMPANY_KNOWLEDGE.company.description,
  vision:
    "To become a trusted leader in reproductive healthcare by providing innovative, safe, and effective pharmaceutical solutions that improve women's health and bring hope to families.",
  mission:
    "Our mission is to develop and deliver high-quality fertility and healthcare products through advanced research, strict quality standards, and ethical practices, supporting healthier lives and happier families.",
  locations: {
    officeAddress: COMPANY_KNOWLEDGE.addresses.office.address,
    officeMapsUrl: COMPANY_KNOWLEDGE.addresses.office.mapsUrl,
    companyAddress: COMPANY_KNOWLEDGE.addresses.company.address,
    companyMapsUrl: COMPANY_KNOWLEDGE.addresses.company.mapsUrl,
  },
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'All',
  'Fertility Tablets',
  'Hormone Therapy Tablets',
  'Protein Supplement',
  "Women's Healthcare",
  'Nutritional Supplements',
];

export const CATEGORY_ANCHOR_MAP: Record<string, Exclude<ProductCategory, 'All'>> = {
  '#tablets': 'Fertility Tablets',
  'tablets': 'Fertility Tablets',
  '#injections': 'Hormone Therapy Tablets',
  'injections': 'Hormone Therapy Tablets',
  '#hormone-therapy': 'Hormone Therapy Tablets',
  '#protein': 'Protein Supplement',
  'protein': 'Protein Supplement',
  '#womens-health': "Women's Healthcare",
  'womens-health': "Women's Healthcare",
  '#supplements': 'Nutritional Supplements',
  'supplements': 'Nutritional Supplements',
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'fertserum-m',
    code: 'HS-FM-01',
    name: 'Fertserum-M Tablets',
    shortName: 'Fertserum-M',
    category: 'Fertility Tablets',
    sectionAnchor: 'tablets',
    classification: 'Nutraceutical Tablets',
    prescriptionRequired: false,
    image: '/images/Products/fertserum-m.png',
    galleryImages: [
      '/images/Products/fertserum-m.png',
      '/images/PhotoRoom-20250211_130546.png',
    ],
    description:
      'A nutritional supplement formulated with Co-Enzyme Q10, L-Carnitine L-Tartrate, L-Arginine, Astaxanthin, Lycopene, Selenium, Methylcobalamin, Folic Acid and Vitamin D3 to support reproductive health and overall wellness.',
    compositionSummary:
      'Co-Enzyme Q10, L-Carnitine L-Tartrate, L-Arginine, Astaxanthin 10%, Methylcobalamin, Folic Acid, Lycopene, Selenium & Vitamin D3 Tablets',
    activeIngredients: [
      'Co-Enzyme Q10',
      'L-Carnitine L-Tartrate',
      'L-Arginine',
      'Astaxanthin 10%',
      'Lycopene',
      'Selenium',
      'Methylcobalamin',
      'Folic Acid',
      'Vitamin D3',
    ],
    packaging: '10 x 1 x 10 Tablets (10 Tablets per Pack)',
    dosageForm: 'Solid Oral Film-Coated Tablet',
    clinicalFocus: 'Male Reproductive Wellness & Cellular Antioxidant Support',
    administrationNote:
      'Nutritional supplement formulated for reproductive wellness support. Use as directed by a qualified healthcare professional.',
  },
  {
    id: 'fertserum-f',
    code: 'HS-FF-02',
    name: 'Fertserum-F Tablets',
    shortName: 'Fertserum-F',
    category: 'Fertility Tablets',
    sectionAnchor: 'tablets',
    classification: 'Nutraceutical Tablets',
    prescriptionRequired: false,
    image: '/images/Products/fertserum-f.png',
    galleryImages: [
      '/images/Products/fertserum-f.png',
      '/images/PhotoRoom-20250211_130843.png',
      '/images/PhotoRoom-20250211_130930.png',
    ],
    description:
      "A nutritional formulation containing Astaxanthin, L-Arginine, Lycopene, Folic Acid, Vitamin B12, Inositol, and Zinc to support women's reproductive health.",
    compositionSummary:
      'Astaxanthin, L-Selenomethionine, L-Arginine, Ferrous Gluconate, Lycopene, Folic Acid, Pyridoxine HCl, Vitamin B12, Inositol & Zinc Oxide Tablets',
    activeIngredients: [
      'Astaxanthin',
      'L-Selenomethionine',
      'L-Arginine',
      'Ferrous Gluconate',
      'Lycopene',
      'Folic Acid',
      'Pyridoxine HCl',
      'Vitamin B12',
      'Inositol',
      'Zinc Oxide',
    ],
    packaging: '10 x 1 x 10 Tablets (10 Tablets per Pack)',
    dosageForm: 'Solid Oral Nutraceutical Tablet',
    clinicalFocus: "Women's Reproductive Micronutrient & Metabolic Balance",
    administrationNote:
      "Formulated to support women's reproductive nutritional requirements under healthcare guidance.",
  },
  {
    id: 'letroserum-2-5',
    code: 'HS-LT-03',
    name: 'Letroserum-2.5 Tablets',
    shortName: 'Letroserum-2.5',
    category: 'Fertility Tablets',
    sectionAnchor: 'tablets',
    classification: 'Prescription Tablets',
    prescriptionRequired: true,
    image: '/images/Products/letroserum-2-5.png',
    galleryImages: [
      '/images/Products/letroserum-2-5.png',
      '/images/PhotoRoom-20250211_130707.png',
    ],
    description:
      'Letrozole Tablets I.P. 2.5 mg manufactured under strict pharmaceutical quality standards for use under medical supervision.',
    compositionSummary: 'Letrozole Tablets I.P. 2.5 mg',
    activeIngredients: ['Letrozole I.P. 2.5 mg'],
    packaging: '10 x 1 x 5 Tablets (10 Tablets per Blister)',
    dosageForm: 'Oral Prescription Tablet (I.P.)',
    clinicalFocus: 'Ovulation Induction & Reproductive Endocrinology Protocol',
    administrationNote:
      'Prescription pharmaceutical formulation (Rx). Strictly for administration under the supervision of a reproductive endocrinologist or gynecologist.',
  },
  {
    id: 'estradial',
    code: 'HS-EV-04',
    name: 'Estradial Tablets',
    shortName: 'Estradial',
    category: 'Hormone Therapy Tablets',
    sectionAnchor: 'injections',
    classification: 'Hormone Therapy',
    prescriptionRequired: true,
    image: '/images/Products/estradial.png',
    galleryImages: [
      '/images/Products/estradial.png',
      '/images/PhotoRoom-20250211_131048.png',
    ],
    description:
      'Estradiol Valerate Tablets manufactured with high pharmaceutical standards for hormone replacement therapy under medical guidance.',
    compositionSummary:
      'Estradiol Valerate Tablets — Hormone Replacement Therapy (HRT) for Oestrogen deficiency symptoms',
    activeIngredients: ['Estradiol Valerate'],
    packaging: '1 x 28 Tablets (Blister Pack)',
    dosageForm: 'Oral Hormone Therapy Tablet',
    clinicalFocus: 'Hormone Replacement Therapy (HRT) & Endometrial Cycle Support',
    administrationNote:
      'Prescription hormone therapy formulation (Rx). Administer strictly under licensed clinical supervision.',
  },
  {
    id: 'irosera-xt',
    code: 'HS-IX-05',
    name: 'Irosera-XT Tablets',
    shortName: 'Irosera-XT',
    category: "Women's Healthcare",
    sectionAnchor: 'womens-health',
    classification: 'Iron Supplement',
    prescriptionRequired: false,
    image: '/images/Products/irosera-xt.png',
    galleryImages: ['/images/Products/irosera-xt.png'],
    description:
      'Ferrous Ascorbate, Folic Acid and Zinc Sulphate Tablets formulated to provide essential nutritional supplementation.',
    compositionSummary: 'Ferrous Ascorbate, Folic Acid & Zinc Sulphate Tablets',
    activeIngredients: ['Ferrous Ascorbate (Iron)', 'Folic Acid', 'Zinc Sulphate'],
    packaging: '10 x 1 x 10 Tablets (10 Tablets per Strip)',
    dosageForm: 'Oral Hematinic & Micronutrient Tablet',
    clinicalFocus: "Maternal Iron, Folate Replenishment & Women's Nutritional Health",
    administrationNote:
      'Targeted hematinic and micronutrient supplementation for women’s nutritional health and reproductive balance.',
  },
  {
    id: 'vitroarg',
    code: 'HS-VA-06',
    name: 'VitroArg Sachets',
    shortName: 'VitroArg',
    category: 'Nutritional Supplements',
    sectionAnchor: 'supplements',
    classification: 'Nutritional Sachets',
    prescriptionRequired: false,
    image: '/images/Products/vitroarg.png',
    galleryImages: ['/images/Products/vitroarg.png'],
    description:
      'L-Arginine, Zinc and Folic Acid Sachets formulated as a nutritional supplement with a refreshing orange flavour.',
    compositionSummary:
      'L-Arginine 3 g + Zinc + Folic Acid Granules (Sugar Free, Orange Flavour)',
    activeIngredients: ['L-Arginine (3 g)', 'Zinc', 'Folic Acid'],
    packaging: '10 x 5g Sachets per Box',
    dosageForm: 'Oral Effervescent / Dispersible Granule Sachet',
    clinicalFocus: 'Nitric Oxide Pathway, Vascular Perfusion & Daily Folate Support',
    administrationNote:
      'Sugar-free orange-flavoured sachet for convenient oral dissolution. Use as advised by a healthcare provider.',
  },
  {
    id: 'pro-protein-powder',
    code: 'HS-PP-07',
    name: '9 PRO Protein Powder',
    shortName: '9 PRO Protein Powder',
    category: 'Protein Supplement',
    sectionAnchor: 'protein',
    classification: 'Protein Supplement',
    prescriptionRequired: false,
    image: '/images/Products/pro-protein-powder.jpeg',
    galleryImages: ['/images/Products/pro-protein-powder.jpeg'],
    description:
      'High-quality protein powder enriched with vitamins, minerals, probiotics, DHA and calcium to support daily nutritional requirements.',
    compositionSummary:
      '9 PRO Protein Powder Enriched with Vitamins, Minerals, DHA, Probiotics & Calcium (Sugar Free)',
    activeIngredients: [
      'High-Quality Protein Matrix',
      'DHA (Docosahexaenoic Acid)',
      'Probiotics',
      'Calcium',
      'Essential Vitamins & Minerals',
    ],
    packaging: 'Canister Pack (500 g / 200 g)',
    dosageForm: 'Reconstitutable Nutritional Protein Powder',
    clinicalFocus: 'Expecting Mothers, Lactation Support & Daily Maternal Nutrition',
    administrationNote:
      'Sugar-free protein and micronutrient formula designed for expecting mothers, lactation support, and daily nutritional balance.',
  },
];

export interface CoreStrengthItem {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const CORE_STRENGTHS: CoreStrengthItem[] = [
  {
    id: 'advanced-manufacturing',
    index: '01',
    title: 'Advanced Manufacturing',
    description:
      'Our modern manufacturing processes follow stringent pharmaceutical standards to ensure consistency, precision, and product reliability.',
    image: '/images/about/1.png',
    tag: 'Process Engineering',
  },
  {
    id: 'quality-assurance',
    index: '02',
    title: 'Quality Assurance',
    description:
      'Every product undergoes rigorous quality control and testing procedures to meet international pharmaceutical manufacturing standards.',
    image: '/images/about/2.png',
    tag: 'WHO-GMP Aligned QA',
  },
  {
    id: 'research-innovation',
    index: '03',
    title: 'Research & Innovation',
    description:
      'Continuous research and product development help us deliver innovative healthcare solutions for reproductive wellness.',
    image: '/images/about/3.png',
    tag: 'Formulation Science',
  },
  {
    id: 'womens-healthcare',
    index: '04',
    title: "Women's Healthcare",
    description:
      "Our product portfolio is dedicated to supporting women's reproductive health with carefully developed pharmaceutical formulations.",
    image: '/images/about/4.png',
    tag: 'Therapeutic Focus',
  },
  {
    id: 'nationwide-distribution',
    index: '05',
    title: 'Nationwide Distribution',
    description:
      'An efficient distribution network ensures our products reach healthcare professionals and patients across India.',
    image: '/images/about/5.png',
    tag: 'Supply Chain Network',
  },
  {
    id: 'customer-commitment',
    index: '06',
    title: 'Customer Commitment',
    description:
      'We build lasting relationships through ethical practices, product quality, reliable service, and customer satisfaction.',
    image: '/images/about/6.png',
    tag: 'Clinical Partnerships',
  },
];

export const VALUE_PILLARS = [
  {
    index: '01',
    title: 'Therapeutic Efficacy',
    description:
      'Every tablet formulation, hormone therapy product, and prenatal nutrient mix undergoes dissolution profiling to ensure consistent release and optimal therapeutic uptake.',
  },
  {
    index: '02',
    title: 'Controlled Production',
    description:
      'Formulations are manufactured in controlled environments with strict quality verification, particulate filtration, and automated packaging integrity checks.',
  },
  {
    index: '03',
    title: 'Traceable Logistics',
    description:
      'All batches are cataloged using structured batch tracking codes, ensuring full supply-chain transparency from verified raw materials to domestic clinical delivery.',
  },
];

export const EMPOWERMENT_COMMITMENTS = [
  {
    index: '01',
    title: 'Supporting Health',
    description:
      "Supporting Women's Reproductive Health through high-quality pharmaceutical solutions.",
  },
  {
    index: '02',
    title: 'Creating Hope',
    description:
      'Creating Hope for Families by manufacturing reliable fertility medicines.',
  },
  {
    index: '03',
    title: 'Promoting Awareness',
    description:
      'Promoting Health Awareness to encourage informed healthcare decisions.',
  },
  {
    index: '04',
    title: 'Ensuring Quality',
    description:
      'Ensuring Quality & Safety through rigorous manufacturing standards.',
  },
  {
    index: '05',
    title: 'Advancing Innovation',
    description:
      "Advancing Innovation by continuously improving products for women's healthcare.",
  },
  {
    index: '06',
    title: 'Building Trust',
    description:
      'Building Trust with ethical practices, transparency, and scientific excellence.',
  },
];

export const GUIDING_VALUES = [
  {
    index: '01',
    title: 'Scientific Integrity',
    description:
      'We report empirical stability studies and formulation profiles exactly as measured, honoring our commitment to raw data truthfulness.',
  },
  {
    index: '02',
    title: 'Quality Consistency',
    description:
      'From raw API verification to final vacuum-sealed blister packs, our quality assurance workflow prevents variations between batches.',
  },
  {
    index: '03',
    title: 'Pioneering Innovation',
    description:
      'We continually refine drug carrier pathways to improve the solubility, shelf stability, and biological absorption of reproductive health formulations.',
  },
  {
    index: '04',
    title: 'Patient Centricity',
    description:
      'We respect the emotional gravity of the fertility journey. Our manufacturing targets safety and reliability to support clinicians and families.',
  },
];

export const CAREER_OPENINGS = [
  {
    id: 'qa-associate',
    title: 'QA Associate (Quality Control)',
    department: 'QA/QC Division',
    type: 'Full-Time',
    location: 'Pune, Maharashtra',
    summary:
      'Oversee batch documentation, dissolution assay verification, and WHO-GMP compliance checks across oral solid dosage and nutraceutical lines.',
  },
  {
    id: 'rd-scientist',
    title: 'R&D Formulation Scientist',
    department: 'R&D Lab Team',
    type: 'Full-Time',
    location: 'Pune, Maharashtra',
    summary:
      'Develop and optimize bio-available fertility tablets, hormone therapy formulations, and amino-acid/micronutrient stability profiles.',
  },
  {
    id: 'regulatory-affairs',
    title: 'Regulatory Affairs Executive',
    department: 'Compliance Division',
    type: 'Full-Time',
    location: 'Pune, Maharashtra',
    summary:
      'Manage product dossiers, Certificate of Analysis (CoA) documentation, and regulatory compliance filings for domestic B2B pharmaceutical distribution.',
  },
];

export interface FaqItem {
  id: string;
  category: 'Quality & Manufacturing' | 'Formulations' | 'B2B & Logistics';
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Quality & Manufacturing',
    question: "What manufacturing standards does Hopesera's plant follow?",
    answer:
      'Our facilities comply with World Health Organization Good Manufacturing Practices (WHO-GMP) quality standards, incorporating structured quality management systems and controlled cleanroom production zones.',
  },
  {
    id: 'faq-2',
    category: 'Formulations',
    question: "Are Hopesera's fertility formulations equivalent to reference formulations?",
    answer:
      'Yes, our tablets and therapeutic formulations are developed as high-quality bio-equivalent medicines. We conduct dissolution profile assays and comparative analytical testing to ensure our active pharmaceutical ingredients (APIs) perform with reliable cellular uptake and stability.',
  },
  {
    id: 'faq-3',
    category: 'B2B & Logistics',
    question: 'Where does Hopesera supply its products, and how is transit quality managed?',
    answer:
      'Hopesera supplies its products across India through verified clinical and distribution channels. Temperature-sensitive formulations are managed with monitored logistics protocols to protect molecular stability throughout domestic transit.',
  },
  {
    id: 'faq-4',
    category: 'Quality & Manufacturing',
    question: 'How can clinical partners request Certificates of Analysis (CoA) for product batches?',
    answer:
      'Registered clinical partners, hospital procurement managers, and wholesale distributors can request CoAs by contacting our compliance division directly at info@hopesera.com. We supply analytical profiles and batch validation records for serialized shipments.',
  },
  {
    id: 'faq-5',
    category: 'B2B & Logistics',
    question: 'Are these products available for purchase directly by individual patients?',
    answer:
      'No. Hopesera operates as a B2B pharmaceutical manufacturer. Our products are supplied to clinical pharmacies, fertility centers, licensed hospitals, and authorized distribution partners. Prescription formulations require a valid medical prescription and clinical supervision.',
  },
  {
    id: 'faq-6',
    category: 'Quality & Manufacturing',
    question: 'How does Hopesera verify the source of its active ingredients?',
    answer:
      'We source raw compounds from verified manufacturers holding documented Drug Master Files (DMF). Every incoming batch is quarantined and subjected to analytical assay testing via HPLC and FTIR in quality control laboratories prior to production release.',
  },
];

export const SUGGESTED_CHAT_QUESTIONS = [
  'What is Hope Sera Pvt. Ltd.?',
  'What products does Hope Sera offer?',
  'Where is Hope Sera located?',
  'Who can I contact for more details?',
  "Tell me about Hope Sera's tagline",
];

/**
 * Normalizes any pathname (including legacy .html URLs) and optional hash
 * into a canonical PageRoute and optional ProductCategory filter.
 */
export function resolveRouteFromLocation(
  pathname: string,
  hash: string = ''
): {
  route: PageRoute;
  category?: ProductCategory;
  shouldRedirectHtml: boolean;
  canonicalPath: string;
} {
  const cleanPath = (pathname || '/').trim().toLowerCase();
  const cleanHash = (hash || '').trim().toLowerCase();

  const htmlMap: Record<string, { route: PageRoute; path: string }> = {
    '/': { route: 'home', path: '/' },
    '/index.html': { route: 'home', path: '/' },
    '/about': { route: 'about', path: '/about' },
    '/about.html': { route: 'about', path: '/about' },
    '/vision': { route: 'vision', path: '/vision' },
    '/vision.html': { route: 'vision', path: '/vision' },
    '/vision-mission': { route: 'vision', path: '/vision' },
    '/products': { route: 'products', path: '/products' },
    '/products.html': { route: 'products', path: '/products' },
    '/careers': { route: 'careers', path: '/careers' },
    '/careers.html': { route: 'careers', path: '/careers' },
    '/faqs': { route: 'faqs', path: '/faqs' },
    '/faqs.html': { route: 'faqs', path: '/faqs' },
    '/contact': { route: 'contact', path: '/contact' },
    '/contact.html': { route: 'contact', path: '/contact' },
    '/privacy-policy': { route: 'privacy-policy', path: '/privacy-policy' },
    '/privacy-policy.html': { route: 'privacy-policy', path: '/privacy-policy' },
    '/terms-conditions': { route: 'terms-conditions', path: '/terms-conditions' },
    '/terms-conditions.html': { route: 'terms-conditions', path: '/terms-conditions' },
  };

  const matched = htmlMap[cleanPath] || { route: 'home', path: '/' };
  const shouldRedirectHtml = cleanPath.endsWith('.html');

  let category: ProductCategory | undefined;
  if (matched.route === 'products' && cleanHash && CATEGORY_ANCHOR_MAP[cleanHash]) {
    category = CATEGORY_ANCHOR_MAP[cleanHash];
  }

  return {
    route: matched.route,
    category,
    shouldRedirectHtml,
    canonicalPath: matched.path,
  };
}

/**
 * Pure product filtering function for category tabs and search queries
 */
export function filterProducts(
  products: ProductItem[],
  category: ProductCategory,
  searchQuery: string = ''
): ProductItem[] {
  const q = searchQuery.trim().toLowerCase();

  return products.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    if (!matchesCategory) return false;

    if (!q) return true;

    const haystack = [
      item.name,
      item.shortName,
      item.category,
      item.classification,
      item.description,
      item.compositionSummary,
      ...item.activeIngredients,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(q);
  });
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Pure validation function for the Contact / Partnership inquiry form
 */
export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const name = (input.name || '').trim();
  const email = (input.email || '').trim();
  const phone = (input.phone || '').trim();
  const subject = (input.subject || '').trim();
  const message = (input.message || '').trim();

  if (!name || !email || !subject || !message) {
    return { valid: false, error: 'Please fill in all required fields.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toLowerCase())) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }

  if (phone && phone.replace(/[\s\-+()]/g, '').length < 7) {
    return { valid: false, error: 'Please enter a valid phone number.' };
  }

  return { valid: true };
}
