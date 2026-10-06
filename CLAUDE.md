# Nanai Weddings · Reglas del proyecto

Web de Nanai Weddings: fotografía y vídeo de bodas, la línea de bodas de Nanai Studio
(Sevilla, base en Dos Hermanas). Todo el contenido visible va en español y habla de
**vosotros** (a la pareja o a la agencia). El código (variables, clases, commits), en inglés.
El criterio visual sale de la skill `estilo-nanai` (rúbrica de la sección 8).

## Piel propia (revisión del 5-10-2026)

Weddings comparte con Nanai Studio la **estructura** (Astro, clases y componentes `flat/`)
pero **no la piel**. Indicaciones del usuario: «quiero que la página web prácticamente sea
blanco y negro y tonos medios»; «todos los botones redondeados»; «sutileza, elegancia;
jugar mucho con las transparencias, con degradado suave»; «más que amarillo, doradito».
Referencias: el dossier para wedding planners de 2026, details.so (tarjetas oscuras
redondeadas y apiladas, botones píldora) y `docs/referencias-behance.md`.

- **Blanco, negro y grises medios.** Blanco puro (`#FFFFFF`) y tinta `#111111`. Bandas en
  gris que entran y salen con degradado (`.tone-gray`) o en tarjeta oscura redondeada con
  margen alrededor (`.sec--card.tone-dark`). Sin grano ni papel. Nada de rojo ni amarillo.
- **Dorado apagado (`#BFA06A` / `#D9C394`) solo en los botones de profesionales** (los que
  abren su formulario: el de la barra, el del menú móvil y el de la sección «Para
  profesionales» de la home; clase `.btn--pro`). En ningún otro sitio.
- **Todo redondeado:** botones en píldora (`.btn`, `.chip`), tarjetas a 28 px, fotos a
  18 px, campos a 14 px. **Transparencias** (barra de cristal, ventanas emergentes con
  desenfoque, botones `.btn--glass`) y **degradados suaves** entre secciones (el hero se
  funde en blanco).
- **Voces:** League Spartan 700 (titulares, el «Nanai» del logo), Playfair cursiva (la
  segunda parte de los titulares, a menudo en tono medio `.tone-2`; citas, nombres de
  parejas), Archivo (cuerpo) y etiquetas en mayúsculas espaciadas (`.label`). **La cursiva
  se ve del mismo tamaño que lo de al lado:** en titulares, `font-size-adjust: ex-height
  0.43` (iguala la x de League Spartan); en texto, 0.53 (la de Archivo). Sin Courier.
- **Sin lenguaje de cámara** (punto REC, timecode, esquinas de encuadre, desenfoques de
  enfoque): eso es de Studio. Movimiento lento y limpio: fundidos, subidas cortas, el hilo
  del proceso que avanza al bajar, las carpetas de tarifas que pasan al frente.
- **Huecos honestos** (`FlatPh`): proporción real + qué va ahí. Nunca stock ni IA.
  Se listan con `grep -rn "data-pending" src`.

Reglas que sí se comparten con Studio: economizar (cada sección dice una cosa), un solo
botón relleno en la barra, nada importante detrás de un hover, nunca inventar reseñas,
clientes, parejas ni cifras.

## Arquitectura

- **Páginas:** `/` · `/historias` (selector) · `/historias/video` · `/historias/fotografia`
  · `/tarifas` · `/aviso-legal` · `/privacidad` · `/cookies`. Todas sobre
  `SiteLayout.astro` (barra, pie, ventana de Profesionales y `FlatScripts`). Nav: Inicio ·
  Historias (desplegable al pulsar: Vídeo · Fotografía) · Tarifas, y a la derecha
  **Profesionales** (dorado; abre una ventana emergente) y **Consultar fecha** (negro;
  «Hablemos» en móvil).
- **No hay página pública para profesionales** (ni comisión, ni dossier para planners):
  el usuario hará esa landing aparte, con acceso por enlace. En esta web, «Profesionales»
  abre un formulario corto (profesión, forma de contacto, Instagram, qué os interesa).
- **Home:** hero centrado · cómo trabajamos · proceso (3 pasos: reservamos y nos
  conocemos · el día de la boda · la entrega) · historias · tarifas (carpetas) · para
  profesionales (explica el botón dorado: servicios para empresas del sector, sin cifras)
  · sobre nosotros · preguntas · contacto.
- **Tarifas:** carpetas apiladas (Fotografía delante, Vídeo y Foto + vídeo detrás; dentro,
  el dossier de ese servicio: foto → fotografía, vídeo → vídeo, foto + vídeo → los dos) ·
  invitados (informa, **nunca marca nada solo**; desde 130, segundo fotógrafo/operador
  obligatorio) · extras (preboda y postboda por separado) · resumen · «Consultar fecha con
  esta selección» abre una ventana emergente (nombre, fecha, forma de contacto) · Same Day
  Edit · condiciones en preguntas · contacto.
- **Historias:** foto y vídeo por separado. `/historias` elige entre las dos;
  `/historias/video` (tráilers, siempre el tráiler) y `/historias/fotografia` (galerías por
  momentos) son galerías de muestra, sin página por boda: todos los trabajos igual de
  grandes, portada en el centro y cuatro fotogramas alrededor. Al pulsar se abre el
  tráiler o la galería; `/historias/<tipo>#<id>` lo abre directamente (así enlazan las
  tarjetas de la home).
- **Fuera:** línea de tiempo de la jornada, «Nuestra recomendación», seguridad técnica y
  reseñas (de momento). La reserva, los kilómetros y las horas van en las preguntas.
- **Condiciones en preguntas:** reserva, pagos, cancelación, horas, entrega, desplazamiento.
  Viven en `src/data/faq.ts`, no en los titulares.

## Datos (una sola fuente)

- `src/data/pricing.ts`: servicios, extras, regla de equipo por invitados, condiciones
  numéricas. De aquí salen la calculadora, las preguntas y **los dossieres en PDF**.
- `src/data/faq.ts`, `src/data/copy.ts` (cada texto dice su origen), `src/data/stories.ts`
  (tráilers y galerías), `src/data/site.ts` (contacto y pendientes legales),
  `src/data/dossiers.ts`.

## Dossieres

Uno por servicio. Se generan desde la web: `npm run build && npm run dossieres` imprime
`/dossier/fotografia` y `/dossier/video` (A4 apaisado) en `public/dossieres/`. Después,
otro `npm run build`.
No se editan PDF a mano: si cambia un precio, se cambia en `pricing.ts` y se regeneran.

## Técnica

- Astro 5 estático, CSS propio, sin UI kits. Fuentes autoalojadas (`public/fonts`).
- Imágenes con `astro:assets` (AVIF/WebP), `lazy` salvo el hero.
- Vídeo: Vimeo con fachada (no carga nada hasta pulsar) y `dnt=1`. Bucles propios:
  `muted loop playsinline`, con póster, ≤ 6 MB.
- **Sin cookies de analítica ni publicidad** → sin banner. Si se añaden, banner con
  Aceptar / Rechazar / Configurar al mismo nivel (guía AEPD 2024) y actualizar `/cookies`.
- Formularios (contacto y las dos ventanas emergentes): Web3Forms vía `FlatScripts`,
  `FlatConsent` (casilla desmarcada y obligatoria + primera capa RGPD). En desarrollo y en
  la vista previa no envían.
- SEO local: H1 con «bodas en Sevilla», `ProfessionalService` con ofertas y precios en
  `BaseLayout.astro`, bloque NAP en el pie (igual que en Google Business Profile), sitemap
  sin las hojas del dossier, historias con lugar y finca en el título.
- Accesibilidad: AA, foco de 2 px en tinta, un H1 por página, objetivos táctiles ≥ 44 px,
  `prefers-reduced-motion` respetado (la calculadora cambia sin animar).
- Medido el 5-10-2026 (primera versión) en móvil, local y sin limitar la red: home ≈ 420 KB
  (150 KB son tipografías), LCP ≈ 1,2 s, CLS 0. Repetir tras esta revisión y con red
  limitada antes de publicar.
- Responsive: 390, 768 y 1440 px.
