/**
 * Historias: una galería de muestra, sin página por boda. Cada trabajo es un tráiler
 * (vídeo: siempre el tráiler, nunca el largo) o una galería de fotos (ordenada por
 * momentos). Todos pesan lo mismo en /historias: la portada en el centro y, alrededor,
 * cuatro fotogramas del propio trabajo. Al pulsar se abre el tráiler o la galería, sin
 * más información.
 *
 * PROVISIONAL: las imágenes son fotogramas del dossier para planners (no de cada boda) y
 * los nombres, lugares y fechas están por rellenar. Nunca se inventan parejas ni fincas.
 * Cuando llegue el material: nombres, finca y ciudad (SEO local), fecha, el id de Vimeo
 * del tráiler o las fotos por momentos, y cuatro fotogramas de cada trabajo.
 */
import type { ImageMetadata } from 'astro';
import kiss from '../assets/media/provisional/fotograma-beso-chaqueta-charra.jpg';
import jacket from '../assets/media/provisional/fotograma-chaqueta-bordada.jpg';
import hands from '../assets/media/provisional/fotograma-manos-tatuaje.jpg';
import bougainvillea from '../assets/media/provisional/fotograma-novia-buganvilla.jpg';
import earrings from '../assets/media/provisional/fotograma-novia-pendientes.jpg';
import smile from '../assets/media/provisional/fotograma-novia-sonrisa.jpg';
import riverside from '../assets/media/provisional/fotograma-preboda-rio.jpg';
import shoes from '../assets/media/provisional/fotograma-zapatos-rojos.jpg';
import sheet1 from '../assets/media/provisional/hoja/foto-01.jpg';
import sheet2 from '../assets/media/provisional/hoja/foto-02.jpg';
import sheet3 from '../assets/media/provisional/hoja/foto-03.jpg';
import sheet4 from '../assets/media/provisional/hoja/foto-04.jpg';
import sheet5 from '../assets/media/provisional/hoja/foto-05.jpg';
import sheet6 from '../assets/media/provisional/hoja/foto-06.jpg';

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
    frames: [
      { src: jacket, alt: 'Fotograma: detalle de la chaqueta charra bordada en oro', focus: '50% 40%' },
      { src: hands, alt: 'Fotograma: las manos tatuadas de la pareja, entrelazadas' },
      { src: shoes, alt: 'Fotograma: los zapatos rojos de la novia', focus: '50% 60%' },
      { src: smile, alt: 'Fotograma: la novia sonríe a contraluz', focus: '30% 40%' },
    ],
    pending: true,
  },
  {
    id: 'galeria-01',
    kind: 'foto',
    couple: '[Nombres de la pareja]',
    place: '[Finca, ciudad]',
    date: '[Fecha]',
    cover: { src: bougainvillea, alt: 'La novia, con capa blanca, sonríe junto a una buganvilla', focus: '62% 30%' },
    frames: [
      { src: sheet2, alt: 'Retrato de la novia' },
      { src: sheet1, alt: 'La pareja durante la celebración' },
      { src: sheet4, alt: 'Detalle del vestido' },
      { src: sheet5, alt: 'Los invitados en el cóctel' },
    ],
    chapters: [
      { name: 'Preparativos', photos: [{ src: sheet2, alt: 'Retrato de la novia' }, { src: sheet4, alt: 'Detalle del vestido' }, ...pendingPhotos(4)] },
      { name: 'Ceremonia', photos: [{ src: sheet3, alt: 'La ceremonia' }, ...pendingPhotos(5)] },
      { name: 'Retratos', photos: [{ src: sheet6, alt: 'Retrato de la pareja' }, { src: bougainvillea, alt: 'La novia junto a una buganvilla' }, ...pendingPhotos(3)] },
      { name: 'La fiesta', photos: [{ src: sheet1, alt: 'La pareja durante la celebración' }, { src: sheet5, alt: 'Los invitados en el cóctel' }, ...pendingPhotos(4)] },
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
    frames: [{ src: earrings, alt: 'Fotograma: la novia se pone los pendientes', focus: '40% 40%' }, null, null, null],
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
