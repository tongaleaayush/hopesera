# Hope Sera Pvt. Ltd. (Hopesera) — Official Static Website

A high-performance, 100% static web application for **Hope Sera Pvt. Ltd.**, ready for direct hosting on **Hostinger's Single Website Plan** (or any standard static / shared hosting).

- **No backend server required** (no Node.js daemon, Express, or cloud runtimes required).
- **No API keys needed** (no Gemini API key or external cloud dependencies).
- **100% Client-Side Hope Assist** (instant automated assistant providing verified company knowledge, products, and Pune office locations directly in the browser).
- **Production-Ready Hostinger Configuration** (`.htaccess` included for clean SPA URLs, HTTPS enforcement, and asset caching).

---

## 🚀 How to Host on Hostinger (Single Website Plan)

Hostinger's Single Website plan is standard shared web hosting serving files from `public_html`. Because this website is built as a pure static bundle, deployment takes just 2 minutes:

### Step 1: Build the Static Bundle Locally
Open your terminal in this project folder and run:
```bash
npm run build
```
This generates the ready-to-deploy static files inside the **`dist/`** folder.

### Step 2: Upload to Hostinger File Manager
1. Log in to your **Hostinger hPanel** (`hpanel.hostinger.com`).
2. Go to **Websites** &rarr; select your domain &rarr; click **File Manager** (or connect via FTP / FileZilla).
3. Open the **`public_html`** directory.
4. Delete any default placeholder files (e.g. `default.php`).
5. Upload all files and folders from inside your local **`dist/`** folder directly into **`public_html`**:
   - `index.html`
   - `.htaccess` *(make sure hidden files are visible in Hostinger File Manager)*
   - `robots.txt`
   - `sitemap.xml`
   - `assets/`
   - `images/`

> **Note on `.htaccess`:** Hostinger uses LiteSpeed/Apache web servers. The included `.htaccess` file automatically enables clean routing (so direct links like `/about`, `/products`, `/careers`, and `/contact` load smoothly without 404 errors), enforces HTTPS, and enables browser caching for fast loading.

---

## 💻 Local Development

To run and preview the website locally on your computer:

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Open in your browser
# http://localhost:3000
```

### Other Available Scripts
- `npm run build` — Compiles production-optimized static files into `dist/`.
- `npm run preview` — Locally previews the static `dist/` production build.
- `npm run lint` — Validates TypeScript types across the project.
- `npm test` — Runs unit tests for company data and the client-side assistant.

---

## 📁 Project Architecture

- **`src/data/companyKnowledge.ts`**: Verified company facts, Pune addresses with Google Maps links, and official contacts.
- **`src/data/hopeseraData.ts`**: Verified product monographs (7 formulations), categories, and route handlers.
- **`src/utils/hopeseraAssistant.ts`**: 100% client-side verified assistant engine (no API key or backend server needed).
- **`src/components/ChatbotWidget.tsx`**: Floating interactive Hope Assist chat UI.
- **`src/pages/CareersPage.tsx`**: General career enquiry portal (no specific vacancies; general talent acquisition).
- **`public/.htaccess`**: LiteSpeed/Apache SPA fallback rewrite rules and caching headers for Hostinger.
- **`public/robots.txt` & `public/sitemap.xml`**: Search engine indexing and SEO configuration.
