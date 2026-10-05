/** Datos de marca y contacto compartidos por toda la web. Fuente: dossieres de 2026. */
export const site = {
  name: 'Nanai Weddings',
  /** Línea de bodas de Nanai Studio (la marca madre). */
  parent: { name: 'Nanai Studio', url: 'https://nanaistudio.es' },
  tagline: 'Fotografía y vídeo de bodas',
  /** Base de salida para los desplazamientos (dossier para wedding planners). */
  base: 'Dos Hermanas, Sevilla',
  coordinates: '37.2830° N — 5.9209° W',
  geo: { lat: 37.283, lng: -5.9209 },
  phone: '689 02 64 20',
  phoneHref: 'tel:+34689026420',
  whatsapp: 'https://wa.me/34689026420',
  /** PENDIENTE: un correo del dominio (hola@…) daría más confianza que Gmail. */
  email: 'nanaiweddings@gmail.com',
  instagram: 'https://www.instagram.com/nanaiweddings',
  instagramHandle: '@nanaiweddings',
  /**
   * PENDIENTE: clave de Web3Forms propia de Weddings. Mientras tanto se usa la de Nanai
   * Studio, así que las consultas llegarían al correo de Studio.
   */
  web3formsKey: 'f33f640b-b6ac-4919-9d6e-ab1dc6553f52',
  /** PENDIENTE: datos del titular para el aviso legal y la privacidad (LSSI y RGPD). */
  legal: {
    holder: '[Nombre y apellidos o razón social del titular]',
    taxId: '[NIF]',
    address: '[Domicilio], Dos Hermanas (Sevilla)',
  },
} as const;
