
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-md">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="h-16 w-16 text-error-high" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-error-high">Error 404</h1>
        <p className="text-xl mb-6 text-foreground">La página que buscas no existe</p>
        <p className="text-muted-foreground mb-8">
          Lo sentimos, la ruta solicitada no pudo ser encontrada. Por favor, verifica la URL o regresa al panel de control.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            Volver al Panel de Control
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
