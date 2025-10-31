'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, CheckCircle, XCircle, Clock, BarChart3, Leaf, Users, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { isAdmin } from '@/lib/auth/auth';
import { mockProjects } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';

export default function AdminPanel() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending_validation' | 'active' | 'rejected'>('all');

  useEffect(() => {
    setMounted(true);
    if (!isAdmin()) {
      router.push('/login');
    }
  }, [router]);

  if (!mounted) {
    return null;
  }

  if (!isAdmin()) {
    return null;
  }

  const filteredProjects = mockProjects.filter(p =>
    filter === 'all' || p.status === filter
  );

  const stats = {
    total: mockProjects.length,
    pending: mockProjects.filter(p => p.status === 'pending_validation').length,
    active: mockProjects.filter(p => p.status === 'active').length,
    rejected: mockProjects.filter(p => p.status === 'rejected').length,
  };

  return (
    <main>
      <Header />

      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Shield className="h-10 w-10 mr-3" />
            <h1 className="text-4xl font-bold">Panel de Administración</h1>
          </div>
          <p className="text-xl text-purple-100">
            Gestiona y aprueba proyectos de la plataforma
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600 text-sm mb-1">Total Proyectos</div>
                <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
              </div>
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600 text-sm mb-1">Pendientes</div>
                <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
              </div>
              <Clock className="h-10 w-10 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600 text-sm mb-1">Aprobados</div>
                <div className="text-3xl font-bold text-green-600">{stats.active}</div>
              </div>
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600 text-sm mb-1">Rechazados</div>
                <div className="text-3xl font-bold text-red-600">{stats.rejected}</div>
              </div>
              <XCircle className="h-10 w-10 text-red-600" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos ({stats.total})
            </button>
            <button
              onClick={() => setFilter('pending_validation')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'pending_validation' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pendientes ({stats.pending})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'active' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Aprobados ({stats.active})
            </button>
            <button
              onClick={() => setFilter('rejected')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'rejected' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Rechazados ({stats.rejected})
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.farmerProfile.farmName}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'active' ? 'bg-green-100 text-green-700' :
                      project.status === 'pending_validation' ? 'bg-yellow-100 text-yellow-700' :
                      project.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status === 'active' ? 'Aprobado' :
                       project.status === 'pending_validation' ? 'Pendiente' :
                       project.status === 'rejected' ? 'Rechazado' : project.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Ubicación</div>
                      <div className="font-medium text-gray-900">
                        {project.farmerProfile.location.municipality}, {project.farmerProfile.location.department}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Cultivo</div>
                      <div className="font-medium text-gray-900">{project.farmerProfile.cropType}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Financiamiento Solicitado</div>
                      <div className="font-bold text-primary-600">{formatCurrency(project.financingNeeds.amount)}</div>
                    </div>
                  </div>

                  {/* ESG Scores */}
                  <div className="flex space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-700">Ambiental: <strong>{project.esgScore.environmental}</strong></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-700">Social: <strong>{project.esgScore.social}</strong></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-purple-600" />
                      <span className="text-sm text-gray-700">General: <strong>{project.esgScore.overall}</strong></span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => alert('Funcionalidad de aprobación - En producción esto actualizaría la base de datos')}
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Aprobar
                    </button>
                    <button
                      onClick={() => alert('Funcionalidad de rechazo - En producción esto actualizaría la base de datos')}
                      className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Rechazar
                    </button>
                    <button
                      onClick={() => router.push(`/proyecto/${project.id}`)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-gray-600">
              Cambia el filtro para ver otros proyectos
            </p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
