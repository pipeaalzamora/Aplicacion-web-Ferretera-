# 🏗️ Ferretera Ecosa - Aplicación Web

<div align="center">
  <img src="public/logo512.png" alt="Logo Ferretera Ecosa" width="120" height="120">
  
  **Tu ferretería de confianza con más de 20 años de experiencia**
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
  ![Material-UI](https://img.shields.io/badge/Material--UI-6.0-0081CB?style=for-the-badge&logo=mui)
  ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.0-764ABC?style=for-the-badge&logo=redux)
</div>

## 📋 Tabla de Contenidos

- [🏗️ Ferretera Ecosa - Aplicación Web](#️-ferretera-ecosa---aplicación-web)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🚀 Descripción](#-descripción)
  - [✨ Características Principales](#-características-principales)
  - [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [⚡ Instalación y Configuración](#-instalación-y-configuración)
    - [Requisitos Previos](#requisitos-previos)
    - [Instalación](#instalación)
    - [Variables de Entorno](#variables-de-entorno)
  - [🎯 Scripts Disponibles](#-scripts-disponibles)
  - [🌐 Páginas y Funcionalidades](#-páginas-y-funcionalidades)
    - [🏠 Página Principal](#-página-principal)
    - [📖 Catálogo Digital](#-catálogo-digital)
    - [👥 Nosotros](#-nosotros)
    - [📞 Contacto](#-contacto)
  - [🔧 Configuración del Catálogo PDF](#-configuración-del-catálogo-pdf)
  - [📱 PWA y SEO](#-pwa-y-seo)
  - [🚀 Deployment](#-deployment)
    - [Vercel (Recomendado)](#vercel-recomendado)
    - [Netlify](#netlify)
    - [Docker](#docker)
  - [🔄 Migración desde React](#-migración-desde-react)
  - [🤝 Contribución](#-contribución)
  - [📝 Changelog](#-changelog)
  - [📄 Licencia](#-licencia)
  - [👨‍💻 Autor](#-autor)

## 🚀 Descripción

**Ferretera Ecosa** es una aplicación web moderna desarrollada con Next.js 15, TypeScript y Tailwind CSS. La aplicación ofrece una experiencia completa para la exploración de productos de ferretería, incluyendo un catálogo digital, información corporativa y formularios de contacto.

Esta aplicación fue **migrada completamente** desde una aplicación React tradicional a Next.js, aprovechando las mejores prácticas de desarrollo moderno y optimización para SEO.

## ✨ Características Principales

- 🎨 **Diseño Moderno**: Interfaz elegante con gradientes corporativos y componentes Material-UI
- 📱 **Totalmente Responsivo**: Adaptado para dispositivos móviles, tablets y desktop
- 📖 **Catálogo Digital**: Visor de PDF integrado con búsqueda y navegación avanzada
- 🔍 **Búsqueda Inteligente**: Búsqueda por código de producto y nombre
- 📝 **Formularios Funcionales**: Validación completa con Formik y Yup
- 🔔 **Sistema de Notificaciones**: Feedback visual para todas las acciones del usuario
- 🛡️ **Manejo de Errores**: Error boundaries y manejo centralizado de errores
- 🌐 **SEO Optimizado**: Metadata completa y Open Graph
- 📱 **PWA Ready**: Configuración para aplicación web progresiva
- ⚡ **Rendimiento Optimizado**: SSG, optimización de imágenes y lazy loading

## 🛠️ Tecnologías Utilizadas

### Frontend Core
- **Next.js 15.3.2** - Framework React con App Router
- **TypeScript 5.0** - Tipado estático
- **React 19** - Biblioteca de interfaz de usuario
- **Tailwind CSS 3.4** - Framework de CSS utilitario

### UI y Componentes
- **Material-UI (MUI) 6.0** - Componentes de interfaz
- **@mui/icons-material** - Iconografía
- **@emotion/react & @emotion/styled** - CSS-in-JS

### Estado y Formularios
- **Redux Toolkit 2.0** - Gestión de estado global
- **React Redux** - Conectores React-Redux
- **Formik** - Manejo de formularios
- **Yup** - Validación de esquemas

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **TypeScript Config** - Configuración estricta

## 📁 Estructura del Proyecto

```
ferretera-ecosa/
├── 📁 public/                    # Assets estáticos
│   ├── 🖼️ logo192.png          # Logo de la empresa
│   ├── 🖼️ logo512.png          # Logo alta resolución
│   ├── 📄 favicon.ico           # Favicon
│   └── 📄 manifest.json         # PWA manifest
│
├── 📁 src/                       # Código fuente
│   ├── 📁 app/                   # App Router (Next.js 13+)
│   │   ├── 📄 layout.tsx         # Layout principal
│   │   ├── 📄 page.tsx           # Página principal
│   │   ├── 📁 catalogo/          # Página de catálogo
│   │   ├── 📁 nosotros/          # Página nosotros
│   │   ├── 📁 contacto/          # Página contacto
│   │   └── 📄 globals.css        # Estilos globales
│   │
│   ├── 📁 components/            # Componentes reutilizables
│   │   ├── 📁 layout/            # Componentes de layout
│   │   │   ├── 📄 Header.tsx     # Header con navegación
│   │   │   └── 📄 Footer.tsx     # Footer corporativo
│   │   ├── 📁 ui/                # Componentes UI
│   │   │   ├── 📄 NotificationSystem.tsx
│   │   │   └── 📄 ErrorBoundary.tsx
│   │   └── 📁 providers/         # Context providers
│   │       └── 📄 Providers.tsx
│   │
│   ├── 📁 hooks/                 # Custom hooks
│   │   ├── 📄 redux.ts           # Hooks tipados Redux
│   │   └── 📄 useErrorHandler.ts # Hook manejo errores
│   │
│   ├── 📁 lib/                   # Utilidades y configuración
│   │   └── 📄 constants.ts       # Constantes de la app
│   │
│   ├── 📁 store/                 # Estado global Redux
│   │   ├── 📄 store.ts           # Configuración store
│   │   └── 📁 slices/
│   │       └── 📄 catalogSlice.ts
│   │
│   └── 📁 types/                 # Definiciones TypeScript
│       └── 📄 index.ts           # Tipos globales
│
├── 📄 next.config.ts             # Configuración Next.js
├── 📄 tailwind.config.ts         # Configuración Tailwind
├── 📄 tsconfig.json              # Configuración TypeScript
├── 📄 eslint.config.mjs          # Configuración ESLint
└── 📄 package.json               # Dependencias y scripts
```

## ⚡ Instalación y Configuración

### Requisitos Previos

- **Node.js** 18.0.0 o superior
- **npm** 8.0.0 o superior (o **yarn** / **pnpm**)
- **Git** para control de versiones

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/ferretera-ecosa.git
cd ferretera-ecosa
```

2. **Instalar dependencias**
```bash
npm install
# o con yarn
yarn install
# o con pnpm
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Información de la empresa
NEXT_PUBLIC_COMPANY_NAME="Ferretera Ecosa"
NEXT_PUBLIC_COMPANY_EMAIL="info@ecosasa.com"
NEXT_PUBLIC_COMPANY_PHONE="+1 234 567 8900"
NEXT_PUBLIC_COMPANY_ADDRESS="Av. Principal 123, Ciudad"

# URLs de API (configura según tu backend)
NEXT_PUBLIC_API_BASE_URL="https://api.ecosasa.com"
NEXT_PUBLIC_CATALOG_API_URL="https://api.ecosasa.com/catalog"

# Configuración de la aplicación
NEXT_PUBLIC_APP_VERSION="2.0.0"
NEXT_PUBLIC_ENVIRONMENT="development"
```

## 🎯 Scripts Disponibles

```bash
# 🚀 Desarrollo
npm run dev          # Inicia servidor de desarrollo (puerto 3000)

# 🏗️ Construcción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia servidor de producción

# 🔍 Calidad de Código
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Corrige errores de linting automáticamente

# 🧪 Testing (si se configura)
npm run test         # Ejecuta tests
npm run test:watch   # Ejecuta tests en modo watch
```

## 🌐 Páginas y Funcionalidades

### 🏠 Página Principal

- **Hero Section**: Presentación principal con call-to-action
- **Características**: Destacados del negocio (calidad, experiencia, servicio)
- **Estadísticas**: Números impactantes de la empresa
- **Call-to-Action**: Navegación directa al catálogo

### 📖 Catálogo Digital

- **Visor PDF**: Interfaz para visualización de catálogo PDF
- **Búsqueda Avanzada**: Por código de producto y descripción
- **Navegación**: Controles de página, zoom, pantalla completa
- **Secciones**: Navegación por categorías organizadas
- **Responsive**: Sidebar en desktop, drawer en móvil

### 👥 Nosotros

- **Historia**: Trayectoria de la empresa desde 2004
- **Valores**: Calidad, confianza, experiencia y servicio
- **Timeline**: Hitos importantes en el desarrollo
- **Equipo**: Presentación del personal clave
- **Estadísticas**: Métricas de crecimiento y satisfacción

### 📞 Contacto

- **Formulario Funcional**: Validación completa con Formik + Yup
- **Información de Contacto**: Dirección, teléfonos, horarios
- **Mapa**: Placeholder para integración con Google Maps
- **Notificaciones**: Feedback visual para envío de mensajes

## 🔧 Configuración del Catálogo PDF

Para integrar tu catálogo PDF real:

1. **Instalar react-pdf**
```bash
npm install react-pdf
```

2. **Colocar PDF en public**
```bash
# Coloca tu archivo PDF en:
public/catalogo.pdf
```

3. **Actualizar componente de catálogo**
```typescript
// En src/app/catalogo/page.tsx
import { Document, Page } from 'react-pdf';

// Reemplazar el placeholder con:
<Document file="/catalogo.pdf">
  <Page pageNumber={currentPage} width={width} />
</Document>
```

4. **Configurar worker**
```typescript
// En src/app/layout.tsx o componente principal
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
```

## 📱 PWA y SEO

### Características PWA
- ✅ **Manifest configurado** con iconos y colores corporativos
- ✅ **Metadata completa** para Open Graph y Twitter Cards
- ✅ **Favicons optimizados** para todos los dispositivos
- ✅ **Responsive design** certificado

### SEO Optimizado
- ✅ **Meta tags** descriptivos en todas las páginas
- ✅ **Structured data** preparado para implementar
- ✅ **Sitemap automático** con Next.js
- ✅ **Performance optimizado** con Next.js Image

## 🚀 Deployment

### Vercel (Recomendado)

1. **Deploy automático desde Git**
```bash
# Conecta tu repositorio a Vercel
# Las variables de entorno se configuran en el dashboard
```

2. **Deploy manual**
```bash
npm i -g vercel
vercel --prod
```

### Netlify

1. **Build settings**
```
Build command: npm run build
Publish directory: out
```

2. **Next.js configuration**
```javascript
// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

## 🔄 Migración desde React

Esta aplicación fue migrada completamente desde una aplicación React tradicional a Next.js 15. Los cambios principales incluyen:

### ✅ Migrado
- **Create React App** → **Next.js 15 App Router**
- **JavaScript** → **TypeScript** completo
- **CSS Modules** → **Tailwind CSS**
- **React Router** → **Next.js routing**
- **Redux** → **Redux Toolkit**
- **Componentes de clase** → **Functional components**

### 🔧 Mejoras Implementadas
- **SEO optimizado** con metadata automática
- **Performance mejorado** con SSG y optimización de imágenes
- **TypeScript** para mejor DX y menos errores
- **Arquitectura moderna** con hooks y composición
- **Error boundaries** y manejo centralizado de errores
- **Sistema de notificaciones** unificado

## 🤝 Contribución

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Estándares de Código
- Usar **TypeScript** estricto
- Seguir **ESLint** configuración
- **Componentes funcionales** con hooks
- **Nombres descriptivos** en español para UI
- **Comentarios JSDoc** en funciones complejas

## 📝 Changelog

### [2.0.0] - 2024-01-26
#### ✨ Añadido
- Migración completa a Next.js 15 + TypeScript
- Sistema de notificaciones con Material-UI
- Catálogo digital con visor PDF
- Formularios con validación Formik + Yup
- Error boundaries y manejo centralizado de errores
- PWA configuration y SEO optimization
- Logo corporativo integrado

#### 🔄 Cambiado
- Arquitectura completa de React a Next.js
- Estilos de CSS Modules a Tailwind CSS
- Estado de Redux clásico a Redux Toolkit
- Componentes de clase a funcionales

#### 🗑️ Eliminado
- Dependencias de Create React App
- Componentes legacy de React
- CSS Modules y archivos de estilos antiguos

### [1.0.0] - 2024-01-01
#### ✨ Versión inicial
- Aplicación React básica
- Componentes de catálogo, contacto y nosotros
- Integración con Material-UI básica

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Ferretera Ecosa Development Team**

- 🌐 Website: [https://ecosasa.com](https://ecosasa.com)
- 📧 Email: info@ecosasa.com
- 📱 WhatsApp: +1 234 567 8900

---

<div align="center">
  <p>Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS</p>
  <p>© 2024 Ferretera Ecosa. Todos los derechos reservados.</p>
</div>
