
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analysis = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Análisis de Errores</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Herramientas de Análisis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Utilice las herramientas avanzadas de análisis de errores para identificar patrones y causas raíz.
          </p>
        </CardContent>
      </Card>
      
      {/* Placeholder for future content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Análisis de correlación (En desarrollo)</p>
        </Card>
        <Card className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Análisis de causa raíz (En desarrollo)</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Analysis;
