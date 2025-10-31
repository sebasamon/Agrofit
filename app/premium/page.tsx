import Link from 'next/link';
import { BarChart3, FileText, TrendingUp, Download, Eye, CheckCircle, Crown, Leaf } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PanelPremium() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Crown className="h-8 w-8 mr-3" />
            <h1 className="text-4xl font-bold">Panel Premium</h1>
          </div>
          <p className="text-xl text-yellow-100">
            Accede a reportes ESG detallados, análisis financieros y seguimiento de inversiones
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Beneficios del Plan Premium
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reportes ESG Completos</h3>
              <p className="text-gray-600">
                Acceso a informes detallados de impacto ambiental, social y de gobernanza
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Análisis Financiero</h3>
              <p className="text-gray-600">
                Proyecciones financieras, ROI estimado y métricas de rentabilidad
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seguimiento en Tiempo Real</h3>
              <p className="text-gray-600">
                Monitorea el desempeño de tus inversiones con actualizaciones mensuales
              </p>
            </div>
          </div>
        </div>

        {/* Sample Reports */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reportes Disponibles</h2>

          <div className="space-y-6">
            {/* ESG Report */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Reporte de Impacto ESG - Finca La Esperanza
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Análisis completo del impacto ambiental, social y de gobernanza del proyecto.
                      Incluye métricas de reducción de carbono, conservación de agua, y beneficios sociales.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Ambiental: 92/100
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Social: 88/100
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Gobernanza: 85/100
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        Actualizado: Oct 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Financial Report */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Análisis Financiero - Finca La Esperanza
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Proyecciones de flujo de caja, análisis de ROI, y métricas de rentabilidad.
                      Incluye comparativas con benchmarks del sector.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        ROI Esperado: 18%
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Ingresos: $1,080M COP
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Margen Neto: 39.8%
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        Período: 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Excel
                  </button>
                </div>
              </div>
            </div>

            {/* Impact Report */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Reporte de Seguimiento Mensual - Octubre 2024
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Actualización mensual del progreso del proyecto, métricas de producción,
                      y cumplimiento de objetivos de sostenibilidad.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Producción: En meta
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Calidad: Excelente
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                        Nuevas certificaciones
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Crown className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Actualiza a Premium</h2>
              <p className="text-xl text-gray-700">
                Obtén acceso completo a todos los reportes y análisis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Para Agricultores</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  $150,000
                  <span className="text-lg text-gray-600 font-normal"> COP/mes</span>
                </div>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reportes ESG profesionales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Análisis financiero detallado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Visibilidad destacada</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                  Comenzar Ahora
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-yellow-400">
                <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  Más Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Para Inversionistas</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  $300,000
                  <span className="text-lg text-gray-600 font-normal"> COP/mes</span>
                </div>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Acceso a todos los reportes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Comparador de proyectos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Seguimiento de inversiones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Alertas personalizadas</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-yellow-500 text-yellow-900 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                  Comenzar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
