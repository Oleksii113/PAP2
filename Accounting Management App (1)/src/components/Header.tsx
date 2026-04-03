import { Bell, ChevronDown, Search } from 'lucide-react';

export function Header({ title = 'Dashboard' }: { title?: string }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      {/* Breadcrumb and Title */}
      <div className="flex items-center gap-4">
        <h2 className="text-card-foreground">{title}</h2>
      </div>

      {/* Search and User */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="h-10 w-64 rounded-lg border border-border bg-input-background pl-10 pr-4 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Notifications */}
        <button className="relative rounded-lg p-2 hover:bg-accent">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive"></span>
        </button>

        {/* User Menu */}
        <button className="flex items-center gap-2 rounded-lg p-2 hover:bg-accent">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span>AD</span>
          </div>
          <span className="text-foreground">Andre Ribeiro</span>
          <ChevronDown className="h-4 w-4 text-foreground" />
        </button>
      </div>
    </header>
  );
}
