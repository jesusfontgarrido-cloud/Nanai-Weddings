# Nanai Weddings · Decisiones (6-10-2026, revisión 4)

## Tomadas

| Decisión | Por qué |
|---|---|
| **Misma estructura que Nanai Studio, piel propia** | El formato gustó; el parecido, no. Se comparte Astro, componentes y secciones; cambian color, tipografía, formas y movimiento (`CLAUDE.md`) |
| **Blanco, negro y grises medios; dorado apagado solo en «Profesionales»** | Revisión 3: «demasiado amarillo». El amarillo `#FFCA00` sale de toda la web; el único acento es un dorado (`#BFA06A`) en ese botón |
| **Todo redondeado, transparencias y degradados suaves** | «Sutileza, elegancia». Botones píldora, tarjetas redondeadas (referencia: details.so), barra y ventanas de cristal, el hero se funde en blanco |
| **Tarifas en carpetas apiladas** | Indicación del usuario («vas abriendo las carpetas, tum, tum, tum»). Sin línea de tiempo de la jornada ni la línea de reserva y kilómetros: eso va en las preguntas |
| **Invitados: se informa, no se marca nada** | «La persona debe saber y escoger». Desde 130 invitados se avisa de que el segundo fotógrafo/operador es obligatorio, pero lo marca quien calcula |
| **«Consultar fecha» en ventana emergente** | Nombre, fecha y forma de contacto, con la selección de la calculadora. Más fluido que bajar al formulario (que sigue abajo) |
| **Historias como galería de muestra** | Todos los trabajos con el mismo peso; sin página por boda. Vídeo: solo tráilers. Foto: galería por momentos |
| **Proceso con un hilo que avanza al bajar** | Se pidió darle una vuelta a la animación al pasar el ratón: al pasar el ratón no funciona en móvil y esconde contenido; el hilo que se dibuja con el scroll cuenta lo mismo (un calendario que avanza), sin lenguaje de cámara de Studio, y sin él todo se lee igual |
| **Sobre nosotros en la home** | Qué es Nanai Studio y quién es Jesús Font, contado desde las bodas (textos de la web de Studio) |
| **Historias: desplegable en la barra + selector + una página por tipo** | El usuario dejó elegir entre una página que lleve a fotos o a vídeo y un desplegable. Se hacen las dos cosas, que no compiten: el desplegable (al pulsar, no al pasar el ratón: funciona en móvil y con teclado) lleva directo a `/historias/video` o `/historias/fotografia`, y `/historias` queda como selector para quien llega por un enlace o por buscador |
| **Proceso en tres pasos** | Revisión 4: reservamos y nos conocemos · el día de la boda · la entrega |
| **Sección «Para profesionales» en la home** | Explica el botón dorado: servicios para empresas del sector (lo que en inglés se llama B2B), sin cifras ni comisión. El botón de la sección es dorado como el de la barra porque abre lo mismo |
| **Isotipo en una sola tinta** | Como en el dossier: en Weddings no va el punto rojo |
| **Precios a la vista con calculadora** | Lo más valorado de la categoría en Behance ordena la oferta como un catálogo; el wireframe de referencia pide transparencia |
| **Condiciones en preguntas frecuentes** | Lo sensible (reserva, pagos, cancelación, horas, entrega, desplazamiento) no va en titulares |
| **Sin página pública para profesionales** | «No quiero que una persona normal pueda meterse aquí». Se eliminan /profesionales, su dossier y la comisión; queda un formulario corto en ventana emergente. La landing se hará aparte, con acceso por enlace |
| **Dossieres generados desde la web, uno por servicio** | Un precio cambia en `src/data/pricing.ts` y cambia en la web y en el PDF (≈ 0,7–0,8 MB). Fotografía y vídeo por separado, como los originales para parejas |
| **Vimeo con `dnt=1` y sin analítica** | Reproductor limpio y sin cookies de seguimiento: no hace falta banner de cookies |
| **Precio único en todos los canales** | Se usan los precios del dossier para planners («precio final para los novios»): foto 1.100 €, vídeo 1.200 €, pack 2.200 €. Si la web enseñara menos que la planner, los novios lo verían |

## Pendientes de confirmar

1. **Precios.** Los dossieres antiguos para parejas decían 900 € (foto) y 1.000 € (vídeo).
   Si los precios para parejas que contratan directamente son otros, se cambian en
   `src/data/pricing.ts`. El usuario confirmó en la revisión 3: 1.100 / 1.200 / 2.200 €.
2. **Diferencias entre dossieres** (se ha usado el más reciente): podcast 900 → 1.200 €,
   álbum 100 → 150 €, vídeo largo 15–30 → 10–30 min, desplazamiento «no incluido» → 25 km
   sin coste y 0,37 €/km.
3. **Dron en el pack:** en el dossier aparece en vídeo y en foto (400 € cada uno). ¿Un mismo
   vuelo cubre las dos cosas?
4. **Logotipo:** compuesto como en el dossier hasta tener el SVG oficial.
5. **Dominio** (`nanaiweddings.es`, sin confirmar) y un correo del dominio.
6. **Formulario:** usa la clave de Web3Forms de Studio; hace falta una propia.
7. **Reseñas:** fuera de momento («le daré una vuelta»). Si vuelven: ficha de Google o
   Bodas.net, nunca inventadas.
8. **Datos legales** del titular y revisión de los textos.
9. **Imagen del hero:** «la imagen no va a ser esta». Sigue el fotograma provisional
   para que la vista previa se pueda valorar; se cambia en `FlatHero.astro`.
10. **Repositorio público:** el historial de git aún contiene la página y el dossier para
    profesionales con la comisión. Si no debe verse, conviene hacer el repositorio
    privado (o reescribir el historial).

## Para la landing de profesionales (aparte)

Notas del usuario al revisar la versión anterior: los tres destinatarios (wedding
planners, fincas, otros proveedores) en tarjetas propias, y la comisión indicada en cada
tarifa. El material está en el historial de git (`src/pages/profesionales.astro`,
`src/components/flat/FlatProPrices.astro`, `FlatPillars.astro`, el dossier para
profesionales).
