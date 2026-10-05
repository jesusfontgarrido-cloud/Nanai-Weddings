// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio de producción, sin barra final. PENDIENTE de confirmar (ver docs/propuesta.md).
const SITE = 'https://nanaiweddings.es';

export default defineConfig({
  site: SITE,
  // Las hojas del dossier son para imprimir a PDF: fuera del sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/dossier/') })],
  image: {
    // astro:assets genera AVIF + WebP.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
