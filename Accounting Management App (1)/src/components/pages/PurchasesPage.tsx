import { useState } from 'react';
import { 
  ShoppingCart, 
  Plus, 
  Search, 
  Filter,
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  Download,
  Eye,
  Upload
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Badge } from '../ui/badge';

const purchasesData = [
  {
    id: 'FC-2024-001',
    supplier: 'Fornecedor ABC, Lda',
    date: '2024-01-15',
    dueDate: '2024-02-15',
    amount: 5420.50,
    status: 'Aprovado',
    paid: 0
  },
  {
    id: 'FC-2024-002',
    supplier: 'Materiais Tech, SA',
    date: '2024-01-18',
    dueDate: '2024-02-18',
    amount: 3250.00,
    status: 'Pendente',
    paid: 0
  },
  {
    id: 'FC-2024-003',
    supplier: 'Serviços Premium',
    date: '2024-01-20',
    dueDate: '2024-02-20',
    amount: 8900.75,
    status: 'Pago',
    paid: 8900.75
  },
  {
    id: 'FC-2024-004',
    supplier: 'Distribuidor XYZ',
    date: '2024-01-22',
    dueDate: '2024-02-22',
    amount: 2100.00,
    status: 'Rascunho',
    paid: 0
  },
];

const statusColors = {
  'Aprovado': 'bg-green-100 text-green-800 border-green-300',
  'Pendente': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'Pago': 'bg-blue-100 text-blue-800 border-blue-300',
  'Rascunho': 'bg-gray-100 text-gray-800 border-gray-300',
  'Rejeitado': 'bg-red-100 text-red-800 border-red-300',
};

export function PurchasesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-foreground">Compras</h2>
          <p className="text-muted-foreground">
            Gestão de faturas de fornecedores e pagamentos
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Importar
          </Button>
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Nova Fatura
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Total em Aberto</p>
            <ShoppingCart className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-card-foreground">€ 10.770,50</p>
          <p className="mt-1 text-muted-foreground">3 faturas</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Pendente Aprovação</p>
            <Clock className="h-5 w-5 text-warning" />
          </div>
          <p className="mt-2 text-card-foreground">€ 3.250,00</p>
          <p className="mt-1 text-muted-foreground">1 fatura</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Pago Este Mês</p>
            <CheckCircle className="h-5 w-5 text-success" />
          </div>
          <p className="mt-2 text-card-foreground">€ 8.900,75</p>
          <p className="mt-1 text-muted-foreground">1 fatura</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">PMP (dias)</p>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-card-foreground">32</p>
          <p className="mt-1 text-success">Dentro do limite</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Procurar por fornecedor, número ou valor..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
        </div>
      </div>

      {/* Purchases Table */}
      <div className="rounded-lg border border-border bg-card shadow-sm">
        <div className="p-6">
          <h3 className="text-card-foreground">Faturas de Fornecedores</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Número</TableHead>
              <TableHead>Fornecedor</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Vencimento</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Pago</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchasesData.map((purchase) => (
              <TableRow key={purchase.id}>
                <TableCell>{purchase.id}</TableCell>
                <TableCell>{purchase.supplier}</TableCell>
                <TableCell>{new Date(purchase.date).toLocaleDateString('pt-PT')}</TableCell>
                <TableCell>{new Date(purchase.dueDate).toLocaleDateString('pt-PT')}</TableCell>
                <TableCell>€ {purchase.amount.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}</TableCell>
                <TableCell>€ {purchase.paid.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}</TableCell>
                <TableCell>
                  <Badge className={statusColors[purchase.status as keyof typeof statusColors]}>
                    {purchase.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    {purchase.status === 'Pendente' && (
                      <>
                        <Button variant="ghost" size="sm" className="text-success">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
