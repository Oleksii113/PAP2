import { Plus, Search, Filter, Download, Eye, Edit, Trash2, CheckCircle, Clock, XCircle } from 'lucide-react';

const invoices = [
  { id: 'FT 2024/001', client: 'Tech Solutions Lda', date: '05/11/2024', value: 1250.00, status: 'paid', dueDate: '05/12/2024' },
  { id: 'FT 2024/002', client: 'Digital Marketing SA', date: '03/11/2024', value: 3400.50, status: 'pending', dueDate: '03/12/2024' },
  { id: 'FT 2024/003', client: 'Consultoria Estratégica', date: '01/11/2024', value: 890.00, status: 'overdue', dueDate: '01/11/2024' },
  { id: 'FT 2024/004', client: 'Inovação Digital', date: '30/10/2024', value: 2150.75, status: 'paid', dueDate: '30/11/2024' },
  { id: 'FT 2024/005', client: 'Serviços Profissionais', date: '28/10/2024', value: 1680.00, status: 'pending', dueDate: '28/11/2024' },
];

export function SalesPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-foreground">Vendas & Faturação</h2>
          <p className="text-muted-foreground">Gerir faturas, clientes e vendas</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-accent-foreground transition-colors hover:bg-accent/90">
          <Plus className="h-5 w-5" />
          Nova Fatura
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Faturado (mês)</p>
              <h3 className="text-card-foreground">€ 24.300</h3>
            </div>
            <div className="rounded-lg bg-success/10 p-3">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
          </div>
          <p className="mt-2 text-success">+18,5% vs mês anterior</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">A Receber</p>
              <h3 className="text-card-foreground">€ 6.971,25</h3>
            </div>
            <div className="rounded-lg bg-warning/10 p-3">
              <Clock className="h-6 w-6 text-warning" />
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">5 faturas pendentes</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Atrasadas</p>
              <h3 className="text-card-foreground">€ 890,00</h3>
            </div>
            <div className="rounded-lg bg-destructive/10 p-3">
              <XCircle className="h-6 w-6 text-destructive" />
            </div>
          </div>
          <p className="mt-2 text-destructive">1 fatura vencida</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Clientes Ativos</p>
              <h3 className="text-card-foreground">156</h3>
            </div>
            <div className="rounded-lg bg-accent/10 p-3">
              <CheckCircle className="h-6 w-6 text-accent" />
            </div>
          </div>
          <p className="mt-2 text-success">+12 novos este mês</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-input-background px-3 py-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Procurar faturas ou clientes..."
              className="flex-1 bg-transparent outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded-lg border border-border bg-input-background px-4 py-2 transition-colors hover:bg-muted">
              <Filter className="h-5 w-5" />
              Filtros
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-border bg-input-background px-4 py-2 transition-colors hover:bg-muted">
              <Download className="h-5 w-5" />
              Exportar
            </button>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="rounded-lg border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left">Nº Fatura</th>
                <th className="px-6 py-3 text-left">Cliente</th>
                <th className="px-6 py-3 text-left">Data Emissão</th>
                <th className="px-6 py-3 text-left">Vencimento</th>
                <th className="px-6 py-3 text-right">Valor</th>
                <th className="px-6 py-3 text-center">Estado</th>
                <th className="px-6 py-3 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-card-foreground">{invoice.id}</td>
                  <td className="px-6 py-4">{invoice.client}</td>
                  <td className="px-6 py-4 text-muted-foreground">{invoice.date}</td>
                  <td className="px-6 py-4 text-muted-foreground">{invoice.dueDate}</td>
                  <td className="px-6 py-4 text-right text-card-foreground">
                    € {invoice.value.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 ${
                          invoice.status === 'paid'
                            ? 'bg-success/10 text-success'
                            : invoice.status === 'pending'
                            ? 'bg-warning/10 text-warning'
                            : 'bg-destructive/10 text-destructive'
                        }`}
                      >
                        {invoice.status === 'paid' ? 'Pago' : invoice.status === 'pending' ? 'Pendente' : 'Vencido'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="rounded-lg p-2 text-accent transition-colors hover:bg-accent/10">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg p-2 text-primary transition-colors hover:bg-primary/10">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg p-2 text-destructive transition-colors hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
