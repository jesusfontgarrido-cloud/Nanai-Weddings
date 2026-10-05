/**
 * Dossieres en PDF, uno por servicio (como los dossieres originales para parejas). Se
 * generan desde las hojas imprimibles de /dossier/* con `npm run dossieres`, así que dicen
 * siempre lo mismo que la web. En la calculadora de /tarifas sale el de lo que se elige:
 * foto → fotografía; vídeo → vídeo; foto + vídeo → los dos.
 */
export const dossiers = {
  foto: {
    href: '/dossieres/nanai-weddings-dossier-fotografia.pdf',
    title: 'Dossier de fotografía',
    contents: 'Tarifa, extras y condiciones',
  },
  video: {
    href: '/dossieres/nanai-weddings-dossier-video.pdf',
    title: 'Dossier de vídeo',
    contents: 'Tarifa, extras, Same Day Edit y condiciones',
  },
} as const;

export type DossierId = keyof typeof dossiers;
