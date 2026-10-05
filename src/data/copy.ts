/**
 * Textos de la web. Cada uno indica su origen:
 * · «dossier»: copiado o adaptado de los dossieres de 2026.
 * · «Studio»: de la web de Nanai Studio (src/data/copy.ts de allí).
 * · «nuevo»: escrito para la web; se puede cambiar sin tocar nada más.
 * Lo que va entre asteriscos sale en Playfair cursiva (FlatEm).
 * Nada de reseñas, cifras ni clientes inventados.
 */

export const plain = (text: string) => text.replace(/\*/g, '');

/** Hero. Origen: dossier para planners («Vosotros diseñáis la boda; nosotros la contamos»), adaptado a las parejas. */
export const hero = {
  label: 'Fotografía y vídeo de bodas en Sevilla',
  claim: ['Vosotros la vivís,', 'nosotros la contamos'] as const,
};

/** Calculadora. Origen: dossier para parejas («Preferimos daros a escoger…»). */
export const pricingIntro = {
  label: 'Tarifas',
  title: 'Elegid cómo queréis *recordarla*',
  deck: 'Preferimos daros a escoger cómo se cuenta vuestra boda: precios cerrados y desglosados, sin sorpresas.',
};

/** Historias. Origen: nuevo. */
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

/**
 * Proceso. Origen: condiciones del dossier, ordenadas como un calendario. Redacción nueva.
 * Las cifras (reserva, kilómetros) viven en las preguntas, no aquí.
 */
export const process = {
  label: 'Del primer mensaje a la entrega',
  title: 'Así es trabajar con nosotros',
  deck: 'Cinco pasos, de la primera consulta a la entrega.',
  steps: [
    { name: 'Hablamos', text: 'Nos contáis fecha y lugar, y os decimos si estamos libres.' },
    { name: 'Reservamos', text: 'Con la reserva, la fecha es vuestra.' },
    { name: 'Nos conocemos', text: 'Un café, vuestro cronograma y vuestras películas, series y artistas favoritos.' },
    { name: 'El día', text: 'De los preparativos a una hora después del inicio de la barra libre.' },
    { name: 'La entrega', text: 'Como mucho, cuatro meses después. En pendrive y con una revisión del vídeo.' },
  ],
};

/**
 * Sobre nosotros. Origen: Studio («¿Quién hay detrás de Nanai?», bio de Jesús del 2-10-2026),
 * adaptado a bodas. Nuevo: la frase que une Studio con las bodas; revisadla.
 */
export const about = {
  label: 'Sobre nosotros',
  title: ['Detrás de', 'Nanai Weddings'] as const,
  lead: 'Nanai Weddings es la línea de bodas de Nanai Studio, la productora creativa que fundó Jesús Font en Sevilla.',
  bio: [
    'Soy Jesús Font, filmmaker creativo. En Nanai Studio rodamos campañas, eventos y contenido para marcas, y llevo cada producción de principio a fin.',
    'Las bodas las contamos con el mismo oficio: una pieza no solo tiene que verse bien, tiene que contar algo. Por eso os preguntamos por vuestras películas, series y artistas favoritos antes de rodar.',
    'Trabajamos con un equipo que se forma según lo que pide cada boda: fotógrafos/as y operadores/as con un mismo criterio para la foto y el vídeo.',
  ],
  signature: { name: 'Jesús Font', role: 'Director creativo y fundador' },
  studioLink: 'Conoced Nanai Studio',
};

/** Contacto. Origen: nuevo. Los campos salen del wireframe de referencia (fecha, lugar, invitados). */
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

/** Ventana emergente de la calculadora. Origen: nuevo (nombre, fecha y forma de contacto, como pidió el usuario). */
export const dateDialog = {
  title: 'Consultad vuestra *fecha*',
  lead: 'Con vuestro nombre, la fecha y cómo contactaros, os respondemos con disponibilidad y presupuesto para esta selección.',
  sent: '¡Recibido! Os respondemos en cuanto podamos con disponibilidad y presupuesto.',
};

/**
 * Ventana emergente de Profesionales: la página para profesionales se hará aparte, con
 * acceso por enlace. Aquí solo un formulario corto. Origen: nuevo.
 */
export const proDialog = {
  trigger: 'Profesionales',
  title: '¿Sois profesionales del *sector*?',
  lead: 'Wedding planners, fincas y proveedores: contadnos quiénes sois y qué os interesa de nosotros, y os responderemos a la mayor brevedad posible.',
  professions: ['Wedding planner', 'Finca o espacio', 'Otro proveedor'],
  sent: '¡Gracias! Os responderemos a la mayor brevedad posible.',
};

/**
 * Same Day Edit. Origen: dossier para planners («Servicio destacado»), contado en los tres
 * pasos que describe el propio dossier.
 */
export const sameDayEdit = {
  label: 'Servicio destacado',
  title: 'Same Day Edit',
  quote: 'El vídeo de la boda, proyectado en la propia *boda*.',
  steps: [
    { name: 'Rodamos', text: 'El día entero, desde los preparativos, como en cualquier boda.' },
    { name: 'Montamos', text: 'Un resumen montado durante la propia jornada, mientras sigue la celebración.' },
    { name: 'Proyectamos', text: 'Ante los invitados, antes de que termine la fiesta y en el momento que acordemos en el cronograma.' },
  ],
  note: 'La pantalla y el proyector no van incluidos.',
};

/** Cierre emocional de los dossieres. */
export const manifesto = ['Somos más que un servicio,', 'somos un movimiento,', 'somos tu mejor amigo,', 'somos lo que necesitas que seamos.'];
