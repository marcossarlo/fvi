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

export const eficienciaEnergeticaCambioClimaticoSostenibilidadCurriculum: ProgramCurriculum = {
    id: 'eficiencia-energetica-cambio-climatico-sostenibilidad',
    courses: [
        {
            title: 'CURSO 1: Dirección y Gestión de la Sostenibilidad',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Teoría de la sustentabilidad ambiental y ODS',
                'Nuevos modelos de emprendimientos socioambientales',
                'Finanzas Ambientales e inclusivas para alcanzar los ODS',
                'Herramientas para la gestión de la Responsabilidad Social. ODS y Empresas B/td>',
            ]),
        },
        {
            title: 'CURSO 2: Sistemas de Gestión Medioambiental',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Introducción al SGA y Perfil del Auditor',
                'Planificación del SGA y su Auditoría',
                'Apoyo y Operación del SGA y Realización de la Auditoría',
                'Revisión y Mejora del SGA y Preparación del Informe de Auditoría',
            ]),
        },
        {
            title: 'CURSO 3: Ecoeficiencia, Eficiencia Energética y Cadena de Suministro Sostenible',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Ecoeficiencia: marco de análisis, políticas medioambientales e indicadores',
                'Eficiencia Energética EE: Auditorías Energéticas en sectores industriales específicos y manufactura verde',
                'Las cadenas de suministro sostenible (Green Supply Chain)',
                'Auditoría Ambiental e implementación práctica de proyecto de ecoeficiencia en lugar de trabajo',
            ]),
        },
        {
            title: 'CURSO 4: Ecodiseño, Análisis de Ciclo de Vida y Economía Circular',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Análisis de Ciclo de Vida ISO 14040: Cuantificación del impacto ambiental de un producto',
                'Ecodiseño: estrategia clave para la ecoinnovación y mejora ambiental del diseño de producto',
                'Industrialización del proceso de ecodiseño',
                'Economía circular en producto y nuevos modelos de negocio',
            ]),
        },
        {
            title: 'CURSO 5: Construcción sostenible y gestión eficiente de edificios',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Rascacielos ecológicos',
                'Cubiertas ajardinadas y paisajismo ecológico',
                'Métodos de certificación medioambiental',
                'Proyectos de Vivienda Social Sostenible',
            ]),
        },
        {
            title: 'CURSO 6: Cambio Climático y la huella de carbono',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Mitigación, tecnologías y financiación del carbono',
                'Sumideros de carbono en la biósfera',
                'La economía del cambio climático: una economía más baja en carbono',
                'Fondo para sustentar los procesos de adaptación y transferencias de tecnologías para el cambio climático',
            ]),
        },
        {
            title: 'CURSO 7: Sostenibilidad en biocombustibles y biomasa',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Energía de la Biomasa. Clasificación de la Biomasa',
                'Obtención energía con Biomasa. Combustión. Pirólisis. Gasificación',
                'Biocombustibles líquidos: Biodiésel y Bioetanol. Biogás',
                'Producción de Biodiésel',
            ]),
        },
        {
            title: 'CURSO 8: Responsabilidad Social Corporativa',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Responsabilidad social: dimensión interna y externa',
                'Gobierno y Reputación corporativa',
                'Gestión del diálogo con los grupos de interés',
                'Inversión Socialmente Responsable y Finanzas Éticas',
            ]),
        },
        {
            title: 'CURSO 9: Gerencia de Proyectos Sostenibles',
            totalHours: 128,
            totalCredits: 8,
            modules: modules([
                'Líder Proyectista y Empresa Proyectual',
                'Pedagogía del Proyecto',
                'Modalidad Pedagógica y Didáctica de Enseñanza',
                'Ejemplos de Buenas Prácticas y Ejercicios Proyectuales',
            ]),
        },
    ],
};
