
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface AIAnalysisProps {
  analysis: {
    title: string;
    details: string;
    confidence: number;
    recommendation: string;
    severity: "low" | "medium" | "high" | "critical";
  };
}

export function AIAnalysisCard({ analysis }: AIAnalysisProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-error-critical";
      case "high":
        return "text-error-high";
      case "medium":
        return "text-error-medium";
      case "low":
        return "text-error-low";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="col-span-2 overflow-hidden">
      <CardHeader className="bg-accent/50">
        <div className="flex items-center gap-2">
          <AlertTriangle className={`h-5 w-5 ${getSeverityColor(analysis.severity)}`} />
          <CardTitle className="text-base">Análisis de IA</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-2">
        <h3 className="font-semibold">{analysis.title}</h3>
        <div className="text-sm text-muted-foreground">
          <p>{analysis.details}</p>
          <div className="mt-4 flex items-center justify-between">
            <span>Confianza:</span>
            <div className="h-2 w-24 rounded-full bg-secondary overflow-hidden">
              <div 
                className="h-full bg-primary" 
                style={{ width: `${analysis.confidence}%` }} 
              />
            </div>
            <span>{analysis.confidence}%</span>
          </div>
        </div>
        <div className="mt-2 p-3 bg-secondary/50 rounded-lg text-sm">
          <p className="font-medium">Recomendación:</p>
          <p className="text-muted-foreground mt-1">{analysis.recommendation}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Ver análisis completo
        </Button>
      </CardFooter>
    </Card>
  );
}
