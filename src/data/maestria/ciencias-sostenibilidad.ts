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

export const cienciasSostenibilidadCurriculum: ProgramCurriculum = {
    id: 'ciencias-sostenibilidad',
    courses: [
        {
            title: 'CURSO 1: Problemas Ambientales Globales',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Crisis ambiental planetaria. Diagnóstico y perspectivas', hours: 16, credits: 1 },
                { title: 'Los problemas ambientales y sus perspectivas de solución', hours: 16, credits: 1 },
                { title: 'Problemas ambientales: el inicio de los proyectos solidarios', hours: 16, credits: 1 },
                { title: 'Contaminación ambiental', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 2: Sostenibilidad, Economía y Política Ambiental',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Marco teórico de la sustentabilidad ambiental', hours: 16, credits: 1 },
                { title: 'Desarrollo sustentable; evolución de la conceptualización', hours: 16, credits: 1 },
                { title: 'Economía Ambiental y de los Recursos Naturales', hours: 16, credits: 1 },
                { title: 'Política Ambiental y Productiva', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 3: Modelos en Ecología y Gestión de Recursos Naturales',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'La Dinámica de Sistemas', hours: 16, credits: 1 },
                { title: 'Construcción de un Modelo de Simulación', hours: 16, credits: 1 },
                { title: 'Creación de Modelos de Simulación Ambiental', hours: 16, credits: 1 },
                { title: 'Creación de Modelos de Simulación Social', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 4: Ciencias Ambientales para la Toma de Decisiones',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Liderazgo Ambiental', hours: 16, credits: 1 },
                { title: 'Ciencias Ambientales', hours: 16, credits: 1 },
                { title: 'Finanzas Ambientales', hours: 16, credits: 1 },
                { title: 'Mercados y emprendimientos Socio-ambientales', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 5: Planificación y Evaluación Ambiental',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'La Planificación Ambiental', hours: 16, credits: 1 },
                { title: 'La Ordenación del Territorio', hours: 16, credits: 1 },
                { title: 'El Diagnóstico Ambiental', hours: 16, credits: 1 },
                { title: 'Evaluación del Impacto Ambiental', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 6: Asentamientos humanos sostenibles',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Asentamientos humanos ambientalmente sostenibles', hours: 16, credits: 1 },
                { title: 'Sostenibilidad Urbana', hours: 16, credits: 1 },
                { title: 'Manejo de Residuos Sólidos', hours: 16, credits: 1 },
                { title: 'Movilidad Urbana', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 7: Gestión y Administración de Proyectos Ambientales',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Introducción a la Administración de Proyectos', hours: 16, credits: 1 },
                { title: 'Gestión de proyectos ambientales', hours: 16, credits: 1 },
                { title: 'Evaluación de proyectos ambientales', hours: 16, credits: 1 },
                { title: 'Estudios de caso y desarrollo de un proyecto ambiental', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 8: Cambio Climático Global',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Bases teóricas, causas y evidencias del Cambio Climático, modelos y escenarios', hours: 16, credits: 1 },
                { title: 'Impactos del cambio climático y estrategias de adaptación', hours: 16, credits: 1 },
                { title: 'Políticas públicas en el ámbito del cambio climático', hours: 16, credits: 1 },
                { title: 'Era Post Kioto: mitigación, adaptación, tecnologías y financiación', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 9: Gestión de Riesgos de Desastres',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'La gestión integral del riesgo de desastres: Un enfoque basado en procesos', hours: 16, credits: 1 },
                { title: 'Herramientas de análisis para evaluar la vulnerabilidad y capacidad a nivel local', hours: 16, credits: 1 },
                { title: 'Estrategias de respuestas ante los escenarios de riesgo de desastres: de los preparativos en el territorio', hours: 16, credits: 1 },
                { title: 'La reconstrucción temprana: visión integral en los procesos de rehabilitación y reconstrucción posdesastre', hours: 16, credits: 1 }
            ]
        }
    ]
};
