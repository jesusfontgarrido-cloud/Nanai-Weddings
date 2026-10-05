# Nanai Weddings — Web

Fotografía y vídeo de bodas en Sevilla. La línea de bodas de [Nanai Studio](https://nanaistudio.es):
misma estructura técnica que su web, con piel propia: blanco, negro y grises medios, todo
redondeado, transparencias y degradados suaves, League Spartan + Playfair cursiva +
Archivo, y un toque dorado solo en el botón de profesionales. Astro 5, CSS propio y poco JS.

- Reglas del proyecto: [`CLAUDE.md`](CLAUDE.md)
- Decisiones tomadas y pendientes: [`docs/decisiones.md`](docs/decisiones.md)
- Referencias de Behance: [`docs/referencias-behance.md`](docs/referencias-behance.md)
- Fotos y vídeos que faltan, con su formato: [`docs/recursos-pendientes.md`](docs/recursos-pendientes.md)

> Las imágenes son fotogramas provisionales sacados del dossier para wedding planners; lo
> que falta son huecos marcados. Antes de publicar, ver «Para publicar» abajo.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Hero centrado · cómo trabajamos · proceso · historias · tarifas en carpetas · sobre nosotros · preguntas · contacto |
| `/tarifas` | Carpetas (servicio + su dossier), invitados, extras y total, «Consultar fecha» en ventana emergente, Same Day Edit, condiciones en preguntas, contacto |
| `/historias` | Galería de muestra: cada trabajo con su portada y fotogramas alrededor; abre el tráiler o la galería por momentos (sin página por boda) |
| `/aviso-legal`, `/privacidad`, `/cookies` | Textos legales (borrador, faltan los datos del titular) |
| `/dossier/fotografia`, `/dossier/video` | Hojas A4 para imprimir los dossieres (fuera del sitemap) |

«Profesionales» no es una página: abre un formulario corto. La landing para wedding
planners (con la comisión) se hará aparte, con acceso por enlace.

## Puesta en marcha

Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # web estática en dist/
npm run dossieres  # (tras build) imprime los PDF en public/dossieres; luego, build otra vez
npm run preview
npm run vista-previa  # (tras build) copia navegable en vista-previa/ (también sirve como HTML exportado)
```

## Estructura

```
src/
  styles/       flat.css (la piel de Weddings), fonts.css, base.css
  layouts/      BaseLayout (SEO, datos estructurados), SiteLayout (barra, pie, ventanas,
                scripts comunes), LegalLayout
  components/
    flat/       Nav, Hero, Method, Steps, Stories, Showcase + WorkViewer (historias),
                Pricing (carpetas y calculadora), DateDialog, ProDialog, Consent, Feature
                (Same Day Edit), About, Faq, Contact, Footer, Film (Vimeo), PageHeader,
                Ph (huecos), Wordmark, Motion, Scripts…
    dossier/    Dossier.astro (hojas imprimibles)
  data/         pricing.ts (precios: la única fuente), faq.ts, copy.ts, stories.ts,
                site.ts, dossiers.ts
  assets/media/ provisional/ (fotogramas del dossier, hasta tener el material bueno)
  pages/
public/
  fonts/        League Spartan, Archivo y Playfair Italic (woff2)
  brand/        isotipo de Nanai en una sola tinta (sin el punto rojo)
  dossieres/    PDF generados (fotografía y vídeo)
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
