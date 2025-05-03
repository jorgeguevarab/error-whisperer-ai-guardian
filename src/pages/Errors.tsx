
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
import { Search } from "lucide-react";
import { useState } from "react";
import { errorCategories } from "@/data/errorCategories";

const Errors = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getSeverityColor = (severity: "critical" | "high" | "medium" | "low") => {
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

  const getStatusColor = (status: "new" | "investigating" | "resolved") => {
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
