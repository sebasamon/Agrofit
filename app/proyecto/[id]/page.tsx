import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Calendar, Users, Leaf, TrendingUp, DollarSign, Award, Droplet, Recycle, Sun, Heart, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ESGBadge from '@/components/ESGBadge';
import { getProjectById } from '@/lib/mockData';
import { formatCurrency, formatNumber, getFinancingTypeLabel } from '@/lib/utils';

export default async function ProyectoDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const { farmerProfile, economicData, environmentalData, socialData, financingNeeds, esgScore } = project;

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-primary-100 mb-4">
            <Link href="/explorar" className="hover:text-white transition-colors">
              Explorar Proyectos
            </Link>
            <span className="mx-2">/</span>
            <span>{farmerProfile.farmName}</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{farmerProfile.farmName}</h1>
          <div className="flex items-center text-primary-100">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{farmerProfile.location.municipality}, {farmerProfile.location.department}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información Clave</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <div className="text-sm text-gray-600">Tipo de Cultivo</div>
                    <div className="text-lg font-semibold text-gray-900">{farmerProfile.cropType}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <div className="text-sm text-gray-600">Tamaño de la Finca</div>
                    <div className="text-lg font-semibold text-gray-900">{farmerProfile.farmSize} hectáreas</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <div className="text-sm text-gray-600">Años de Experiencia</div>
                    <div className="text-lg font-semibold text-gray-900">{farmerProfile.yearsOfExperience} años</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <div className="text-sm text-gray-600">Empleados</div>
                    <div className="text-lg font-semibold text-gray-900">{socialData.numberOfEmployees} personas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Economic Data */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información Económica</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Producción Anual</div>
                  <div className="text-xl font-bold text-gray-900">{formatNumber(economicData.annualProduction)} ton</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Rendimiento Promedio</div>
                  <div className="text-xl font-bold text-gray-900">{economicData.averageYield} ton/ha</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Ingresos Anuales</div>
                  <div className="text-xl font-bold text-primary-600">{formatCurrency(economicData.annualRevenue)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Ingreso Neto</div>
                  <div className="text-xl font-bold text-green-600">{formatCurrency(economicData.netIncome)}</div>
                </div>
              </div>

              {economicData.hasCommercialAgreements && (
                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-600 mb-2">Acuerdos Comerciales</div>
                  <div className="flex flex-wrap gap-2">
                    {economicData.buyers?.map((buyer, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {buyer}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Environmental Practices */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Prácticas Ambientales</h2>

              {/* Certifications */}
              {environmentalData.hasCertifications && (
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-3">Certificaciones</div>
                  <div className="flex flex-wrap gap-2">
                    {environmentalData.certifications?.map((cert, index) => (
                      <span
                        key={index}
                        className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium"
                      >
                        <Award className="h-4 w-4 mr-2" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Practices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Droplet className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Gestión del Agua</div>
                    <div className="text-sm text-gray-600 capitalize">{environmentalData.waterManagement}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Recycle className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Conservación del Suelo</div>
                    <div className="text-sm text-gray-600 capitalize">{environmentalData.soilConservation}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Protección de Biodiversidad</div>
                    <div className="text-sm text-gray-600 capitalize">{environmentalData.biodiversityProtection}</div>
                  </div>
                </div>

                {environmentalData.renewableEnergyUsage && (
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Sun className="h-5 w-5 text-yellow-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Energía Renovable</div>
                      <div className="text-sm text-green-600">Activo</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Social Impact */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Impacto Social</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {socialData.providesStableEmployment && (
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Heart className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600">Empleo Estable</div>
                  </div>
                )}
                {socialData.offersHealthBenefits && (
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600">Salud</div>
                  </div>
                )}
                {socialData.offersSocialSecurity && (
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <Heart className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600">Seguridad Social</div>
                  </div>
                )}
                {socialData.providesTraining && (
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600">Capacitación</div>
                  </div>
                )}
              </div>

              {socialData.percentageFemaleEmployees && (
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Equidad de Género</div>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-pink-500 h-2 rounded-full"
                        style={{ width: `${socialData.percentageFemaleEmployees}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {socialData.percentageFemaleEmployees}% mujeres
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <div className="text-sm text-gray-600 mb-2">Impacto en la Comunidad</div>
                <p className="text-gray-700">{socialData.communityImpact}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* ESG Score */}
            <ESGBadge
              environmental={esgScore.environmental}
              social={esgScore.social}
              governance={esgScore.governance}
              overall={esgScore.overall}
            />

            {/* Financing Needs */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financiamiento Solicitado</h3>

              <div className="mb-4">
                <div className="flex items-center text-primary-600 mb-2">
                  <DollarSign className="h-8 w-8" />
                  <div className="text-3xl font-bold">{formatCurrency(financingNeeds.amount)}</div>
                </div>
                <div className="text-sm text-gray-600">Monto Total</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tipo:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {getFinancingTypeLabel(financingNeeds.financingType)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Plazo:</span>
                  <span className="text-sm font-semibold text-gray-900">{financingNeeds.term} meses</span>
                </div>
                {financingNeeds.expectedReturn && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Retorno Esperado:</span>
                    <span className="text-sm font-semibold text-green-600">{financingNeeds.expectedReturn}%</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Destino</div>
                <p className="text-sm text-gray-700">{financingNeeds.purpose}</p>
              </div>

              {financingNeeds.collateral && (
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Garantías</div>
                  <p className="text-sm text-gray-700">{financingNeeds.collateral}</p>
                </div>
              )}

              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                Solicitar Información Completa
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                Accede a reportes financieros y ESG detallados
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">¿Interesado en este proyecto?</h3>
              <p className="text-sm text-gray-700 mb-4">
                Contacta directamente con el agricultor para conocer más detalles
              </p>
              <Link
                href="/inversionista"
                className="block w-full bg-white text-primary-600 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-center border-2 border-primary-600"
              >
                Iniciar Conversación
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
