/**
 * Dossieres en PDF. Se generan desde las hojas imprimibles de /dossier/* con
 * `npm run dossieres` (scripts/dossieres.mjs), así que siempre dicen lo mismo que la web.
 */
export const dossiers = {
  couples: {
    href: '/dossieres/nanai-weddings-dossier-parejas.pdf',
    who: 'Para parejas',
    title: 'Dossier de fotografía y vídeo',
    contents: 'Estilo, tarifas, extras, cómo trabajamos y todas las condiciones. PDF apaisado, para leer en pantalla o imprimir.',
  },
  pros: {
    href: '/dossieres/nanai-weddings-dossier-profesionales.pdf',
    who: 'Para wedding planners y fincas',
    title: 'Dossier para profesionales',
    contents: 'Tarifas con vuestra comisión incluida, extras, Same Day Edit, seguridad técnica, protocolo y condiciones.',
  },
};
