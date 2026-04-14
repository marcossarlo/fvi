export interface FacultyMemberData {
  name: string;
  specialty: string;
  bio: string;
  awards: string[];
  image: {
    src: string;
    alt: string;
  };
}

export const faculty: Record<string, FacultyMemberData> = {
  'angel-guillemes': {
    name: 'Ángel Guillemes Peira, Ph.D. (España)',
    specialty: 'Ph.D en Ingeniería Marítima',
    bio: `
      <p>El Sr. Guillemes es Ph.D en Ingeniería Marítima con especialidad en energías renovables por la Universidad de La Laguna, España. Máster en Dirección y Administración de Proyectos por la Universidad de Valencia, España y Licenciado en Biología con mención en medio ambiente por la Universidad SEK, España.</p>
      <p>Ha sido docente titular de la Universidad Del Pacífico, Ecuador, en la Facultad del Mar y Medio Ambiente, desempeñando actividades académicas y de investigación. Anteriormente trabajo en España como consultor de proyectos de I+D, técnico de proyectos e investigador en una consultoría, centro tecnológico y grupo de investigación respectivamente.</p>
      <p>Sus áreas de conocimiento se centran en las energías renovables, medio ambiente y gestión de proyectos, habiendo impartido numerosas conferencias y cursos en estas temáticas. Ha participado en congresos nacionales e internacionales, proyectos de investigación y es autor de capítulos de libros y artículos científicos en revistas indexadas.</p>
    `,
    awards: [
      'Investigador y consultor en proyectos de I+D',
      'Autor de libros y artículos científicos indexados',
      'Ponente en congresos nacionales e internacionales',
      'Experto formador en gestión de proyectos ambientales',
    ],
    image: {
      src: '~/assets/images/users/fvi-angel-guillemes.webp',
      alt: 'Ángel Guillemes Peira, Ph.D.',
    },
  },
  'erick-brenes': {
    name: 'Erick Brenes Mata, Dr. (Costa Rica)',
    specialty: 'PhD. en Economía Social',
    bio: `
      <p>PhD. en Economía Social de la Universidad de la Calabria en el sur de Italia y Máster en Administración de Proyectos de Cooperación Internacional de la Universidad de Otaru en Japón; con más de 10 años de experiencia en la investigación, implementación, ejecución y supervisión técnica de proyectos de desarrollo económico local sostenible elaborados según la estrategia Agenda Siglo XXI que tiene una visión integradora y sistema de la sociedad y la economía dentro de los límites de la biósfera.</p>
      <p>Además de su experiencia en la ejecución de proyectos, también ha investigado el movimiento anti-sistémico y documentado los principales efectos socio-ambientales de llamado "desarrollo sostenible" y algunas soluciones locales de éxito en países de la Región Centroamericana, Andina y del Sud Este Asiático.</p>
      <p>Actualmente asesora organizaciones como el Banco de Buda en Tailandia, La Fundación RELACC en Ecuador, El Consejo Regional Indígena del Cauca en Colombia y la Federación de Cooperativas de Autogestión en Costa Rica entre otros y colabora como investigador asociado al Centro Interuniversitario para la Investigación en Desarrollo Sostenible (CIRPS) en Roma.</p>
    `,
    awards: [
      '10+ años en proyectos de desarrollo local sostenible',
      'Asesor de organizaciones en Tailandia, Ecuador, Colombia y Costa Rica',
      'Especialista en estrategia Agenda Siglo XXI',
      'Documentador de soluciones locales exitosas (Asia y América)',
    ],
    image: {
      src: '~/assets/images/users/fvi-erick-brenes.webp',
      alt: 'Erik Brenes Mata, Dr.',
    },
  },
  'maria-teresa-perez': {
    name: 'María Teresa Pérez Martín, Dra. (España)',
    specialty: 'Doctora en Derecho Cum Laude por la Universidad de Estrasburgo',
    bio: `
      <p>Dra. María Teresa Pérez Martín es una reconocida experta internacional en derecho ambiental y sostenibilidad, ha dedicado su carrera a la promoción de la justicia ambiental y la educación, combinando su pasión y conocimiento para influir positivamente en las políticas y prácticas medioambientales. Con una sólida formación académica, María Teresa es Doctora en Derecho Cum Laude por la Universidad de Estrasburgo, donde completó su tesis sobre la implementación de la Convención de Basilea sobre el control de movimientos transfronterizos de residuos peligrosos y su eliminación. Para el desarrollo de esta investigación, María Teresa recibió becas prestigiosas como la Marie Curie Fellow de la D.G. Investigación de la UE y de la Agence de l’Environnement et maîtrise d’Energie (ADEME) en Francia. Además, ha sido reconocida como Doctora acreditada por el Centro Panamericano de Estudios Superiores y ha sido laureada por la Comisión Europea, lo que refleja su impacto y reconocimiento en el campo de la sostenibilidad y el derecho ambiental.</p>
      <p>En su experiencia profesional, ha trabajado más de 15 años como jurista y consultora para organismos internacionales, incluido Naciones Unidas, gobiernos regionales y ONGs. Su experiencia abarca áreas críticas como el cambio climático, la economía circular, ciudades sostenibles y la conservación de la biodiversidad, lo que la convierte en una líder en la implementación de soluciones innovadoras y sostenibles. Durante casi 10 años, trabajó como jurista coordinadora del Departamento de Relaciones Institucionales en el Observatorio Internacional de Justicia Juvenil en Salamanca, gestionando relaciones con instituciones globales como las Naciones Unidas y los Ministerios de Justicia de varios países. Por último, ha trabajado como gestora de proyecto para la Universidad de Salamanca dentro del proyecto europeo EC2U Alianza Europea de Ciudades Universitarias. Actualmente, trabaja como consultora en áreas relacionadas con la sostenibilidad urbana y es capacitadora en turismo sostenible.</p>
      <p>En el ámbito de las publicaciones, María Teresa es autora de la "Guía 360º Ciudades Sostenibles: Cómo lograr la transformación con éxito" (2023) publicada por ed. Universidad de Salamanca, con el patrocinio de Iberdrola y del libro "Que fait le village planétaire de ses déchets dangereux?", además de numerosos artículos en revistas especializadas en medio ambiente. María Teresa escribe en su blog titulado "Misión Sostenible" en la plataforma Tribuna Valladolid.</p>
      <p>Además de su rol como consultora, María Teresa es empresaria y dirige el complejo de turismo rural sostenible Lidenex, donde recibe clientes de varios países europeos. En colaboración con universidades y centros de estudio, ha gestionado actividades de conservación forestal y promovido la sostenibilidad en el sector turístico.</p>
    `,
    awards: [
      '+15 años como jurista y consultora para la ONU',
      'Autora de la Guía 360º Ciudades Sostenibles',
      'Coordinadora en el Observatorio Int. de Justicia Juvenil',
      'Emprendedora en turismo rural sostenible (Lidenex)',
    ],
    image: {
      src: '~/assets/images/users/fvi-maria-teresa-perez.webp',
      alt: 'María Teresa Pérez Martín, Dra. (España)',
    },
  },
  'gonzalo-fuente': {
    name: 'Gonzalo De La Fuente De Val (España)',
    specialty: 'Doctor en Ciencias Biológicas',
    bio: `
      <p>Doctor en Ciencias Biológicas de la Universidad Autónoma de Madrid, Máster en Gestión Integrada: Calidad, Medio Ambiente y Seguridad de la Universidad de las Islas Baleares, Diploma de Experto en Gestión Ambiental y Evaluación de Impacto Ambiental de la Universidad Complutense de Madrid, Licenciado en Ciencias y Artes Ambientales de la Universidad Central de Chile.</p>
      <p>Profesional con 18 años de experiencia en empresas tanto públicas como privadas del sector de la consultoría medioambiental, turismo e industrial de Chile, España, Guinea Ecuatorial, Perú e Irlanda del Norte. Forma parte de la International Federation Landscape Architecture (IFLA), European Foundation for Landscape Architecture (EFLA), Asociación Española de Paisajistas (AEP) y Asociación Técnica de Ecología del Paisaje y Seguimiento Ambiental (ECOPAS). Actualmente, colabora con estudioOCA, despacho internacional con oficinas en Barcelona, San Francisco y Tailandia, que se dedica al estudio y desarrollo de proyectos en urbanismo, paisajismo y turismo a escala global.</p>
      <p>Ha desarrollado estudios y proyectos en Paisaje, Turismo Sostenible y TICs, aportando soluciones de análisis, diseño y planificación para mejorar la calidad sensible del entorno, creando lugares atractivos, ecoeficientes y competitivos.</p>
    `,
    awards: [
      '+18 años de trayectoria internacional',
      'Colaborador de estudioOCA (proyectos globales)',
      'Miembro de IFLA, EFLA y AEP',
      'Especialista en Paisajismo y Turismo Sostenible',
    ],
    image: {
      src: '~/assets/images/users/fvi-gonzalo-fuente.webp',
      alt: 'Gonzalo De La Fuente De Val (España)',
    },
  },
  'juan-silva': {
    name: 'Juan Silva, PhD. (Venezuela)',
    specialty: 'PhD en Biología',
    bio: `
      <p>Profesor e Investigador destacado por sus publicaciones científicas en libros y revistas internacionales, con amplia experiencia en ecosistemas y poblaciones biológicas. En la actualidad se dedica a temas de cambio climático y sus impactos sobre la biodiversidad y a los aspectos ambientales de la sustentabilidad.</p>
      <p>PhD en Biología de la Universidad de Harvard. Licenciado en Biología de la Universidad Central de Venezuela. Postdoctorados en el Instituto Venezolano de Investigaciones Científicas (IVIC), en el Instituto Oceanográfico de Woods Hole (WHOI), y en el David Rockefeller Center for Latin American Studies.</p>
      <p>Profesor Titular de Ecología en el Instituto de Ciencias Ambientales y Ecológicas (ICAE), Facultad de Ciencias, Universidad de Los Andes (Mérida, Venezuela). Director del Postgrado de Ecología Tropical. Coordinador de la Red de Investigación Cooperativa de Andes y Sabanas (RICAS). Investigador del CENTER FOR INTERNATIONAL DEVELOPMENT (CID), John F. Kennedy School of Government, Universidad de Harvard.</p>
    `,
    awards: [
      'Profesor Titular de Ecología (ULA, Venezuela)',
      'Director del Postgrado de Ecología Tropical',
      'Coordinador de la Red RICAS',
      'Investigador del Center for International Development (CID)',
    ],
    image: {
      src: '~/assets/images/users/fvi-juan-silva.webp',
      alt: 'Juan Silva, PhD. (Venezuela)',
    },
  },
  'loraine-giraud': {
    name: 'Loraine Giraud (Venezuela)',
    specialty: 'Doctora en Desarrollo Sostenible',
    bio: `
      <p>Urbanista de la Universidad Simón Bolívar USB - Venezuela. Magister Scientiarum en Gerencia Ambiental del Instituto Universitario Politécnico de las Fuerzas Armadas Nacionales IUPFAN. Doctora en Desarrollo Sostenible de la Universidad Simón Bolívar. Realizando el Postdoctorado en la Facultad de Ciencias Sociales de la Universidad de Buenos Aires UBA - Argentina.</p>
      <p>Más de 25 años de experiencia profesional en gerencia de proyectos de cooperación internacional, ambiente e innovación, ciencia y tecnología. Ha ejercido cargos gerenciales de programas sociales y ambientales de la banca multilateral y puesta en marcha de negocios de emprendimiento en el sector servicios en España. Consultora de diversos Estudios de Impacto Ambiental y proyectos estratégicos.</p>
      <p>Profesora del Departamento de Planificación Urbana y Coordinadora del Grupo de Investigación Vida Urbana y Ambiente de la Universidad Simón Bolívar. Profesora en el Doctorado en Educación de la Universidad Católica Andrés Bello y en los Postgrados de Gestión Ambiental de la Universidad Metropolitana. Coautora de más de 25 publicaciones y artículos entre revistas indizadas y capítulos de libros. Ha dirigido tesis de pregrado, maestría y doctorado en las áreas de urbanismo, ambiente y desarrollo sostenible.</p>
      <p>Destacada por su capacidad de integrar la experiencia académica y profesional en los ámbitos del sector público y privado en los campos de sustentabilidad, innovación, ambiente, empresa y ciudad a nivel nacional e internacional.</p>
    `,
    awards: [
      '+25 años de experiencia en proyectos internacionales',
      'Gerencia de programas en banca multilateral',
      'Coordinadora del grupo "Vida Urbana y Ambiente"',
      '+25 publicaciones académicas y tesis dirigidas',
    ],
    image: {
      src: '~/assets/images/users/fvi-loraine-giraud.webp',
      alt: 'Loraine Giraud (Venezuela)',
    },
  },
  'yordanis-puerta': {
    name: 'Yordanis Gerardo Puerta de Armas (Cuba)',
    specialty: 'Doctor en Ciencias',
    bio: `
      <p>Licenciado en Geografía y Máster en Medio Ambiente y Desarrollo por la Universidad de La Habana, Cuba. Doctor (c) en Ciencias por la Universidad de Alicante, España. Especialista en sostenibilidad, formación ambiental, cambio climático, turismo y desarrollo local. Ha impartido más de 20 cursos de pregrado y 50 de posgrado.</p>
      <p>Director de 7 tesis de grado y 12 de maestría. Ha participado en 17 proyectos de investigación científica y ha sido autor principal de 20 resultados científicos, los que ha presentado en más de cien congresos a nivel nacional e internacional en Brasil, Costa Rica, Cuba, Colombia, Dinamarca, Ecuador, El Salvador, España, Estados Unidos, Honduras, Kenya, México y Perú.</p>
      <p>Ha publicado 30 libros como autor principal, coautor o editor científico, así como 35 artículos científicos en revistas latinoamericanas y europeas. Miembro de los Consejos Editoriales de varias revistas iberoamericanas y del Consejo de Administración y del Comité de Evaluación y Certificación del Instituto Tecnológico del Medio Ambiente de Perú. Miembro de Honor de la Red de Educación, Ciencias Sociales, Ambientales, Tecnología e Innovación (RECSATI, A.C.) de Venezuela. Fundador de la Red Iberoamericana de Medio Ambiente (REIMA, A.C.). Actualmente Director Ejecutivo de la Fundación Panamericana de Cooperación Internacional para el Desarrollo Sustentable con sede en Canadá. En 2019 recibió el Premio a la Excelencia Educativa en el grado de Maestro Internacional de la Paz y los Valores Universales de la Organización de las Américas para la Excelencia Educativa.</p>
    `,
    awards: [
      'Premio a la Excelencia Educativa (2019)',
      'Autor/Editor de 30 libros y 35 artículos científicos',
      'Ponente en +100 congresos internacionales (13 países)',
      'Gestor de 17 proyectos de investigación científica',
    ],
    image: {
      src: '~/assets/images/users/fvi-yordanis-puerta.webp',
      alt: 'Yordanis Gerardo Puerta de Armas (Cuba)',
    },
  },
  'alberto-jimenez': {
    name: 'Alberto Jiménez Madrid, PhD. (España)',
    specialty: 'Doctor en Ciencias del Medio Ambiente',
    bio: `
      <p>Doctor en Ciencias del Medio Ambiente por la Universidad de Málaga (UMA) y Licenciatura en Ciencias Ambientales. Perito Judicial especialista en medio ambiente, ordenación del territorio y urbanismo. Especialista en planificación y gestión de los recursos naturales, ordenación del territorio y sistemas de información geográfica.</p>
      <p>Tiene experiencia en dirección de proyectos en Europa, América, Asia y África e imparte docencia de pregrado y posgrado relacionada con la gestión del agua y los recursos naturales.</p>
      <p>Autor de más de 70 publicaciones tanto nacionales como internacionales y ha realizado diversas estancias de investigación en varios países de la UE. Ha impartido ponencias de especialista en más de 10 países de Europa y en Sudamérica.</p>
      <p>En la actualidad es el Director General de PROAMB Integrada Consultoría (Protección Ambiental Integrada), Asesor internacional del Ministerio de Medio Ambiente y del Centro de Investigación y Desarrollo de Recursos Hídricos de Chile, miembro de la Junta de Gobierno del Colegio Profesional de Ambientólogos de Andalucía y del Comité Consultor de la Cátedra de Planificación Estratégica Territorial y Gobernanza Local de Málaga.</p>
    `,
    awards: [
      'Premio Internacional <strong>«Profesor William R. Dearman QJEGH Young Author of the Year»</strong> al mejor artículo científico — Sociedad Geológica de Londres (2011)',
      'Premio Nacional <strong>Alfons Bayó</strong> — Asociación Internacional de Hidrogeólogos (2014)',
    ],
    image: {
      src: '~/assets/images/users/fvi-alberto-jimenez.webp',
      alt: 'Alberto Jiménez Madrid, PhD.',
    },
  },
  'angela-martin': {
    name: 'Ángela Martín Méndez, Lic. (España)',
    specialty: 'Máster en Recursos Humanos y Veterinaria',
    bio: `
      <p>Licenciada en Veterinaria por la Universitat Autònoma de Barcelona, Master of Business Administration (MBA) en Hult International Business School y Máster en Recursos Humanos por EAE Business School en Barcelona.</p>
      <p>Más de diez años de experiencia docente en universidades y centros educativos, y más de cinco años desarrollando e impartiendo cursos sobre dinámica de sistemas, salud humana y animal, sostenibilidad, cuidado del medio ambiente, con amplia trayectoria como consultora especializada en resolución de problemas mediante modelos de simulación.</p>
      <p>Actualmente Coordinadora de Postgrado en Veterinaria en la Universidad Europea de Madrid tras haber sido Directora del Departamento de Veterinaria de la misma institución. Es Directora de ATC empresa consultora en gestión estratégica que colabora con empresas y organismos públicos en proyectos de investigación y planificación.</p>
    `,
    awards: [
      'Consultora especializada en dinámica de sistemas',
      'Coordinadora de Postgrado (Universidad Europea de Madrid)',
      'Autora/investigadora en conservación (Journal for Nature Conservation)',
      'Directora de ATC consultora estratégica',
    ],
    image: {
      src: '~/assets/images/users/fvi-angela-martin.webp',
      alt: 'Ángela Martín Méndez, Lic.',
    },
  },
  'diana-duran': {
    name: 'Diana Durán, Dra. (Argentina)',
    specialty: 'Doctora en Geografía',
    bio: `
      <p>Dra. en Geografía de la Universidad del Salvador (Buenos Aires, Argentina) y Licenciada en Geografía de la Universidad del Salvador. Postítulo en Política, Derecho, Economía, Administración e Instituciones Ambientales del Centro Latinoamericano de Capacitación Institucional en Desarrollo Sostenible - PNUMA. Especialista Docente de Nivel Superior en Educación y TIC del Instituto de Formación Docente N° 3, Argentina.</p>
      <p>Directora del Centro de Estudios Geográficos "Florentino Ameghino" (Punta Alta, Argentina). Presidenta de la Comisión de Desarrollo Distrital, Recursos Naturales y Conservación del Ambiente Humano del Concejo Deliberante de Coronel Rosales (Buenos Aires, Argentina). Es miembro del Directorio del Geoforo Iberoamericano sobre Educación, Geografía y Sociedad.</p>
      <p>Ha sido Investigadora Científica del Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET) de la Argentina, Coordinadora de Ciencias Sociales del Ministerio de Cultura y Educación de la Nación y capacitadora de la Dirección de Cultura y Educación de la provincia de Buenos Aires. Ha sido profesora invitada en diversas universidades como la Universidad Nacional de San Juan, Instituto Superior del Profesorado "Antonio Ruiz de Montoya" y la Universidad Nacional de La Plata.</p>
      <p>Profesora e investigadora destacada con más de treinta libros de su autoría, conferencista y capacitadora con amplia experiencia en educación ambiental, proyectos ambientales sustentables, política ambiental y educación geográfica. Ha dictado más de cien cursos, seminarios y conferencias en Argentina, Uruguay, Chile y Brasil. Actualmente se dedica a temas de educación ambiental, ordenamiento territorial y formulación de políticas ambientales.</p>
    `,
    awards: [
      'Directora del Centro de Estudios Geográficos "Florentino Ameghino"',
      'Ex-Investigadora Científica del CONICET',
      'Presidenta de Comisión de Desarrollo Distrital y Ambiente',
      'Autora de más de 30 libros sobre geografía y educación ambiental',
    ],
    image: {
      src: '~/assets/images/users/fvi-diana-duran.webp',
      alt: 'Diana Durán, Dra.',
    },
  },
};
