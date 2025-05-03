
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend, 
  Tooltip 
} from "recharts";

interface ErrorSeverityProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

export function ErrorSeverityChart({ data }: ErrorSeverityProps) {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Distribución por Severidad</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              innerRadius={40}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value} errores`, 'Cantidad']}
              labelFormatter={(label) => `Severidad: ${label}`}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
