import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'hopesera-legacy-routes',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            if (!req.url) return next();

            // Rewrite legacy .html page visits to SPA root so client router handles them cleanly in dev
            const urlPath = req.url.split('?')[0].split('#')[0];
            const legacyHtmlPages = [
              '/about.html',
              '/vision.html',
              '/products.html',
              '/careers.html',
              '/faqs.html',
              '/contact.html',
              '/privacy-policy.html',
              '/terms-conditions.html',
            ];
            if (legacyHtmlPages.includes(urlPath.toLowerCase())) {
              req.url = '/index.html';
            }

            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
