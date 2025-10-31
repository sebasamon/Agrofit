'use client';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'farmer' | 'investor' | 'admin';
  password: string;
}

const STORAGE_KEY = 'agrofit_users';
const SESSION_KEY = 'agrofit_session';

// Initialize with admin user and test users
const initializeUsers = (): User[] => {
  if (typeof window === 'undefined') return [];

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  // Create default users
  const defaultUsers: User[] = [
    {
      id: 'admin-1',
      email: 'admin',
      name: 'Administrador',
      role: 'admin',
      password: '1234'
    },
    {
      id: 'farmer-demo',
      email: 'agricultor@demo.com',
      name: 'Pedro Agricultor',
      role: 'farmer',
      password: '1234'
    },
    {
      id: 'investor-demo',
      email: 'inversionista@demo.com',
      name: 'María Inversionista',
      role: 'investor',
      password: '1234'
    }
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
  return defaultUsers;
};

export const register = (email: string, password: string, name: string, role: 'farmer' | 'investor'): { success: boolean; message: string; user?: User } => {
  const users = initializeUsers();

  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'El correo ya está registrado' };
  }

  const newUser: User = {
    id: `user-${Date.now()}`,
    email,
    name,
    role,
    password
  };

  users.push(newUser);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

  return { success: true, message: 'Registro exitoso', user: newUser };
};

export const login = (email: string, password: string): { success: boolean; message: string; user?: User } => {
  const users = initializeUsers();

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: 'Credenciales incorrectas' };
  }

  // Store session
  const { password: _, ...userWithoutPassword } = user;
  localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));

  return { success: true, message: 'Login exitoso', user };
};

export const logout = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const getCurrentUser = (): Omit<User, 'password'> | null => {
  if (typeof window === 'undefined') return null;

  const session = localStorage.getItem(SESSION_KEY);
  if (!session) return null;

  return JSON.parse(session);
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === 'admin';
};

export const isFarmer = (): boolean => {
  const user = getCurrentUser();
  return user?.role === 'farmer';
};

export const isInvestor = (): boolean => {
  const user = getCurrentUser();
  return user?.role === 'investor';
};
