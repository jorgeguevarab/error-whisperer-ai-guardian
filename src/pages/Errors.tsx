
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Errors = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Catálogo de Errores</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Base de Conocimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Explore la biblioteca completa de errores detectados y soluciones recomendadas.
          </p>
        </CardContent>
      </Card>
      
      {/* Placeholder for future content */}
      <div className="grid grid-cols-1 gap-6">
        <Card className="h-[400px] flex items-center justify-center">
          <p className="text-muted-foreground">Catálogo de errores (En desarrollo)</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Errors;
