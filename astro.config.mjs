import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'az'],
    routing: {
      prefixDefaultLocale: true,
    },
    redirects: {
      '/': '/en/',
    },
  },
});
