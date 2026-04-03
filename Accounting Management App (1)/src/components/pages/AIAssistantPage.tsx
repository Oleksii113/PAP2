import { Bot, Send, Sparkles, TrendingUp, AlertTriangle, Lightbulb, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const insights = [
  {
    id: 1,
    type: 'opportunity',
    icon: Lightbulb,
    title: 'Oportunidade de Crescimento',
    description: (
      <>
        Os clientes do setor tecnológico representam 45% das suas{' '}
        <span style={{ color: '#003833', fontWeight: 600 }}>RECEITAS</span> e têm uma taxa de crescimento de 18% ao mês. Considere expandir a oferta para este segmento.
      </>
    ),
    impact: 'Alto',
    confidence: 92,
  },
  {
    id: 2,
    type: 'warning',
    icon: AlertTriangle,
    title: 'Risco de Cashflow',
    description: 'Identificámos que o prazo médio de recebimento aumentou 12 dias nos últimos 2 meses. Isto pode afetar a liquidez no próximo trimestre.',
    impact: 'Médio',
    confidence: 87,
  },
  {
    id: 3,
    type: 'optimization',
    icon: TrendingUp,
    title: 'Otimização de Custos',
    description: 'Os gastos com fornecedores de IT aumentaram 23% sem aumento proporcional de receita. Renegociação pode poupar € 3.500/mês.',
    impact: 'Alto',
    confidence: 95,
  },
  {
    id: 4,
    type: 'success',
    icon: CheckCircle,
    title: 'Tendência Positiva',
    description: 'A margem de lucro melhorou 5,2% nos últimos 3 meses, principalmente devido à otimização de processos operacionais.',
    impact: 'Positivo',
    confidence: 98,
  },
];

const suggestions = [
  'Como posso melhorar o meu cashflow?',
  'Quais são os clientes mais rentáveis?',
  'Análise de despesas do último trimestre',
  'Previsão de RECEITAS para o próximo mês',
];

const chatHistory = [
  {
    role: 'assistant',
    message: 'Olá! Sou o assistente de IA da OPSA. Como posso ajudá-lo hoje com a gestão do seu negócio?',
  },
  {
    role: 'user',
    message: 'Podes analisar o desempenho das vendas este mês?',
  },
  {
    role: 'assistant',
    message: 'Claro! Analisando os dados de vendas de Outubro 2024:\n\n📈 Receita total: € 26.400 (+15% vs Setembro)\n✅ 23 faturas emitidas\n⏰ Prazo médio de recebimento: 45 dias\n🎯 Taxa de conversão: 68%\n\nPontos positivos:\n• Crescimento consistente pelo 4º mês consecutivo\n• Aumento de 12 novos clientes\n\nÁreas de atenção:\n• PMR está 15 dias acima da média do setor\n• 3 clientes representam 40% da receita (risco de concentração)',
  },
];

export function AIAssistantPage() {
  const [message, setMessage] = useState('');

  // Highlight "RECEITAS" in dark green
  const highlightReceitas = (text: string | React.ReactNode) => {
    if (typeof text !== 'string') return text;
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
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-foreground">Assistente de IA</h2>
          <p className="text-muted-foreground">Análise inteligente e insights automáticos para o seu negócio</p>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <span className="text-accent">IA Ativa</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-border bg-card shadow-sm">
            <div className="border-b border-border p-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-accent" />
                <h3 className="text-card-foreground">Chat com IA</h3>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[500px] space-y-4 overflow-y-auto p-4">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      msg.role === 'user'
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Faça uma pergunta sobre o seu negócio..."
                  className="flex-1 rounded-lg border border-border bg-input-background px-4 py-2 outline-none focus:border-accent"
                />
                <button className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-accent-foreground transition-colors hover:bg-accent/90">
                  <Send className="h-5 w-5" />
                </button>
              </div>

              {/* Quick Suggestions */}
              <div className="mt-3 flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(suggestion)}
                    className="rounded-full border border-border bg-background px-3 py-1 transition-colors hover:bg-muted"
                  >
                    {highlightReceitas(suggestion)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Insights Panel */}
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <h3 className="mb-4 text-card-foreground">Capacidades da IA</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-accent/10 p-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-card-foreground">Análise Preditiva</p>
                  <p className="text-muted-foreground">
                    Previsões de <span style={{ color: '#003833', fontWeight: 600 }}>RECEITAS</span> e despesas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-success/10 p-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="text-card-foreground">Deteção de Padrões</p>
                  <p className="text-muted-foreground">Identifica tendências automaticamente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-warning/10 p-2">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                </div>
                <div>
                  <p className="text-card-foreground">Alertas Inteligentes</p>
                  <p className="text-muted-foreground">Notificações sobre riscos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-card-foreground">Recomendações</p>
                  <p className="text-muted-foreground">Sugestões de otimização</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <h3 className="mb-4 text-card-foreground">Estatísticas de Uso</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Consultas este mês</span>
                <span className="text-card-foreground">142</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Insights gerados</span>
                <span className="text-card-foreground">28</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Taxa de precisão</span>
                <span className="text-success">94%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tempo médio resposta</span>
                <span className="text-card-foreground">1.2s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="rounded-lg border border-border bg-card shadow-sm">
        <div className="border-b border-border p-4">
          <h3 className="text-card-foreground">Insights Automáticos</h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2">
          {insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div
                key={insight.id}
                className={`rounded-lg border p-4 ${
                  insight.type === 'opportunity'
                    ? 'border-primary/20 bg-primary/5'
                    : insight.type === 'warning'
                    ? 'border-warning/20 bg-warning/5'
                    : insight.type === 'optimization'
                    ? 'border-accent/20 bg-accent/5'
                    : 'border-success/20 bg-success/5'
                }`}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Icon
                      className={`h-5 w-5 ${
                        insight.type === 'opportunity'
                          ? 'text-primary'
                          : insight.type === 'warning'
                          ? 'text-warning'
                          : insight.type === 'optimization'
                          ? 'text-accent'
                          : 'text-success'
                      }`}
                    />
                    <h4 className="text-card-foreground">{insight.title}</h4>
                  </div>
                  <span
                    className={`rounded-full px-2 py-1 ${
                      insight.impact === 'Alto'
                        ? 'bg-destructive/10 text-destructive'
                        : insight.impact === 'Médio'
                        ? 'bg-warning/10 text-warning'
                        : 'bg-success/10 text-success'
                    }`}
                  >
                    {insight.impact}
                  </span>
                </div>
                <p className="mb-3 text-muted-foreground">{typeof insight.description === 'string' ? highlightReceitas(insight.description) : insight.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Confiança: {insight.confidence}%</span>
                  <button className="text-accent hover:underline">Ver detalhes</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
