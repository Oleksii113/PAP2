import { Plus, ArrowUpRight, ArrowDownRight, Wallet, CreditCard, Building2, TrendingUp } from 'lucide-react';

const accounts = [
  { id: 1, name: 'Conta Principal - CGD', type: 'Bancária', balance: 45230.50, change: 2340.00 },
  { id: 2, name: 'Conta Poupança - BPI', type: 'Bancária', balance: 25000.00, change: -500.00 },
  { id: 3, name: 'Caixa', type: 'Numerário', balance: 1250.80, change: 120.00 },
  { id: 4, name: 'PayPal Business', type: 'Digital', balance: 3420.15, change: 890.00 },
];

const transactions = [
  { id: 1, date: '05/11/2024', description: 'Pagamento FT 2024/001 - Tech Solutions', type: 'in', amount: 1250.00, account: 'CGD', category: 'Receita' },
  { id: 2, date: '04/11/2024', description: 'Pagamento Fornecedor - Office Supplies', type: 'out', amount: 450.00, account: 'CGD', category: 'Despesa' },
  { id: 3, date: '03/11/2024', description: 'Transferência Interna', type: 'out', amount: 5000.00, account: 'CGD', category: 'Transferência' },
  { id: 4, date: '03/11/2024', description: 'Transferência Interna', type: 'in', amount: 5000.00, account: 'BPI', category: 'Transferência' },
  { id: 5, date: '02/11/2024', description: 'Pagamento Salários Outubro', type: 'out', amount: 8500.00, account: 'CGD', category: 'Pessoal' },
  { id: 6, date: '01/11/2024', description: 'Venda Online - PayPal', type: 'in', amount: 890.00, account: 'PayPal', category: 'Receita' },
];

export function TreasuryPage() {
  const totalBalance = accounts.reduce((acc, a) => acc + a.balance, 0);
  const totalInflow = transactions.filter(t => t.type === 'in').reduce((acc, t) => acc + t.amount, 0);
  const totalOutflow = transactions.filter(t => t.type === 'out' && t.category !== 'Transferência').reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-foreground">Gestão de Tesouraria</h2>
          <p className="text-muted-foreground">Controlo de contas, pagamentos e recebimentos</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-accent-foreground transition-colors hover:bg-accent/90">
          <Plus className="h-5 w-5" />
          Novo Movimento
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Saldo Total</p>
              <h3 className="text-card-foreground">€ {totalBalance.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}</h3>
            </div>
            <div className="rounded-lg bg-accent/10 p-3">
              <Wallet className="h-6 w-6 text-accent" />
            </div>
          </div>
          <p className="mt-2 text-success">+3,2% vs mês anterior</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Recebimentos (7d)</p>
              <h3 className="text-card-foreground">€ {totalInflow.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}</h3>
            </div>
            <div className="rounded-lg bg-success/10 p-3">
              <ArrowDownRight className="h-6 w-6 text-success" />
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">3 transações</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Pagamentos (7d)</p>
              <h3 className="text-card-foreground">€ {totalOutflow.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}</h3>
            </div>
            <div className="rounded-lg bg-destructive/10 p-3">
              <ArrowUpRight className="h-6 w-6 text-destructive" />
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">2 transações</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Saldo Projetado</p>
              <h3 className="text-card-foreground">€ 78.450</h3>
            </div>
            <div className="rounded-lg bg-primary/10 p-3">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">Próximos 30 dias</p>
        </div>
      </div>

      {/* Accounts */}
      <div className="rounded-lg border border-border bg-card shadow-sm">
        <div className="border-b border-border p-4">
          <h3 className="text-card-foreground">Contas Bancárias</h3>
        </div>
        <div className="p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {accounts.map((account) => (
              <div key={account.id} className="rounded-lg border border-border bg-background p-4">
                <div className="mb-3 flex items-center gap-2">
                  {account.type === 'Bancária' ? (
                    <Building2 className="h-5 w-5 text-primary" />
                  ) : account.type === 'Digital' ? (
                    <CreditCard className="h-5 w-5 text-accent" />
                  ) : (
                    <Wallet className="h-5 w-5 text-success" />
                  )}
                  <span className="text-muted-foreground">{account.type}</span>
                </div>
                <h4 className="mb-2 text-card-foreground">{account.name}</h4>
                <p className="mb-1 text-card-foreground">
                  € {account.balance.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
                </p>
                <p className={account.change >= 0 ? 'text-success' : 'text-destructive'}>
                  {account.change >= 0 ? '+' : ''}€ {Math.abs(account.change).toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-lg border border-border bg-card shadow-sm">
        <div className="border-b border-border p-4">
          <h3 className="text-card-foreground">Movimentos Recentes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left">Data</th>
                <th className="px-6 py-3 text-left">Descrição</th>
                <th className="px-6 py-3 text-left">Conta</th>
                <th className="px-6 py-3 text-left">Categoria</th>
                <th className="px-6 py-3 text-center">Tipo</th>
                <th className="px-6 py-3 text-right">Montante</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-muted-foreground">{transaction.date}</td>
                  <td className="px-6 py-4 text-card-foreground">{transaction.description}</td>
                  <td className="px-6 py-4 text-muted-foreground">{transaction.account}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-muted px-3 py-1 text-muted-foreground">
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {transaction.type === 'in' ? (
                        <div className="flex items-center gap-1 text-success">
                          <ArrowDownRight className="h-4 w-4" />
                          <span>Entrada</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-destructive">
                          <ArrowUpRight className="h-4 w-4" />
                          <span>Saída</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={transaction.type === 'in' ? 'text-success' : 'text-destructive'}
                    >
                      {transaction.type === 'in' ? '+' : '-'}€ {transaction.amount.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Payments */}
      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
        <h3 className="mb-4 text-card-foreground">Pagamentos Agendados</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-background p-3">
            <div>
              <p className="text-card-foreground">Renda Escritório</p>
              <p className="text-muted-foreground">10/11/2024</p>
            </div>
            <span className="text-card-foreground">€ 1.200,00</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-background p-3">
            <div>
              <p className="text-card-foreground">Seguro Multirriscos</p>
              <p className="text-muted-foreground">15/11/2024</p>
            </div>
            <span className="text-card-foreground">€ 450,00</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-background p-3">
            <div>
              <p className="text-card-foreground">Fornecedor IT Services</p>
              <p className="text-muted-foreground">20/11/2024</p>
            </div>
            <span className="text-card-foreground">€ 2.500,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
