# Nanai Weddings — Web

Fotografía y vídeo de bodas en Sevilla. La línea de bodas de [Nanai Studio](https://nanaistudio.es),
con el mismo sistema visual (papel, League Spartan + Archivo + Playfair cursiva + Courier
Prime, un solo rojo plano). Astro 5, CSS propio y casi cero JS.

- Reglas del proyecto: [`CLAUDE.md`](CLAUDE.md)
- Propuesta, investigación y decisiones pendientes: [`docs/propuesta.md`](docs/propuesta.md)
- Fotos y vídeos que faltan, con su formato: [`docs/recursos-pendientes.md`](docs/recursos-pendientes.md)

> **Propuesta, aún no en producción.** Las imágenes son fotogramas provisionales sacados
> del dossier para wedding planners; lo demás son huecos marcados.

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
  styles/       flat.css (la piel de Studio, adaptada), fonts.css, base.css
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
  fonts/        las mismas woff2 que Nanai Studio
  brand/        isotipo y logos oficiales de Nanai
  dossieres/    PDF generados
  og/           imagen para compartir
scripts/
  dossieres.mjs imprime los dossieres con Chrome
```

## Pendiente

```bash
grep -rn "data-pending\|PENDIENTE" src
```
