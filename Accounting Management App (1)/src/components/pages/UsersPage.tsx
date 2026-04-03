import { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Filter,
  Mail,
  Shield,
  Edit,
  Trash2,
  CheckCircle,
  XCircle
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
import { Avatar, AvatarFallback } from '../ui/avatar';

const usersData = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@empresa.pt',
    role: 'Admin',
    status: 'Ativo',
    lastLogin: '2024-01-23 10:30',
    companies: ['Empresa Principal']
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria.santos@empresa.pt',
    role: 'Gestor',
    status: 'Ativo',
    lastLogin: '2024-01-23 09:15',
    companies: ['Empresa Principal', 'Filial Norte']
  },
  {
    id: 3,
    name: 'Carlos Ferreira',
    email: 'carlos.ferreira@empresa.pt',
    role: 'Contabilista',
    status: 'Ativo',
    lastLogin: '2024-01-22 16:45',
    companies: ['Empresa Principal']
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana.costa@empresa.pt',
    role: 'Operacional',
    status: 'Ativo',
    lastLogin: '2024-01-23 11:20',
    companies: ['Filial Norte']
  },
  {
    id: 5,
    name: 'Pedro Almeida',
    email: 'pedro.almeida@empresa.pt',
    role: 'Auditor',
    status: 'Inativo',
    lastLogin: '2024-01-15 14:00',
    companies: ['Empresa Principal']
  },
];

const roleColors = {
  'Admin': 'bg-purple-100 text-purple-800 border-purple-300',
  'Gestor': 'bg-blue-100 text-blue-800 border-blue-300',
  'Contabilista': 'bg-green-100 text-green-800 border-green-300',
  'Operacional': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'Auditor': 'bg-gray-100 text-gray-800 border-gray-300',
};

const statusColors = {
  'Ativo': 'bg-green-100 text-green-800 border-green-300',
  'Inativo': 'bg-red-100 text-red-800 border-red-300',
};

export function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-foreground">Gestão de Utilizadores</h2>
          <p className="text-muted-foreground">
            Gerir utilizadores, papéis e permissões
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" />
            Convidar
          </Button>
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Novo Utilizador
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Total Utilizadores</p>
            <Users className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-card-foreground">5</p>
          <p className="mt-1 text-success">4 ativos</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Administradores</p>
            <Shield className="h-5 w-5 text-purple-600" />
          </div>
          <p className="mt-2 text-card-foreground">1</p>
          <p className="mt-1 text-muted-foreground">Papel Admin</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Gestores</p>
            <Shield className="h-5 w-5 text-blue-600" />
          </div>
          <p className="mt-2 text-card-foreground">1</p>
          <p className="mt-1 text-muted-foreground">Papel Gestor</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Operacionais</p>
            <Shield className="h-5 w-5 text-yellow-600" />
          </div>
          <p className="mt-2 text-card-foreground">2</p>
          <p className="mt-1 text-muted-foreground">Operações diárias</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Procurar por nome ou email..."
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

      {/* Users Table */}
      <div className="rounded-lg border border-border bg-card shadow-sm">
        <div className="p-6">
          <h3 className="text-card-foreground">Utilizadores do Sistema</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Utilizador</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Papel</TableHead>
              <TableHead>Empresas</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Último Acesso</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersData.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    <span>{user.name}</span>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge className={roleColors[user.role as keyof typeof roleColors]}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {user.companies.map((company, idx) => (
                      <span key={idx} className="rounded bg-muted px-2 py-1 text-muted-foreground">
                        {company}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={statusColors[user.status as keyof typeof statusColors]}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {user.lastLogin}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    {user.status === 'Ativo' ? (
                      <Button variant="ghost" size="sm" className="text-warning">
                        <XCircle className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" className="text-success">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Roles Information */}
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 text-card-foreground">Papéis e Permissões</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-muted p-4">
            <div className="mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <h4 className="">Admin</h4>
            </div>
            <p className="text-muted-foreground">Acesso total ao sistema, gestão de utilizadores e configurações.</p>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <div className="mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <h4 className="">Gestor</h4>
            </div>
            <p className="text-muted-foreground">Acesso a relatórios, aprovações e gestão operacional.</p>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <div className="mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <h4 className="">Contabilista</h4>
            </div>
            <p className="text-muted-foreground">Gestão contabilística, lançamentos e relatórios fiscais.</p>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <div className="mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-yellow-600" />
              <h4 className="">Operacional</h4>
            </div>
            <p className="text-muted-foreground">Gestão de vendas, compras e inventário.</p>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <div className="mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-gray-600" />
              <h4 className="">Auditor</h4>
            </div>
            <p className="text-muted-foreground">Acesso de leitura a todos os dados e logs de auditoria.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
