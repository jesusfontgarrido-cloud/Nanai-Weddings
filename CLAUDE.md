# Nanai Weddings · Reglas del proyecto

Web de Nanai Weddings: fotografía y vídeo de bodas, la línea de bodas de Nanai Studio
(Sevilla, base en Dos Hermanas). Todo el contenido visible va en español y habla de
**vosotros** (a la pareja o a la agencia). El código (variables, clases, commits), en inglés.
El criterio visual sale de la skill `estilo-nanai` (rúbrica de la sección 8).

## Mismo idioma que Nanai Studio

Esta web reutiliza el sistema de `nanai-studio` (repo hermano): `src/styles/flat.css`, la
carpeta `src/components/flat/`, las cuatro voces tipográficas y el mismo rojo plano
(#D9291C). Si allí cambia algo del sistema (tokens, botones, movimiento), conviene traerlo.

Lo que cambia en Weddings, a propósito:

- **Papel un punto más cálido** (`#F6F3EE` en vez de `#F4F4F1`).
- **Playfair cursiva con más papel**: el «weddings» del logotipo, una palabra en los
  titulares, las citas (`.quote`), los nombres de las parejas.
- **Movimiento más lento**: revelados de 900 ms (`--f-dur-reveal`), 1100 ms para el hero.
- **Huecos honestos** (`FlatPh`): proporción real + etiqueta a máquina con qué va ahí.
  Nunca stock ni IA. Se listan con `grep -rn "data-pending" src`.

Reglas heredadas de Studio: economizar (cada sección dice una cosa), un plano rojo por
página, el negro como sala de proyección (historias, Same Day Edit, pie), un solo botón
relleno en la barra, nada importante detrás de un hover, nunca inventar reseñas, clientes,
parejas ni cifras.

## Arquitectura

- **Páginas:** `/` · `/historias` (+ `/historias/[slug]`) · `/tarifas` · `/profesionales` ·
  `/aviso-legal` · `/privacidad` · `/cookies`. Nav: Inicio · Historias · Tarifas, y a la
  derecha **Profesionales** (contorno) y **Consultar fecha** (relleno; «Hablemos» en móvil).
- **Home:** hero · calculadora (modo compacto) · historias · cómo trabajamos · proceso ·
  seguridad técnica · reseñas · preguntas · contacto.
- **Tarifas:** calculadora completa (servicio, invitados, extras) · recomendación ·
  Same Day Edit · seguridad · dossier · todas las condiciones en preguntas · contacto.
- **Profesionales:** para wedding planners, fincas y proveedores: qué ofrecemos, tarifas
  con la comisión incluida (el plano rojo), extras, Same Day Edit, seguridad, protocolo,
  trabajo, dossier, preguntas (en papel) y contacto propio.
- **Condiciones en preguntas:** reserva, pagos, cancelación, horas, entrega, desplazamiento.
  Viven en `src/data/faq.ts`, no en los titulares.

## Datos (una sola fuente)

- `src/data/pricing.ts`: servicios, extras, comisión, condiciones numéricas. De aquí salen
  la calculadora, las tarifas, profesionales, las preguntas y **los dossieres en PDF**.
- `src/data/faq.ts`, `src/data/copy.ts` (cada texto dice su origen), `src/data/stories.ts`,
  `src/data/site.ts` (contacto y pendientes legales), `src/data/dossiers.ts`.

## Dossieres

Se generan desde la web: `npm run build && npm run dossieres` imprime `/dossier/parejas` y
`/dossier/profesionales` (A4 apaisado) en `public/dossieres/`. Después, otro `npm run build`.
No se editan PDF a mano: si cambia un precio, se cambia en `pricing.ts` y se regeneran.

## Técnica

- Astro 5 estático, CSS propio, sin UI kits. Fuentes autoalojadas (`public/fonts`).
- Imágenes con `astro:assets` (AVIF/WebP), `lazy` salvo el hero.
- Vídeo: Vimeo con fachada (no carga nada hasta pulsar) y `dnt=1`. Bucles propios:
  `muted loop playsinline`, con póster, ≤ 6 MB.
- **Sin cookies de analítica ni publicidad** → sin banner. Si se añaden, banner con
  Aceptar / Rechazar / Configurar al mismo nivel (guía AEPD 2024) y actualizar `/cookies`.
- Formularios: Web3Forms, casilla de consentimiento desmarcada y obligatoria, primera capa
  RGPD junto al botón. En desarrollo no envían.
- SEO local: H1 con «bodas en Sevilla», `ProfessionalService` con ofertas y precios en
  `BaseLayout.astro`, bloque NAP en el pie (igual que en Google Business Profile), sitemap
  sin las hojas del dossier, historias con lugar y finca en el título.
- Accesibilidad: AA, foco de 2 px en rojo, un H1 por página, objetivos táctiles ≥ 44 px,
  `prefers-reduced-motion` respetado (la calculadora cambia sin animar).
- Medido el 5-10-2026 en móvil (local, sin limitar la red): home ≈ 485 KB (186 KB son
  tipografías), LCP ≈ 1 s, CLS 0. Repetir con red limitada antes de publicar.
- Responsive: 390, 768 y 1440 px.
