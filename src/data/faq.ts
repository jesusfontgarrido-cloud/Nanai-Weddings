/**
 * Preguntas frecuentes. Aquí viven las condiciones (reserva, pagos, cancelación, horas,
 * entrega, desplazamiento): lo sensible no va en los titulares, va aquí, bien explicado.
 * Todas salen de los dossieres de 2026 (sobre todo «Condiciones», «Seguridad técnica» y
 * «Protocolo» del dossier para planners). Las cifras vienen de pricing.ts.
 */
import { commission, crewRule, euros, services, terms } from './pricing';

const prices = services.map((service) => `${euros(service.price)} €`);

export interface Faq {
  q: string;
  a: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: Faq[];
}

const q = {
  booking: {
    q: '¿Cómo reservamos la fecha?',
    a: `Con una reserva de ${terms.booking} € por servicio (${terms.booking * 2} € si contratáis foto y vídeo). La reserva no es reembolsable y, desde ese momento, la fecha es vuestra.`,
  },
  payment: {
    q: '¿Cuándo se paga el resto?',
    a: 'Lo normal es pagar el resto el mismo día de la boda. En el vídeo, si lo preferís, podéis pagar el 50 % ese día y el otro 50 % al aprobar el montaje final, que os enseñamos antes con marca de agua.',
  },
  cancel: {
    q: '¿Y si tenemos que cancelar?',
    a: 'Si se cancela dentro del mismo mes de la boda, se abona el servicio completo. Con más antelación, solo se retiene la reserva.',
  },
  postpone: {
    q: '¿Y si cambiamos de fecha?',
    a: 'El aplazamiento se concreta en cada caso y requiere una nueva reserva.',
  },
  hours: {
    q: '¿Cuántas horas cubrís?',
    a: `La jornada es de ${terms.hours} desde la hora de llegada acordada: casa de los dos, preparativos y celebración hasta una hora después del inicio de la barra libre.`,
  },
  openBar: {
    q: '¿Cuándo empieza la barra libre?',
    a: 'Cuando el DJ empieza su servicio y los invitados se acercan a la pista. Si pasa el tiempo y no bailáis, puede que ese momento no quede grabado.',
  },
  overtime: {
    q: '¿Y si la boda se alarga?',
    a: `Se contratan horas extra: ${terms.extraHour} € por hora y servicio, o ${terms.extraFlat} € por servicio como tarifa plana que cubre todo lo que se alargue. Con la tarifa plana, cuatro horas extra de vídeo cuestan ${terms.extraFlat} € en lugar de ${terms.extraHour * 4} €. Se puede decidir el mismo día.`,
  },
  crew: {
    q: '¿Necesitamos un segundo fotógrafo u operador?',
    a: `La tarifa incluye un fotógrafo/a o un operador/a por servicio. El segundo (${crewRule.price} €) es recomendable a partir de ${crewRule.recommendedFrom} invitados y obligatorio a partir de ${crewRule.requiredFrom}. Os lo recomendamos siempre: así se cubren las dos casas y ningún momento se queda sin captar.`,
  },
  delivery: {
    q: '¿Cuándo recibimos las fotos y el vídeo?',
    a: `En un plazo máximo de ${terms.deliveryMonths} meses desde la boda, en pendrive: un mínimo de ${terms.minPhotos} fotografías editadas y, en vídeo, una pieza corta (1–5 min) y otra larga (10–30 min).`,
  },
  revisions: {
    q: '¿Podemos pedir cambios en el vídeo?',
    a: `Sí: el vídeo incluye una revisión. Cada versión extra cuesta ${terms.revisionExtra} €.`,
  },
  travel: {
    q: '¿Trabajáis fuera de Sevilla?',
    a: `Sí. Salimos de Dos Hermanas (Sevilla): hasta ${terms.freeKm} km sin coste y, a partir de ahí, ${terms.perKm} € por km. Dietas solo si no hay menú para el equipo, o si la boda está a más de ${terms.stayKm} km y hay que hacer noche (entonces también alojamiento). Se valora en cada caso.`,
  },
  backup: {
    q: '¿Y si os pasa algo el día de la boda?',
    a: 'Siempre contamos con personal de reserva para cubrir el servicio, y llevamos cuerpos de cámara y ópticas de repuesto.',
  },
  security: {
    q: '¿Cómo cuidáis el material?',
    a: 'Todas las cámaras graban en dos tarjetas a la vez. Después hacemos tres copias de todo, en dos soportes distintos y una fuera del estudio (la regla 3-2-1). El sonido de votos y discursos se graba aparte, con grabadoras y micrófonos inalámbricos.',
  },
  drone: {
    q: '¿Se puede volar el dron en cualquier boda?',
    a: 'Lo opera una empresa especializada con la que trabajamos de forma segura. Está sujeto a normativa y permisos: si en vuestra finca no se puede volar, no se contrata.',
  },
  favourites: {
    q: '¿Por qué nos preguntáis por nuestras películas favoritas?',
    a: 'Antes de la boda os preguntamos por vuestras películas, series y artistas favoritos para dar un toque único a las fotos y al vídeo. Para nosotros no es una boda más.',
  },
  others: {
    q: '¿Trabajáis junto a otros fotógrafos o creadores?',
    a: 'Sí, sin territorialidad: trabajamos junto a fotógrafos, videógrafos y wedding content creators, y coordinamos posiciones para que cada uno haga su trabajo sin competir por el espacio.',
  },
  social: {
    q: '¿Publicáis nuestra boda en redes?',
    a: 'Solo con vuestro acuerdo y pasado un tiempo prudencial.',
  },
  dress: {
    q: '¿Cómo vais vestidos?',
    a: 'Con conjunto oscuro, acorde al servicio, para pasar desapercibidos y trabajar sin llamar la atención.',
  },
} satisfies Record<string, Faq>;

/** Home: lo que más se pregunta antes de escribir. El resto, en /tarifas. */
export const homeFaq: Faq[] = [q.booking, q.hours, q.crew, q.delivery, q.travel, q.cancel];

/** Tarifas: todas, agrupadas. Es la página de las condiciones. */
export const faqGroups: FaqGroup[] = [
  { id: 'reserva', title: 'Reserva y pagos', items: [q.booking, q.payment, q.cancel, q.postpone] },
  { id: 'jornada', title: 'El día de la boda', items: [q.hours, q.openBar, q.overtime, q.crew, q.drone, q.dress, q.others] },
  { id: 'entrega', title: 'Entrega', items: [q.delivery, q.revisions, q.social] },
  { id: 'tranquilidad', title: 'Desplazamiento y tranquilidad', items: [q.travel, q.backup, q.security, q.favourites] },
];

/** Profesionales: lo que pregunta una wedding planner o una finca. */
export const proFaq: Faq[] = [
  {
    q: '¿Cómo funciona la comisión?',
    a: `Vosotros cerráis la boda con los novios y os lleváis ${commission.foto} € por cada servicio (foto o vídeo) o ${commission.pack} € por el pack de foto y vídeo. Los extras mantienen su precio y no generan comisión.`,
  },
  {
    q: '¿Los novios ven otro precio en vuestra web?',
    a: `No. Las tarifas son las mismas aquí y en vuestra propuesta (${prices.slice(0, -1).join(', ')} y ${prices.at(-1)}): la comisión ya está incluida y sale de nuestra parte, no del bolsillo de los novios.`,
  },
  {
    q: '¿Respetáis nuestro cronograma?',
    a: 'Seguimos el guion y los tiempos que marca la wedding planner, y resolvemos con vosotros cualquier cambio durante el día.',
  },
  {
    q: '¿Cómo usáis las imágenes en redes?',
    a: 'Publicamos con el acuerdo de los novios, pasado un tiempo prudencial y etiquetando siempre a vuestra agencia.',
  },
  q.others,
  q.dress,
  q.hours,
  q.crew,
  q.delivery,
  q.travel,
  q.booking,
  q.cancel,
];

/**
 * Condiciones en rejilla, como la página «Condiciones» del dossier para planners. Las usan
 * los dossieres en PDF; en la web viven en las preguntas.
 */
export const conditions = [
  { name: 'Duración de la jornada', text: `De ${terms.hours} desde la hora de llegada acordada. Si se excede, se contratan horas extra.` },
  { name: 'Horas extra', text: `${terms.extraHour} € por hora y servicio, o ${terms.extraFlat} € por servicio como tarifa plana que cubre todo lo que se alargue.` },
  { name: 'Plazo de entrega', text: `Fotografía y vídeo en un plazo máximo de ${terms.deliveryMonths} meses desde la boda, en pendrive.` },
  { name: 'Revisiones del vídeo', text: `Incluye una revisión. Cada versión extra, ${terms.revisionExtra} €.` },
  { name: 'Reserva', text: `${terms.booking} € por servicio, no reembolsables.` },
  { name: 'Pago del vídeo', text: 'Opcionalmente, 50 % el día de la boda y 50 % al aprobar el vídeo final, que se enseña antes con marca de agua.' },
  { name: 'Cancelación', text: 'Dentro del mismo mes de la boda se abona el servicio completo. Con más antelación, solo se retiene la reserva.' },
  { name: 'Aplazamiento y sustitución', text: 'El aplazamiento se concreta en cada caso y requiere nueva reserva. Siempre hay personal de reserva para cubrir el servicio.' },
  { name: 'Desplazamiento', text: `Salimos de Dos Hermanas (Sevilla). Hasta ${terms.freeKm} km sin coste; después, ${terms.perKm} € por km.` },
  { name: 'Dietas y alojamiento', text: `Dietas solo si no hay menú para el equipo, o si la boda está a más de ${terms.stayKm} km y hay que hacer noche (entonces también alojamiento). Se valora en cada caso.` },
];
