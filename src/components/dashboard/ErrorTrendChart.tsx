
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ErrorTrendChartProps {
  data: Array<{
    date: string;
    errors: number;
    anomalies: number;
  }>;
}

export function ErrorTrendChart({ data }: ErrorTrendChartProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Tendencia de Errores y Anomalías</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis 
              dataKey="date" 
              stroke="#888888" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
              itemStyle={{ color: '#ffffff' }}
              labelStyle={{ color: '#ffffff' }}
            />
            <Line
              type="monotone"
              dataKey="errors"
              stroke="#8B5CF6"
              strokeWidth={2}
              activeDot={{ r: 6 }}
              name="Errores"
            />
            <Line
              type="monotone"
              dataKey="anomalies"
              stroke="#F97316"
              strokeWidth={2}
              activeDot={{ r: 6 }}
              name="Anomalías"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
