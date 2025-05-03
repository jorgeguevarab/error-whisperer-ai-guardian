
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Database, 
  FileWarning,
  Link2Off,
  Clock,
  BarChart2,
  UserX,
  HelpCircle,
  FileText,
  Settings2
} from "lucide-react";
import { useState } from "react";

interface ErrorItem {
  id: string;
  message: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "new" | "investigating" | "resolved";
  timestamp: string;
}

interface ErrorCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  errors: ErrorItem[];
}

const Errors = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const errorCategories: ErrorCategory[] = [
    {
      id: "data-processing",
      name: "Carga y Procesamiento de Datos",
      icon: <Database className="h-5 w-5" />,
      description: "Dificultades al importar información desde diferentes fuentes, fallos en la transformación o el modelado de los datos.",
      errors: [
        {
          id: "err-dp-001",
          message: "Error en la importación de archivo CSV",
          description: "El formato del archivo no coincide con el esquema esperado.",
          severity: "high",
          status: "investigating",
          timestamp: "2025-05-03 10:23:45"
        },
        {
          id: "err-dp-002",
          message: "Fallo en el procesamiento ETL",
          description: "Transformación de datos interrumpida por valores no válidos.",
          severity: "medium",
          status: "new",
          timestamp: "2025-05-03 11:15:22"
        }
      ]
    },
    {
      id: "reconciliation",
      name: "Reconciliaciones",
      icon: <FileWarning className="h-5 w-5" />,
      description: "Errores en la ejecución de las reglas de reconciliación, resultados inesperados o incorrectos, dificultades para identificar o resolver diferencias.",
      errors: [
        {
          id: "err-rc-001",
          message: "Discrepancia en reconciliación bancaria",
          description: "Las sumas de control no coinciden entre el sistema bancario y los registros internos.",
          severity: "critical",
          status: "investigating",
          timestamp: "2025-05-02 15:42:33"
        }
      ]
    },
    {
      id: "integration",
      name: "Integraciones",
      icon: <Link2Off className="h-5 w-5" />,
      description: "Problemas al conectar Simetrik con otros sistemas (ERP, bancos, etc.), errores en la sincronización de la información.",
      errors: [
        {
          id: "err-in-001",
          message: "Fallo de conexión con API externa",
          description: "Tiempo de espera agotado al intentar conectar con el sistema ERP.",
          severity: "high",
          status: "new",
          timestamp: "2025-05-03 08:12:17"
        },
        {
          id: "err-in-002",
          message: "Error de autenticación en integración",
          description: "Credenciales de API rechazadas al intentar sincronizar datos.",
          severity: "high",
          status: "investigating",
          timestamp: "2025-05-02 23:05:41"
        }
      ]
    },
    {
      id: "performance",
      name: "Rendimiento",
      icon: <Clock className="h-5 w-5" />,
      description: "La plataforma puede volverse lenta al procesar grandes volúmenes de datos o experimentar caídas de conexión.",
      errors: [
        {
          id: "err-pf-001",
          message: "Tiempo de respuesta elevado",
          description: "Tiempos de carga superiores a 10 segundos en el módulo de reportes.",
          severity: "medium",
          status: "investigating",
          timestamp: "2025-05-02 14:23:11"
        }
      ]
    },
    {
      id: "reporting",
      name: "Reportes y Dashboards",
      icon: <BarChart2 className="h-5 w-5" />,
      description: "Información incorrecta, fallos en la visualización o personalización de los reportes.",
      errors: [
        {
          id: "err-rp-001",
          message: "Datos inconsistentes en dashboard",
          description: "Las métricas mostradas no coinciden con los datos fuente.",
          severity: "medium",
          status: "new",
          timestamp: "2025-05-01 16:37:22"
        }
      ]
    },
    {
      id: "authentication",
      name: "Acceso y Autenticación",
      icon: <UserX className="h-5 w-5" />,
      description: "Dificultades para iniciar sesión, problemas con los permisos de usuario.",
      errors: [
        {
          id: "err-au-001",
          message: "Fallos en inicio de sesión SSO",
          description: "Usuarios reportan errores intermitentes al autenticarse mediante proveedor de identidad externo.",
          severity: "high",
          status: "investigating",
          timestamp: "2025-05-03 07:45:19"
        }
      ]
    },
    {
      id: "usability",
      name: "Usabilidad",
      icon: <HelpCircle className="h-5 w-5" />,
      description: "Dificultad para navegar por la plataforma o encontrar las funcionalidades deseadas.",
      errors: [
        {
          id: "err-us-001",
          message: "Flujo de usuario confuso",
          description: "Usuarios reportan dificultad para completar el proceso de configuración de reconciliación.",
          severity: "low",
          status: "investigating",
          timestamp: "2025-05-02 11:23:45"
        }
      ]
    },
    {
      id: "documentation",
      name: "Documentación",
      icon: <FileText className="h-5 w-5" />,
      description: "Falta de guías o tutoriales que expliquen cómo utilizar las diferentes funciones.",
      errors: [
        {
          id: "err-do-001",
          message: "Documentación desactualizada",
          description: "La guía de usuario no refleja los cambios en la última actualización del sistema.",
          severity: "low",
          status: "new",
          timestamp: "2025-04-29 10:15:33"
        }
      ]
    },
    {
      id: "customization",
      name: "Personalización",
      icon: <Settings2 className="h-5 w-5" />,
      description: "Limitaciones para adaptar la plataforma a las necesidades específicas de cada usuario o empresa.",
      errors: [
        {
          id: "err-cu-001",
          message: "Opciones de configuración insuficientes",
          description: "No es posible personalizar el flujo de trabajo según requerimientos específicos del cliente.",
          severity: "medium",
          status: "new",
          timestamp: "2025-05-01 09:12:45"
        }
      ]
    }
  ];

  const getSeverityColor = (severity: ErrorItem["severity"]) => {
    switch (severity) {
      case "critical":
        return "bg-error-critical text-white";
      case "high":
        return "bg-error-high text-white";
      case "medium":
        return "bg-error-medium text-white";
      case "low":
        return "bg-error-low text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: ErrorItem["status"]) => {
    switch (status) {
      case "new":
        return "bg-blue-500 text-white";
      case "investigating":
        return "bg-amber-500 text-white";
      case "resolved":
        return "bg-green-500 text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  // Filtrar errores basados en la categoría activa
  const displayErrors = activeCategory === "all" 
    ? errorCategories.flatMap(cat => cat.errors)
    : errorCategories.find(cat => cat.id === activeCategory)?.errors || [];

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Catálogo de Errores</h1>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Buscar errores
          </Button>
        </div>
      </div>
      
      <Card className="mb-6 border-primary/20 bg-gradient-to-br from-card to-primary/5">
        <CardHeader>
          <CardTitle className="text-xl">Base de Conocimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Explore la biblioteca completa de errores detectados y soluciones recomendadas por Simetrik.
          </p>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
        <TabsList className="mb-4 flex flex-wrap gap-2">
          <TabsTrigger value="all">Todos</TabsTrigger>
          {errorCategories.map(category => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {activeCategory === "all" ? "Todos los Errores" : 
                errorCategories.find(c => c.id === activeCategory)?.name || "Errores"}
            </CardTitle>
            {activeCategory !== "all" && (
              <p className="text-sm text-muted-foreground">
                {errorCategories.find(c => c.id === activeCategory)?.description}
              </p>
            )}
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Severidad</TableHead>
                  <TableHead className="w-[120px]">Estado</TableHead>
                  <TableHead>Error</TableHead>
                  <TableHead className="w-[150px]">Timestamp</TableHead>
                  <TableHead className="w-[100px]">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayErrors.map(error => (
                  <TableRow key={error.id}>
                    <TableCell>
                      <Badge className={getSeverityColor(error.severity)}>
                        {error.severity.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(error.status)}>
                        {error.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{error.message}</p>
                        <p className="text-xs text-muted-foreground">{error.description}</p>
                      </div>
                    </TableCell>
                    <TableCell>{error.timestamp}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Analizar</Button>
                    </TableCell>
                  </TableRow>
                ))}
                {displayErrors.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6">
                      No hay errores registrados en esta categoría
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Tabs>
    </MainLayout>
  );
};

export default Errors;
