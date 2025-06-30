
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Filter, Package, AlertTriangle, TrendingDown, TrendingUp } from 'lucide-react';

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const inventoryItems = [
    {
      id: 1,
      name: 'Anestésico Lidocaína 2%',
      category: 'Medicamentos',
      quantity: 25,
      minStock: 10,
      maxStock: 50,
      unit: 'unidades',
      price: 'R$ 12,50',
      supplier: 'Fornecedor A',
      expiryDate: '2025-03-15',
      status: 'Em Estoque'
    },
    {
      id: 2,
      name: 'Luvas Descartáveis',
      category: 'EPIs',
      quantity: 8,
      minStock: 20,
      maxStock: 100,
      unit: 'caixas',
      price: 'R$ 35,00',
      supplier: 'Fornecedor B',
      expiryDate: '2026-01-20',
      status: 'Estoque Baixo'
    },
    {
      id: 3,
      name: 'Resina Composta',
      category: 'Materiais',
      quantity: 45,
      minStock: 15,
      maxStock: 60,
      unit: 'unidades',
      price: 'R$ 85,00',
      supplier: 'Fornecedor C',
      expiryDate: '2025-08-10',
      status: 'Em Estoque'
    },
    {
      id: 4,
      name: 'Brocas Diamantadas',
      category: 'Instrumentos',
      quantity: 5,
      minStock: 10,
      maxStock: 30,
      unit: 'unidades',
      price: 'R$ 25,00',
      supplier: 'Fornecedor A',
      expiryDate: null,
      status: 'Estoque Baixo'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em Estoque': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Estoque Baixo': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Sem Estoque': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Estoque</h1>
          <p className="text-gray-600 dark:text-gray-400">Gerencie o estoque da clínica</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Item
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Itens</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
              </div>
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Estoque Baixo</p>
                <p className="text-2xl font-bold text-yellow-600">12</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Valor Total</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ 15.420</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Categorias</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
              </div>
              <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Inventário</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar itens..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Item</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Categoria</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Quantidade</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Preço Unit.</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Fornecedor</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Status</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                        {item.expiryDate && (
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Expira: {item.expiryDate}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-gray-900 dark:text-white">
                        {item.quantity} {item.unit}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Min: {item.minStock} | Max: {item.maxStock}
                      </div>
                    </td>
                    <td className="p-4 text-gray-900 dark:text-white font-medium">
                      {item.price}
                    </td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">
                      {item.supplier}
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryPage;
