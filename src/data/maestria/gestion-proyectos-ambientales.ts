export interface CourseModule {
    title: string;
    hours: number;
    credits: number;
}

export interface Course {
    title: string;
    totalHours: number;
    totalCredits: number;
    modules: CourseModule[];
}

export interface ProgramCurriculum {
    id: string;
    courses: Course[];
}

const modules = (titles: string[]): CourseModule[] => titles.map((title) => ({
    title,
    hours: 32,
    credits: 2,
}));

export const gestionProyectosAmbientalesCurriculum: ProgramCurriculum = {
    id: 'gestion-proyectos-ambientales',
    courses: [
        {
            title: 'CURSO 1: Sostenibilidad, Economía y Política Ambiental',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Marco teórico de la sustentabilidad ambiental',
                'Desarrollo sustentable; evolución de la conceptualización',
                'Economía Ambiental y de los Recursos Naturales',
                'Política Ambiental y Productiva',
            ]),
        },
        {
            title: 'CURSO 2: Ciencias Ambientales para la Toma de Decisiones',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Liderazgo Ambiental',
                'Ciencias Ambientales',
                'Finanzas Ambientales',
                'Mercados y emprendimientos Socio-ambientales',
            ]),
        },
        {
            title: 'CURSO 3: Gestión y Administración de Proyectos Ambientales',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Introducción a la Administración de Proyectos',
                'Gestión de proyectos ambientales',
                'Evaluación de proyectos ambientales',
                'Estudios de caso y desarrollo de un proyecto ambiental',
            ]),
        },
        {
            title: 'CURSO 4: Modelos en Ecología y Gestión de Recursos Naturales',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'La Dinámica de Sistemas',
                'Construcción de un Modelo de Simulación',
                'Creación de Modelos de Simulación Ambiental',
                'Creación de Modelos de Simulación Social',
            ]),
        },
        {
            title: 'CURSO 5: Planificación y Evaluación Ambiental',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'La Planificación Ambiental',
                'La Ordenación del Territorio',
                'El Diagnóstico Ambiental',
                'Evaluación del Impacto Ambiental',
            ]),
        },
        {
            title: 'CURSO 6: Gestión Ambiental',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Sistemas de Gestión Ambiental',
                'Gestión de la Producción limpia',
                'Gerencia Ambiental Estratégica',
                'Sistemas de Información Gerencial y Ambiental',
            ]),
        },
        {
            title: 'CURSO 7: Gerencia de Proyectos Ambientales, aplicando metodología PMI',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Contexto del proyecto',
                'Definición del proyecto',
                'Puesta en marcha y operación del proyecto',
                'Monitoreo, control y cierre del proyecto',
            ]),
        },
        {
            title: 'CURSO 8: Diseño de Proyectos de Educación Ambiental',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Etapas para la realización de un proyecto de educación ambiental',
                'Estudios de caso sobre proyectos exitosos en educación ambiental. Foros. Campañas. Micro-emprendimientos',
                'Herramientas para la elaboración de proyectos educación ambiental',
                'Evaluación de los proyectos',
            ]),
        },
        {
            title: 'CURSO 9: Proyectos Sostenibles',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'El Proyecto sostenible',
                'Proyectos y actuaciones en el paisaje',
                'Proyectos de desarrollo turístico local',
                'Proyectos de Responsabilidad Social',
            ]),
        },
    ],
};
