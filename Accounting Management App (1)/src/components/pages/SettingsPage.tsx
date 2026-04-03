import { useState } from 'react';
import { 
  Settings, 
  Building2, 
  FileText,
  DollarSign,
  Calendar,
  Lock,
  Bell,
  Save,
  Upload
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Switch } from '../ui/switch';

export function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    invoiceReminders: true,
    paymentAlerts: true,
    aiInsights: true,
    systemUpdates: false
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-foreground">Definições</h2>
          <p className="text-muted-foreground">
            Configure a aplicação de acordo com as suas necessidades
          </p>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="company" className="space-y-6">
        <TabsList className="grid w-full max-w-2xl grid-cols-5">
          <TabsTrigger value="company">Empresa</TabsTrigger>
          <TabsTrigger value="fiscal">Fiscal</TabsTrigger>
          <TabsTrigger value="accounting">Contabilidade</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
        </TabsList>

        {/* Empresa */}
        <TabsContent value="company" className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" />
              <h3 className="text-card-foreground">Dados da Empresa</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nome da Empresa</Label>
                  <Input id="company-name" defaultValue="Empresa Exemplo, Lda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nif">NIF</Label>
                  <Input id="nif" defaultValue="501234567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Morada</Label>
                <Input id="address" defaultValue="Rua Exemplo, 123" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="postal">Código Postal</Label>
                  <Input id="postal" defaultValue="1000-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" defaultValue="Lisboa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">País</Label>
                  <Input id="country" defaultValue="Portugal" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="+351 210 123 456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="geral@empresa.pt" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo">Logótipo da Empresa</Label>
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Carregar Logo
                  </Button>
                  <span className="text-muted-foreground">PNG, JPG até 2MB</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Guardar Alterações
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Fiscal */}
        <TabsContent value="fiscal" className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-card-foreground">Configurações Fiscais</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fiscal-year">Ano Fiscal</Label>
                  <Input id="fiscal-year" defaultValue="2024" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fiscal-period">Período Atual</Label>
                  <Input id="fiscal-period" defaultValue="Janeiro 2024" disabled />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency">Moeda Padrão</Label>
                <Input id="currency" defaultValue="EUR (€)" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vat-regime">Regime de IVA</Label>
                <select 
                  id="vat-regime" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background"
                >
                  <option>Regime Normal</option>
                  <option>Regime de Isenção</option>
                  <option>Regime Misto</option>
                </select>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="mb-3">Taxas de IVA Ativas</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>IVA Normal - Portugal Continental</span>
                    <span>23%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IVA Intermédio</span>
                    <span>13%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IVA Reduzido</span>
                    <span>6%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Guardar Alterações
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Contabilidade */}
        <TabsContent value="accounting" className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-primary" />
              <h3 className="text-card-foreground">Configurações Contabilísticas</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="chart-accounts">Plano de Contas</Label>
                <select 
                  id="chart-accounts" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background"
                >
                  <option>SNC - Sistema de Normalização Contabilística</option>
                  <option>POC - Plano Oficial de Contabilidade</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cost-method">Método de Custeio de Inventário</Label>
                <select 
                  id="cost-method" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background"
                >
                  <option>FIFO (First In, First Out)</option>
                  <option>Custo Médio Ponderado</option>
                  <option>LIFO (Last In, First Out)</option>
                </select>
              </div>

              <div className="space-y-3">
                <Label>Lançamentos Automáticos</Label>
                <div className="space-y-3 rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <span>Gerar lançamentos automáticos nas vendas</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Gerar lançamentos automáticos nas compras</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Gerar lançamentos de inventário</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Gerar lançamentos de IVA automático</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Guardar Alterações
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Notificações */}
        <TabsContent value="notifications" className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Bell className="h-6 w-6 text-primary" />
              <h3 className="text-card-foreground">Preferências de Notificação</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <div>
                    <p className="">Notificações por Email</p>
                    <p className="text-muted-foreground">Receber emails sobre atividades importantes</p>
                  </div>
                  <Switch 
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <div>
                    <p className="">Lembretes de Faturação</p>
                    <p className="text-muted-foreground">Alertas sobre faturas por emitir e vencimentos</p>
                  </div>
                  <Switch 
                    checked={notifications.invoiceReminders}
                    onCheckedChange={(checked) => setNotifications({...notifications, invoiceReminders: checked})}
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <div>
                    <p className="">Alertas de Pagamento</p>
                    <p className="text-muted-foreground">Notificar sobre pagamentos pendentes e recebidos</p>
                  </div>
                  <Switch 
                    checked={notifications.paymentAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, paymentAlerts: checked})}
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <div>
                    <p className="">Insights de IA</p>
                    <p className="text-muted-foreground">Receber análises e recomendações do assistente</p>
                  </div>
                  <Switch 
                    checked={notifications.aiInsights}
                    onCheckedChange={(checked) => setNotifications({...notifications, aiInsights: checked})}
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                  <div>
                    <p className="">Atualizações do Sistema</p>
                    <p className="text-muted-foreground">Notificações sobre novas funcionalidades</p>
                  </div>
                  <Switch 
                    checked={notifications.systemUpdates}
                    onCheckedChange={(checked) => setNotifications({...notifications, systemUpdates: checked})}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Guardar Alterações
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Segurança */}
        <TabsContent value="security" className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary" />
              <h3 className="text-card-foreground">Segurança e Privacidade</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Palavra-passe Atual</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Palavra-passe</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Palavra-passe</Label>
                <Input id="confirm-password" type="password" />
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="mb-3">Requisitos da Palavra-passe</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>✓ Mínimo de 8 caracteres</li>
                  <li>✓ Pelo menos uma letra maiúscula</li>
                  <li>✓ Pelo menos um número</li>
                  <li>✓ Pelo menos um carácter especial</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-lg bg-muted p-4">
                <div className="flex items-center justify-between">
                  <span>Autenticação de dois fatores (2FA)</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Terminar sessões em outros dispositivos</span>
                  <Button variant="outline" size="sm">Terminar Sessões</Button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Atualizar Palavra-passe
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
