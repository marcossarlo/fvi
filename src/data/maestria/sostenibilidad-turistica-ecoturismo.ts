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

export const sostenibilidadTuristicaEcoturismoCurriculum: ProgramCurriculum = {
    id: 'sostenibilidad-turistica-ecoturismo',
    courses: [
        {
            title: 'CURSO 1: Turismo Sostenible',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Turismo, conceptualización y enfoque de sistema',
                'Desarrollo Sostenible y Turismo',
                'Ecología, Biodiversidad e Impacto Ambiental de las actividades turísticas',
                'Tipología del turismo, modalidades de ocio relacionadas con la sostenibilidad',
            ]),
        },
        {
            title: 'CURSO 2: Productos turísticos sostenibles y alternativos',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Tendencias de mercado, Turismo Responsable, Consumo responsable y Responsabilidad Social',
                'Generación de cadenas de valor para el turismo sostenible y buenas prácticas',
                'Productos turísticos sostenibles y alternativos',
                'Proyectos de desarrollo turístico local',
            ]),
        },
        {
            title: 'CURSO 3: Negocios turísticos con énfasis en sostenibilidad',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Gestión ambiental de empresas turísticas',
                'Calidad en el servicio y Certificaciones en Turismo Sostenible',
                'Marketing para empresas y destinos turísticos sostenibles',
                'Planes de negocios turísticos con énfasis en sostenibilidad',
            ]),
        },
        {
            title: 'CURSO 4: Ecoturismo',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Introducción al Ecoturismo y su relación con el Turismo Especializado',
                'Gestión Sostenible de Recursos y Territorios',
                'Gestión Turística Sostenible del Patrimonio Cultural y Natural',
                'Rutas temáticas y productos de Turismo de Intereses Especiales',
            ]),
        },
        {
            title: 'CURSO 5: Desarrollo de productos de ecoturismo y marcas locales en turismo',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Planificación del Turismo de Intereses Especiales en el ámbito local',
                'Desarrollo de productos de ecoturismo y marcas locales en turismo',
                'Asociatividad Empresarial y Negocios inclusivos para el Turismo Especializado',
                'Turismo Justo, Solidario y Responsable',
            ]),
        },
        {
            title: 'CURSO 6: Administración Estratégica del Ecoturismo',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Marketing aplicado al Turismo de Intereses Especiales',
                'Administración Estratégica del Ecoturismo',
                'Calidad y Competitividad de los Productos de Turismo Especializado con énfasis en Ecoturismo',
                'Experiencias exitosas en Latinoamérica',
            ]),
        },
        {
            title: 'CURSO 7: Responsabilidad social empresarial en el sector turístico',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Introducción a la Responsabilidad Social Empresarial',
                'Marco teórico sobre Responsabilidad Social Empresarial en Turismo',
                'Retos y Responsabilidades Público – Privadas en Turismo',
                'Herramientas e Indicadores de RSE - Global Reporting Initiative (GRI)',
            ]),
        },
        {
            title: 'CURSO 8: Turismo Socialmente Responsable en destino',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Buenas prácticas para la gestión de impactos del turismo',
                'Gestión de relaciones comunitarias',
                'Gestión de proveedores y de los clientes',
                'Gestión de Recursos Humanos (Responsabilidad Social Interna)',
            ]),
        },
        {
            title: 'CURSO 9: Responsabilidad Social de las empresas turísticas',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Incorporación del enfoque de género en la planificación y gestión del turismo',
                'Marketing social y organizacional (Comunicaciones externas)',
                'Erradicación de la explotación sexual comercial de niños, niñas y adolescentes en Turismo',
                'Empresas que aplican la RSE en Turismo',
            ]),
        },
    ],
};
