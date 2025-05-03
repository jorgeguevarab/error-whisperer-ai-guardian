
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Errors = () => {
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
      
      <div className="grid grid-cols-1 gap-6">
        <Card className="h-[400px] flex items-center justify-center border-primary/20">
          <p className="text-muted-foreground">Catálogo de errores (En desarrollo)</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Errors;
