import { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Search, 
  Filter,
  Download,
  Eye,
  CheckCircle,
  Clock,
  Trash2,
  ScanLine
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

const documentsData = [
  {
    id: 1,
    name: 'Fatura_Fornecedor_ABC.pdf',
    type: 'Fatura de Compra',
    uploadDate: '2024-01-23',
    size: '245 KB',
    status: 'Processado',
    extractedData: {
      supplier: 'Fornecedor ABC, Lda',
      nif: '501234567',
      amount: 5420.50,
      date: '2024-01-15'
    }
  },
  {
    id: 2,
    name: 'Extrato_Bancario_Jan.csv',
    type: 'Extrato Bancário',
    uploadDate: '2024-01-22',
    size: '18 KB',
    status: 'Processado',
    extractedData: null
  },
  {
    id: 3,
    name: 'Recibo_Renda_Jan.pdf',
    type: 'Recibo',
    uploadDate: '2024-01-20',
    size: '156 KB',
    status: 'Pendente',
    extractedData: null
  },
  {
    id: 4,
    name: 'Contrato_Fornecedor_XYZ.pdf',
    type: 'Contrato',
    uploadDate: '2024-01-18',
    size: '892 KB',
    status: 'Processado',
    extractedData: null
  },
];

const statusColors = {
  'Processado': 'bg-green-100 text-green-800 border-green-300',
  'Pendente': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'Erro': 'bg-red-100 text-red-800 border-red-300',
};

export function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-foreground">Gestão de Documentos</h2>
          <p className="text-muted-foreground">
            Upload, OCR e gestão de documentos fiscais
          </p>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Upload className="h-4 w-4" />
          Carregar Documentos
        </Button>
      </div>

      {/* Upload Zone */}
      <div className="rounded-lg border-2 border-dashed border-border bg-card p-12 text-center shadow-sm">
        <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-card-foreground">Arraste documentos aqui</h3>
        <p className="mt-2 text-muted-foreground">
          ou clique para selecionar ficheiros
        </p>
        <p className="mt-2 text-muted-foreground">
          Suporta PDF, JPG, PNG, CSV (até 10MB)
        </p>
        <Button variant="outline" className="mt-4 gap-2">
          <Upload className="h-4 w-4" />
          Selecionar Ficheiros
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Documentos Total</p>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-card-foreground">4</p>
          <p className="mt-1 text-muted-foreground">Este mês</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Processados</p>
            <CheckCircle className="h-5 w-5 text-success" />
          </div>
          <p className="mt-2 text-card-foreground">3</p>
          <p className="mt-1 text-success">75% taxa de sucesso</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Pendentes</p>
            <Clock className="h-5 w-5 text-warning" />
          </div>
          <p className="mt-2 text-card-foreground">1</p>
          <p className="mt-1 text-warning">Aguarda revisão</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Com OCR</p>
            <ScanLine className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-card-foreground">1</p>
          <p className="mt-1 text-muted-foreground">Dados extraídos</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Procurar documentos..."
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

      {/* Documents Table */}
      <div className="rounded-lg border border-border bg-card shadow-sm">
        <div className="p-6">
          <h3 className="text-card-foreground">Documentos Carregados</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do Ficheiro</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Data Upload</TableHead>
              <TableHead>Tamanho</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentsData.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>{doc.name}</span>
                  </div>
                </TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{new Date(doc.uploadDate).toLocaleDateString('pt-PT')}</TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>
                  <Badge className={statusColors[doc.status as keyof typeof statusColors]}>
                    {doc.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" title="Ver documento">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="Download">
                      <Download className="h-4 w-4" />
                    </Button>
                    {doc.extractedData && (
                      <Button variant="ghost" size="sm" title="Ver dados extraídos" className="text-primary">
                        <ScanLine className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="text-destructive" title="Eliminar">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* OCR Info */}
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <ScanLine className="h-6 w-6 text-primary" />
          <div>
            <h3 className="text-card-foreground">Reconhecimento Ótico de Caracteres (OCR)</h3>
            <p className="text-muted-foreground">
              A tecnologia OCR extrai automaticamente informações de faturas e recibos, incluindo NIF, data, totais e valores de IVA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
