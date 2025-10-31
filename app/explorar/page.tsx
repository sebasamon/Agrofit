'use client';

import { useState } from 'react';
import { Filter, Search, GitCompare } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { getActiveProjects } from '@/lib/projectStorage';
import { FinancingType, ProjectPreview } from '@/types';

export default function ExplorarProyectos() {
  const activeProjects = getActiveProjects();
  const allProjects: ProjectPreview[] = activeProjects.map((project) => ({
    id: project.id,
    farmName: project.farmerProfile.farmName,
    location: `${project.farmerProfile.location.municipality}, ${project.farmerProfile.location.department}`,
    cropType: project.farmerProfile.cropType,
    farmSize: project.farmerProfile.farmSize,
    financingType: project.financingNeeds.financingType,
    amount: project.financingNeeds.amount,
    esgScore: project.esgScore,
    profileImage: project.farmerProfile.profileImage,
    featured: project.esgScore.overall >= 85
  }));
  const [filteredProjects, setFilteredProjects] = useState<ProjectPreview[]>(allProjects);
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCropType, setSelectedCropType] = useState('');
  const [selectedFinancingType, setSelectedFinancingType] = useState<FinancingType | ''>('');
  const [minESGScore, setMinESGScore] = useState(0);

  // Apply filters
  const applyFilters = () => {
    let filtered = allProjects;

    // Search term
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.farmName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.cropType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Department
    if (selectedDepartment) {
      filtered = filtered.filter((p) => p.location.includes(selectedDepartment));
    }

    // Crop type
    if (selectedCropType) {
      filtered = filtered.filter((p) => p.cropType === selectedCropType);
    }

    // Financing type
    if (selectedFinancingType) {
      filtered = filtered.filter((p) => p.financingType === selectedFinancingType);
    }

    // ESG Score
    if (minESGScore > 0) {
      filtered = filtered.filter((p) => p.esgScore.overall >= minESGScore);
    }

    setFilteredProjects(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDepartment('');
    setSelectedCropType('');
    setSelectedFinancingType('');
    setMinESGScore(0);
    setFilteredProjects(allProjects);
  };

  return (
    <main>
      <Header />

      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Explorar Proyectos</h1>
          <p className="text-xl text-primary-100">
            Descubre proyectos agrícolas sostenibles listos para recibir inversión
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, ubicación o cultivo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyUp={applyFilters}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filtros
              {(selectedDepartment || selectedCropType || selectedFinancingType || minESGScore > 0) && (
                <span className="ml-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  Activos
                </span>
              )}
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Department Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departamento
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => {
                      setSelectedDepartment(e.target.value);
                      setTimeout(applyFilters, 0);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Todos</option>
                    <option value="Meta">Meta</option>
                    <option value="Cesar">Cesar</option>
                    <option value="Santander">Santander</option>
                    <option value="Magdalena">Magdalena</option>
                  </select>
                </div>

                {/* Crop Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Cultivo
                  </label>
                  <select
                    value={selectedCropType}
                    onChange={(e) => {
                      setSelectedCropType(e.target.value);
                      setTimeout(applyFilters, 0);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Todos</option>
                    <option value="Palma Africana">Palma Africana</option>
                    <option value="Café">Café</option>
                    <option value="Cacao">Cacao</option>
                    <option value="Aguacate">Aguacate</option>
                  </select>
                </div>

                {/* Financing Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Financiamiento
                  </label>
                  <select
                    value={selectedFinancingType}
                    onChange={(e) => {
                      setSelectedFinancingType(e.target.value as FinancingType | '');
                      setTimeout(applyFilters, 0);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Todos</option>
                    <option value="credit">Crédito</option>
                    <option value="equity">Participación Accionaria</option>
                    <option value="guarantee">Garantía</option>
                    <option value="mixed">Mixto</option>
                  </select>
                </div>

                {/* ESG Score Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Puntaje ESG Mínimo: {minESGScore}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={minESGScore}
                    onChange={(e) => {
                      setMinESGScore(parseInt(e.target.value));
                      setTimeout(applyFilters, 0);
                    }}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
                >
                  Limpiar Filtros
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count and Compare Button */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Mostrando <strong>{filteredProjects.length}</strong> de <strong>{allProjects.length}</strong> proyectos
          </p>
          <Link
            href="/comparar"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <GitCompare className="h-5 w-5 mr-2" />
            Comparar Proyectos
          </Link>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron proyectos
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta ajustar tus filtros para ver más resultados
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Limpiar Filtros
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
