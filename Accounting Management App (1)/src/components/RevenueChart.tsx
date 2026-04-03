import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', receita: 12500, despesas: 8200 },
  { month: 'Fev', receita: 15200, despesas: 9100 },
  { month: 'Mar', receita: 18900, despesas: 11300 },
  { month: 'Abr', receita: 16700, despesas: 10200 },
  { month: 'Mai', receita: 21400, despesas: 12800 },
  { month: 'Jun', receita: 24300, despesas: 14100 },
  { month: 'Jul', receita: 22100, despesas: 13500 },
  { month: 'Ago', receita: 19800, despesas: 11900 },
  { month: 'Set', receita: 23600, despesas: 14700 },
  { month: 'Out', receita: 26400, despesas: 15900 },
];

export function RevenueChart() {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-card-foreground">
          <span style={{ color: '#003833', fontWeight: 600 }}>RECEITAS</span> vs Despesas
        </h3>
        <p className="text-muted-foreground">Evolução mensal (2024)</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#009889" opacity={0.1} />
          <XAxis dataKey="month" stroke="#004E53" />
          <YAxis stroke="#004E53" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #009889',
              borderRadius: '8px',
            }}
            formatter={(value: number) => `€ ${value.toLocaleString('pt-PT')}`}
          />
          <Area
            type="monotone"
            dataKey="receita"
            stackId="1"
            stroke="#00CB73"
            fill="#00CB73"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="despesas"
            stackId="2"
            stroke="#009889"
            fill="#009889"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#00CB73]"></div>
          <span style={{ color: '#003833', fontWeight: 600 }}>RECEITAS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#009889]"></div>
          <span className="text-muted-foreground">Despesas</span>
        </div>
      </div>
    </div>
  );
}
