# Recursos pendientes

Todo lo que hoy es un hueco (`data-pending` en el código) o una imagen provisional sacada
del dossier para planners (`src/assets/media/provisional/`). Formatos pensados para que
la web cargue rápido: fotos JPG de 2400 px por el lado largo como mucho (la web genera
AVIF/WebP); vídeos en Vimeo salvo los bucles.

## Vídeo

| Dónde | Qué | Formato |
|---|---|---|
| Hero (home) | Una imagen «que tenga sentido» (la de ahora es provisional) o un bucle sin sonido de 8–15 s | Foto ≥ 2400 px; o MP4 H.264 + WebM, 1920×1080 y un recorte vertical 1080×1920, ≤ 6 MB cada uno, con póster. El titular va centrado encima |
| Historias (home) | Tráiler destacado | ID de Vimeo (2.39:1 o 16:9), cuenta Pro o superior para quitar la marca y restringir el dominio |
| Cada trabajo de vídeo (/historias) | Siempre el tráiler (nunca el largo) y 4 fotogramas suyos | ID de Vimeo; fotogramas 3:2, ≥ 1200 px |
| Same Day Edit | (opcional) un clip proyectado en una boda real | ID de Vimeo o fotograma |

## Fotografía

| Dónde | Qué | Formato |
|---|---|---|
| Carpetas de tarifas (home) | 4 fotos de ejemplo (las de ahora salen del PDF y son pequeñas) | Verticales 3:4, ≥ 1200 px |
| Carpetas de tarifas (home) | Un fotograma de vídeo con color propio | 2.39:1, ≥ 1600 px |
| Cómo trabajamos | El equipo trabajando con una pareja (BTS) | Vertical 4:5, se verá en blanco y negro |
| Cada trabajo (/historias y home) | Portada | 16:9 para /historias y 4:5 para la home, ≥ 1600 px |
| Cada galería de foto | 25–40 fotos por momentos: preparativos, ceremonia, retratos, fiesta; y 4 para alrededor de la portada | ≥ 2000 px, nombres descriptivos (`boda-finca-ciudad-01.jpg`) |
| Compartir | Imagen para redes y WhatsApp | 1200×630 |

## Datos de cada trabajo

Nombres de la pareja, finca y ciudad (para el SEO local) y fecha. Nada más: al pulsar se
abre el tráiler o la galería. Van en `src/data/stories.ts`.

## Marca y textos

- SVG oficial del logotipo de Nanai Weddings (horizontal, en negro y en blanco).
- Reseñas reales (Google o Bodas.net), si se recupera la sección.
- Datos legales del titular.
