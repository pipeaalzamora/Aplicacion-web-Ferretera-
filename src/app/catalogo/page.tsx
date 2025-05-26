"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Drawer,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import {
  Search,
  PictureAsPdf,
  NavigateBefore,
  NavigateNext,
  Menu,
  Close,
  ZoomIn,
  ZoomOut,
  Fullscreen,
  Download,
  FilterList,
  Category,
  Build,
} from "@mui/icons-material";
import { useAppDispatch } from "@/hooks/redux";
import { updateCatalogPage } from "@/store/slices/catalogSlice";
import { useNotification } from "@/components/ui/NotificationSystem";
import { Product, CatalogSection } from "@/types";

// Datos simulados para demostración
const catalogSections: CatalogSection[] = [
  { id: "1", seccion: "Herramientas Eléctricas", numero_pagina: 1 },
  { id: "2", seccion: "Herramientas Manuales", numero_pagina: 15 },
  { id: "3", seccion: "Materiales de Construcción", numero_pagina: 35 },
  { id: "4", seccion: "Ferretería General", numero_pagina: 55 },
  { id: "5", seccion: "Pinturas y Acabados", numero_pagina: 75 },
  { id: "6", seccion: "Plomería", numero_pagina: 95 },
  { id: "7", seccion: "Electricidad", numero_pagina: 115 },
  { id: "8", seccion: "Jardinería", numero_pagina: 135 },
];

const mockProducts: Product[] = [
  {
    id: "1",
    codigo: "TAL001",
    descripcion: "Taladro Eléctrico 750W",
    pagina: 2,
    seccion: "Herramientas Eléctricas",
  },
  {
    id: "2",
    codigo: "MRT002",
    descripcion: "Martillo de Acero 500g",
    pagina: 16,
    seccion: "Herramientas Manuales",
  },
  {
    id: "3",
    codigo: "CEM003",
    descripcion: "Cemento Portland 50kg",
    pagina: 36,
    seccion: "Materiales de Construcción",
  },
  {
    id: "4",
    codigo: "TOR004",
    descripcion: "Tornillos Autorroscantes x100",
    pagina: 56,
    seccion: "Ferretería General",
  },
  {
    id: "5",
    codigo: "PIN005",
    descripcion: "Pintura Latex Blanca 4L",
    pagina: 76,
    seccion: "Pinturas y Acabados",
  },
  {
    id: "6",
    codigo: "TUB006",
    descripcion: "Tubería PVC 4 pulgadas",
    pagina: 96,
    seccion: "Plomería",
  },
  {
    id: "7",
    codigo: "CAB007",
    descripcion: "Cable Eléctrico 12 AWG",
    pagina: 116,
    seccion: "Electricidad",
  },
  {
    id: "8",
    codigo: "MOT008",
    descripcion: "Motosierra 45cc",
    pagina: 136,
    seccion: "Jardinería",
  },
];

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"codigo" | "nombre">("nombre");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(150); // Total de páginas del catálogo
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { showSuccess, showInfo } = useNotification();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    // Simular carga inicial del PDF
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [currentPage]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results = mockProducts.filter((product) => {
      if (searchType === "codigo") {
        return product.codigo.toLowerCase().includes(searchQuery.toLowerCase());
      } else {
        return product.descripcion
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
    });

    setSearchResults(results);
    showInfo(`Se encontraron ${results.length} resultados`);
  };

  const handleGoToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      dispatch(updateCatalogPage(page - 1)); // El PDF empieza en 0
      showSuccess(`Navegando a la página ${page}`);
    }
  };

  const handleProductClick = (product: Product) => {
    handleGoToPage(product.pagina);
    setSidebarOpen(false);
    showSuccess(`Mostrando ${product.descripcion} en página ${product.pagina}`);
  };

  const handleSectionClick = (section: CatalogSection) => {
    handleGoToPage(section.numero_pagina);
    setSidebarOpen(false);
    showSuccess(`Navegando a ${section.seccion}`);
  };

  const handleZoom = (direction: "in" | "out") => {
    if (direction === "in" && zoomLevel < 200) {
      setZoomLevel((prev) => prev + 25);
    } else if (direction === "out" && zoomLevel > 50) {
      setZoomLevel((prev) => prev - 25);
    }
  };

  const sidebarContent = (
    <div className="w-80 h-full bg-white">
      {/* Header del sidebar */}
      <div className="p-6 bg-green-600 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PictureAsPdf className="text-2xl" />
            <Typography variant="h6" className="font-bold">
              Catálogo Digital
            </Typography>
          </div>
          {isMobile && (
            <IconButton
              onClick={() => setSidebarOpen(false)}
              className="text-white"
            >
              <Close />
            </IconButton>
          )}
        </div>
      </div>

      {/* Búsqueda */}
      <div className="p-6 border-b">
        <Typography variant="h6" className="mb-4 flex items-center">
          <Search className="mr-2" />
          Buscar Productos
        </Typography>

        <div className="space-y-4">
          <div className="flex space-x-2">
            <Chip
              label="Por Nombre"
              onClick={() => setSearchType("nombre")}
              color={searchType === "nombre" ? "primary" : "default"}
              variant={searchType === "nombre" ? "filled" : "outlined"}
            />
            <Chip
              label="Por Código"
              onClick={() => setSearchType("codigo")}
              color={searchType === "codigo" ? "primary" : "default"}
              variant={searchType === "codigo" ? "filled" : "outlined"}
            />
          </div>

          <TextField
            fullWidth
            variant="outlined"
            placeholder={`Buscar por ${searchType}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            size="small"
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleSearch}
            startIcon={<Search />}
            className="bg-green-600 hover:bg-green-700"
          >
            Buscar
          </Button>
        </div>

        {/* Resultados de búsqueda */}
        {searchResults.length > 0 && (
          <div className="mt-4">
            <Typography variant="subtitle2" className="mb-2 text-gray-600">
              Resultados ({searchResults.length})
            </Typography>
            <List dense>
              {searchResults.map((product) => (
                <ListItem key={product.id} disablePadding>
                  <ListItemButton
                    onClick={() => handleProductClick(product)}
                    className="hover:bg-gray-100 rounded"
                  >
                    <ListItemIcon>
                      <Build className="text-green-600" />
                    </ListItemIcon>
                    <ListItemText
                      primary={product.descripcion}
                      secondary={`Código: ${product.codigo} | Página: ${product.pagina}`}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        )}
      </div>

      {/* Secciones del catálogo */}
      <div className="p-6">
        <Typography variant="h6" className="mb-4 flex items-center">
          <Category className="mr-2" />
          Secciones
        </Typography>

        <List>
          {catalogSections.map((section) => (
            <ListItem key={section.id} disablePadding className="mb-1">
              <ListItemButton
                onClick={() => handleSectionClick(section)}
                className="hover:bg-gray-100 rounded"
              >
                <ListItemIcon>
                  <FilterList className="text-blue-600" />
                </ListItemIcon>
                <ListItemText
                  primary={section.seccion}
                  secondary={`Página ${section.numero_pagina}`}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-8 pb-16">
      {/* Hero Section */}
      <section className="py-12">
        <Container maxWidth="lg">
          <div className="text-center text-white mb-8">
            <div className="flex items-center justify-center mb-6">
              <PictureAsPdf className="text-green-400 text-5xl mr-4" />
              <Typography
                variant="h2"
                className="font-bold text-4xl lg:text-5xl"
              >
                Catálogo Digital
              </Typography>
            </div>
            <Typography
              variant="h6"
              className="text-gray-200 max-w-2xl mx-auto"
            >
              Explora nuestro catálogo completo con más de 5,000 productos
              organizados por categorías.
            </Typography>
          </div>
        </Container>
      </section>

      {/* Controles principales */}
      <section className="py-4 bg-white bg-opacity-10 backdrop-blur-sm">
        <Container maxWidth="lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Botón de menú móvil */}
            {isMobile && (
              <Button
                variant="contained"
                onClick={() => setSidebarOpen(true)}
                startIcon={<Menu />}
                className="bg-green-600 hover:bg-green-700"
              >
                Navegación
              </Button>
            )}

            {/* Información de página */}
            <Typography variant="h6" className="text-white">
              Página {currentPage} de {totalPages}
            </Typography>

            {/* Controles de zoom */}
            <div className="flex items-center space-x-2">
              <IconButton
                onClick={() => handleZoom("out")}
                disabled={zoomLevel <= 50}
                className="text-white bg-white bg-opacity-20"
              >
                <ZoomOut />
              </IconButton>

              <Typography className="text-white min-w-[60px] text-center">
                {zoomLevel}%
              </Typography>

              <IconButton
                onClick={() => handleZoom("in")}
                disabled={zoomLevel >= 200}
                className="text-white bg-white bg-opacity-20"
              >
                <ZoomIn />
              </IconButton>
            </div>

            {/* Controles de navegación */}
            <div className="flex items-center space-x-2">
              <IconButton
                onClick={() => handleGoToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="text-white bg-white bg-opacity-20"
              >
                <NavigateBefore />
              </IconButton>

              <TextField
                type="number"
                value={currentPage}
                onChange={(e) => {
                  const page = parseInt(e.target.value);
                  if (page >= 1 && page <= totalPages) {
                    handleGoToPage(page);
                  }
                }}
                size="small"
                className="w-20 bg-white rounded"
                inputProps={{ min: 1, max: totalPages }}
              />

              <IconButton
                onClick={() => handleGoToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="text-white bg-white bg-opacity-20"
              >
                <NavigateNext />
              </IconButton>
            </div>

            {/* Botones adicionales */}
            <div className="flex items-center space-x-2">
              <IconButton className="text-white bg-white bg-opacity-20">
                <Fullscreen />
              </IconButton>
              <IconButton className="text-white bg-white bg-opacity-20">
                <Download />
              </IconButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Contenido principal */}
      <Container maxWidth="xl" className="py-8">
        <div className="flex gap-8">
          {/* Sidebar para desktop */}
          {!isMobile && (
            <div className="flex-shrink-0">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-0">{sidebarContent}</CardContent>
              </Card>
            </div>
          )}

          {/* Visor de PDF */}
          <div className="flex-1">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                {isLoading ? (
                  <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                      <CircularProgress size={60} className="mb-4" />
                      <Typography variant="h6" className="text-gray-600">
                        Cargando página {currentPage}...
                      </Typography>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-12 h-96 flex items-center justify-center"
                      style={{ zoom: `${zoomLevel}%` }}
                    >
                      <div className="text-gray-500">
                        <PictureAsPdf className="text-8xl mb-4" />
                        <Typography variant="h4" className="mb-2">
                          Visor PDF
                        </Typography>
                        <Typography variant="body1" className="mb-4">
                          Página {currentPage} del catálogo
                        </Typography>
                        <Typography variant="body2" className="mb-6">
                          Aquí se mostraría el contenido del PDF usando
                          react-pdf
                        </Typography>

                        {/* Instrucciones para cargar PDF */}
                        <div className="bg-blue-50 p-4 rounded-lg mt-6 text-left max-w-md">
                          <Typography
                            variant="subtitle2"
                            className="font-bold mb-2 text-blue-800"
                          >
                            Para cargar tu PDF:
                          </Typography>
                          <ol className="text-sm text-blue-700 space-y-1">
                            <li>
                              1. Coloca tu PDF en{" "}
                              <code>/public/catalogo.pdf</code>
                            </li>
                            <li>
                              2. Instala: <code>npm install react-pdf</code>
                            </li>
                            <li>3. Reemplaza este componente con react-pdf</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>

      {/* Drawer para móvil */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 320,
            boxSizing: "border-box",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    </div>
  );
}
