import type { ItemFeaturedProgram } from '~/types';

export type ProgramCategory = 'maestria' | 'doctorado' | 'postdoctorado';

export interface Program extends ItemFeaturedProgram {
  category: ProgramCategory;
}

const maestriaStartDate = '11 de noviembre de 2026';
const phdStartDate = '11 de noviembre de 2026';
const postdoctoradoStartDate = '2 de diciembre de 2026';

const programMediaCaptions: Record<ProgramCategory, string> = {
  maestria: 'Alta Especialización',
  doctorado: 'Investigación Científica',
  postdoctorado: 'Vanguardia Académica',
};

const program = (
  category: ProgramCategory,
  image: string,
  title: string,
  date: string,
  description: string,
  href: string
): Program => ({
  category,
  image,
  title,
  date,
  mediaCaption: programMediaCaptions[category],
  description,
  button: {
    text: 'Ver programa',
    href,
    variant: 'primary',
  },
});

export const programs: Program[] = [
  program(
    'maestria',
    '~/assets/images/maestrias/fvi-msc-ciencias-sostenibilidad.jpg',
    '<span class="text-primary">Maestría en</span> Ciencias de la Sostenibilidad',
    maestriaStartDate,
    'Forma agentes de cambio para la gestión ambiental y el desarrollo sostenible. Integra planificación regional, ordenación de recursos y respuestas ante el cambio climático para diseñar y evaluar proyectos sostenibles en instituciones y empresas.',
    '/maestria/ciencias-sostenibilidad'
  ),
  program(
    'maestria',
    '~/assets/images/maestrias/fvi-msc-eficiencia-energetica-cambio-climatico-sostenibilidad.jpg',
    '<span class="text-primary">Maestría en</span> Eficiencia Energética, Cambio Climático y Sostenibilidad',
    maestriaStartDate,
    'Integra ecodiseño, ecoeficiencia, energía, cambio climático, negocios y sostenibilidad. Prepara para evaluar el rendimiento energético y ambiental de proyectos, promoviendo soluciones locales, empleos verdes e infraestructuras eficientes.',
    '/maestria/eficiencia-energetica-cambio-climatico-sostenibilidad'
  ),
  program(
    'maestria',
    '~/assets/images/maestrias/fvi-msc-gestion-proyectos-ambientales.jpg',
    '<span class="text-primary">Maestría en</span> Gestión de Proyectos Ambientales',
    maestriaStartDate,
    'Forma especialistas capaces de planificar, dirigir, ejecutar y supervisar proyectos ambientales. Desarrolla destrezas para liderar estrategias ecológicas, reducir impactos y responder a la demanda de gestión ambiental en organizaciones públicas y privadas.',
    '/maestria/gestion-proyectos-ambientales'
  ),
  program(
    'maestria',
    '~/assets/images/maestrias/fvi-msc-habitat-urbanismo-edificacion-sostenible.jpg',
    '<span class="text-primary">Maestría en</span> Hábitat, Urbanismo y Edificación Sostenible',
    maestriaStartDate,
    'Desarrolla capacidades para gestionar de forma sostenible el medio construido y natural. Integra urbanismo, edificación, materiales y eficiencia energética para liderar transformaciones del hábitat y proyectos urbanos responsables con el ambiente.',
    '/maestria/habitat-urbanismo-edificacion-sostenible'
  ),
  program(
    'maestria',
    '~/assets/images/maestrias/fvi-msc-medio-ambiente-responsabilidad.webp',
    '<span class="text-primary">Maestría en</span> Medio Ambiente y Responsabilidad Social',
    maestriaStartDate,
    'Especializa en economía sostenible, gestión medioambiental y responsabilidad corporativa. Integra políticas ambientales, estrategia empresarial y atención a los grupos de interés para planificar organizaciones socialmente responsables.',
    '/maestria/medio-ambiente-responsabilidad-social'
  ),
  program(
    'maestria',
    '~/assets/images/maestrias/fvi-msc-paisaje-patrimonio-estudios-territoriales.jpg',
    '<span class="text-primary">Maestría en</span> Paisaje, Patrimonio y Estudios Territoriales',
    maestriaStartDate,
    'Estudia métodos para valorar, conservar, planificar y restaurar paisajes y patrimonio. Forma profesionales capaces de responder a problemas de gestión territorial en entornos urbanos y rurales desde una perspectiva sostenible.',
    '/maestria/paisaje-patrimonio-estudios-territoriales'
  ),
  program(
    'maestria',
    '~/assets/images/maestrias/fvi-msc-rehabilitacion-ambiental-terrestre.jpg',
    '<span class="text-primary">Maestría en</span> Rehabilitación Ambiental Terrestre',
    maestriaStartDate,
    'Forma profesionales para recuperar áreas afectadas por disturbios naturales y antrópicos. Integra restauración ecológica, análisis científico y enfoques multidisciplinarios para diseñar proyectos que conserven la biodiversidad y los servicios ecosistémicos.',
    '/maestria/rehabilitacion-ambiental-terrestre'
  ),
  program(
    'maestria',
    '~/assets/images/maestrias/fvi-msc-sostenibilidad-turistica-ecoturismo.jpg',
    '<span class="text-primary">Maestría en</span> Sostenibilidad Turística y Ecoturismo',
    maestriaStartDate,
    'Prepara profesionales para liderar la evolución del turismo con criterios de sostenibilidad. Aborda destinos responsables, protección de la biodiversidad y respeto por las culturas locales, promoviendo una gestión turística más justa.',
    '/maestria/sostenibilidad-turistica-ecoturismo'
  ),
  program(
    'doctorado',
    '~/assets/images/doctorados/fvi-phd-sostenibilidad.webp',
    '<span class="text-primary">Doctorado en</span> Sostenibilidad',
    phdStartDate,
    'Forma investigadores en desarrollo sostenible desde una visión económica, social y ambiental integrada. Analiza la relación entre sociedad, territorio y sistemas biofísicos para proponer políticas y proyectos sustentables.',
    '/phd/sostenibilidad'
  ),
  program(
    'doctorado',
    '~/assets/images/doctorados/fvi-phd-conservacion-restauracion-medio-natural.webp',
    '<span class="text-primary">Doctorado en</span> Conservación y Restauración del Medio Natural',
    phdStartDate,
    'Integra Medicina de la Conservación, salud ecosistémica, fauna, biodiversidad y restauración. Analiza impactos antropogénicos, contaminantes y enfermedades para liderar procesos de recuperación y conservación ambiental.',
    '/phd/conservacion-restauracion-medio-natural'
  ),
  program(
    'doctorado',
    '~/assets/images/doctorados/fvi-phd-proyectos-investigacion-medio-ambiente.webp',
    '<span class="text-primary">Doctorado en</span> Proyectos: Línea de Investigación en Medio Ambiente',
    phdStartDate,
    'Forma investigadores para planear, formular y gestionar proyectos sostenibles en contextos urbanos y rurales. Integra componentes biofísicos, socioeconómicos, culturales y políticos para implementar, evaluar y monitorear soluciones ambientales.',
    '/phd/proyectos-investigacion-medio-ambiente'
  ),
  program(
    'doctorado',
    '~/assets/images/doctorados/fvi-phd-administracion-negocios-sostenibles.webp',
    '<span class="text-primary">Doctorado en</span> Administración de Negocios Sostenibles',
    phdStartDate,
    'Forma investigadores capaces de diseñar y aplicar modelos empresariales sostenibles e innovadores. Articula economía, ambiente y práctica investigadora, con énfasis en economía circular, bioeconomía, consumo responsable y negocios ambientales.',
    '/phd/administracion-negocios-sostenibles'
  ),
  program(
    'doctorado',
    '~/assets/images/doctorados/fvi-phd-educacion-ambiental.webp',
    '<span class="text-primary">Doctorado en</span> Educación Ambiental',
    phdStartDate,
    'Forma doctores para investigar y mejorar la educación ambiental desde enfoques interdisciplinarios. Integra ciencias naturales, sociales y educación, abordando pedagogía científica, currículo, formación docente y alfabetización ambiental.',
    '/phd/educacion-ambiental'
  ),
  program(
    'doctorado',
    '~/assets/images/doctorados/fvi-phd-paisaje-ambiente.webp',
    '<span class="text-primary">Doctorado en</span> Paisaje y Ambiente',
    phdStartDate,
    'Forma investigadores para estudiar el espacio libre, el paisaje y su contribución a la mejora ambiental. Desarrolla competencias para valorar, planificar, conservar y restaurar territorios mediante métodos interdisciplinarios.',
    '/phd/paisaje-ambiente'
  ),
  program(
    'doctorado',
    '~/assets/images/doctorados/fvi-phd-ecoturismo-turismo-sostenible.webp',
    '<span class="text-primary">Doctorado en</span> Ecoturismo y Turismo Sostenible',
    phdStartDate,
    'Forma investigadores para mejorar la calidad de servicios y destinos turísticos sostenibles. Promueve el uso equitativo de recursos naturales, históricos y culturales, junto con la planificación, inclusión y gestión de impactos.',
    '/phd/ecoturismo-turismo-sostenible'
  ),
  program(
    'doctorado',
    '~/assets/images/doctorados/fvi-phd-urbanismo-arquitectura-sostenible.webp',
    '<span class="text-primary">Doctorado en</span> Urbanismo y Arquitectura Sostenible',
    phdStartDate,
    'Investiga soluciones arquitectónicas y urbanas con rigor científico, eficiencia energética y bajo impacto. Aborda habitabilidad, materiales, construcción sostenible y planificación territorial para desarrollar tesis originales.',
    '/phd/urbanismo-arquitectura-sostenible'
  ),
  program(
    'doctorado',
    '~/assets/images/doctorados/fvi-phd-energias-renovables.webp',
    '<span class="text-primary">Doctorado en</span> Energías Renovables',
    phdStartDate,
    'Proporciona formación científica y tecnológica avanzada en energías renovables. Aborda fuentes eólica, solar, biomasa, geotermia, marinas e hidrógeno para resolver problemas energéticos y ambientales mediante investigación transdisciplinaria.',
    '/phd/energias-renovables'
  ),
  program(
    'postdoctorado',
    '~/assets/images/postdocs/fvi-postdoc-ciencias-aplicadas-medio-ambiente.webp',
    '<span class="text-primary">Postdoctorado en</span> Ciencias Aplicadas al Medio Ambiente',
    postdoctoradoStartDate,
    'Analiza la relación entre naturaleza y ser humano y los problemas del cambio ambiental global. Investiga políticas, tecnologías limpias y energías renovables para aportar soluciones multidisciplinares a proyectos sostenibles.',
    '/postdoctorado/ciencias-aplicadas-medio-ambiente'
  ),
  program(
    'postdoctorado',
    '~/assets/images/postdocs/fvi-postdoc-ciencias-educacion-ambiental.webp',
    '<span class="text-primary">Postdoctorado en</span> Ciencias de la Educación Ambiental',
    postdoctoradoStartDate,
    'Investiga metodologías de enseñanza y diseños educativos para la sostenibilidad ambiental. Integra pedagogía científica, formación docente, currículo y tecnología para abordar desafíos ambientales desde la educación.',
    '/postdoctorado/ciencias-educacion-ambiental'
  ),
  program(
    'postdoctorado',
    '~/assets/images/postdocs/fvi-postdoc-ciencias-sostenibilidad.webp',
    '<span class="text-primary">Postdoctorado en</span> Ciencias de la Sostenibilidad',
    postdoctoradoStartDate,
    'Estudia la interacción entre sistemas naturales y sociales y los desafíos de los ODS. Investiga sostenibilidad global, ecosistemas, salud y cambio climático para generar conocimiento y políticas ambientales aplicables.',
    '/postdoctorado/ciencias-sostenibilidad'
  ),
  program(
    'postdoctorado',
    '~/assets/images/postdocs/fvi-postdoc-gestion-gobernanza-proyectos-ambientales.webp',
    '<span class="text-primary">Postdoctorado en</span> Gestión y Gobernanza de Proyectos Ambientales',
    postdoctoradoStartDate,
    'Fortalece la investigación y gestión de proyectos ambientales complejos y multipropósito. Promueve reflexión crítica, co-construcción de conocimiento y enfoques transdisciplinarios con incidencia en políticas latinoamericanas.',
    '/postdoctorado/gestion-gobernanza-proyectos-ambientales'
  ),
  program(
    'postdoctorado',
    '~/assets/images/postdocs/fvi-postdoc-peritaje-judicial-delitos-ambientales.webp',
    '<span class="text-primary">Postdoctorado en</span> Peritaje Judicial en materia de delitos ambientales',
    postdoctoradoStartDate,
    'Fortalece la investigación y actuación técnica en peritajes y delitos ambientales. Desarrolla evaluaciones científicas rigurosas para producir pruebas periciales válidas, relacionando diagnóstico ambiental y procesos judiciales.',
    '/postdoctorado/peritaje-judicial-delitos-ambientales'
  ),
  program(
    'postdoctorado',
    '~/assets/images/postdocs/fvi-postdoc-sistemas-gestion-medioambiental.webp',
    '<span class="text-primary">Postdoctorado en</span> Sistemas de Gestión Medioambiental',
    postdoctoradoStartDate,
    'Investiga la gestión y auditoría ambiental desde la relación entre ambiente, sociedad y economía. Prepara para diseñar e implantar sistemas de gestión en organizaciones con herramientas alineadas con ISO 14001:2015.',
    '/postdoctorado/sistemas-gestion-medioambiental'
  ),
  program(
    'postdoctorado',
    '~/assets/images/postdocs/fvi-postdoc-sistemas-gestion-seguridad-salud-trabajo.webp',
    '<span class="text-primary">Postdoctorado en</span> Sistemas de Gestión de la Seguridad y Salud en el trabajo',
    postdoctoradoStartDate,
    'Desarrolla investigación avanzada sobre prevención, riesgos y auditoría en seguridad y salud laboral. Prepara para gestionar sistemas de SST en organizaciones e implantar modelos basados en ISO 45001:2018.',
    '/postdoctorado/sistemas-gestion-seguridad-salud-trabajo'
  ),
];
