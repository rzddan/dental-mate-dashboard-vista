
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Calendar, Plus } from 'lucide-react';

const FinancialPage = () => {
  const transactions = [
    {
      id: 1,
      patient: 'Ana Silva',
      service: 'Limpeza Dental',
      amount: 80.00,
      date: '2024-07-20',
      status: 'Pago',
      method: 'Cartão de Crédito'
    },
    {
      id: 2,
      patient: 'Carlos Mendes',
      service: 'Canal',
      amount: 350.00,
      date: '2024-07-19',
      status: 'Pendente',
      method: 'PIX'
    },
    {
      id: 3,
      patient: 'Maria Santos',
      service: 'Clareamento',
      amount: 250.00,
      date: '2024-07-18',
      status: 'Pago',
      method: 'Dinheiro'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pago': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pendente': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Vencido': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Financeiro</h1>
          <p className="text-gray-600 dark:text-gray-400">Gerencie as finanças da clínica</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nova Transação
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Receita Mensal</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ 12.450</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% vs mês anterior
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Receita Hoje</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ 680</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  8 transações
                </p>
              </div>
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pendentes</p>
                <p className="text-2xl font-bold text-yellow-600">R$ 1.250</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  5 pagamentos
                </p>
              </div>
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Despesas</p>
                <p className="text-2xl font-bold text-red-600">R$ 3.200</p>
                <p className="text-xs text-red-600 flex items-center mt-1">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  Este mês
                </p>
              </div>
              <CreditCard className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Receita dos Últimos 6 Meses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <div>Gráfico de receita mensal</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Data</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Paciente</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Serviço</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Valor</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Método</th>
                  <th className="text-left p-4 font-medium text-gray-600 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="p-4 text-gray-600 dark:text-gray-400">
                      {transaction.date}
                    </td>
                    <td className="p-4 font-medium text-gray-900 dark:text-white">
                      {transaction.patient}
                    </td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">
                      {transaction.service}
                    </td>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">
                      R$ {transaction.amount.toFixed(2)}
                    </td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">
                      {transaction.method}
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
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

export default FinancialPage;
