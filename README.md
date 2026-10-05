# Nanai Weddings — Web

Fotografía y vídeo de bodas en Sevilla. La línea de bodas de [Nanai Studio](https://nanaistudio.es):
misma estructura técnica que su web, con piel propia: blanco puro, League Spartan +
Playfair cursiva + Archivo y el amarillo del dossier solo para destacar. Astro 5, CSS
propio y casi cero JS.

- Reglas del proyecto: [`CLAUDE.md`](CLAUDE.md)
- Decisiones tomadas y pendientes: [`docs/decisiones.md`](docs/decisiones.md)
- Referencias de Behance: [`docs/referencias-behance.md`](docs/referencias-behance.md)
- Fotos y vídeos que faltan, con su formato: [`docs/recursos-pendientes.md`](docs/recursos-pendientes.md)

> Las imágenes son fotogramas provisionales sacados del dossier para wedding planners; lo
> que falta son huecos marcados. Antes de publicar, ver «Para publicar» abajo.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Hero · calculadora de tarifas (servicio + precio animado) · historias · cómo trabajamos · proceso · seguridad técnica · reseñas · preguntas · contacto |
| `/tarifas` | Calculadora completa (servicio, invitados, extras, total), recomendación, Same Day Edit, seguridad técnica, dossier, condiciones en preguntas, contacto |
| `/profesionales` | Para wedding planners, fincas y proveedores: qué ofrecemos, tarifas y comisión, extras, Same Day Edit, seguridad, protocolo, trabajo, dossier, preguntas, contacto |
| `/historias` | Las bodas, una por página (`/historias/[slug]`: cartela, película, galería por momentos, proveedores) |
| `/aviso-legal`, `/privacidad`, `/cookies` | Textos legales (borrador, faltan los datos del titular) |
| `/dossier/parejas`, `/dossier/profesionales` | Hojas A4 para imprimir los dossieres (fuera del sitemap) |

## Puesta en marcha

Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # web estática en dist/
npm run dossieres  # (tras build) imprime los PDF en public/dossieres; luego, build otra vez
npm run preview
```

## Estructura

```
src/
  styles/       flat.css (la piel de Weddings), fonts.css, base.css
  layouts/      BaseLayout (SEO, datos estructurados), LegalLayout
  components/
    flat/       Nav, Hero, Pricing (calculadora), Stories, Film (Vimeo), Method, Steps,
                Security, Reviews, Faq, Contact, Footer, Feature, Dossiers, Extras,
                ProPrices, Pillars, Advice, PageHeader, Ph (huecos), Wordmark, Motion…
    dossier/    Dossier.astro (hojas imprimibles)
  data/         pricing.ts (precios: la única fuente), faq.ts, copy.ts, stories.ts,
                site.ts, dossiers.ts
  assets/media/ provisional/ (fotogramas del dossier, hasta tener el material bueno)
  pages/
public/
  fonts/        League Spartan, Archivo y Playfair Italic (woff2)
  brand/        isotipo de Nanai en una sola tinta (sin el punto rojo)
  dossieres/    PDF generados
  og/           imagen para compartir
scripts/
  dossieres.mjs imprime los dossieres con Chrome
```

## Para publicar

Es una web estática: `npm run build` deja todo en `dist/`. Se puede servir igual que
nanaistudio.es (Cloudflare, conectando este repositorio) o en cualquier hosting estático.
Antes de abrirla al público:

1. Confirmar el dominio en `astro.config.mjs` (ahora `nanaiweddings.es`).
2. Poner la clave de Web3Forms de Weddings en `src/data/site.ts`.
3. Rellenar los datos legales del titular (`src/data/site.ts`) y revisar los textos legales.
4. Cambiar el material provisional (`docs/recursos-pendientes.md`).

Lo que falta, marcado en el código:

```bash
grep -rn "data-pending\|PENDIENTE" src
```
