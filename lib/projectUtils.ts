import { ESGScore, ProjectType } from '@/types';

/**
 * Determina el tipo principal de un proyecto basándose en su perfil ESG
 * - Ambiental: Score ambiental es el más alto
 * - Social: Score social es el más alto
 * - Económico: Score de gobernanza (governance/económico) es el más alto
 */
export const getProjectType = (esgScore: ESGScore): ProjectType => {
  const { environmental, social, governance } = esgScore;

  // Encontrar el score más alto
  if (environmental >= social && environmental >= governance) {
    return 'environmental';
  } else if (social >= environmental && social >= governance) {
    return 'social';
  } else {
    return 'economic'; // governance representa aspectos económicos
  }
};

/**
 * Obtiene el color asociado a cada tipo de proyecto
 */
export const getProjectTypeColor = (type: ProjectType): string => {
  switch (type) {
    case 'environmental':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'social':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'economic':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
  }
};

/**
 * Obtiene el label en español para cada tipo de proyecto
 */
export const getProjectTypeLabel = (type: ProjectType): string => {
  switch (type) {
    case 'environmental':
      return 'Ambiental';
    case 'social':
      return 'Social';
    case 'economic':
      return 'Económico';
  }
};

/**
 * Obtiene el ícono emoji para cada tipo de proyecto
 */
export const getProjectTypeIcon = (type: ProjectType): string => {
  switch (type) {
    case 'environmental':
      return '🌱';
    case 'social':
      return '👥';
    case 'economic':
      return '💰';
  }
};
