
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Configuración</h1>
      
      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="ai">IA</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card className="mb-6 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">Preferencias del Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Configure las preferencias generales del sistema Simetrik Error Whisperer.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="h-[300px] flex items-center justify-center border-primary/20">
              <p className="text-muted-foreground">Configuración general (En desarrollo)</p>
            </Card>
            <Card className="h-[300px] flex items-center justify-center border-primary/20">
              <p className="text-muted-foreground">Parámetros del sistema (En desarrollo)</p>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="ai">
          <Card className="mb-6 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Configuración de IA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ajuste los parámetros de la inteligencia artificial y el análisis automático.
              </p>
            </CardContent>
          </Card>
          
          <Card className="h-[300px] flex items-center justify-center border-primary/20">
            <p className="text-muted-foreground">Configuración de IA (En desarrollo)</p>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="mb-6 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Preferencias de Notificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Configure cómo y cuándo recibir alertas sobre errores y anomalías.
              </p>
            </CardContent>
          </Card>
          
          <Card className="h-[300px] flex items-center justify-center border-primary/20">
            <p className="text-muted-foreground">Configuración de notificaciones (En desarrollo)</p>
          </Card>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Settings;
