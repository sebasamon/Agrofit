import Link from 'next/link';
import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold text-white">AGROFIT</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Conectamos agricultores sostenibles con inversión de impacto social,
              ambiental y financiero. Transformando la agricultura hacia un futuro más sostenible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/explorar" className="hover:text-primary-400 transition-colors">
                  Explorar Proyectos
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="hover:text-primary-400 transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="/impacto" className="hover:text-primary-400 transition-colors">
                  Impacto
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-primary-400 transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>contacto@agrofit.co</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>+57 (1) 234 5678</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AGROFIT. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terminos" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
