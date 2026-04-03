import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { KpiCard } from './components/KpiCard';
import { InsightCard } from './components/InsightCard';
import { RecentActivityTable } from './components/RecentActivityTable';
import { RevenueChart } from './components/RevenueChart';
import { SalesPage } from './components/pages/SalesPage';
import { PurchasesPage } from './components/pages/PurchasesPage';
import { InventoryPage } from './components/pages/InventoryPage';
import { AccountingPage } from './components/pages/AccountingPage';
import { TreasuryPage } from './components/pages/TreasuryPage';
import { DocumentsPage } from './components/pages/DocumentsPage';
import { ReportsPage } from './components/pages/ReportsPage';
import { AIAssistantPage } from './components/pages/AIAssistantPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { UsersPage } from './components/pages/UsersPage';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Package,
  Clock,
  FileText,
  Wallet,
  Download,
  Boxes,
  UserPlus,
  Building2
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <Sidebar activeNav={activePage} onNavigate={setActivePage} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Header title={activePage} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {activePage === 'Dashboard' && (
          <>
          {/* Welcome Section */}
          <div className="mb-6">
            <h1 className="text-foreground">Bem-vindo ao OPSA</h1>
            <p className="text-muted-foreground">
              Gestão de contabilidade inteligente para o seu negócio
            </p>
          </div>

          {/* KPIs */}
          <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <KpiCard
              title={
                <>
                  <span style={{ color: '#003833', fontWeight: 600 }}>RECEITA</span> Total
                </>
              }
              value="€ 234.500"
              change="+12,5%"
              trend="up"
              icon={TrendingUp}
            />
            <KpiCard
              title="Despesas"
              value="€ 142.800"
              change="+8,2%"
              trend="down"
              icon={DollarSign}
            />
            <KpiCard
              title="Clientes Ativos"
              value="156"
              change="+23"
              trend="up"
              icon={Users}
            />
            <KpiCard
              title="Stock Total"
              value="€ 89.300"
              change="-2,1%"
              trend="neutral"
              icon={Package}
            />
          </div>

          {/* Charts Section */}
          <div className="mb-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            
            {/* Quick Stats */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-card-foreground">Estatísticas Rápidas</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">EBITDA</span>
                  <span className="text-card-foreground">€ 91.700</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Margem Líquida</span>
                  <span className="text-success">39,1%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">PMR (dias)</span>
                  <span className="text-warning">45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">PMP (dias)</span>
                  <span className="text-card-foreground">32</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Faturas Pendentes</span>
                  <span className="text-destructive">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cashflow Projetado</span>
                  <span className="text-success">€ 45.200</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-2">
              <h3 className="text-foreground">Insights do Assistente IA</h3>
              <span className="rounded-full bg-accent px-2 py-1 text-accent-foreground">
                Novo
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <InsightCard
                type="success"
                title="Crescimento Sustentável"
                description="As suas RECEITAS aumentaram 12,5% este mês. A tendência mantém-se positiva há 3 meses consecutivos."
                action="Ver detalhes"
              />
              <InsightCard
                type="warning"
                title="Prazo Médio de Recebimento Alto"
                description="O PMR está em 45 dias, 15 dias acima da média do setor. Considere rever as condições de pagamento."
                action="Analisar clientes"
              />
              <InsightCard
                type="info"
                title="Oportunidade de Otimização"
                description="Identificámos 5 artigos parados há mais de 90 dias no stock, representando € 8.500."
                action="Ver artigos"
              />
              <InsightCard
                type="danger"
                title="Atenção: Faturas Atrasadas"
                description="12 faturas estão por receber há mais de 30 dias, totalizando € 18.400."
                action="Contactar clientes"
              />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-6">
            <RecentActivityTable />
          </div>

          {/* Quick Actions */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <button className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Clock className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-card-foreground">Criar Fatura</h4>
                <p className="text-muted-foreground">Emitir nova fatura</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Package className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-card-foreground">Registar Compra</h4>
                <p className="text-muted-foreground">Adicionar fatura de fornecedor</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <TrendingUp className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-card-foreground">Gerar Relatório</h4>
                <p className="text-muted-foreground">Exportar dados</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <UserPlus className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-card-foreground">Adicionar Cliente</h4>
                <p className="text-muted-foreground">Registar novo cliente</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <FileText className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-card-foreground">Lançamento Manual</h4>
                <p className="text-muted-foreground">Criar lançamento contabilístico</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Wallet className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-card-foreground">Ver Tesouraria</h4>
                <p className="text-muted-foreground">Consultar movimentos</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Download className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-card-foreground">Exportar SAF-T</h4>
                <p className="text-muted-foreground">Gerar ficheiro SAF-T PT</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Boxes className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-card-foreground">Consultar Stock</h4>
                <p className="text-muted-foreground">Ver inventário atual</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Building2 className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <h4 className="text-card-foreground">Adicionar Fornecedor</h4>
                <p className="text-muted-foreground">Registar novo fornecedor</p>
              </div>
            </button>
          </div>
          </>
          )}

          {activePage === 'Vendas' && <SalesPage />}
          {activePage === 'Compras' && <PurchasesPage />}
          {activePage === 'Inventário' && <InventoryPage />}
          {activePage === 'Contabilidade' && <AccountingPage />}
          {activePage === 'Tesouraria' && <TreasuryPage />}
          {activePage === 'Documentos' && <DocumentsPage />}
          {activePage === 'Relatórios' && <ReportsPage />}
          {activePage === 'Assistente IA' && <AIAssistantPage />}
          {activePage === 'Configurações' && <SettingsPage />}
          {activePage === 'Utilizadores' && <UsersPage />}
        </main>
      </div>
    </div>
  );
}