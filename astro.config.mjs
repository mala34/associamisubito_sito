// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://associamisubito.it',
  integrations: [sitemap({
    serialize(item) {
      item.lastmod = new Date().toISOString();
      return item;
    }
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});