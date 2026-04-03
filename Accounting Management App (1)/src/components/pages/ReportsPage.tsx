import { Download, FileText, TrendingUp, BarChart3, PieChart, Plus } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Jan', value: 12500 },
  { month: 'Fev', value: 15200 },
  { month: 'Mar', value: 18900 },
  { month: 'Abr', value: 16700 },
  { month: 'Mai', value: 21400 },
  { month: 'Jun', value: 24300 },
  { month: 'Jul', value: 22100 },
  { month: 'Ago', value: 19800 },
  { month: 'Set', value: 23600 },
  { month: 'Out', value: 26400 },
];

const categoryData = [
  { name: 'Serviços', value: 45, color: '#004E53' },
  { name: 'Produtos', value: 30, color: '#009889' },
  { name: 'Consultoria', value: 15, color: '#00CB73' },
  { name: 'Outros', value: 10, color: '#e5e5e5' },
];

const reports = [
  { id: 1, name: 'Balancete Mensal', period: 'Outubro 2024', type: 'Contabilidade', date: '01/11/2024' },
  { id: 2, name: 'Demonstração de Resultados', period: 'Q3 2024', type: 'Financeiro', date: '30/10/2024' },
  { id: 3, name: 'Mapa de IVA', period: 'Outubro 2024', type: 'Fiscal', date: '25/10/2024' },
  { id: 4, name: 'Análise de Clientes', period: 'Outubro 2024', type: 'Comercial', date: '20/10/2024' },
  { id: 5, name: 'Fluxo de Caixa', period: 'Outubro 2024', type: 'Tesouraria', date: '15/10/2024' },
];

export function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-foreground">Relatórios & Análises</h2>
          <p className="text-muted-foreground">Dashboard de análise e exportação de dados</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-accent-foreground transition-colors hover:bg-accent/90">
          <Plus className="h-5 w-5" />
          Criar Relatório
        </button>
      </div>

      {/* Quick Reports */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <button className="flex flex-col items-start gap-2 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent/5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <FileText className="h-5 w-5 text-accent" />
          </div>
          <div className="text-left">
            <h4 className="text-card-foreground">Balancete</h4>
            <p className="text-muted-foreground">Último mês</p>
          </div>
        </button>

        <button className="flex flex-col items-start gap-2 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent/5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
            <TrendingUp className="h-5 w-5 text-success" />
          </div>
          <div className="text-left">
            <h4 className="text-card-foreground">SAF-T PT</h4>
            <p className="text-muted-foreground">Exportação fiscal</p>
          </div>
        </button>

        <button className="flex flex-col items-start gap-2 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent/5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <BarChart3 className="h-5 w-5 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="text-card-foreground">Análise Vendas</h4>
            <p className="text-muted-foreground">Trimestre atual</p>
          </div>
        </button>

        <button className="flex flex-col items-start gap-2 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent/5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
            <PieChart className="h-5 w-5 text-warning" />
          </div>
          <div className="text-left">
            <h4 className="text-card-foreground">Custos</h4>
            <p className="text-muted-foreground">Por categoria</p>
          </div>
        </button>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue Trend */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-card-foreground">
              Evolução de <span style={{ color: '#003833', fontWeight: 600 }}>RECEITAS</span>
            </h3>
            <p className="text-muted-foreground">Últimos 10 meses</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={revenueData}>
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
                dataKey="value"
                stroke="#00CB73"
                fill="#00CB73"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-card-foreground">
              <span style={{ color: '#003833', fontWeight: 600 }}>RECEITAS</span> por Categoria
            </h3>
            <p className="text-muted-foreground">Distribuição percentual</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <RePieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
            </RePieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {categoryData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-muted-foreground">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <h4 className="mb-3 text-card-foreground">Indicadores Chave</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">ROI</span>
              <span className="text-success">18,5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Margem Bruta</span>
              <span className="text-card-foreground">42,3%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Break-even</span>
              <span className="text-card-foreground">€ 15.400</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <h4 className="mb-3 text-card-foreground">Comparação Anual</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">2024 vs 2023</span>
              <span className="text-success">+12,5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ color: '#003833', fontWeight: 600 }}>RECEITAS</span>
              <span className="text-card-foreground">€ 234.500</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Ano anterior</span>
              <span className="text-muted-foreground">€ 208.500</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <h4 className="mb-3 text-card-foreground">Previsões</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Nov 2024 (projeção)</span>
              <span className="text-card-foreground">€ 28.100</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Dez 2024 (projeção)</span>
              <span className="text-card-foreground">€ 31.200</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Confiança</span>
              <span className="text-success">Alta (87%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="rounded-lg border border-border bg-card shadow-sm">
        <div className="border-b border-border p-4">
          <h3 className="text-card-foreground">Relatórios Recentes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left">Nome</th>
                <th className="px-6 py-3 text-left">Período</th>
                <th className="px-6 py-3 text-left">Tipo</th>
                <th className="px-6 py-3 text-left">Data</th>
                <th className="px-6 py-3 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-card-foreground">{report.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{report.period}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-accent">
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{report.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="rounded-lg p-2 text-accent transition-colors hover:bg-accent/10">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg p-2 text-primary transition-colors hover:bg-primary/10">
                        <FileText className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Options */}
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 text-card-foreground">Opções de Exportação</h3>
        <div className="grid gap-3 md:grid-cols-3">
          <button className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent/5">
            <Download className="h-5 w-5 text-accent" />
            <div className="text-left">
              <p className="text-card-foreground">Excel</p>
              <p className="text-muted-foreground">Exportar para .xlsx</p>
            </div>
          </button>
          <button className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent/5">
            <Download className="h-5 w-5 text-destructive" />
            <div className="text-left">
              <p className="text-card-foreground">PDF</p>
              <p className="text-muted-foreground">Gerar documento</p>
            </div>
          </button>
          <button className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent/5">
            <Download className="h-5 w-5 text-success" />
            <div className="text-left">
              <p className="text-card-foreground">SAF-T PT</p>
              <p className="text-muted-foreground">Ficheiro fiscal</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
