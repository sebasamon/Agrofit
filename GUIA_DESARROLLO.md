# Guía de Desarrollo - AGROFIT

## 📋 Tabla de Contenidos

1. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
2. [Componentes Principales](#componentes-principales)
3. [Sistema de Rutas](#sistema-de-rutas)
4. [Gestión de Estado](#gestión-de-estado)
5. [Tipos y Interfaces](#tipos-y-interfaces)
6. [Estilos y Temas](#estilos-y-temas)
7. [Buenas Prácticas](#buenas-prácticas)

## 🏗️ Arquitectura del Proyecto

AGROFIT utiliza Next.js 15 con el nuevo App Router, lo que permite:

- **Server Components por defecto**: Mejor rendimiento y SEO
- **Client Components selectivos**: Usando la directiva `'use client'` solo cuando es necesario
- **File-based routing**: Las carpetas en `app/` definen las rutas automáticamente
- **Layouts anidados**: Compartir UI entre páginas relacionadas

### Estructura de Carpetas

```
app/
├── layout.tsx              # Layout raíz (compartido por todas las páginas)
├── page.tsx                # Página de inicio (/)
├── explorar/
│   └── page.tsx            # Explorador de proyectos (/explorar)
├── proyecto/
│   └── [id]/
│       └── page.tsx        # Detalle de proyecto dinámico (/proyecto/1)
├── registro-agricultor/
│   └── page.tsx            # Formulario de registro (/registro-agricultor)
├── inversionista/
│   └── page.tsx            # Landing inversionistas (/inversionista)
└── premium/
    └── page.tsx            # Panel premium (/premium)
```

## 🧩 Componentes Principales

### Header.tsx

Componente de navegación principal con:
- Logo y branding
- Menú de navegación responsive
- Botones de acción (Soy Agricultor / Soy Inversionista)
- Menú móvil con hamburger icon

```typescript
'use client';  // Client component por el uso de useState
```

### Footer.tsx

Pie de página con:
- Información de la empresa
- Enlaces rápidos
- Información de contacto
- Redes sociales

### ProjectCard.tsx

Tarjeta de proyecto que muestra:
- Imagen/placeholder del proyecto
- Nombre de la finca
- Ubicación
- Puntuaciones ESG con badges coloridos
- Información de financiamiento
- Botón de acción

### ESGBadge.tsx

Componente especializado para mostrar:
- Puntuación ESG global
- Desglose por categoría (Environmental, Social, Governance)
- Códigos de color según el puntaje
- Etiquetas descriptivas

## 🛣️ Sistema de Rutas

### Rutas Estáticas

- `/` - Página de inicio
- `/explorar` - Listado de proyectos
- `/registro-agricultor` - Formulario de registro
- `/inversionista` - Landing para inversionistas
- `/premium` - Panel premium

### Rutas Dinámicas

- `/proyecto/[id]` - Detalle de un proyecto específico

Ejemplo de uso:
```typescript
// En la página
export default async function ProyectoDetalle({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const project = getProjectById(id);
  // ...
}
```

## 🔄 Gestión de Estado

### Estado Local (useState)

Usado en componentes client para:
- Formularios (registro de agricultores)
- Filtros (explorador de proyectos)
- UI interactiva (menús, modales)

Ejemplo:
```typescript
const [searchTerm, setSearchTerm] = useState('');
const [filteredProjects, setFilteredProjects] = useState<ProjectPreview[]>(allProjects);
```

### Datos Mockeados

Actualmente usando `lib/mockData.ts`:
```typescript
export const mockProjects: Project[] = [...];
export const getProjectPreviews = (): ProjectPreview[] => {...};
export const getProjectById = (id: string): Project | undefined => {...};
```

## 📝 Tipos y Interfaces

### Principales Interfaces

```typescript
// Usuario
interface User {
  id: string;
  role: UserRole;  // 'farmer' | 'investor' | 'admin'
  isPremium: boolean;
}

// Proyecto
interface Project {
  id: string;
  farmerProfile: FarmerProfile;
  economicData: EconomicData;
  environmentalData: EnvironmentalData;
  socialData: SocialData;
  financingNeeds: FinancingNeeds;
  esgScore: ESGScore;
  status: ProjectStatus;
}

// ESG Score
interface ESGScore {
  environmental: number;  // 0-100
  social: number;         // 0-100
  governance: number;     // 0-100
  overall: number;        // promedio
}
```

## 🎨 Estilos y Temas

### Tailwind CSS Configuration

Colores personalizados en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0fdf4',
    // ... hasta 900
    600: '#16a34a',  // Color principal
  },
  earth: {
    // Tonos tierra para agricultura
  }
}
```

### Utilidades de Estilo

En `lib/utils.ts`:

```typescript
// Obtener color según puntaje ESG
export function getESGColor(score: number): string {
  if (score >= 85) return 'text-green-600';
  if (score >= 70) return 'text-yellow-600';
  if (score >= 50) return 'text-orange-600';
  return 'text-red-600';
}
```

### Patrones de Diseño

1. **Cards con hover effects**:
```jsx
<div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
  {/* contenido */}
</div>
```

2. **Gradientes para headers**:
```jsx
<div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
```

3. **Responsive grid**:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

## ✅ Buenas Prácticas

### 1. Separación de Concerns

- **Componentes**: Solo UI y lógica de presentación
- **Lib**: Funciones utilitarias y datos
- **Types**: Definiciones de tipos centralizadas

### 2. TypeScript Strict

```typescript
// Siempre tipar props
interface ProjectCardProps {
  project: ProjectPreview;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // ...
}
```

### 3. Accesibilidad

```jsx
// Labels descriptivos
<label className="block text-sm font-medium text-gray-700 mb-2">
  Nombre de la Finca *
</label>

// Alt text en imágenes
// ARIA labels cuando sea necesario
```

### 4. Performance

- Usar Server Components cuando sea posible
- Lazy loading de imágenes
- Minimizar JavaScript en el cliente

### 5. SEO

```typescript
// Metadata en cada página
export const metadata: Metadata = {
  title: "AGROFIT - ...",
  description: "...",
  keywords: ["agricultura sostenible", "inversión de impacto"],
};
```

## 🔧 Desarrollo de Nuevas Features

### Agregar una Nueva Página

1. Crear carpeta en `app/`
2. Agregar `page.tsx`
3. Importar Header y Footer
4. Implementar contenido

```typescript
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NuevaPagina() {
  return (
    <main>
      <Header />
      {/* Tu contenido aquí */}
      <Footer />
    </main>
  );
}
```

### Agregar un Nuevo Componente

1. Crear archivo en `components/`
2. Definir interfaz de props
3. Implementar componente
4. Exportar

```typescript
interface MiComponenteProps {
  titulo: string;
  activo?: boolean;
}

export default function MiComponente({ titulo, activo = false }: MiComponenteProps) {
  return (
    <div className={activo ? 'bg-green-100' : 'bg-gray-100'}>
      <h2>{titulo}</h2>
    </div>
  );
}
```

### Agregar Nuevos Tipos

En `types/index.ts`:

```typescript
export interface NuevoTipo {
  id: string;
  // ... propiedades
}

export type NuevoEnum = 'opcion1' | 'opcion2' | 'opcion3';
```

## 🐛 Debugging

### Errores Comunes

1. **"use client" faltante**: Agregar en componentes que usan hooks
2. **Tipos incorrectos**: Verificar importaciones de `@/types`
3. **Rutas dinámicas**: Await params en Next.js 15

### Herramientas

- React DevTools
- Next.js DevTools
- TypeScript Language Server
- Tailwind CSS IntelliSense

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Lucide Icons](https://lucide.dev)

---

**¿Preguntas?** Consulta el código o abre un issue en GitHub.
