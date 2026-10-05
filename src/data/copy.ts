/**
 * Textos de la web. Cada uno indica su origen:
 * · «dossier»: copiado o adaptado de los dossieres de 2026.
 * · «propuesta»: escrito para esta propuesta, espera aprobación.
 * Lo que va entre asteriscos sale en Playfair cursiva (FlatEm).
 * Nada de reseñas, cifras ni clientes inventados.
 */

export const plain = (text: string) => text.replace(/\*/g, '');

/** Hero. Origen: dossier para planners («Vosotros diseñáis la boda; nosotros la contamos»), adaptado a las parejas. */
export const hero = {
  label: 'Fotografía y vídeo de bodas en Sevilla',
  claim: ['Vosotros la vivís,', 'nosotros la *contamos*'] as const,
  pro: { lead: '¿Wedding planner, finca o proveedor?', link: 'Trabajemos juntos' },
};

/** Calculadora. Origen: dossier para parejas («Preferimos daros a escoger…»). */
export const pricingIntro = {
  label: 'Tarifas',
  title: 'Elegid cómo queréis *recordarla*',
  deck: 'Preferimos daros a escoger cómo se cuenta vuestra boda: precios cerrados y desglosados, sin sorpresas.',
};

/** Historias. Origen: propuesta. */
export const storiesIntro = {
  title: 'Bodas que hemos contado',
  deck: 'Cada boda, entera: de los preparativos a la pista.',
};

/**
 * Cómo trabajamos. Origen: dossier para planners («Estilo cinematográfico y dinámico»)
 * y dossier para parejas («Qué ofrecemos»).
 */
export const method = {
  label: 'Cómo trabajamos',
  title: ['Cada boda,', 'como una *película*'] as const,
  deck: 'Cámara en movimiento, luz natural trabajada y un color propio. Buscamos el gesto y el detalle, también el de la decoración, sin frenar el ritmo del evento.',
  shots: [
    { caption: 'Os conocemos antes: un café y vuestras películas favoritas' },
    { caption: 'El día, sin frenar el ritmo' },
    { caption: 'Un color propio en cada entrega' },
  ],
};

/** Proceso. Origen: condiciones del dossier, ordenadas como un calendario. Propuesta de redacción. */
export const process = {
  label: 'Del primer mensaje a la entrega',
  title: 'Así es trabajar con nosotros',
  deck: 'Sin letra pequeña: cada paso, con su condición.',
  steps: [
    { name: 'Hablamos', text: 'Nos contáis fecha y lugar, y os decimos si estamos libres.' },
    { name: 'Reservamos', text: '100 € por servicio y la fecha es vuestra.' },
    { name: 'Nos conocemos', text: 'Un café, vuestro cronograma y vuestras películas, series y artistas favoritos.' },
    { name: 'El día', text: 'De 8 a 9 horas: de los preparativos a una hora después de la barra libre.', key: true },
    { name: 'La entrega', text: 'Como mucho, cuatro meses después. En pendrive y con una revisión del vídeo.' },
  ],
};

/** Seguridad técnica. Origen: dossier para planners. */
export const security = {
  quote: 'Una boda no se *repite*.',
  deck: 'Nuestro equipo está pensado para no perder ni un archivo ni una palabra.',
  items: [
    { name: 'Doble tarjeta', text: 'Todas las cámaras graban en dos tarjetas a la vez. Si una falla, la otra conserva el material.' },
    { name: 'Copias 3-2-1', text: 'Tres copias de todo, en dos soportes distintos y una fuera del estudio.' },
    { name: 'Sonido independiente', text: 'Grabadoras y micrófonos inalámbricos aparte de la cámara, en votos y discursos.' },
    { name: 'Equipo de respaldo', text: 'Cuerpos de cámara y ópticas de reserva el día de la boda.' },
  ],
};

/** Reseñas: sitio reservado. Nunca se inventan. */
export const reviews = {
  title: 'Lo que dicen las parejas',
  deck: 'Reseñas reales, de Google o de Bodas.net.',
};

/** Contacto. Origen: propuesta. Los campos salen del wireframe de referencia (fecha, lugar, invitados). */
export const contact = {
  title: '¿Tenéis *fecha*?',
  lead: 'Contadnos cuándo y dónde, y os decimos si estamos libres. Respondemos en persona, no con un bot.',
  form: 'Si lo preferís por escrito',
  placeholders: {
    date: 'p. ej. 12/09/2027, o «septiembre de 2027»',
    place: 'Finca o espacio, y ciudad',
    story: 'Cómo os imagináis el día y, si queréis, vuestras películas, series o artistas favoritos.',
  },
  note: 'Os respondemos en uno o dos días laborables. Si os corre prisa, por WhatsApp.',
};

export const proContact = {
  title: '¿Os *sumamos*?',
  lead: 'Escribidnos y os mandamos disponibilidad, dossier y lo que necesitéis para vuestra propuesta.',
  form: 'Si lo preferís por escrito',
  note: 'Os respondemos en uno o dos días laborables.',
};

/** Profesionales. Origen: dossier para planners. */
export const pro = {
  title: ['Vosotros diseñáis la boda,', 'nosotros la *contamos*'] as [string, string],
  deck: 'Cubrimos la fotografía y el vídeo de las bodas que organizáis con un mismo equipo y un mismo criterio.',
  pillars: [
    { name: 'Un solo proveedor', text: 'Foto y vídeo coordinados entre sí y con vuestro cronograma. Una sola conversación para los dos servicios.' },
    { name: 'Precios cerrados', text: 'Tarifas, extras y condiciones por escrito, iguales en la web y en vuestra propuesta.' },
    { name: 'Vuestra comisión', text: '200 € por cada servicio contratado a través de vuestra agencia, y 300 € por el pack de foto y vídeo.' },
  ],
  protocolQuote: 'Venimos a sumar al equipo que ya habéis *montado*.',
  protocol: [
    { name: 'Vestimenta', text: 'Conjunto oscuro, acorde al servicio, para pasar desapercibidos y trabajar apropiadamente.' },
    { name: 'Sin territorialidad', text: 'Trabajamos junto a fotógrafos, videógrafos y wedding content creators. Coordinamos posiciones para que cada uno haga su trabajo.' },
    { name: 'Vuestro cronograma', text: 'Seguimos el guion y los tiempos que marca la wedding planner, y resolvemos con vosotros cualquier cambio durante el día.' },
    { name: 'Uso en redes', text: 'Publicamos con el acuerdo de los novios, pasado un tiempo prudencial y etiquetando siempre a vuestra agencia.' },
  ],
};

/** Same Day Edit. Origen: dossier para planners («Servicio destacado»). */
export const sameDayEdit = {
  label: 'Servicio destacado',
  title: 'Same Day Edit',
  quote: 'El vídeo de la boda, proyectado en la propia *boda*.',
  text: 'Montamos un resumen durante la jornada y lo proyectamos ante los invitados antes de que termine la celebración. El momento se acuerda dentro del cronograma; la pantalla y el proyector no van incluidos.',
};

/** Recomendación honesta. Origen: dossier para parejas («No nos entendáis mal…»). */
export const advice = {
  title: 'Nuestra recomendación',
  text: 'No nos entendáis mal: os recomendamos contar siempre con un segundo fotógrafo u operador y una cámara extra en la ceremonia, para captar cada momento con la emoción que merece. Con muchos invitados, el segundo deja de ser opcional. Pero es vuestra boda: preferimos daros a elegir.',
};

/** Cierre emocional de los dossieres. */
export const manifesto = ['Somos más que un servicio,', 'somos un movimiento,', 'somos tu mejor amigo,', 'somos lo que necesitas que seamos.'];
