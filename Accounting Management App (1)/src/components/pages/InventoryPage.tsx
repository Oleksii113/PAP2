import { Plus, Search, Filter, Download, Package, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';

const products = [
  { id: 'PRD001', name: 'Laptop Dell XPS 15', category: 'Informática', stock: 12, min: 5, max: 20, cost: 1200, price: 1599, movement: 'in' },
  { id: 'PRD002', name: 'Monitor LG 27"', category: 'Informática', stock: 3, min: 5, max: 15, cost: 250, price: 349, movement: 'out' },
  { id: 'PRD003', name: 'Teclado Mecânico', category: 'Periféricos', stock: 25, min: 10, max: 30, cost: 45, price: 79, movement: 'in' },
  { id: 'PRD004', name: 'Mouse Logitech MX Master', category: 'Periféricos', stock: 18, min: 8, max: 25, cost: 60, price: 99, movement: 'in' },
  { id: 'PRD005', name: 'Webcam HD', category: 'Periféricos', stock: 0, min: 5, max: 15, cost: 35, price: 59, movement: 'out' },
  { id: 'PRD006', name: 'Headset Professional', category: 'Áudio', stock: 14, min: 6, max: 20, cost: 80, price: 129, movement: 'in' },
];

export function InventoryPage() {
  const totalValue = products.reduce((acc, p) => acc + (p.stock * p.cost), 0);
  const lowStockItems = products.filter(p => p.stock < p.min).length;
  const outOfStockItems = products.filter(p => p.stock === 0).length;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-foreground">Gestão de Inventário</h2>
          <p className="text-muted-foreground">Controlo de stock e movimentos de armazém</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 transition-colors hover:bg-muted">
            <Download className="h-5 w-5" />
            Importar
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-accent-foreground transition-colors hover:bg-accent/90">
            <Plus className="h-5 w-5" />
            Novo Artigo
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Valor Total Stock</p>
              <h3 className="text-card-foreground">€ {totalValue.toLocaleString('pt-PT')}</h3>
            </div>
            <div className="rounded-lg bg-accent/10 p-3">
              <Package className="h-6 w-6 text-accent" />
            </div>
          </div>
          <p className="mt-2 text-success">+5,2% vs mês anterior</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Total de Artigos</p>
              <h3 className="text-card-foreground">{products.length}</h3>
            </div>
            <div className="rounded-lg bg-primary/10 p-3">
              <Package className="h-6 w-6 text-primary" />
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">Em 4 categorias</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Stock Baixo</p>
              <h3 className="text-card-foreground">{lowStockItems}</h3>
            </div>
            <div className="rounded-lg bg-warning/10 p-3">
              <AlertTriangle className="h-6 w-6 text-warning" />
            </div>
          </div>
          <p className="mt-2 text-warning">Requer atenção</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Sem Stock</p>
              <h3 className="text-card-foreground">{outOfStockItems}</h3>
            </div>
            <div className="rounded-lg bg-destructive/10 p-3">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
          </div>
          <p className="mt-2 text-destructive">Ação urgente</p>
        </div>
      </div>

      {/* Category Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <h4 className="mb-3 text-card-foreground">Movimentos Recentes</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="text-muted-foreground">Entradas (7 dias)</span>
              </div>
              <span className="text-card-foreground">142</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-destructive" />
                <span className="text-muted-foreground">Saídas (7 dias)</span>
              </div>
              <span className="text-card-foreground">98</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <h4 className="mb-3 text-card-foreground">Por Categoria</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Informática</span>
              <span className="text-card-foreground">2 itens</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Periféricos</span>
              <span className="text-card-foreground">3 itens</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Áudio</span>
              <span className="text-card-foreground">1 item</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <h4 className="mb-3 text-card-foreground">Alertas</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="text-destructive">Webcam HD sem stock</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-warning/10 p-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <span className="text-warning">Monitor LG abaixo mínimo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-input-background px-3 py-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Procurar artigos..."
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

      {/* Products Table */}
      <div className="rounded-lg border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left">Código</th>
                <th className="px-6 py-3 text-left">Artigo</th>
                <th className="px-6 py-3 text-left">Categoria</th>
                <th className="px-6 py-3 text-center">Stock</th>
                <th className="px-6 py-3 text-center">Mín/Máx</th>
                <th className="px-6 py-3 text-right">Custo</th>
                <th className="px-6 py-3 text-right">PVP</th>
                <th className="px-6 py-3 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-card-foreground">{product.id}</td>
                  <td className="px-6 py-4 text-card-foreground">{product.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{product.category}</td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 ${
                        product.stock === 0
                          ? 'bg-destructive/10 text-destructive'
                          : product.stock < product.min
                          ? 'bg-warning/10 text-warning'
                          : 'bg-success/10 text-success'
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-muted-foreground">
                    {product.min} / {product.max}
                  </td>
                  <td className="px-6 py-4 text-right text-muted-foreground">
                    € {product.cost.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-right text-card-foreground">
                    € {product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {product.movement === 'in' ? (
                        <TrendingUp className="h-5 w-5 text-success" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-destructive" />
                      )}
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
