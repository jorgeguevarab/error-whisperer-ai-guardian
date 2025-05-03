
import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ErrorSeverityChart } from "@/components/dashboard/ErrorSeverityChart";
import { ErrorTrendChart } from "@/components/dashboard/ErrorTrendChart";
import { RecentErrorsList } from "@/components/dashboard/RecentErrorsList";
import { AIAnalysisCard } from "@/components/dashboard/AIAnalysisCard";
import { AlertTriangle, BellOff, Bug, Search } from "lucide-react";
import { errorCategories } from "@/data/errorCategories";

const Dashboard = () => {
  // Sample data
  const errorSeverityData = [
    { name: "Crítico", value: 13, color: "hsl(var(--error-critical))" },
    { name: "Alto", value: 27, color: "hsl(var(--error-high))" },
    { name: "Medio", value: 42, color: "hsl(var(--error-medium))" },
    { name: "Bajo", value: 63, color: "hsl(var(--error-low))" },
  ];

  const errorTrendData = [
    { date: "Lun", errors: 20, anomalies: 5 },
    { date: "Mar", errors: 15, anomalies: 3 },
    { date: "Mié", errors: 25, anomalies: 8 },
    { date: "Jue", errors: 18, anomalies: 4 },
    { date: "Vie", errors: 30, anomalies: 9 },
    { date: "Sáb", errors: 12, anomalies: 2 },
    { date: "Dom", errors: 8, anomalies: 1 },
  ];

  // Get all errors from all categories
  const allErrors = errorCategories.flatMap(category => category.errors);
  
  // Filter most recent errors for the dashboard (limit to 4)
  const recentErrors = allErrors
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 4)
    .map(error => ({
      id: error.id,
      message: error.message,
      timestamp: formatTimestamp(error.timestamp),
      component: getCategoryNameForError(error.id),
      severity: error.severity,
      status: error.status,
    }));

  const aiAnalysis = {
    title: "Posible problema de configuración de base de datos",
    details: "La IA ha detectado un patrón de errores de conexión de base de datos que ocurren principalmente durante las horas pico de tráfico. Esto podría indicar un problema de configuración del pool de conexiones.",
    confidence: 87,
    recommendation: "Revisar la configuración del pool de conexiones de la base de datos y considerar aumentar el límite máximo de conexiones o implementar un sistema de cola para las solicitudes durante las horas pico.",
    severity: "high" as const,
  };

  // Helper function to format timestamp as "Hace X minutos/horas"
  function formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.round(diffMs / 60000);
    
    if (diffMins < 60) {
      return `Hace ${diffMins} minutos`;
    } else {
      const diffHours = Math.round(diffMins / 60);
      return `Hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
    }
  }

  // Helper function to get category name for an error
  function getCategoryNameForError(errorId: string): string {
    const category = errorCategories.find(cat => 
      cat.errors.some(err => err.id === errorId)
    );
    return category ? category.name : "Sin categoría";
  }

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Total de Errores"
          value={allErrors.length.toString()}
          description="Errores monitorizados"
          icon={<AlertTriangle />}
          trend={{ value: 12, isPositive: false }}
        />
        <StatCard 
          title="Errores Críticos"
          value={allErrors.filter(err => err.severity === "critical").length.toString()}
          description="Requieren atención inmediata"
          icon={<Bug />}
          trend={{ value: 5, isPositive: false }}
        />
        <StatCard 
          title="Anomalías Detectadas"
          value="28"
          description="Potenciales problemas"
          icon={<Search />}
          trend={{ value: 8, isPositive: false }}
        />
        <StatCard 
          title="Alertas Activas"
          value={allErrors.filter(err => err.status === "investigating").length.toString()}
          description="En investigación"
          icon={<BellOff />}
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        <ErrorTrendChart data={errorTrendData} />
        <ErrorSeverityChart data={errorSeverityData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <RecentErrorsList errors={recentErrors} />
        <AIAnalysisCard analysis={aiAnalysis} />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
