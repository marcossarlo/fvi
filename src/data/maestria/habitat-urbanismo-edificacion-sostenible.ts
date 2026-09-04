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

export const habitatUrbanismoCurriculum: ProgramCurriculum = {
    id: 'habitat-urbanismo-edificacion-sostenible',
    courses: [
        {
            title: 'CURSO 1: Energía, calidad del ambiente interno y la sostenibilidad',
            totalHours: 128,
            totalCredits: 8,
            modules: [
                { title: 'Uso de la energía a través de la historia', hours: 32, credits: 2 },
                { title: 'Contaminación ambiental', hours: 32, credits: 2 },
                { title: 'Calidad del ambiente interno', hours: 32, credits: 2 },
                { title: 'Eco-materiales', hours: 32, credits: 2 }
            ]
        },
        {
            title: 'CURSO 2: Asentamientos humanos sostenibles',
            totalHours: 128,
            totalCredits: 8,
            modules: [
                { title: 'Asentamientos humanos ambientalmente sostenibles', hours: 32, credits: 2 },
                { title: 'Sostenibilidad Urbana', hours: 32, credits: 2 },
                { title: 'Manejo de Residuos Sólidos', hours: 32, credits: 2 },
                { title: 'Movilidad Urbana', hours: 32, credits: 2 }
            ]
        },
        {
            title: 'CURSO 3: Medio Ambiente y Clima',
            totalHours: 128,
            totalCredits: 8,
            modules: [
                { title: 'Atmósfera y clima', hours: 32, credits: 2 },
                { title: 'Arquitectura vernácula', hours: 32, credits: 2 },
                { title: 'Confort y bienestar térmico', hours: 32, credits: 2 },
                { title: 'Estrategias pasivas para el control ambiental', hours: 32, credits: 2 }
            ]
        },
        {
            title: 'CURSO 4: Paisaje Urbano',
            totalHours: 128,
            totalCredits: 8,
            modules: [
                { title: 'Conceptos, perspectivas y encrucijadas del paisaje urbano', hours: 32, credits: 2 },
                { title: 'Diseño y planificación de espacios verdes urbanos sostenibles', hours: 32, credits: 2 },
                { title: 'Estructura Verde Urbana', hours: 32, credits: 2 },
                { title: 'Arbolado urbano y otras acciones de fomento de la vegetación en la ciudad', hours: 32, credits: 2 }
            ]
        },
        {
            title: 'CURSO 5: Urbanismo y Paisaje',
            totalHours: 128,
            totalCredits: 8,
            modules: [
                { title: 'Plazas', hours: 32, credits: 2 },
                { title: 'Parques y Jardines', hours: 32, credits: 2 },
                { title: 'Articulaciones', hours: 32, credits: 2 },
                { title: 'Otros Paisajes', hours: 32, credits: 2 }
            ]
        },
        {
            title: 'CURSO 6: Bienestar térmico en la edificación',
            totalHours: 128,
            totalCredits: 8,
            modules: [
                { title: 'Transmisión del calor en los edificios', hours: 32, credits: 2 },
                { title: 'Ventilación natural', hours: 32, credits: 2 },
                { title: 'Iluminación natural', hours: 32, credits: 2 },
                { title: 'Elementos de protección y captación solar', hours: 32, credits: 2 }
            ]
        },
        {
            title: 'CURSO 7: Construcción mediante tecnologías a bajo coste para la mejora del hábitat',
            totalHours: 128,
            totalCredits: 8,
            modules: [
                { title: 'La importancia de la habitabilidad básica para el ser humano. La participación en el diseño urbano y arquitectónico', hours: 32, credits: 2 },
                { title: 'Tecnologías de construcción a bajo coste y adaptadas al entorno: ferrocemento, mortero y hormigón', hours: 32, credits: 2 },
                { title: 'Tecnologías de construcción a bajo coste y adaptadas al entorno: cerámica armada y madera', hours: 32, credits: 2 },
                { title: 'Soluciones y casos prácticos de infraestructura física a bajo coste y adaptadas al entorno', hours: 32, credits: 2 }
            ]
        },
        {
            title: 'CURSO 8: Arquitectura Emergente: Cargotectura y su aporte a la Sostenibilidad 3R',
            totalHours: 128,
            totalCredits: 8,
            modules: [
                { title: 'Arquitectura modular industrializada', hours: 32, credits: 2 },
                { title: 'Origen y evolución de la Cargotectura', hours: 32, credits: 2 },
                { title: 'La vivienda mínima asequible', hours: 32, credits: 2 },
                { title: 'Aportación a la Sostenibilidad 3R', hours: 32, credits: 2 }
            ]
        },
        {
            title: 'CURSO 9: Proyectos ecológicos a mayor escala',
            totalHours: 128,
            totalCredits: 8,
            modules: [
                { title: 'Rascacielos ecológicos', hours: 32, credits: 2 },
                { title: 'Cubiertas ajardinadas y paisajismo ecológico', hours: 32, credits: 2 },
                { title: 'Métodos de certificación medioambiental', hours: 32, credits: 2 },
                { title: 'Proyectos de Vivienda Social Sostenible', hours: 32, credits: 2 }
            ]
        }
    ]
};
