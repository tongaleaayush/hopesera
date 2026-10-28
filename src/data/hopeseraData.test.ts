import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PRODUCTS,
  VERIFIED_COMPANY,
  filterProducts,
  resolveRouteFromLocation,
  validateContactForm,
} from './hopeseraData';

test('contains all 7 verified Hopesera products with exact names and local asset paths', () => {
  assert.equal(PRODUCTS.length, 7);
  const names = PRODUCTS.map((p) => p.name);
  assert.deepEqual(names, [
    'Fertserum-M Tablets',
    'Fertserum-F Tablets',
    'Letroserum-2.5 Tablets',
    'Estradial Tablets',
    'Irosera-XT Tablets',
    'VitroArg Sachets',
    '9 PRO Protein Powder',
  ]);
  for (const product of PRODUCTS) {
    assert.ok(product.image.startsWith('/images/Products/'));
  }
});

test('preserves verified company knowledge from companyKnowledge', () => {
  assert.equal(VERIFIED_COMPANY.company.name, 'Hope Sera Pvt. Ltd.');
  assert.equal(VERIFIED_COMPANY.company.brandName, 'Hopesera');
  assert.equal(VERIFIED_COMPANY.company.tagline, 'Always For You...');
  assert.equal(VERIFIED_COMPANY.email, 'info@hopesera.com');
  assert.ok(Array.isArray(VERIFIED_COMPANY.contacts));
});

test('resolveRouteFromLocation supports clean routes, legacy .html redirects, and hash categories', () => {
  const r1 = resolveRouteFromLocation('/products.html', '#tablets');
  assert.equal(r1.route, 'products');
  assert.equal(r1.shouldRedirectHtml, true);
  assert.equal(r1.canonicalPath, '/products');
  assert.equal(r1.category, 'Fertility Tablets');

  const r2 = resolveRouteFromLocation('/vision.html');
  assert.equal(r2.route, 'vision');
  assert.equal(r2.shouldRedirectHtml, true);
  assert.equal(r2.canonicalPath, '/vision');

  const r3 = resolveRouteFromLocation('/privacy-policy');
  assert.equal(r3.route, 'privacy-policy');
  assert.equal(r3.shouldRedirectHtml, false);
});

test('filterProducts filters accurately by category and active ingredient query', () => {
  const fertility = filterProducts(PRODUCTS, 'Fertility Tablets', '');
  assert.equal(fertility.length, 3);

  const hormone = filterProducts(PRODUCTS, 'Hormone Therapy Tablets', '');
  assert.equal(hormone.length, 1);
  assert.equal(hormone[0].name, 'Estradial Tablets');

  const searchCoQ10 = filterProducts(PRODUCTS, 'All', 'Co-Enzyme Q10');
  assert.equal(searchCoQ10.length, 1);
  assert.equal(searchCoQ10[0].name, 'Fertserum-M Tablets');
});

test('validateContactForm enforces required fields and email format', () => {
  assert.equal(
    validateContactForm({
      name: '',
      email: 'test@example.com',
      phone: '9876543210',
      subject: 'Enquiry',
      message: 'Hello',
    }).valid,
    false
  );

  assert.equal(
    validateContactForm({
      name: 'Dr. Sharma',
      email: 'invalid-email',
      phone: '9876543210',
      subject: 'Enquiry',
      message: 'Hello',
    }).valid,
    false
  );

  assert.equal(
    validateContactForm({
      name: 'Dr. Sharma',
      email: 'sharma@clinic.in',
      phone: '+91 98765 43210',
      subject: 'B2B Partnership',
      message: 'Interested in Fertility Tablets catalog.',
    }).valid,
    true
  );
});
