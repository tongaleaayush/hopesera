/**
 * Hope Sera Pvt. Ltd. - Verified Company Knowledge Base
 * Authoritative facts used across the website and client-side assistant.
 */

export interface CompanyAddress {
  label: string;
  address: string;
  mapsUrl: string;
}

export interface CompanyKnowledge {
  company: {
    name: string;
    brandName: string;
    tagline: string;
    description: string;
  };
  products: string[];
  addresses: {
    company: CompanyAddress;
    office: CompanyAddress;
  };
  contacts: string[];
  email: string;
}

export const COMPANY_KNOWLEDGE: CompanyKnowledge = {
  company: {
    name: 'Hope Sera Pvt. Ltd.',
    brandName: 'Hopesera',
    tagline: 'Always For You...',
    description:
      'Advanced pharmaceutical manufacturer specializing in premium quality fertility treatments and therapeutic supplements designed to support reproductive health.',
  },

  products: [
    'Fertility Tablets',
    'Hormone Therapy Tablets',
    'Protein Supplement',
    "Women's Healthcare",
    'Nutritional Supplements',
  ],

  addresses: {
    company: {
      label: 'Company Address',
      address:
        'C 404, Mayur Heights, Papadevasti, Phursungi, Pune, Maharashtra - 412308',
      mapsUrl: 'https://maps.app.goo.gl/yXFZr4LiXjJDGDJj9',
    },
    office: {
      label: 'Corporate Office Address',
      address:
        'SHOP NO. 5, UPPER GR.FLR., DYNAMIC REALITY VENTURE, S.NO. 53 53/2, 53/3, P.NO.O/N/84/08540468, WADACHI WADI RD., UNDRI,PUNE',
      mapsUrl: 'https://maps.app.goo.gl/9zoNWiVAkNpnoZyx5',
    },
  },

  contacts: [],

  email: 'info@hopesera.com',
};

export default COMPANY_KNOWLEDGE;
