'use client';

import Link from 'next/link';
import { Sprout, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Sprout className="h-8 w-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
            <span className="text-2xl font-bold text-gray-900">AGROFIT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/explorar" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Explorar Proyectos
            </Link>
            <Link href="/como-funciona" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Cómo Funciona
            </Link>
            <Link href="/impacto" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Impacto
            </Link>
            <Link
              href="/registro-agricultor"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Soy Agricultor
            </Link>
            <Link
              href="/inversionista"
              className="border-2 border-primary-600 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              Soy Inversionista
            </Link>
            <button className="text-gray-700 hover:text-primary-600 transition-colors">
              <User className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              href="/explorar"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Explorar Proyectos
            </Link>
            <Link
              href="/como-funciona"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cómo Funciona
            </Link>
            <Link
              href="/impacto"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Impacto
            </Link>
            <Link
              href="/registro-agricultor"
              className="block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Soy Agricultor
            </Link>
            <Link
              href="/inversionista"
              className="block border-2 border-primary-600 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Soy Inversionista
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
