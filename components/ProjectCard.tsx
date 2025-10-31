import Link from 'next/link';
import { MapPin, TrendingUp, Leaf, Users, DollarSign } from 'lucide-react';
import { ProjectPreview } from '@/types';
import { formatCurrency, getFinancingTypeLabel, getESGColor, getESGBgColor } from '@/lib/utils';

interface ProjectCardProps {
  project: ProjectPreview;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
        {project.featured && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold z-10">
            Destacado
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf className="h-24 w-24 text-primary-300 opacity-50 group-hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Farm Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.farmName}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{project.location}</span>
        </div>

        {/* Crop and Size */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="text-gray-700">
            <strong>{project.cropType}</strong>
          </span>
          <span className="text-gray-600">{project.farmSize} ha</span>
        </div>

        {/* ESG Scores */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className={`${getESGBgColor(project.esgScore.environmental)} rounded-lg p-2 text-center`}>
            <Leaf className={`h-4 w-4 ${getESGColor(project.esgScore.environmental)} mx-auto mb-1`} />
            <div className={`text-lg font-bold ${getESGColor(project.esgScore.environmental)}`}>
              {project.esgScore.environmental}
            </div>
            <div className="text-xs text-gray-600">Ambiental</div>
          </div>
          <div className={`${getESGBgColor(project.esgScore.social)} rounded-lg p-2 text-center`}>
            <Users className={`h-4 w-4 ${getESGColor(project.esgScore.social)} mx-auto mb-1`} />
            <div className={`text-lg font-bold ${getESGColor(project.esgScore.social)}`}>
              {project.esgScore.social}
            </div>
            <div className="text-xs text-gray-600">Social</div>
          </div>
          <div className={`${getESGBgColor(project.esgScore.overall)} rounded-lg p-2 text-center`}>
            <TrendingUp className={`h-4 w-4 ${getESGColor(project.esgScore.overall)} mx-auto mb-1`} />
            <div className={`text-lg font-bold ${getESGColor(project.esgScore.overall)}`}>
              {project.esgScore.overall}
            </div>
            <div className="text-xs text-gray-600">General</div>
          </div>
        </div>

        {/* Financing Info */}
        <div className="border-t pt-4 mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Tipo de financiamiento:</span>
            <span className="font-semibold text-gray-900">{getFinancingTypeLabel(project.financingType)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Monto solicitado:</span>
            <div className="flex items-center text-primary-600 font-bold">
              <DollarSign className="h-4 w-4" />
              <span>{formatCurrency(project.amount)}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/proyecto/${project.id}`}
          className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}
