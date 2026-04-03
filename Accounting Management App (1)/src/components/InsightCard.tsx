import { Sparkles, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

type InsightCardProps = {
  title: string;
  description: string;
  action?: string;
  type: 'success' | 'warning' | 'info' | 'danger';
};

export function InsightCard({ title, description, action, type }: InsightCardProps) {
  const config = {
    success: {
      icon: TrendingUp,
      color: 'text-success',
      bg: 'bg-success/10',
      border: 'border-success/20',
    },
    warning: {
      icon: AlertTriangle,
      color: 'text-warning',
      bg: 'bg-warning/10',
      border: 'border-warning/20',
    },
    info: {
      icon: Sparkles,
      color: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/20',
    },
    danger: {
      icon: TrendingDown,
      color: 'text-destructive',
      bg: 'bg-destructive/10',
      border: 'border-destructive/20',
    },
  };

  const { icon: Icon, color, bg, border } = config[type];

  // Highlight "RECEITAS" in dark green
  const highlightReceitas = (text: string) => {
    const parts = text.split(/(RECEITAS)/g);
    return parts.map((part, index) => 
      part === 'RECEITAS' ? (
        <span key={index} style={{ color: '#003833', fontWeight: 600 }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`rounded-lg border ${border} bg-card p-4 shadow-sm`}>
      <div className="flex gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bg}`}>
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
        <div className="flex-1">
          <h4 className="text-card-foreground">{title}</h4>
          <p className="mt-1 text-muted-foreground">{highlightReceitas(description)}</p>
          {action && (
            <button className="mt-2 text-primary hover:underline">
              {action} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
