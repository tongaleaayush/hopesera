/**
 * Hope Sera Assistant - 100% Client-Side Knowledge Engine
 * Runs entirely in the visitor's browser without any cloud, backend server, or Gemini API key.
 * Answers with verified facts about Hope Sera Pvt. Ltd.
 */

import { COMPANY_KNOWLEDGE } from '../data/companyKnowledge';
import { PRODUCTS } from '../data/hopeseraData';

export interface AssistantAnswer {
  text: string;
  suggestedActions?: { label: string; action: string }[];
}

export const QUICK_TOPICS = [
  'Product Categories',
  'Pune Office Address',
  'Contact & Email',
  'Vision & Mission',
  'Wholesale & Distribution',
];

/**
 * Intelligent client-side response generator strictly bound to verified facts.
 */
export function getVerifiedAssistantResponse(query: string): string {
  const q = (query || '').toLowerCase().trim();

  if (!q) {
    return 'How can I assist you with Hope Sera Pvt. Ltd. today? You can ask about our 5 product categories, Pune office locations, or official contact details.';
  }

  // Security & prompt injection defense
  if (
    q.includes('ignore previous') ||
    q.includes('system prompt') ||
    q.includes('api key') ||
    q.includes('jailbreak') ||
    q.includes('developer mode')
  ) {
    return 'I am the Hope Sera Assistant and can only provide verified information regarding **Hope Sera Pvt. Ltd.**, our therapeutic product categories, locations, and contact channels.';
  }

  // Medical Safety Guardrail
  if (
    q.includes('prescribe') ||
    q.includes('prescription for me') ||
    q.includes('diagnos') ||
    q.includes('my disease') ||
    q.includes('take how many pills') ||
    q.includes('dosage for me') ||
    q.includes('side effect') ||
    q.includes('cure my') ||
    q.includes('treatment for my')
  ) {
    return "⚠️ **Medical Advisory:** I do not provide individualized medical diagnoses, treatment recommendations, or dosage instructions. Please consult a qualified healthcare professional, gynecologist, or fertility specialist for personal medical advice.";
  }

  // Specific Product inquiries (Fertserum-M, Fertserum-F, Letroserum, Estradial, Irosera, VitroArg, 9 PRO)
  const matchedProduct = PRODUCTS.find(
    (p) =>
      q.includes(p.name.toLowerCase()) ||
      q.includes(p.shortName.toLowerCase()) ||
      q.includes(p.code.toLowerCase())
  );
  if (matchedProduct) {
    return `### **${matchedProduct.name}** (${matchedProduct.code})\n\n` +
      `- **Category:** ${matchedProduct.category}\n` +
      `- **Packaging:** ${matchedProduct.packaging}\n` +
      `- **Form:** ${matchedProduct.dosageForm}\n` +
      `- **Clinical Focus:** ${matchedProduct.clinicalFocus}\n` +
      `- **Composition Summary:** ${matchedProduct.compositionSummary}\n\n` +
      `*For wholesale distribution or formulation monographs, please reach us at **${COMPANY_KNOWLEDGE.email}** or visit our Products page.*`;
  }

  // Product categories & offerings
  if (
    q.includes('product') ||
    q.includes('medicine') ||
    q.includes('tablet') ||
    q.includes('supplement') ||
    q.includes('formulation') ||
    q.includes('catalog') ||
    q.includes('dawai') ||
    q.includes('kya banate')
  ) {
    const list = COMPANY_KNOWLEDGE.products.map((p) => `- **${p}**`).join('\n');
    return `**${COMPANY_KNOWLEDGE.company.name}** specializes in high-quality reproductive health formulations across **5 verified therapeutic categories**:\n\n${list}\n\nKey brands include **Fertserum-M, Fertserum-F, Letroserum-2.5, Estradial, Irosera-XT, VitroArg, and 9 PRO Protein Powder**.\n\nYou can explore complete formulation monographs in our **Products** section.`;
  }

  // Locations / Addresses / Pune / Map
  if (
    q.includes('address') ||
    q.includes('location') ||
    q.includes('where') ||
    q.includes('office') ||
    q.includes('pune') ||
    q.includes('map') ||
    q.includes('kaha') ||
    q.includes('kahan') ||
    q.includes('pata') ||
    q.includes('undri') ||
    q.includes('phursungi')
  ) {
    const { office, company } = COMPANY_KNOWLEDGE.addresses;
    return `Here are the official verified locations for **${COMPANY_KNOWLEDGE.company.name}** in Pune:\n\n` +
      `📍 **${office.label}:**\n${office.address}\n👉 [View on Google Maps](${office.mapsUrl})\n\n` +
      `🏢 **${company.label}:**\n${company.address}\n👉 [View on Google Maps](${company.mapsUrl})`;
  }

  // Contact / Email / Phone / Reach
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('mail') ||
    q.includes('phone') ||
    q.includes('call') ||
    q.includes('reach') ||
    q.includes('connect') ||
    q.includes('sampark')
  ) {
    return `You can reach **${COMPANY_KNOWLEDGE.company.name}** directly:\n\n` +
      `- **Official Email:** [${COMPANY_KNOWLEDGE.email}](mailto:${COMPANY_KNOWLEDGE.email})\n` +
      `- **Corporate Office:** ${COMPANY_KNOWLEDGE.addresses.office.address}\n` +
      `- **Contact Form:** Use our online enquiry form on the Contact page for business or product enquiries.`;
  }

  // Wholesale / Distribution / Dealership / B2B / Export
  if (
    q.includes('wholesale') ||
    q.includes('distribut') ||
    q.includes('dealer') ||
    q.includes('stockist') ||
    q.includes('supplier') ||
    q.includes('b2b') ||
    q.includes('export') ||
    q.includes('buy in bulk')
  ) {
    return `**Wholesale & Distribution Enquiries:**\n\n` +
      `We welcome partnerships with verified pharmaceutical distributors, hospital pharmacies, and medical institutions.\n\n` +
      `Please email your company profile, Drug License details, and requirements to **${COMPANY_KNOWLEDGE.email}** or submit the enquiry form on our **Contact** page.`;
  }

  // Careers / Jobs / Hiring
  if (
    q.includes('career') ||
    q.includes('job') ||
    q.includes('vacancy') ||
    q.includes('hire') ||
    q.includes('hiring') ||
    q.includes('resume') ||
    q.includes('cv') ||
    q.includes('naukri')
  ) {
    return `**Careers at Hope Sera Pvt. Ltd.:**\n\n` +
      `We are continually looking for passionate pharmaceutical professionals in Pune across **QA/QC, Formulation Research, Regulatory Affairs, and Field Medical Representatives**.\n\n` +
      `Visit our **Careers** page or email your CV with your field of expertise to **${COMPANY_KNOWLEDGE.email}**.`;
  }

  // Tagline / Slogan
  if (q.includes('tagline') || q.includes('slogan') || q.includes('motto')) {
    return `The official motto and tagline of **${COMPANY_KNOWLEDGE.company.name}** is:\n\n> *"**${COMPANY_KNOWLEDGE.company.tagline}**"*`;
  }

  // Vision & Mission
  if (q.includes('vision') || q.includes('mission') || q.includes('goal')) {
    return `**Vision & Mission of Hope Sera:**\n\n` +
      `- **Vision:** To become a trusted leader in reproductive healthcare by providing innovative, safe, and effective pharmaceutical solutions that improve women's health and bring hope to families.\n\n` +
      `- **Mission:** To develop and deliver high-quality fertility and healthcare products through advanced research, strict quality standards, and ethical practices, supporting healthier lives and happier families.`;
  }

  // Quality / WHO-GMP / Manufacturing Standards
  if (
    q.includes('quality') ||
    q.includes('gmp') ||
    q.includes('standard') ||
    q.includes('certif') ||
    q.includes('facility') ||
    q.includes('lab')
  ) {
    return `**Quality Commitment:**\n\n` +
      `At Hope Sera, product safety and formulation purity are paramount. All our therapeutic formulations follow strict pharmaceutical quality standards, multi-stage batch testing, temperature-controlled stability protocols, and ethical compliance to ensure high clinical efficacy for reproductive wellness.`;
  }

  // Who are you / Identity
  if (
    q.includes('who are you') ||
    q.includes('tum kon ho') ||
    q.includes('what are you') ||
    q.includes('kya ho')
  ) {
    return `I am the **Hope Sera Assistant**, an automated assistant designed to help you explore verified information about **Hope Sera Pvt. Ltd.** (${COMPANY_KNOWLEDGE.company.brandName}), including our formulations, Pune offices, and contact channels.`;
  }

  // About Company
  if (
    q.includes('about') ||
    q.includes('hopesera') ||
    q.includes('hope sera') ||
    q.includes('company')
  ) {
    return `**${COMPANY_KNOWLEDGE.company.name}** (Brand: **${COMPANY_KNOWLEDGE.company.brandName}**, Tagline: *"${COMPANY_KNOWLEDGE.company.tagline}"*) is an ${COMPANY_KNOWLEDGE.company.description.charAt(0).toLowerCase() + COMPANY_KNOWLEDGE.company.description.slice(1)}\n\nBased in Pune, Maharashtra, we develop specialized treatments for fertility, hormone therapy, protein nutrition, and maternal wellness.`;
  }

  // Default helpful response
  return `**${COMPANY_KNOWLEDGE.company.name}** (*"${COMPANY_KNOWLEDGE.company.tagline}"*) is an advanced pharmaceutical manufacturer in Pune specializing in reproductive healthcare and therapeutic supplements.\n\nHow can I help you today? You can ask about:\n- **5 Product Categories & Brands** (Fertserum-M, Letroserum, etc.)\n- **Office & Company Addresses** in Pune (with Google Maps)\n- **Wholesale & Distribution** requirements\n- **Careers & Contact Details** (${COMPANY_KNOWLEDGE.email})`;
}
