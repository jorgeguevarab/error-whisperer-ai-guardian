
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Alerts = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Gestión de Alertas</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Sistema de Alertas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Configure y gestione las alertas del sistema para ser notificado de problemas críticos.
          </p>
        </CardContent>
      </Card>
      
      {/* Placeholder for future content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Configuración de alertas (En desarrollo)</p>
        </Card>
        <Card className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Historial de alertas (En desarrollo)</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Alerts;
