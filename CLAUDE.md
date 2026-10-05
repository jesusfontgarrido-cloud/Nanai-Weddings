# Nanai Weddings · Reglas del proyecto

Web de Nanai Weddings: fotografía y vídeo de bodas, la línea de bodas de Nanai Studio
(Sevilla, base en Dos Hermanas). Todo el contenido visible va en español y habla de
**vosotros** (a la pareja o a la agencia). El código (variables, clases, commits), en inglés.
El criterio visual sale de la skill `estilo-nanai` (rúbrica de la sección 8).

## Piel propia (5-10-2026)

Weddings comparte con Nanai Studio la **estructura** (Astro, las mismas secciones, clases y
componentes `flat/`) pero **no la piel**. Indicaciones del usuario: «el formato me parece
bien pero diferenciaba algo más; en Weddings no uso el rojo, solo el amarillo para
destacar algo si es necesario; la quiero blanco puro». Referencias: el dossier para wedding
planners de 2026 y `docs/referencias-behance.md`.

- **Blanco puro** (`#FFFFFF`) y tinta `#111111`. Sin grano ni papel. Bandas a sangre en gris
  claro (`.tone-gray`, `#F5F5F4`), negro (`.tone-dark`, `#0D0D0D`) o amarillo (`.tone-yellow`).
- **Nada de rojo.** Ni en el isotipo: se usan `isotipo-weddings-negro.svg` / `-blanco.svg`,
  de una sola tinta, como en el dossier.
- **Amarillo `#FFCA00` solo para destacar**, y pocas veces: la página activa del menú, el
  subrayado de «contamos» en el hero, el acceso a profesionales, el servicio elegido en la
  calculadora, «El día» en el proceso, el pack foto + vídeo y la comisión. Nunca como color
  de texto sobre blanco (no se lee); sobre negro, sí.
- **Voces:** League Spartan 700 (titulares, el «Nanai» del logo), Playfair cursiva (la
  segunda línea de los titulares, citas, nombres de parejas, números grandes), Archivo
  (cuerpo) y etiquetas en mayúsculas espaciadas (`.label`), como el dossier. Sin Courier.
- **Esquinas rectas**, sin cápsulas redondeadas. Fotos con pie (`.caption`).
- **Sin lenguaje de cámara** (punto REC, timecode, esquinas de encuadre, desenfoques): eso es
  de Studio. Movimiento lento y limpio: fundidos, subidas cortas, subrayados que se dibujan.
- **Huecos honestos** (`FlatPh`): proporción real + qué va ahí. Nunca stock ni IA.
  Se listan con `grep -rn "data-pending" src`.

Reglas que sí se comparten con Studio: economizar (cada sección dice una cosa), un solo
botón relleno en la barra, nada importante detrás de un hover, nunca inventar reseñas,
clientes, parejas ni cifras.

## Arquitectura

- **Páginas:** `/` · `/historias` (+ `/historias/[slug]`) · `/tarifas` · `/profesionales` ·
  `/aviso-legal` · `/privacidad` · `/cookies`. Nav: Inicio · Historias · Tarifas, y a la
  derecha **Profesionales** (contorno) y **Consultar fecha** (relleno; «Hablemos» en móvil).
- **Home:** hero · calculadora (modo compacto) · historias · cómo trabajamos · proceso ·
  seguridad técnica · reseñas · preguntas · contacto.
- **Tarifas:** calculadora completa (servicio, invitados, extras) · recomendación ·
  Same Day Edit · seguridad · dossier · todas las condiciones en preguntas · contacto.
- **Profesionales:** para wedding planners, fincas y proveedores: qué ofrecemos, tarifas
  con la comisión incluida (la banda amarilla), extras, Same Day Edit, seguridad, protocolo,
  trabajo, dossier, preguntas (en blanco) y contacto propio.
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
- Accesibilidad: AA, foco de 2 px en tinta, un H1 por página, objetivos táctiles ≥ 44 px,
  `prefers-reduced-motion` respetado (la calculadora cambia sin animar).
- Medido el 5-10-2026 en móvil (local, sin limitar la red): home ≈ 420 KB (150 KB son
  tipografías), LCP ≈ 1,2 s, CLS 0. Repetir con red limitada antes de publicar.
- Responsive: 390, 768 y 1440 px.
