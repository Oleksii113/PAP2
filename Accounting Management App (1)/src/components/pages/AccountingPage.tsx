import { useState } from 'react';

import { 
  Calculator, 
  Plus, 
  Search, 
  Filter,
  FileText,
  Download,
  Eye,
  TrendingUp,
  TrendingDown,
  DollarSign
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const accountingEntries = [
  {
    id: 'LC-2024-125',
    date: '2024-01-20',
    description: 'Venda - Fatura FT-2024-045',
    debit: { account: '11', name: 'Clientes', value: 1250.00 },
    credit: { account: '71', name: 'Vendas', value: 1000.00 },
    document: 'FT-2024-045'
  },
  {
    id: 'LC-2024-126',
    date: '2024-01-21',
    description: 'Compra - Fornecedor ABC',
    debit: { account: '31', name: 'Compras', value: 850.50 },
    credit: { account: '22', name: 'Fornecedores', value: 850.50 },
    document: 'FC-2024-018'
  },
  {
    id: 'LC-2024-127',
    date: '2024-01-22',
    description: 'Pagamento Fornecedor',
    debit: { account: '22', name: 'Fornecedores', value: 850.50 },
    credit: { account: '12', name: 'Depósitos Bancários', value: 850.50 },
    document: 'PG-2024-012'
  },
  {
    id: 'LC-2024-128',
    date: '2024-01-23',
    description: 'Salários Janeiro 2024',
    debit: { account: '63', name: 'Gastos com Pessoal', value: 15000.00 },
    credit: { account: '12', name: 'Depósitos Bancários', value: 15000.00 },
    document: 'SAL-2024-01'
  },
];

const balanceData = [
  { account: '11', name: 'Clientes', debit: 45230.50, credit: 42100.00, balance: 3130.50 },
  { account: '12', name: 'Depósitos Bancários', debit: 125000.00, credit: 98450.75, balance: 26549.25 },
  { account: '22', name: 'Fornecedores', debit: 18900.00, credit: 29670.50, balance: -10770.50 },
  { account: '31', name: 'Compras', debit: 142800.00, credit: 0, balance: 142800.00 },
  { account: '71', name: 'Vendas', debit: 0, credit: 234500.00, balance: -234500.00 },
];

export function AccountingPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-foreground">Contabilidade Geral</h2>
          <p className="text-muted-foreground">
            Lançamentos, balancetes e demonstrações financeiras
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar SAF-T
          </Button>
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Novo Lançamento
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              <span style={{ color: '#003833', fontWeight: 600 }}>RECEITAS</span>
            </p>
            <TrendingUp className="h-5 w-5" style={{ color: '#003833' }} />
          </div>
          <p className="mt-2 text-card-foreground">€ 234.500</p>
          <p className="mt-1 text-success">+12,5% vs mês anterior</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Custos</p>
            <TrendingDown className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-card-foreground">€ 142.800</p>
          <p className="mt-1 text-muted-foreground">+8,2% vs mês anterior</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">EBITDA</p>
            <DollarSign className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-card-foreground">€ 91.700</p>
          <p className="mt-1 text-success">Margem: 39,1%</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Lançamentos</p>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-card-foreground">1.248</p>
          <p className="mt-1 text-muted-foreground">Este mês</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="entries" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="entries">Lançamentos</TabsTrigger>
          <TabsTrigger value="balance">Balancete</TabsTrigger>
          <TabsTrigger value="statements">Demonstrações</TabsTrigger>
        </TabsList>

        {/* Lançamentos */}
        <TabsContent value="entries" className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Procurar lançamentos..."
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

          <div className="rounded-lg border border-border bg-card shadow-sm">
            <div className="p-6">
              <h3 className="text-card-foreground">Últimos Lançamentos</h3>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nº</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Débito</TableHead>
                  <TableHead>Crédito</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accountingEntries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>{entry.id}</TableCell>
                    <TableCell>{new Date(entry.date).toLocaleDateString('pt-PT')}</TableCell>
                    <TableCell>{entry.description}</TableCell>
                    <TableCell>
                      {entry.debit.account} - {entry.debit.name}
                    </TableCell>
                    <TableCell>
                      {entry.credit.account} - {entry.credit.name}
                    </TableCell>
                    <TableCell>€ {entry.debit.value.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Balancete */}
        <TabsContent value="balance" className="space-y-4">
          <div className="rounded-lg border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between p-6">
              <div>
                <h3 className="text-card-foreground">Balancete Analítico</h3>
                <p className="text-muted-foreground">Período: Janeiro 2024</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Exportar
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Conta</TableHead>
                  <TableHead>Designação</TableHead>
                  <TableHead className="text-right">Débito</TableHead>
                  <TableHead className="text-right">Crédito</TableHead>
                  <TableHead className="text-right">Saldo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {balanceData.map((item) => (
                  <TableRow key={item.account}>
                    <TableCell>{item.account}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-right">
                      € {item.debit.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell className="text-right">
                      € {item.credit.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell className={`text-right ${item.balance >= 0 ? 'text-success' : 'text-destructive'}`}>
                      € {Math.abs(item.balance).toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Demonstrações */}
        <TabsContent value="statements" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-card-foreground">Demonstração de Resultados</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground" style={{ color: '#003833' }}>RECEITAS</span>
                  <span className="text-card-foreground">€ 234.500</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">(-) Custos Variáveis</span>
                  <span className="text-card-foreground">€ 85.600</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">(-) Custos Fixos</span>
                  <span className="text-card-foreground">€ 57.200</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">EBITDA</span>
                  <span className="text-success">€ 91.700</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-muted-foreground">(-) Amortizações</span>
                  <span className="text-card-foreground">€ 12.500</span>
                </div>
                <div className="flex justify-between border-t-2 border-border pt-2">
                  <span className="">Resultado Líquido</span>
                  <span className="text-success">€ 79.200</span>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full gap-2">
                <Download className="h-4 w-4" />
                Exportar PDF
              </Button>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-card-foreground">Balanço</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Ativo Corrente</span>
                  <span className="text-card-foreground">€ 156.300</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Ativo Não Corrente</span>
                  <span className="text-card-foreground">€ 85.700</span>
                </div>
                <div className="flex justify-between border-b-2 border-border pb-2">
                  <span className="">Total Ativo</span>
                  <span className="">€ 242.000</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2 pt-2">
                  <span className="text-muted-foreground">Passivo Corrente</span>
                  <span className="text-card-foreground">€ 45.600</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Passivo Não Corrente</span>
                  <span className="text-card-foreground">€ 67.200</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Capital Próprio</span>
                  <span className="text-card-foreground">€ 129.200</span>
                </div>
                <div className="flex justify-between border-t-2 border-border pt-2">
                  <span className="">Total Passivo + CP</span>
                  <span className="">€ 242.000</span>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full gap-2">
                <Download className="h-4 w-4" />
                Exportar PDF
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
