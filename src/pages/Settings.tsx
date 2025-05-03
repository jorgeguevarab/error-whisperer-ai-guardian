
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Settings = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Configuración</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Preferencias del Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Configure las preferencias del sistema y los ajustes de la IA.
          </p>
        </CardContent>
      </Card>
      
      {/* Placeholder for future content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Configuración general (En desarrollo)</p>
        </Card>
        <Card className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Configuración de IA (En desarrollo)</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;
