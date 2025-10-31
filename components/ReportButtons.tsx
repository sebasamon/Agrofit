'use client';

import { Leaf, Users, TrendingUp, Download, FileText } from 'lucide-react';

export default function ReportButtons() {
  const handleDownload = (reportType: string) => {
    alert(`Descargando ${reportType}... (En producción esto generaría un PDF)`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <FileText className="h-5 w-5 mr-2 text-primary-600" />
        Informes Disponibles
      </h3>
      <div className="space-y-3">
        <button
          onClick={() => handleDownload('Informe Ambiental')}
          className="w-full flex items-center justify-between px-4 py-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors group"
        >
          <div className="flex items-center">
            <Leaf className="h-5 w-5 text-green-600 mr-3" />
            <div className="text-left">
              <div className="text-sm font-semibold text-green-900">Informe Ambiental</div>
              <div className="text-xs text-green-700">Certificaciones, prácticas sostenibles</div>
            </div>
          </div>
          <Download className="h-4 w-4 text-green-600 group-hover:translate-y-0.5 transition-transform" />
        </button>

        <button
          onClick={() => handleDownload('Informe Social')}
          className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors group"
        >
          <div className="flex items-center">
            <Users className="h-5 w-5 text-blue-600 mr-3" />
            <div className="text-left">
              <div className="text-sm font-semibold text-blue-900">Informe Social</div>
              <div className="text-xs text-blue-700">Empleos, beneficios, impacto comunitario</div>
            </div>
          </div>
          <Download className="h-4 w-4 text-blue-600 group-hover:translate-y-0.5 transition-transform" />
        </button>

        <button
          onClick={() => handleDownload('Informe Económico')}
          className="w-full flex items-center justify-between px-4 py-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition-colors group"
        >
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-purple-600 mr-3" />
            <div className="text-left">
              <div className="text-sm font-semibold text-purple-900">Informe Económico</div>
              <div className="text-xs text-purple-700">Finanzas, proyecciones, ROI</div>
            </div>
          </div>
          <Download className="h-4 w-4 text-purple-600 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
      <p className="text-xs text-gray-500 text-center mt-4">
        Los informes detallados están disponibles para usuarios premium
      </p>
    </div>
  );
}
