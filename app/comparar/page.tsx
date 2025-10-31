'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Leaf, Users, Shield, DollarSign, MapPin, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockProjects } from '@/lib/mockData';
import { formatCurrency, getFinancingTypeLabel, getESGColor } from '@/lib/utils';

export default function CompararProyectos() {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const toggleProject = (id: string) => {
    if (selectedProjects.includes(id)) {
      setSelectedProjects(selectedProjects.filter(p => p !== id));
    } else {
      if (selectedProjects.length < 4) {
        setSelectedProjects([...selectedProjects, id]);
      }
    }
  };

  const projectsToCompare = mockProjects.filter(p => selectedProjects.includes(p.id));

  return (
    <main>
      <Header />

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/explorar" className="inline-flex items-center text-blue-100 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Explorar
          </Link>
          <h1 className="text-4xl font-bold mb-2">Comparar Proyectos</h1>
          <p className="text-xl text-blue-100">
            Compara hasta 4 proyectos lado a lado
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Selecciona Proyectos para Comparar ({selectedProjects.length}/4)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => toggleProject(project.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedProjects.includes(project.id)
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400 bg-white'
                }`}
              >
                <div className="font-semibold text-gray-900">{project.farmerProfile.farmName}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {project.farmerProfile.location.municipality}, {project.farmerProfile.location.department}
                </div>
                <div className="text-sm text-primary-600 font-medium mt-2">
                  ESG: {project.esgScore.overall}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {projectsToCompare.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-48">
                      Característica
                    </th>
                    {projectsToCompare.map((project) => (
                      <th key={project.id} className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        <div className="font-bold text-base">{project.farmerProfile.farmName}</div>
                        <div className="text-xs text-gray-600 font-normal mt-1">
                          {project.farmerProfile.cropType}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Location */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        Ubicación
                      </div>
                    </td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700">
                        {project.farmerProfile.location.municipality}, {project.farmerProfile.location.department}
                      </td>
                    ))}
                  </tr>

                  {/* Farm Size */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Tamaño (ha)</td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700 font-semibold">
                        {project.farmerProfile.farmSize} ha
                      </td>
                    ))}
                  </tr>

                  {/* Financing */}
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
                        Financiamiento
                      </div>
                    </td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm">
                        <div className="font-bold text-primary-600">{formatCurrency(project.financingNeeds.amount)}</div>
                        <div className="text-xs text-gray-600 mt-1">{getFinancingTypeLabel(project.financingNeeds.financingType)}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Expected Return */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Retorno Esperado</td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm font-semibold text-green-600">
                        {project.financingNeeds.expectedReturn || 'N/A'}%
                      </td>
                    ))}
                  </tr>

                  {/* ESG Scores Header */}
                  <tr className="bg-gray-100">
                    <td colSpan={projectsToCompare.length + 1} className="px-6 py-3 text-sm font-bold text-gray-900">
                      Puntuaciones ESG
                    </td>
                  </tr>

                  {/* Environmental Score */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <Leaf className="h-4 w-4 mr-2 text-green-600" />
                        Ambiental
                      </div>
                    </td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4">
                        <div className={`text-2xl font-bold ${getESGColor(project.esgScore.environmental)}`}>
                          {project.esgScore.environmental}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Social Score */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-blue-600" />
                        Social
                      </div>
                    </td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4">
                        <div className={`text-2xl font-bold ${getESGColor(project.esgScore.social)}`}>
                          {project.esgScore.social}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Governance Score */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-purple-600" />
                        Gobernanza
                      </div>
                    </td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4">
                        <div className={`text-2xl font-bold ${getESGColor(project.esgScore.governance)}`}>
                          {project.esgScore.governance}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Overall Score */}
                  <tr className="hover:bg-gray-50 bg-green-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary-600" />
                        Puntuación General
                      </div>
                    </td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4">
                        <div className={`text-3xl font-bold ${getESGColor(project.esgScore.overall)}`}>
                          {project.esgScore.overall}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Production Details */}
                  <tr className="bg-gray-100">
                    <td colSpan={projectsToCompare.length + 1} className="px-6 py-3 text-sm font-bold text-gray-900">
                      Detalles de Producción
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Producción Anual</td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700 font-semibold">
                        {project.economicData.annualProduction} ton
                      </td>
                    ))}
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Rendimiento</td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700 font-semibold">
                        {project.economicData.averageYield} ton/ha
                      </td>
                    ))}
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Empleados</td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700 font-semibold">
                        {project.socialData.numberOfEmployees} personas
                      </td>
                    ))}
                  </tr>

                  {/* Actions */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Acción</td>
                    {projectsToCompare.map((project) => (
                      <td key={project.id} className="px-6 py-4">
                        <Link
                          href={`/proyecto/${project.id}`}
                          className="inline-block px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
                        >
                          Ver Detalles
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {projectsToCompare.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Selecciona proyectos para comparar
            </h3>
            <p className="text-gray-600">
              Haz clic en los proyectos de arriba para agregarlos a la comparación
            </p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
