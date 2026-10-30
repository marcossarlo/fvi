import type { ImageMetadata } from 'astro';

import maestriaImage from '~/assets/images/fvi_maestrias_home.webp';
import phdImage from '~/assets/images/fvi_doctorados_home.webp';
import postdocImage from '~/assets/images/fvi_postdocs_home.webp';
import instituteImage from '~/assets/images/fvi-conocenos.webp';

export interface MegaContent {
  label: string;
  description: string;
  featureLabel: string;
  featureTitle: string;
  image: ImageMetadata;
}

export const megaContent: Record<string, MegaContent> = {
  'El Instituto': {
    label: 'El Instituto',
    description: 'Una comunidad académica que investiga, enseña y actúa frente a los desafíos ambientales.',
    featureLabel: 'Instituto',
    featureTitle: 'Conoce nuestra mirada sobre la sostenibilidad',
    image: instituteImage,
  },
  PostDoc: {
    label: 'PostDoc',
    description: 'Investigación avanzada para profesionales que convierten conocimiento en transformación.',
    featureLabel: 'Investigación',
    featureTitle: 'Una siguiente etapa para tu trayectoria',
    image: postdocImage,
  },
  PhD: {
    label: 'PhD',
    description: 'Programas doctorales para quienes investigan el cambio y sus posibilidades.',
    featureLabel: 'Doctorados',
    featureTitle: 'Investigar con perspectiva de futuro',
    image: phdImage,
  },
  Maestrías: {
    label: 'Maestrías',
    description: 'Formación de posgrado para transformar organizaciones y territorios.',
    featureLabel: 'Convocatoria 2026',
    featureTitle: 'Maestría en Ciencias de la Sostenibilidad',
    image: maestriaImage,
  },
  Diplomados: {
    label: 'Diplomados',
    description: 'Formación especializada para ampliar tus conocimientos y fortalecer tu perfil profesional.',
    featureLabel: 'Formación especializada',
    featureTitle: 'Explora nuestros diplomados',
    image: maestriaImage,
  },
  Proyectos: {
    label: 'Proyectos',
    description: 'Iniciativas que convierten el conocimiento en soluciones sostenibles.',
    featureLabel: 'Impacto',
    featureTitle: 'Conoce nuestros proyectos en América',
    image: instituteImage,
  },
};

const descriptions: Record<string, string> = {
  Conócenos: 'Nuestra historia, propósito y comunidad.',
  'Nuestro Director': 'Liderazgo y visión institucional.',
  'Consejo Académico Internacional': 'Una red global de conocimiento.',
  'Comité de Dirección': 'Gobernanza para una acción rigurosa.',
  'Profesorado e Investigación': 'Personas e ideas que mueven el cambio.',
  'Acreditación y Reconocimiento': 'La confianza que respalda nuestro trabajo.',
  'Fondo Verde y su acción social': 'Conocimiento al servicio de la sociedad.',
  'Actualidad del Instituto': 'Noticias, eventos y vida académica.',
  Investigación: 'Hallazgos y proyectos sobre sostenibilidad.',
  'Opinión y análisis': 'Perspectivas para entender el cambio.',
  'Recursos para aprender': 'Materiales para seguir explorando.',
  Contacto: 'Conversemos sobre tus ideas y proyectos.',
};

export const getMegaDescription = (text = '') =>
  descriptions[text] || 'Explora esta línea de formación e investigación.';
