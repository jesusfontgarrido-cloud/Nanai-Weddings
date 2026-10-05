# Recursos pendientes

Todo lo que hoy es un hueco (`data-pending` en el código) o una imagen provisional sacada
del dossier para planners (`src/assets/media/provisional/`). Formatos pensados para que
la web cargue rápido: fotos JPG de 2400 px por el lado largo como mucho (la web genera
AVIF/WebP); vídeos en Vimeo salvo los bucles.

## Vídeo

| Dónde | Qué | Formato |
|---|---|---|
| Hero (home) | Bucle sin sonido: 8–15 s de los mejores planos | MP4 H.264 + WebM, 1920×1080 y un recorte vertical 1080×1920, ≤ 6 MB cada uno, con fotograma de póster |
| Historias (home y /historias) | Tráiler destacado | ID de Vimeo (2.39:1 o 16:9), cuenta Pro o superior para quitar la marca y restringir el dominio |
| Cada historia | Tráiler o vídeo corto de esa boda | ID de Vimeo |
| Same Day Edit | (opcional) un clip proyectado en una boda real | ID de Vimeo o fotograma |

## Fotografía

| Dónde | Qué | Formato |
|---|---|---|
| Calculadora | 6 fotos para la hoja de contactos (las de ahora salen del PDF y son pequeñas) | ≥ 1200 px, mezcla de vertical y horizontal |
| Calculadora | Un fotograma de vídeo con color propio | 2.39:1, ≥ 1600 px |
| Cómo trabajamos | El equipo trabajando con una pareja (BTS) | Vertical 4:5, se verá en blanco y negro |
| Cada historia | Portada | Vertical 4:5, ≥ 1600 px |
| Cada historia | 25–40 fotos en orden: preparativos, ceremonia, retratos, fiesta | ≥ 2000 px, nombres descriptivos (`boda-finca-ciudad-01.jpg`) |
| Compartir | Imagen para redes y WhatsApp | 1200×630 |

## Datos de cada historia

Nombres de la pareja, finca y ciudad (para el SEO local), fecha, servicio, quién cubrió
foto y vídeo, una frase suya (con permiso) y los proveedores (wedding planner, finca,
flores, vestido…). Van en `src/data/stories.ts`.

## Marca y textos

- SVG oficial del logotipo de Nanai Weddings (horizontal, en negro y en blanco).
- Reseñas reales (Google o Bodas.net) y el widget para mostrarlas.
- Datos legales del titular.
