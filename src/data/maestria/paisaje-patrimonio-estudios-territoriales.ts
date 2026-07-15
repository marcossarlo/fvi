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

export const paisajePatrimonioEstudiosTerritorialesCurriculum: ProgramCurriculum = {
    id: 'paisaje-patrimonio-estudios-territoriales',
    courses: [
        {
            title: "CURSO 1: Aproximación al Paisaje",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Aproximación al paisaje: conceptos, valores y problemática", hours: 16, credits: 1 },
                { title: "Normativa e instrumentos legales aplicados al paisaje", hours: 16, credits: 1 },
                { title: "Métodos de análisis y evaluación visual del paisaje", hours: 16, credits: 1 },
                { title: "Ecología del paisaje perspectivas de evaluación", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 2: Instrumentos de Ordenación, Planificación y Proyectos en el Paisaje",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Instrumentos de ordenación del paisaje", hours: 16, credits: 1 },
                { title: "Instrumentos de gestión del paisaje", hours: 16, credits: 1 },
                { title: "Información y participación ciudadana", hours: 16, credits: 1 },
                { title: "Proyectos y actuaciones en el paisaje", hours: 16, credits: 1 }
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
            title: "CURSO 4: Paisaje Urbano",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Conceptos, perspectivas y encrucijadas del paisaje urbano", hours: 16, credits: 1 },
                { title: "Diseño y planificación de espacios verdes urbanos sostenibles", hours: 16, credits: 1 },
                { title: "Estructura Verde Urbana", hours: 16, credits: 1 },
                { title: "Arbolado urbano y otras acciones de fomento de la vegetación en la ciudad", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 5: Urbanismo y Paisaje",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Plazas", hours: 16, credits: 1 },
                { title: "Parques y Jardines", hours: 16, credits: 1 },
                { title: "Articulaciones", hours: 16, credits: 1 },
                { title: "Otros Paisajes", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 6: Patrimonio Cultural y Paisaje",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Conceptos, tipología de patrimonio cultural y natural y patrimonios emergentes", hours: 16, credits: 1 },
                { title: "Claves interpretativas del patrimonio cultural", hours: 16, credits: 1 },
                { title: "Claves interpretativas del patrimonio natural", hours: 16, credits: 1 },
                { title: "Espacios con memoria. Enfoques y métodos en historia y arqueología del paisaje", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 7: Los Paisajes como fundamento de la Planificación aplicada al turismo",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Turismo y Territorio", hours: 16, credits: 1 },
                { title: "El Paisaje y destinos turísticos", hours: 16, credits: 1 },
                { title: "Los Paisajes y el Turismo", hours: 16, credits: 1 },
                { title: "Planificación y Gestión Territorial del turismo", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 8: Sistemas de Información Geográfica y Nuevas Tecnologías aplicadas al paisaje",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Los SIG y su aplicación al estudio de los paisajes: Conceptos, análisis y ejemplos", hours: 16, credits: 1 },
                { title: "Los insumos cartográficos de los mapas de paisajes y su representación en los SIG", hours: 16, credits: 1 },
                { title: "El inventario y cartografía de los paisajes mediante la utilización de los SIG: Ejemplos de aplicación", hours: 16, credits: 1 },
                { title: "El análisis de los cambios en el paisaje su diagnóstico a través de los SIG", hours: 16, credits: 1 }
            ]
        },
        {
            title: "CURSO 9: Los Paisajes como fundamento de la Planificación y Gestión de las Áreas Protegidas Terrestres",
            totalHours: 64,
            totalCredits: 4,
            modules: [
                { title: "Los paisajes y las áreas protegidas", hours: 16, credits: 1 },
                { title: "Métodos de evaluación de los paisajes para los estudios en áreas protegidas", hours: 16, credits: 1 },
                { title: "El Modelo de Ordenamiento y la Zonificación de las Áreas Protegidas", hours: 16, credits: 1 },
                { title: "Gestión del Paisaje y Áreas Protegidas", hours: 16, credits: 1 }
            ]
        }
    ]
};
