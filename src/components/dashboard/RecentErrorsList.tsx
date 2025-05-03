
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Error {
  id: string;
  message: string;
  timestamp: string;
  component: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "new" | "investigating" | "resolved";
}

interface RecentErrorsListProps {
  errors: Error[];
  className?: string;
}

export function RecentErrorsList({ errors, className }: RecentErrorsListProps) {
  const getSeverityColor = (severity: Error["severity"]) => {
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

  const getStatusColor = (status: Error["status"]) => {
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

  return (
    <Card className={cn("col-span-3", className)}>
      <CardHeader>
        <CardTitle>Errores Recientes</CardTitle>
        <CardDescription>
          Últimos errores detectados por el sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {errors.map((error) => (
            <div
              key={error.id}
              className="flex items-start justify-between rounded-lg border p-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge className={getSeverityColor(error.severity)}>
                    {error.severity.toUpperCase()}
                  </Badge>
                  <Badge className={getStatusColor(error.status)}>
                    {error.status}
                  </Badge>
                </div>
                <p className="text-sm font-medium leading-none">
                  {error.message}
                </p>
                <div className="flex text-xs text-muted-foreground gap-2">
                  <span>{error.component}</span>
                  <span>•</span>
                  <span>{error.timestamp}</span>
                </div>
              </div>
              <div>
                <Button variant="outline" size="sm">
                  Analizar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Ver todos los errores
        </Button>
      </CardFooter>
    </Card>
  );
}
