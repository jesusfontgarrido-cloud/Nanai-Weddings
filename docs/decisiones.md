# Nanai Weddings · Decisiones (5-10-2026)

## Tomadas

| Decisión | Por qué |
|---|---|
| **Misma estructura que Nanai Studio, piel propia** | El formato gustó; el parecido, no. Se comparte Astro, componentes y secciones; cambian color, tipografía, formas y movimiento (`CLAUDE.md`) |
| **Blanco puro, sin rojo, amarillo `#FFCA00` solo para destacar** | Indicación del usuario. Es además lo que mejor funciona en Behance para bodas (claro, editorial) y es el amarillo del dossier para planners |
| **Isotipo en una sola tinta** | Como en el dossier: en Weddings no va el punto rojo |
| **Precios a la vista con calculadora** | Lo más valorado de la categoría en Behance ordena la oferta como un catálogo; el wireframe de referencia pide transparencia |
| **Condiciones en preguntas frecuentes** | Lo sensible (reserva, pagos, cancelación, horas, entrega, desplazamiento) no va en titulares |
| **Página propia para profesionales** | Con el dossier para planners: tarifas, comisión, extras, protocolo y contacto propio |
| **Dossieres generados desde la web** | Un precio cambia en `src/data/pricing.ts` y cambia en la web y en el PDF (0,8–0,9 MB frente a los 20 MB del original) |
| **Vimeo con `dnt=1` y sin analítica** | Reproductor limpio y sin cookies de seguimiento: no hace falta banner de cookies |
| **Precio único en todos los canales** | Se usan los precios del dossier para planners («precio final para los novios»): foto 1.100 €, vídeo 1.200 €, pack 2.200 €. Si la web enseñara menos que la planner, los novios lo verían |

## Pendientes de confirmar

1. **Precios.** Los dossieres antiguos para parejas decían 900 € (foto) y 1.000 € (vídeo).
   Si los precios para parejas que contratan directamente son otros, se cambian en
   `src/data/pricing.ts` (y la frase de profesionales «el mismo precio que ven en nuestra web»
   habría que quitarla).
2. **Diferencias entre dossieres** (se ha usado el más reciente): podcast 900 → 1.200 €,
   álbum 100 → 150 €, vídeo largo 15–30 → 10–30 min, desplazamiento «no incluido» → 25 km
   sin coste y 0,37 €/km.
3. **Dron en el pack:** en el dossier aparece en vídeo y en foto (400 € cada uno). ¿Un mismo
   vuelo cubre las dos cosas?
4. **Logotipo:** compuesto como en el dossier hasta tener el SVG oficial.
5. **Dominio** (`nanaiweddings.es`, sin confirmar) y un correo del dominio.
6. **Formulario:** usa la clave de Web3Forms de Studio; hace falta una propia.
7. **Reseñas:** ficha de Google o Bodas.net para conectar el widget.
8. **Datos legales** del titular y revisión de los textos.
