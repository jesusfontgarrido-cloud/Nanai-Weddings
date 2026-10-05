/**
 * Historias: una galería de muestra, sin página por boda. Cada trabajo es un tráiler
 * (vídeo: siempre el tráiler, nunca el largo) o una galería de fotos (ordenada por
 * momentos). Todos pesan lo mismo en /historias: la portada en el centro y, alrededor,
 * cuatro fotogramas del propio trabajo. Al pulsar se abre el tráiler o la galería, sin
 * más información.
 *
 * PROVISIONAL: las portadas son fotogramas del dossier para planners y los nombres, lugares
 * y fechas están por rellenar. Alrededor de cada portada solo van fotogramas de ESA misma
 * boda: si no los tenemos, hueco (FlatPh). Nunca se mezclan parejas ni se inventan.
 * Cuando llegue el material: nombres, finca y ciudad (SEO local), fecha, el id de Vimeo
 * del tráiler o las fotos por momentos, y cuatro fotogramas de cada trabajo.
 */
import type { ImageMetadata } from 'astro';
import kiss from '../assets/media/provisional/fotograma-beso-chaqueta-charra.jpg';
import jacket from '../assets/media/provisional/fotograma-chaqueta-bordada.jpg';
import bougainvillea from '../assets/media/provisional/fotograma-novia-buganvilla.jpg';
import earrings from '../assets/media/provisional/fotograma-novia-pendientes.jpg';
import riverside from '../assets/media/provisional/fotograma-preboda-rio.jpg';

export interface Shot {
  src: ImageMetadata;
  alt: string;
  focus?: string;
}

export interface Work {
  /** Ancla en /historias (#id): desde la home se abre directamente. */
  id: string;
  kind: 'video' | 'foto';
  couple: string;
  place: string;
  date: string;
  cover: Shot;
  /** Cuatro fotogramas del propio trabajo, alrededor de la portada. */
  frames: (Shot | null)[];
  /** Vídeo: id de Vimeo del tráiler. */
  vimeoId?: string;
  /** Foto: la galería por momentos. */
  chapters?: { name: string; photos: (Shot | null)[] }[];
  /** Todo lo de arriba es provisional hasta tener los datos reales. */
  pending: boolean;
}

const pendingPhotos = (count: number) => Array.from({ length: count }, () => null);

export const works: Work[] = [
  {
    id: 'trailer-01',
    kind: 'video',
    couple: '[Nombres de la pareja]',
    place: '[Finca, ciudad]',
    date: '[Fecha]',
    cover: { src: kiss, alt: 'Fotograma: beso de los novios entre burbujas; él con chaqueta charra bordada en oro', focus: '42% 40%' },
    // La chaqueta es la del novio de la portada; los demás fotogramas, pendientes.
    frames: [{ src: jacket, alt: 'Fotograma: detalle de la chaqueta charra bordada en oro', focus: '50% 40%' }, null, null, null],
    pending: true,
  },
  {
    id: 'galeria-01',
    kind: 'foto',
    couple: '[Nombres de la pareja]',
    place: '[Finca, ciudad]',
    date: '[Fecha]',
    cover: { src: bougainvillea, alt: 'La novia, con capa blanca, sonríe junto a una buganvilla', focus: '62% 30%' },
    frames: [null, null, null, null],
    chapters: [
      { name: 'Preparativos', photos: pendingPhotos(6) },
      { name: 'Ceremonia', photos: pendingPhotos(6) },
      { name: 'Retratos', photos: [{ src: bougainvillea, alt: 'La novia, con capa blanca, junto a una buganvilla' }, ...pendingPhotos(5)] },
      { name: 'La fiesta', photos: pendingPhotos(6) },
    ],
    pending: true,
  },
  {
    id: 'trailer-02',
    kind: 'video',
    couple: '[Nombres de la pareja]',
    place: '[Lugar, ciudad]',
    date: '[Fecha]',
    cover: { src: riverside, alt: 'Fotograma: preboda junto al río, la pareja se besa entre árboles', focus: '50% 30%' },
    frames: [null, null, null, null],
    pending: true,
  },
  {
    id: 'trailer-03',
    kind: 'video',
    couple: '[Nombres de la pareja]',
    place: '[Finca, ciudad]',
    date: '[Fecha]',
    cover: { src: earrings, alt: 'Fotograma: la novia se pone los pendientes', focus: '40% 40%' },
    frames: [null, null, null, null],
    pending: true,
  },
];

export const kindNames = { video: 'Tráiler', foto: 'Galería' } as const;
