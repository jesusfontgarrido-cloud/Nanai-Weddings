/**
 * Historias: una página por boda (Vashchenko, WedJrny). De momento son huecos: las
 * portadas provisionales son fotogramas del dossier para planners y los nombres, lugares
 * y fechas están por rellenar. Nunca se inventan parejas ni fincas.
 *
 * Cuando llegue el material: nombres, finca y ciudad (SEO local), fecha, servicio, el
 * vídeo (Vimeo) y 25–40 fotos ordenadas por momentos.
 */
import type { ImageMetadata } from 'astro';
import kiss from '../assets/media/provisional/fotograma-beso-chaqueta-charra.jpg';
import riverside from '../assets/media/provisional/fotograma-preboda-rio.jpg';
import bougainvillea from '../assets/media/provisional/fotograma-novia-buganvilla.jpg';

export interface Story {
  slug: string;
  couple: string;
  place: string;
  date: string;
  services: string;
  cover?: { src: ImageMetadata; alt: string; focus?: string };
  /** Id de Vimeo del tráiler o del vídeo corto. */
  vimeoId?: string;
  /** Todo lo de arriba es provisional hasta tener los datos reales. */
  pending: boolean;
}

export const stories: Story[] = [
  {
    slug: 'historia-01',
    couple: '[Nombres de la pareja]',
    place: '[Finca, ciudad]',
    date: '[Fecha]',
    services: 'Foto + vídeo',
    cover: { src: kiss, alt: 'Fotograma: beso de los novios entre burbujas; él con chaqueta charra bordada en oro', focus: '42% 40%' },
    pending: true,
  },
  {
    slug: 'historia-02',
    couple: '[Nombres de la pareja]',
    place: '[Lugar, ciudad]',
    date: '[Fecha]',
    services: 'Preboda · vídeo',
    cover: { src: riverside, alt: 'Fotograma: preboda junto al río, la pareja se besa entre árboles', focus: '50% 30%' },
    pending: true,
  },
  {
    slug: 'historia-03',
    couple: '[Nombres de la pareja]',
    place: '[Finca, ciudad]',
    date: '[Fecha]',
    services: 'Vídeo',
    cover: { src: bougainvillea, alt: 'Fotograma: la novia, con capa blanca, sonríe junto a una buganvilla', focus: '62% 30%' },
    pending: true,
  },
];

/** Momentos de una historia, en orden: así se ordena la galería (25–40 fotos). */
export const storyChapters = [
  { name: 'Preparativos', count: 6 },
  { name: 'Ceremonia', count: 6 },
  { name: 'Retratos', count: 5 },
  { name: 'La fiesta', count: 6 },
];
