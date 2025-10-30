# AGROFIT - Plataforma de Inversión en Agricultura Sostenible

## 🌱 Descripción

AGROFIT es una plataforma digital que conecta pequeños y medianos agricultores sostenibles con inversionistas de impacto. La plataforma facilita el financiamiento de proyectos agrícolas que generan valor social, ambiental y financiero.

## ✨ Características Principales

### Para Agricultores
- ✅ Registro de proyectos con formulario multipaso
- 📊 Sistema de evaluación ESG (Environmental, Social, Governance)
- 📈 Visualización de métricas de sostenibilidad
- 💰 Solicitud de diferentes tipos de financiamiento
- 🏆 Acceso a reportes profesionales (plan premium)

### Para Inversionistas
- 🔍 Explorador de proyectos con filtros avanzados
- 📱 Interfaz tipo "Tinder" para navegar proyectos
- 📊 Métricas ESG estandarizadas y verificadas
- 💼 Acceso a reportes financieros detallados
- 🎯 Sistema de conexión directa con agricultores
- 📈 Panel premium con seguimiento de inversiones

### Para Administradores
- ✅ Validación de proyectos
- 📊 Generación de indicadores ESG
- 💳 Gestión de pagos y suscripciones
- 📈 Panel de control y analytics

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilización**: Tailwind CSS
- **Íconos**: Lucide React
- **Fonts**: Google Fonts (Inter)

## 📁 Estructura del Proyecto

```
agrofit/
├── app/                          # Páginas de la aplicación (App Router)
│   ├── page.tsx                  # Página de inicio
│   ├── explorar/                 # Explorador de proyectos
│   ├── registro-agricultor/      # Formulario de registro
│   ├── proyecto/[id]/            # Detalle de proyecto
│   ├── inversionista/            # Landing para inversionistas
│   ├── premium/                  # Panel premium
│   ├── layout.tsx                # Layout principal
│   └── globals.css               # Estilos globales
├── components/                   # Componentes reutilizables
│   ├── Header.tsx                # Barra de navegación
│   ├── Footer.tsx                # Pie de página
│   ├── ProjectCard.tsx           # Tarjeta de proyecto
│   └── ESGBadge.tsx              # Badge de puntuación ESG
├── lib/                          # Utilidades y datos
│   ├── mockData.ts               # Datos de ejemplo
│   └── utils.ts                  # Funciones auxiliares
├── types/                        # Definiciones TypeScript
│   └── index.ts                  # Tipos e interfaces
└── public/                       # Archivos estáticos
    └── images/                   # Imágenes
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/atikakernel/Agrofit.git
cd Agrofit

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 📊 Características Técnicas

### Sistema de Tipos ESG

El proyecto implementa un sistema robusto de evaluación ESG con los siguientes componentes:

- **Environmental (Ambiental)**: Certificaciones, prácticas orgánicas, gestión de agua, conservación del suelo
- **Social**: Número de empleados, beneficios laborales, impacto comunitario, equidad de género
- **Governance (Gobernanza)**: Transparencia, cumplimiento normativo

### Filtros de Búsqueda

Los inversionistas pueden filtrar proyectos por:
- 📍 Ubicación (departamento/municipio)
- 🌾 Tipo de cultivo
- 💵 Tipo de financiamiento (crédito, equity, garantía, mixto)
- ⭐ Puntaje ESG mínimo
- 🔍 Búsqueda por texto

### Modelo de Datos

```typescript
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
```

## 🎨 Diseño y UX

- **Paleta de Colores**:
  - Primary: Verde sostenible (#22c55e)
  - Earth: Tonos tierra (#b8956f)
  - Complementarios: Azul, amarillo

- **Responsive Design**: Totalmente adaptado a móviles, tablets y desktop
- **Accesibilidad**: Componentes diseñados siguiendo mejores prácticas
- **Animaciones**: Transiciones suaves y hover effects

## 💰 Modelo de Monetización

1. **Fee por registro de proyectos**: Los agricultores pagan por registrar sus proyectos
2. **Fee por estructuración**: Cobro por validación y estructuración profesional
3. **Acceso a información detallada**: Inversionistas pagan por ver reportes completos
4. **Suscripción Premium**:
   - Agricultores: $150,000 COP/mes
   - Inversionistas: $300,000 COP/mes

## 🔐 Próximas Implementaciones

- [ ] Sistema de autenticación (NextAuth.js)
- [ ] Base de datos PostgreSQL
- [ ] API REST para operaciones CRUD
- [ ] Pasarela de pagos (Stripe/PayU)
- [ ] Sistema de notificaciones
- [ ] Chat en tiempo real
- [ ] Dashboard de analytics
- [ ] Generación automática de reportes PDF
- [ ] Sistema de calificaciones y reviews
- [ ] Integración con mapas (Google Maps)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Para más información sobre el proyecto AGROFIT:
- Email: contacto@agrofit.co
- Website: [www.agrofit.co](https://www.agrofit.co)

## 🙏 Agradecimientos

Este proyecto fue creado con el objetivo de democratizar el acceso al financiamiento agrícola y promover prácticas sostenibles en Colombia y América Latina.

---

**Desarrollado con ❤️ para transformar la agricultura sostenible**
