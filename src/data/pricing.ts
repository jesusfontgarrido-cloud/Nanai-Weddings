/**
 * Tarifas, extras y condiciones. La ÚNICA fuente de los precios: de aquí salen la
 * calculadora, la página de tarifas, las preguntas y los dossieres en PDF.
 *
 * Origen: «Wedding planner dossier» (2026), el más reciente y el único que trae las
 * condiciones completas. Sus precios son el «precio final para los novios»: la web
 * enseña ese mismo precio a todo el mundo (ver docs/decisiones.md, «Precio único»).
 * Los dossieres antiguos para parejas decían 900 € (foto) y 1.000 € (vídeo).
 */

export type ServiceId = 'foto' | 'video' | 'pack';
export type Group = 'foto' | 'video';

export interface Service {
  id: ServiceId;
  name: string;
  /** Nombre corto para la calculadora y los chips. */
  short: string;
  price: number;
  /** Qué grupos de extras admite. */
  groups: Group[];
  crew: string;
  summary: string;
  deliver: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'foto',
    name: 'Fotografía',
    short: 'Foto',
    price: 1100,
    groups: ['foto'],
    crew: 'Un fotógrafo/a',
    summary:
      'Un fotógrafo/a cubre todo el evento: casa de ambos novios, preparativos y celebración hasta una hora después del inicio de la barra libre.',
    deliver: ['Mínimo 150 fotografías editadas', 'Pendrive con todos los archivos'],
  },
  {
    id: 'video',
    name: 'Vídeo',
    short: 'Vídeo',
    price: 1200,
    groups: ['video'],
    crew: 'Un operador/a',
    summary:
      'Un operador/a cubre la misma jornada completa: casa de ambos novios, preparativos y celebración hasta una hora después del inicio de la barra libre.',
    deliver: ['Vídeo corto (1–5 min)', 'Vídeo largo (10–30 min)', 'Pendrive con ambos archivos'],
  },
  {
    id: 'pack',
    name: 'Foto + vídeo',
    short: 'Foto + vídeo',
    price: 2200,
    groups: ['video', 'foto'],
    crew: 'Un fotógrafo/a y un operador/a',
    summary: 'Los dos servicios coordinados, con un mismo criterio visual y una sola conversación.',
    deliver: [
      'Mínimo 150 fotografías editadas',
      'Vídeo corto (1–5 min) y vídeo largo (10–30 min)',
      'Pendrive con todos los archivos',
    ],
    featured: true,
  },
];

export interface Extra {
  id: string;
  group: Group;
  name: string;
  price: number;
  /** «cada vídeo», «cada sesión»… (opcional) */
  unit?: string;
  text: string;
  /** Segundo fotógrafo/a u operador/a: recomendado desde 80 invitados y obligatorio desde 130. */
  crew?: boolean;
  featured?: boolean;
}

export const extras: Extra[] = [
  {
    id: 'operador-extra',
    group: 'video',
    name: 'Operador/a extra',
    price: 250,
    text: 'Cubre una de las casas en preparativos y el resto del evento en paralelo.',
    crew: true,
  },
  {
    id: 'camara-extra',
    group: 'video',
    name: 'Cámara extra',
    price: 100,
    text: 'Cámara fija en la ceremonia: un plano continuo de principio a fin.',
  },
  {
    id: 'dron-video',
    group: 'video',
    name: 'Dron',
    price: 400,
    text: 'Planos aéreos de la finca y los exteriores.',
  },
  {
    id: 'same-day-edit',
    group: 'video',
    name: 'Same Day Edit',
    price: 700,
    text: 'Montamos un resumen durante la jornada y lo proyectamos ante los invitados antes de que termine la celebración.',
    featured: true,
  },
  {
    id: 'podcast',
    group: 'video',
    name: 'Podcast',
    price: 1200,
    text: 'En directo durante la boda, con los invitados que elijan los novios.',
  },
  {
    id: 'entrevistas',
    group: 'video',
    name: 'Entrevistas',
    price: 300,
    text: 'Un día aparte grabando a las personas más cercanas a los novios (si es posible por ubicación).',
  },
  {
    id: 'preboda-video',
    group: 'video',
    name: 'Preboda',
    price: 250,
    text: 'Un vídeo aparte antes de la boda, sin la presión del cronograma del día.',
  },
  {
    id: 'postboda-video',
    group: 'video',
    name: 'Postboda',
    price: 250,
    text: 'Un vídeo aparte después de la boda, con toda la calma.',
  },
  {
    id: 'fotografo-extra',
    group: 'foto',
    name: 'Fotógrafo/a extra',
    price: 250,
    text: 'Cubre una de las casas en preparativos y el resto del evento en paralelo.',
    crew: true,
  },
  {
    id: 'dron-foto',
    group: 'foto',
    name: 'Dron',
    price: 400,
    text: 'Fotografía aérea de la finca y los exteriores.',
  },
  {
    id: 'album',
    group: 'foto',
    name: 'Álbum de 26 páginas',
    price: 150,
    text: 'Toda la boda recogida en un álbum impreso.',
  },
  {
    id: 'preboda-foto',
    group: 'foto',
    name: 'Preboda',
    price: 250,
    text: 'Una sesión aparte antes de la boda, con la calma de no tener que llegar a ningún cóctel.',
  },
  {
    id: 'postboda-foto',
    group: 'foto',
    name: 'Postboda',
    price: 250,
    text: 'Una sesión aparte después de la boda, ya sin nervios.',
  },
];

export const groupNames: Record<Group, string> = { video: 'Vídeo', foto: 'Fotografía' };

/** Tamaño del equipo según invitados (dossier para planners, «Dimensión del equipo»). */
export const crewRule = { recommendedFrom: 80, requiredFrom: 130, price: 250 };

export const guestOptions = [
  { id: 'small', label: 'Menos de 80', crew: 'none' },
  { id: 'medium', label: 'De 80 a 129', crew: 'recommended' },
  { id: 'large', label: '130 o más', crew: 'required' },
] as const;

/** Condiciones, cifras sueltas que se citan en varias páginas. */
export const terms = {
  hours: '8 a 9 horas',
  deliveryMonths: 4,
  booking: 100,
  extraHour: 100,
  extraFlat: 200,
  revisionExtra: 75,
  freeKm: 25,
  perKm: '0,37',
  stayKm: 100,
  minPhotos: 150,
};

/** 2200 → «2.200». Intl en español no separa los miles con cuatro cifras; el dossier sí. */
export const euros = (value: number) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
