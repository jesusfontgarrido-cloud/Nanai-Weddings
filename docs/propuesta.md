# Nanai Weddings · Propuesta de web (5-10-2026)

Primera versión navegable, montada con las mismas normas que nanai-studio. Este documento
explica en qué se basa, qué se ha decidido y qué tienes que confirmar tú.

## 1. Qué tiene que hacer una web de bodas (investigación)

Fuentes: el wireframe de referencia que pasaste (UX/UI para fotografía y vídeo de bodas en
España, 2026), la skill `estilo-nanai` (56 proyectos de Behance, con tres webs de bodas:
Vashchenko, FotoFox y WedJrny), la guía de cookies de la AEPD (2024), la documentación de
Vimeo sobre `dnt` y guías de calculadoras de precio para videógrafos.

| Lo que pide el sector | Cómo lo resuelve la propuesta |
|---|---|
| Hero a sangre con una imagen o un bucle, sin carrusel; H1 con SEO local | Fotograma a pantalla completa (listo para bucle de vídeo), H1 «Fotografía y vídeo de bodas en Sevilla» + claim |
| Bodas completas, no mosaicos de 70 fotos sueltas | Historias: una página por boda, con cartela, película y galería por momentos (25–40 fotos) |
| Precios a la vista (el 59 % de los fotógrafos los publica): filtran y dan confianza | Calculadora en la home y página de tarifas con todo desglosado, como en vuestro dossier |
| Preguntas frecuentes en acordeón para las objeciones | Las condiciones (reserva, pagos, horas, entrega, desplazamiento) viven en preguntas, agrupadas |
| Formulario con fecha, lugar, invitados y servicio, y un campo libre | Formulario de boda con esos campos; la selección de la calculadora llega sola |
| RGPD: casilla desmarcada + primera capa junto al botón; avisos legales en el pie | Hecho, con borradores de aviso legal, privacidad y cookies |
| Vimeo y no YouTube en la web (reproductor limpio, mejor compresión) | Reproductor Vimeo con fachada y `dnt=1`: no carga nada hasta pulsar |
| Mobile first, botón de contacto siempre a mano, objetivos ≥ 44 px | Barra fija con «Hablemos», barra de total en la calculadora móvil |
| Core Web Vitals: imágenes optimizadas, lazy loading, sin saltos | AVIF/WebP, recorte vertical propio para móvil, tipografías con reserva calibrada |
| Prueba social repartida por la web | Sitio reservado para reseñas reales (pendiente de conectar) |

Lo que se descarta del wireframe: Showit y las plantillas (la web ya existe en Astro, como
Studio, y es más rápida), el área privada de clientes (no es prioritaria ahora) y la
palabra «Inversión» (vuestro tono es directo: «Tarifas»).

## 2. La idea

Del oficio, como pide la skill: **la boda como una película que se monta**. La calculadora
es una línea de tiempo de edición: cada servicio y cada extra entra como una pista (F1, V1,
dron, SDE…) sobre los momentos del día, y el total corre como un contador. Al elegir, el
recuadro de enfoque salta al servicio y el resto se desenfoca (rack focus). Las historias
llevan créditos de cine (el nombre grande, el rol pequeño a máquina).

Claim del hero, sacado de vuestro dossier para planners: «Vosotros la vivís, nosotros la
*contamos*» (en la página de profesionales, la frase original: «Vosotros diseñáis la boda,
nosotros la *contamos*»).

## 3. Lo que pediste, dónde está

- **Webs que hablan el mismo idioma:** misma piel (`flat.css`), mismos componentes, mismas
  tipografías y el mismo rojo que nanai-studio. Weddings solo cambia el papel (un punto más
  cálido), da más peso a la cursiva y anima más despacio.
- **Precios en la home con animaciones según el pack:** calculadora compacta, justo después
  del hero. En /tarifas, la completa (invitados y extras, con el segundo operador que se
  recomienda desde 80 invitados y se añade solo desde 130).
- **Dossieres descargables:** se generan desde la web (`npm run dossieres`) y pesan 0,7–0,9
  MB (el de planners original pesaba 20 MB). Dicen siempre lo mismo que la web.
- **Información de los dossieres en las páginas y lo sensible en preguntas:** tarifas, extras,
  Same Day Edit, seguridad técnica y protocolo en las páginas; condiciones en preguntas.
- **Botón para profesionales del sector:** en la barra («Profesionales»), al pie del hero, en
  el menú móvil y en el pie. Lleva a /profesionales, hecha con el dossier para planners.
- **Huecos para imágenes y vídeos:** ver `docs/recursos-pendientes.md`.

## 4. Decisiones que tienes que confirmar

1. **Un solo precio para todos (recomendado).** La web usa los precios del dossier para
   planners (foto 1.100 €, vídeo 1.200 €, pack 2.200 €), que son el «precio final para los
   novios». Los dossieres antiguos para parejas decían 900 € y 1.000 €. Si la web enseñara
   900 € y la planner propusiera 1.100 €, los novios lo verían y la planner dejaría de
   recomendaros. Con un solo precio, la comisión sale de vuestra parte y la página de
   profesionales lo puede decir. Si prefieres otros precios, se cambian en `src/data/pricing.ts`.
2. **Rojo y no amarillo.** El dossier para planners usa amarillo de acento. La web usa el rojo
   de Nanai Studio (el punto del isotipo): una marca madre, un solo acento. Si queréis
   que Weddings tenga color propio, el amarillo podría sustituir al rojo (nunca los dos).
3. **Diferencias entre dossieres** (se ha usado el más reciente, el de planners): podcast
   900 → 1.200 €, álbum 100 → 150 €, vídeo largo 15–30 → 10–30 min, desplazamiento «no
   incluido» → 25 km sin coste y 0,37 €/km.
4. **Dron en el pack:** en el dossier aparece en vídeo y en foto (400 € cada uno). La
   calculadora lo trata igual. ¿Un mismo vuelo cubre las dos cosas?
5. **Logotipo:** el de la web está compuesto (isotipo oficial + «Nanai» + «weddings» en
   Playfair) imitando el del dossier. Hace falta el SVG oficial.
6. **Dominio y correo:** se ha puesto `nanaiweddings.es` (sin confirmar). Un correo del
   dominio (hola@…) da más confianza que Gmail.
7. **Formulario:** usa la clave de Web3Forms de Studio, así que las consultas llegarían al
   correo de Studio. Hace falta una clave para nanaiweddings@gmail.com.
8. **Reseñas:** ¿tenéis ficha de Google de Weddings o reseñas en Bodas.net? Se conectan con
   un widget como el de Studio (Featurable).
9. **Datos legales** del titular (nombre o razón social, NIF y domicilio) y revisión de los
   textos por una asesoría.
10. **Textos marcados «propuesta»** en `src/data/copy.ts`.

## 5. Cómo se ve (autoevaluación con la rúbrica de estilo-nanai)

Con el material provisional: **27/40, mejorable**, y la mayor parte de lo que falta es
contenido, no diseño.

| Criterio | Nota | Por qué |
|---|---|---|
| Posicionamiento y mensaje | 4 | En 5 s: foto y vídeo de bodas en Sevilla, con precio a la vista |
| Prueba | 2 | Sin bodas completas ni reseñas todavía: son huecos |
| Idea | 4 | La línea de tiempo de montaje y el enfoque ordenan la calculadora |
| Identidad y coherencia | 4 | Mismo sistema que Studio; falta el logotipo oficial |
| Tipografía y jerarquía | 4 | Cuatro voces con papel claro; cuerpo de 18 px |
| Imagen | 2 | Fotogramas buenos pero pocos; las fotos del dossier son pequeñas |
| Experiencia y conversión | 4 | Precio, fecha y WhatsApp siempre a mano; selección que viaja al formulario |
| Frescura | 3 | Nada de brillos ni cristal; la hoja de contactos y el contador pueden fecharse si se abusa |

Con las historias reales, las reseñas y el bucle del hero, debería pasar de 32.
