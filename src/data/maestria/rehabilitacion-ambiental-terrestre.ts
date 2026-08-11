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

export const rehabilitacionAmbientalTerrestreCurriculum: ProgramCurriculum = {
    id: 'rehabilitacion-ambiental-terrestre',
    courses: [
        {
            title: 'CURSO 1: Aproximación al Paisaje',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Aproximación al paisaje: conceptos, valores y problemática', hours: 16, credits: 1 },
                { title: 'Normativa e instrumentos legales aplicados al paisaje', hours: 16, credits: 1 },
                { title: 'Métodos de análisis y evaluación visual del paisaje', hours: 16, credits: 1 },
                { title: 'Ecología del paisaje perspectivas de evaluación', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 2: Instrumentos de Ordenación, Planificación y Proyectos en el Paisaje',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Instrumentos de ordenación del paisaje', hours: 16, credits: 1 },
                { title: 'Instrumentos de gestión del paisaje', hours: 16, credits: 1 },
                { title: 'Información y participación ciudadana', hours: 16, credits: 1 },
                { title: 'Proyectos y actuaciones en el paisaje', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 3: Análisis de biodiversidad para biología de la conservación',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Biodiversidad y biología de la conservación', hours: 16, credits: 1 },
                { title: 'Valoración y medición de la diversidad biológica', hours: 16, credits: 1 },
                { title: 'Composición de especies', hours: 16, credits: 1 },
                { title: 'Herramientas aplicadas a la conservación de la biodiversidad', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 4: Principios de rehabilitación ambiental',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Introducción al concepto de rehabilitación terrestre', hours: 16, credits: 1 },
                { title: 'Fundamentos en ecología e importancia de la diversidad', hours: 16, credits: 1 },
                { title: 'Propiedades del suelo', hours: 16, credits: 1 },
                { title: 'Efectos físicos de las plantas en sitios degradados', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 5: Sucesión Ecológica y rehabilitación del ecosistema',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Sucesiones ecológicas', hours: 16, credits: 1 },
                { title: 'Tipo de perturbaciones', hours: 16, credits: 1 },
                { title: 'Estudios de impacto ambiental como herramienta preventiva', hours: 16, credits: 1 },
                { title: 'Planeamiento de la rehabilitación', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 6: Métodos de Rehabilitación y Casos de estudio a distintas escalas',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Metodologías de la rehabilitación ambiental terrestre', hours: 16, credits: 1 },
                { title: 'Enfrentando condiciones adversas', hours: 16, credits: 1 },
                { title: 'Monitoreo y mantenimiento de sitios rehabilitados', hours: 16, credits: 1 },
                { title: 'Estudios de Caso sobre Rehabilitación Ambiental Terrestre', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 7: Restauración de los componentes del ecosistema',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'La Restauración ecológica y la Restauración ambiental', hours: 16, credits: 1 },
                { title: 'Restauración del suelo', hours: 16, credits: 1 },
                { title: 'Restauración de la cubierta vegetal', hours: 16, credits: 1 },
                { title: 'Restauración de hábitats para fauna', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 8: Restauración de ecosistemas naturales',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'Restauración de sistemas agrarios', hours: 16, credits: 1 },
                { title: 'Restauración de sistemas forestales', hours: 16, credits: 1 },
                { title: 'Restauración de zonas áridas', hours: 16, credits: 1 },
                { title: 'Restauración de sistemas fluviales y humedales', hours: 16, credits: 1 }
            ]
        },
        {
            title: 'CURSO 9: Rehabilitación de áreas degradadas por el hombre',
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: 'La Rehabilitación de espacios urbanos', hours: 16, credits: 1 },
                { title: 'Rehabilitación de infraestructuras de comunicación', hours: 16, credits: 1 },
                { title: 'Rehabilitación de zonas mineras', hours: 16, credits: 1 },
                { title: 'Rehabilitación de vertederos', hours: 16, credits: 1 }
            ]
        }
    ]
};
