import { LucideIcon } from 'lucide-react';
import React from 'react';

type KpiCardProps = {
  title: string | React.ReactNode;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
};

export function KpiCard({ title, value, change, trend, icon: Icon }: KpiCardProps) {
  const trendColor =
    trend === 'up' ? 'text-success' : trend === 'down' ? 'text-destructive' : 'text-warning';
  
  const trendBg =
    trend === 'up' ? 'bg-success/10' : trend === 'down' ? 'bg-destructive/10' : 'bg-warning/10';

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-muted-foreground">{title}</p>
          <p className="mt-2 text-card-foreground">{value}</p>
          <div className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-1 ${trendBg}`}>
            <span className={trendColor}>{change}</span>
          </div>
        </div>
        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
