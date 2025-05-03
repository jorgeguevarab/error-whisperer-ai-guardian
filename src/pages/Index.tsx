
import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ErrorSeverityChart } from "@/components/dashboard/ErrorSeverityChart";
import { ErrorTrendChart } from "@/components/dashboard/ErrorTrendChart";
import { RecentErrorsList } from "@/components/dashboard/RecentErrorsList";
import { AIAnalysisCard } from "@/components/dashboard/AIAnalysisCard";
import { AlertTriangle, BellOff, Bug, Search } from "lucide-react";

const Dashboard = () => {
  // Sample data
  const errorSeverityData = [
    { name: "Crítico", value: 13, color: "#991B1B" },
    { name: "Alto", value: 27, color: "#EF4444" },
    { name: "Medio", value: 42, color: "#F97316" },
    { name: "Bajo", value: 63, color: "#8B5CF6" },
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

  const recentErrors = [
    {
      id: "err-001",
      message: "Conexión a base de datos fallida",
      timestamp: "Hace 10 minutos",
      component: "Database Service",
      severity: "critical",
      status: "investigating",
    },
    {
      id: "err-002",
      message: "Timeout en API externa",
      timestamp: "Hace 25 minutos",
      component: "API Gateway",
      severity: "high",
      status: "new",
    },
    {
      id: "err-003",
      message: "Memoria insuficiente en el servidor",
      timestamp: "Hace 42 minutos",
      component: "Application Server",
      severity: "medium",
      status: "new",
    },
    {
      id: "err-004",
      message: "Error de validación en formulario",
      timestamp: "Hace 1 hora",
      component: "Frontend",
      severity: "low",
      status: "resolved",
    },
  ] as const;

  const aiAnalysis = {
    title: "Posible problema de configuración de base de datos",
    details: "La IA ha detectado un patrón de errores de conexión de base de datos que ocurren principalmente durante las horas pico de tráfico. Esto podría indicar un problema de configuración del pool de conexiones.",
    confidence: 87,
    recommendation: "Revisar la configuración del pool de conexiones de la base de datos y considerar aumentar el límite máximo de conexiones o implementar un sistema de cola para las solicitudes durante las horas pico.",
    severity: "high" as const,
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Total de Errores"
          value="145"
          description="Últimas 24 horas"
          icon={<AlertTriangle />}
          trend={{ value: 12, isPositive: false }}
        />
        <StatCard 
          title="Errores Críticos"
          value="13"
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
          value="7"
          description="Sin resolver"
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
