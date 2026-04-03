import { 
  LayoutDashboard, 
  FileText, 
  ShoppingCart, 
  Package, 
  Calculator,
  Wallet,
  Upload,
  BarChart3,
  Bot,
  Bell,
  Settings,
  Users,
  Building2
} from 'lucide-react';

type NavItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

const navigation: NavItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#dashboard' },
  { name: 'Vendas', icon: FileText, href: '#vendas' },
  { name: 'Compras', icon: ShoppingCart, href: '#compras' },
  { name: 'Inventário', icon: Package, href: '#inventario' },
  { name: 'Contabilidade', icon: Calculator, href: '#contabilidade' },
  { name: 'Tesouraria', icon: Wallet, href: '#tesouraria' },
  { name: 'Documentos', icon: Upload, href: '#documentos' },
  { name: 'Relatórios', icon: BarChart3, href: '#relatorios' },
  { name: 'Assistente IA', icon: Bot, href: '#ia' },
];

const bottomNavigation: NavItem[] = [
  { name: 'Utilizadores', icon: Users, href: '#utilizadores' },
  { name: 'Configurações', icon: Settings, href: '#configuracoes' },
];

export function Sidebar({ activeNav = 'Dashboard', onNavigate }: { activeNav?: string; onNavigate?: (nav: string) => void }) {
  return (
    <div className="flex h-screen w-64 flex-col bg-primary">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-sidebar-border px-6">
        <h1 className="text-white">OPSA</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = item.name === activeNav;
          return (
            <button
              key={item.name}
              onClick={() => onNavigate?.(item.name)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                isActive
                  ? 'bg-sidebar-primary text-white'
                  : 'text-white/90 hover:bg-sidebar-accent hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="space-y-1 border-t border-sidebar-border px-3 py-4">
        {bottomNavigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => onNavigate?.(item.name)}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-white/90 transition-colors hover:bg-sidebar-accent hover:text-white"
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}