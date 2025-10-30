import Link from 'next/link';
import { ArrowRight, Shield, BarChart3, Leaf, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Inversionista() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Invierte en el Futuro de la Agricultura Sostenible
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Proyectos verificados con impacto ESG medible y retornos financieros atractivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/explorar"
                className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg shadow-lg"
              >
                Explorar Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/premium"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-colors font-semibold text-lg"
              >
                Ver Planes Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué invertir en AGROFIT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conectamos tu capital con proyectos agrícolas sostenibles que generan impacto real
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proyectos Verificados</h3>
              <p className="text-gray-600">
                Todos los proyectos pasan por un riguroso proceso de validación y verificación de información
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Métricas Claras</h3>
              <p className="text-gray-600">
                Indicadores ESG y financieros estandarizados para facilitar la toma de decisiones
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impacto Medible</h3>
              <p className="text-gray-600">
                Seguimiento constante del impacto ambiental y social de tus inversiones
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retornos Atractivos</h3>
              <p className="text-gray-600">
                Proyectos con retornos esperados entre 12-20% anual, respaldados por cultivos rentables
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conexión Directa</h3>
              <p className="text-gray-600">
                Comunícate directamente con los agricultores y conoce de primera mano sus proyectos
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diversificación</h3>
              <p className="text-gray-600">
                Acceso a múltiples proyectos en diferentes regiones y tipos de cultivos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y transparente para invertir en agricultura sostenible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Explora</h3>
              <p className="text-gray-600">
                Navega por proyectos agrícolas sostenibles con métricas ESG verificadas
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analiza</h3>
              <p className="text-gray-600">
                Revisa reportes financieros y de impacto ESG detallados
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conecta</h3>
              <p className="text-gray-600">
                Contacta directamente con los agricultores y negocia términos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Invierte</h3>
              <p className="text-gray-600">
                Realiza tu inversión y sigue el progreso en tiempo real
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza a Invertir Hoy
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Únete a la comunidad de inversionistas que están generando impacto positivo
            en la agricultura sostenible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explorar"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg shadow-lg"
            >
              Ver Proyectos Disponibles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/premium"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-colors font-semibold text-lg"
            >
              Suscríbete a Premium
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
