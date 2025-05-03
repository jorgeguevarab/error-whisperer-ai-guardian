
export interface ErrorItem {
  id: string;
  message: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "new" | "investigating" | "resolved";
  timestamp: string;
}

export interface ErrorCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  errors: ErrorItem[];
}

import React from "react";
import {
  DataProcessingIcon,
  ReconciliationIcon,
  IntegrationIcon,
  PerformanceIcon,
  ReportingIcon,
  AuthenticationIcon,
  UsabilityIcon,
  DocumentationIcon,
  CustomizationIcon
} from "../utils/iconComponents";

export const errorCategories: ErrorCategory[] = [
  {
    id: "data-processing",
    name: "Carga y Procesamiento de Datos",
    icon: <DataProcessingIcon />,
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
    icon: <ReconciliationIcon />,
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
    icon: <IntegrationIcon />,
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
    icon: <PerformanceIcon />,
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
    icon: <ReportingIcon />,
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
    icon: <AuthenticationIcon />,
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
    icon: <UsabilityIcon />,
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
    icon: <DocumentationIcon />,
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
    icon: <CustomizationIcon />,
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
