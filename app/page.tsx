import Link from 'next/link';
import { ArrowRight, Leaf, Users, TrendingUp, Shield, CheckCircle, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Conectamos Agricultores Sostenibles con Inversión de Impacto
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Financiamiento para proyectos agrícolas que generan impacto social, ambiental y financiero
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/registro-agricultor"
                className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-lg shadow-lg"
              >
                Registra tu Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/explorar"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-700 transition-colors font-semibold text-lg"
              >
                Explorar Proyectos
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Proyectos Registrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">$45M</div>
              <div className="text-gray-600">Capital Movilizado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2,500+</div>
              <div className="text-gray-600">Empleos Generados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">88</div>
              <div className="text-gray-600">Puntaje ESG Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir AGROFIT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Facilitamos la conexión entre agricultura sostenible e inversión de impacto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* For Farmers */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Para Agricultores</h3>
              <p className="text-gray-600">
                Accede a financiamiento adaptado a tus necesidades y haz crecer tu proyecto sostenible
              </p>
            </div>

            {/* For Investors */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Para Inversionistas</h3>
              <p className="text-gray-600">
                Invierte en proyectos con impacto real y retornos financieros sostenibles
              </p>
            </div>

            {/* ESG Impact */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impacto ESG</h3>
              <p className="text-gray-600">
                Medimos y reportamos el impacto ambiental, social y de gobernanza de cada proyecto
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparencia Total</h3>
              <p className="text-gray-600">
                Información verificada y reportes detallados sobre el desempeño de cada proyecto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y transparente para conectar agricultores e inversionistas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Registro</h3>
              <p className="text-gray-600">
                Los agricultores registran sus proyectos con información detallada sobre sus prácticas sostenibles
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Validación</h3>
              <p className="text-gray-600">
                Evaluamos y calculamos los indicadores ESG y financieros de cada proyecto
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conexión</h3>
              <p className="text-gray-600">
                Los inversionistas exploran proyectos y se conectan con agricultores para financiar iniciativas de impacto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Historias reales de agricultores e inversionistas que están transformando la agricultura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  JR
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">José Rodríguez</div>
                  <div className="text-sm text-gray-600">Finca La Esperanza, Meta</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Gracias a AGROFIT conseguí el financiamiento que necesitaba para expandir mi cultivo de palma.
                El proceso fue transparente y ahora tengo 10 empleados más en mi finca."
              </p>
              <div className="flex items-center mt-4">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Financiamiento: $250M COP</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  MG
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">María Gómez</div>
                  <div className="text-sm text-gray-600">Fondo Verde Capital</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Como inversionista de impacto, AGROFIT me permite encontrar proyectos sostenibles verificados
                con métricas ESG claras y potencial de retorno atractivo."
              </p>
              <div className="flex items-center mt-4">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Portfolio: 8 proyectos activos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Únete a la comunidad de agricultores e inversionistas que están construyendo un futuro más sostenible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registro-agricultor"
              className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-lg shadow-lg"
            >
              Soy Agricultor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/inversionista"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-700 transition-colors font-semibold text-lg"
            >
              Soy Inversionista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
