// Tipos para productos del catálogo
export interface Product {
  id: string;
  codigo: string;
  descripcion: string;
  pagina: number;
  seccion?: string;
  precio?: number;
  imagen?: string;
}

// Tipos para el formulario de contacto
export interface ContactFormData {
  Nombres: string;
  Apellidos: string;
  Correo: string;
  Asunto: string;
  Mensaje: string;
}

// Tipos para errores de validación
export interface FormErrors {
  [key: string]: string;
}

// Tipos para el estado de búsqueda
export interface SearchState {
  query: string;
  type: 'codigo' | 'nombre';
  results: Product[];
  isLoading: boolean;
  error: string | null;
}

// Tipos para paginación
export interface PaginationData {
  index: number;
  data: string;
}

// Tipos para secciones del catálogo
export interface CatalogSection {
  id: string;
  seccion: string;
  numero_pagina: number;
}

// Tipos para el estado del catálogo Redux
export interface CatalogState {
  data: string; // URL del PDF actual
}

// Tipos para notificaciones
export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration: number;
  open: boolean;
}

// Tipos para respuestas de API
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Props comunes para componentes
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Tipos para el hook de manejo de errores
export interface ErrorState {
  message: string;
  details: string;
  timestamp: string;
}

// Tipos para configuración de loading
export interface LoadingConfig {
  variant?: 'basic' | 'withMessage' | 'fullscreen' | 'productCard' | 'productList';
  message?: string;
  size?: number;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  count?: number;
} 