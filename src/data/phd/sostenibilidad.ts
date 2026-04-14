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

export interface ResearchSeminar {
    title: string;
    hours: number;
    credits: number;
}

export interface ResearchCurriculum {
    seminars: ResearchSeminar[];
    phdProject: ResearchSeminar;
    totalFormation: { hours: number; credits: number };
}

export const sostenibilidadCurriculum: ProgramCurriculum = {
    id: 'sostenibilidad',
    courses: [
        {
            title: 'CURSO 1: Introducción a los Problemas Ambientales Globales',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                {
                    title: 'Crisis ambiental planetaria. Diagnóstico y perspectivas',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Los problemas ambientales y sus perspectivas de solución',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Problemas ambientales: el inicio de los proyectos solidarios',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Contaminación ambiental',
                    hours: 16,
                    credits: 1,
                },
            ],
        },
        {
            title: 'CURSO 2: Introducción a la Sostenibilidad, Economía y Política Ambiental',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                {
                    title: 'Marco teórico de la sustentabilidad ambiental',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Desarrollo sustentable; evolución de la conceptualización',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Economía Ambiental y de los Recursos Naturales',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Política Ambiental y Productiva',
                    hours: 16,
                    credits: 1,
                },
            ],
        },
        {
            title: 'CURSO 3: Modelos en Ecología y Gestión de Recursos Naturales',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                {
                    title: 'La Dinámica de Sistemas',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Construcción de un Modelo de Simulación',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Creación de Modelos de Simulación Ambiental',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Creación de Modelos de Simulación Social',
                    hours: 16,
                    credits: 1,
                },
            ],
        },
        {
            title: 'CURSO 4: Ciencias Ambientales para la Toma de Decisiones',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                {
                    title: 'Liderazgo Ambiental',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Ciencias Ambientales',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Finanzas Ambientales',
                    hours: 16,
                    credits: 1,
                },
                {
                    title: 'Mercados y emprendimientos Socio-ambientales',
                    hours: 16,
                    credits: 1,
                },
            ],
        },
        {
            title: 'CURSO 5: Planificación y Evaluación Ambiental',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'La Planificación Ambiental', hours: 16, credits: 1 },
                { title: 'La Ordenación del Territorio', hours: 16, credits: 1 },
                { title: 'El Diagnóstico Ambiental', hours: 16, credits: 1 },
                { title: 'Evaluación del Impacto Ambiental', hours: 16, credits: 1 },
            ],
        },
        {
            title: 'CURSO 6: Gestión Ambiental',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Sistemas de Gestión Ambiental', hours: 16, credits: 1 },
                { title: 'Gestión de la Producción limpia', hours: 16, credits: 1 },
                { title: 'Gerencia Ambiental Estratégica', hours: 16, credits: 1 },
                { title: 'Sistemas de Información Gerencial y Ambiental', hours: 16, credits: 1 },
            ],
        },
        {
            title: 'CURSO 7: Turismo Sostenible',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Turismo, conceptualización y enfoque de sistema', hours: 16, credits: 1 },
                { title: 'Desarrollo Sostenible y Turismo', hours: 16, credits: 1 },
                { title: 'Ecología, Biodiversidad e Impacto Ambiental de las actividades turísticas', hours: 16, credits: 1 },
                { title: 'Tipología del Turismo y modalidades de Ocio relacionadas con la Sostenibilidad', hours: 16, credits: 1 },
            ],
        },
        {
            title: 'CURSO 8: Asentamientos humanos sostenibles',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Asentamientos humanos ambientalmente sostenibles', hours: 16, credits: 1 },
                { title: 'Sostenibilidad Urbana', hours: 16, credits: 1 },
                { title: 'Manejo de Residuos Sólidos', hours: 16, credits: 1 },
                { title: 'Movilidad Urbana', hours: 16, credits: 1 },
            ],
        },
        {
            title: 'CURSO 9: Gestión y Administración de Proyectos Ambientales',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Introducción a la Administración de Proyectos', hours: 16, credits: 1 },
                { title: 'Gestión de proyectos ambientales', hours: 16, credits: 1 },
                { title: 'Evaluación de proyectos ambientales', hours: 16, credits: 1 },
                { title: 'Estudios de caso y desarrollo de un proyecto ambiental', hours: 16, credits: 1 },
            ],
        },
        {
            title: 'CURSO 10: Cambio Climático Global',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Bases teóricas, causas y evidencias del Cambio Climático, modelos y escenarios', hours: 16, credits: 1 },
                { title: 'Proyecciones del cambio climático en diversos escenarios', hours: 16, credits: 1 },
                { title: 'Impactos y estrategias de mitigación y adaptación al cambio climático', hours: 16, credits: 1 },
                { title: 'Era Post Kioto: mitigación, adaptación, tecnologías y financiación', hours: 16, credits: 1 },
            ],
        },
        {
            title: 'CURSO 11: La gestión integral del riesgo de desastres: Un enfoque basado en procesos',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'La gestión integral del riesgo de desastres: Un enfoque basado en procesos', hours: 16, credits: 1 },
                { title: 'Herramientas de análisis para evaluar la vulnerabilidad y capacidad a nivel local', hours: 16, credits: 1 },
                { title: 'Estrategias de respuestas ante los escenarios de riesgo de desastres: de los preparativos en el territorio', hours: 16, credits: 1 },
                { title: 'La reconstrucción temprana: visión integral en los procesos de rehabilitación y reconstrucción posdesastre', hours: 16, credits: 1 },
            ],
        },
        {
            title: 'CURSO 12: Rehabilitación Ambiental Terrestre',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Introducción al concepto de rehabilitación terrestre', hours: 16, credits: 1 },
                { title: 'Planeamiento de la restauración', hours: 16, credits: 1 },
                { title: 'Monitoreo y mantenimiento de sitios rehabilitados', hours: 16, credits: 1 },
                { title: 'Estudios de Casos sobre Rehabilitación Ambiental terrestre', hours: 16, credits: 1 },
            ],
        },
    ],
};

export const sostenibilidadResearch: ResearchCurriculum = {
    seminars: [
        { title: 'Seminario de Investigación I: Análisis del Estado del Arte.', hours: 70, credits: 4 },
        { title: 'Seminario de Investigación II: El Problema de Investigación.', hours: 70, credits: 4 },
        { title: 'Seminario de Investigación III: Diseño Metodológico.', hours: 280, credits: 18 },
        { title: 'Seminario de Investigación IV: Propuesta de Investigación Doctoral.', hours: 140, credits: 9 },
    ],
    phdProject: { title: 'Proyecto de Tesis Doctoral (PTD)', hours: 112, credits: 7 },
    totalFormation: { hours: 768, credits: 48 },
};