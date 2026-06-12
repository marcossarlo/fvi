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

export const medioAmbienteResponsabilidadSocialCurriculum: ProgramCurriculum = {
    id: 'medio-ambiente-responsabilidad-social',
    courses: [
        {
            title: "CURSO 1: Sostenibilidad, Economía y Política Ambiental",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Marco teórico de la sustentabilidad ambiental", hours: 16, credits: 1 },
                { title: "Desarrollo sustentable; evolución de la conceptualización", hours: 16, credits: 1 },
                { title: "Economía Ambiental y de los Recursos Naturales", hours: 16, credits: 1 },
                { title: "Política Ambiental y Productiva", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 2: Ciencias Ambientales para la Toma de Decisiones",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Liderazgo Ambiental", hours: 16, credits: 1 },
                { title: "Ciencias Ambientales", hours: 16, credits: 1 },
                { title: "Finanzas Ambientales", hours: 16, credits: 1 },
                { title: "Mercados y emprendimientos Socio-ambientales", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 3: Modelos en Ecología y Gestión de Recursos Naturales",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "La Dinámica de Sistemas", hours: 16, credits: 1 },
                { title: "Construcción de un Modelo de Simulación", hours: 16, credits: 1 },
                { title: "Creación de Modelos de Simulación Ambiental", hours: 16, credits: 1 },
                { title: "Creación de Modelos de Simulación Social", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 4: Gestión Ambiental",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Sistemas de Gestión Ambiental", hours: 16, credits: 1 },
                { title: "Gestión de la Producción limpia", hours: 16, credits: 1 },
                { title: "Gerencia Ambiental Estratégica", hours: 16, credits: 1 },
                { title: "Sistemas de Información Gerencial y Ambiental", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 5: Gestión y Administración de Proyectos Ambientales",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Introducción a la Administración de Proyectos", hours: 16, credits: 1 },
                { title: "Gestión de proyectos ambientales", hours: 16, credits: 1 },
                { title: "Evaluación de proyectos ambientales", hours: 16, credits: 1 },
                { title: "Estudios de caso y desarrollo de un proyecto ambiental", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 6: Ciencia y diplomacia del Cambio Climático",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Bases teóricas, racionalidad ambiental, causas y evidencias y escenarios del cambio climático", hours: 16, credits: 1 },
                { title: "Impactos y estrategias de mitigación y adaptación al cambio climático", hours: 16, credits: 1 },
                { title: "Políticas públicas en el ámbito del cambio climático", hours: 16, credits: 1 },
                { title: "Introducción a la diplomacia del cambio climático", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 7: Responsabilidad Corporativa",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Responsabilidad social: dimensión interna y externa", hours: 16, credits: 1 },
                { title: "Gobierno y Reputación corporativa", hours: 16, credits: 1 },
                { title: "Gestión del diálogo con los grupos de interés", hours: 16, credits: 1 },
                { title: "Inversión Socialmente Responsable y Finanzas Éticas", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 8: Herramientas de Gestión, Reporting, y Auditoría de la RSC",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Los cimientos del sistema. ISO 9001, ISO 14001 Y OHSAS 18001", hours: 16, credits: 1 },
                { title: "Estándares y marcos de auditoría en materia de derechos humanos y laborales. La norma SA 8000", hours: 16, credits: 1 },
                { title: "Enfoque integral. La norma SGE 21", hours: 16, credits: 1 },
                { title: "Herramientas de soporte en la gestión: Informes de Sostenibilidad, Códigos de conducta en los negocios e Implantación de RC en pymes", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 9: Desempeño social y ambiental de la empresa moderna",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "ISO 26,000. La RSE en Contextos Complejos (América Latina)", hours: 16, credits: 1 },
                { title: "Diseño de Proyectos de Responsabilidad Social", hours: 16, credits: 1 },
                { title: "Modelos de Gestión, Alianzas Multisectoriales y Proyectos de Desarrollo Comunitario", hours: 16, credits: 1 },
                { title: "Experiencias exitosas de responsabilidad social empresarial (UE y América Latina)", hours: 16, credits: 1 }
            ]
        }
    ]
};
