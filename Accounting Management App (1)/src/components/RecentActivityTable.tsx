type Activity = {
  id: string;
  type: string;
  description: string;
  amount: string;
  status: 'paid' | 'pending' | 'overdue';
  date: string;
};

const activities: Activity[] = [
  {
    id: 'FT-2024-001',
    type: 'Fatura',
    description: 'Cliente ABC, Lda',
    amount: '€ 1.250,00',
    status: 'paid',
    date: '01/11/2024',
  },
  {
    id: 'FC-2024-045',
    type: 'Fatura Fornecedor',
    description: 'Fornecedor XYZ',
    amount: '€ 850,00',
    status: 'pending',
    date: '29/10/2024',
  },
  {
    id: 'FT-2024-002',
    type: 'Fatura',
    description: 'Cliente DEF, S.A.',
    amount: '€ 2.100,00',
    status: 'overdue',
    date: '15/10/2024',
  },
  {
    id: 'NC-2024-003',
    type: 'Nota de Crédito',
    description: 'Cliente ABC, Lda',
    amount: '-€ 150,00',
    status: 'paid',
    date: '28/10/2024',
  },
];

export function RecentActivityTable() {
  const getStatusBadge = (status: Activity['status']) => {
    const config = {
      paid: { label: 'Pago', className: 'bg-success/10 text-success' },
      pending: { label: 'Pendente', className: 'bg-warning/10 text-warning' },
      overdue: { label: 'Atrasado', className: 'bg-destructive/10 text-destructive' },
    };
    const { label, className } = config[status];
    return (
      <span className={`inline-flex items-center rounded-full px-2 py-1 ${className}`}>
        {label}
      </span>
    );
  };

  return (
    <div className="rounded-lg border border-border bg-card shadow-sm">
      <div className="border-b border-border px-6 py-4">
        <h3 className="text-card-foreground">Atividade Recente</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border bg-muted/20">
            <tr>
              <th className="px-6 py-3 text-left text-muted-foreground">ID</th>
              <th className="px-6 py-3 text-left text-muted-foreground">Tipo</th>
              <th className="px-6 py-3 text-left text-muted-foreground">Descrição</th>
              <th className="px-6 py-3 text-left text-muted-foreground">Valor</th>
              <th className="px-6 py-3 text-left text-muted-foreground">Estado</th>
              <th className="px-6 py-3 text-left text-muted-foreground">Data</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} className="border-b border-border last:border-0 hover:bg-muted/5">
                <td className="px-6 py-4 text-card-foreground">{activity.id}</td>
                <td className="px-6 py-4 text-card-foreground">{activity.type}</td>
                <td className="px-6 py-4 text-card-foreground">{activity.description}</td>
                <td className="px-6 py-4 text-card-foreground">{activity.amount}</td>
                <td className="px-6 py-4">{getStatusBadge(activity.status)}</td>
                <td className="px-6 py-4 text-muted-foreground">{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
