'use client';

import Link from 'next/link';
import { Sprout, User, Menu, X, LogOut, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/lib/auth/auth';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<ReturnType<typeof getCurrentUser>>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    router.push('/');
  };

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
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/explorar" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Explorar Proyectos
            </Link>

            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link href="/admin" className="flex items-center text-purple-700 hover:text-purple-800 transition-colors font-medium">
                    <Shield className="h-4 w-4 mr-1" />
                    Admin Panel
                  </Link>
                )}
                {user.role === 'farmer' && (
                  <Link href="/registro-agricultor" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                    Mis Proyectos
                  </Link>
                )}
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500 capitalize">{user.role === 'farmer' ? 'Agricultor' : user.role === 'investor' ? 'Inversionista' : 'Admin'}</div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center text-red-600 hover:text-red-700 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/registro"
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  Registrarse
                </Link>
                <Link
                  href="/login"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Iniciar Sesión
                </Link>
              </>
            )}
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

            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="block text-purple-700 hover:text-purple-800 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <div className="border-t pt-3 mt-3">
                  <div className="text-sm mb-3">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500 capitalize">{user.role}</div>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center text-red-600 hover:text-red-700 transition-colors font-medium"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Cerrar Sesión
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/registro"
                  className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registrarse
                </Link>
                <Link
                  href="/login"
                  className="block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
