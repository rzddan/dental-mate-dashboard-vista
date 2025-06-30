
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Bell, 
  Search,
  Menu,
  X,
  Activity,
  Brain,
  ChevronRight,
  FileText,
  CreditCard,
  Settings,
  HelpCircle,
  MessageSquare,
  Plus,
  MoreHorizontal
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const kpis = [
    {
      title: "Pacientes ativos",
      value: "16",
      subtitle: "Igual ao mês anterior",
      change: "+4.0%",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      color: "bg-gray-800 text-white"
    },
    {
      title: "Consultas hoje",
      value: "2",
      subtitle: "Igual a ontem",
      change: "+8.0%",
      icon: <Calendar className="w-5 h-5 text-green-600" />,
      color: "bg-gray-800 text-white"
    },
    {
      title: "Faturamento do mês",
      value: "R$ 7.999,00",
      subtitle: "Igual ao mês anterior",
      change: "+5.0%",
      icon: <DollarSign className="w-5 h-5 text-yellow-600" />,
      color: "bg-gray-800 text-white"
    }
  ];

  const consultasHoje = [
    {
      time: "11:00",
      patient: "Sergio Vieira",
      type: "Clareamento",
      status: "Agendado"
    },
    {
      time: "14:00",
      patient: "Danilo Rezende",
      type: "Avaliação",
      status: "Confirmado"
    }
  ];

  const menuItems = [
    { name: "Dashboard", icon: Activity, active: true },
    { name: "Pacientes", icon: Users, active: false },
    { name: "Consultas", icon: Calendar, active: false },
    { name: "Agenda", icon: Clock, active: false },
    { name: "Dentista & Equipe", icon: Users, active: false },
    { name: "Serviços", icon: Settings, active: false },
    { name: "Estoque", icon: FileText, active: false },
    { name: "Financeiro", icon: CreditCard, active: false },
    { name: "AI Assistant", icon: Brain, active: false },
    { name: "Configurações", icon: Settings, active: false }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:bg-gray-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                item.active 
                  ? 'bg-gray-700 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg">
            <HelpCircle className="w-5 h-5" />
            <span>Suporte</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg">
            <MessageSquare className="w-5 h-5" />
            <span>Feedback</span>
          </button>
          <div className="bg-gray-700 rounded-lg p-3 mt-4">
            <div className="text-xs text-gray-400">Solação Saturno</div>
            <div className="text-sm">solacao@clinicacorn</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-white hover:bg-gray-700"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-semibold text-white">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex bg-gray-600 rounded-lg px-3 py-1">
                <button className="px-3 py-1 text-sm bg-gray-700 rounded text-white">Consultas</button>
                <button className="px-3 py-1 text-sm text-gray-300 hover:text-white">Financeiro</button>
                <button className="px-3 py-1 text-sm text-gray-300 hover:text-white">Pacientes</button>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                  Importar
                </Button>
                <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                  Exportar
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* KPIs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{kpi.title}</span>
                    <Badge variant="secondary" className="text-green-400 bg-green-400/10 border-green-400/20">
                      {kpi.change}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{kpi.value}</div>
                  <div className="text-xs text-gray-500">{kpi.subtitle}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Consultas realizadas - Chart */}
            <Card className="lg:col-span-1 bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Consultas realizadas</CardTitle>
                  <div className="flex space-x-2 text-xs">
                    <button className="text-gray-400 hover:text-white">7 dias</button>
                    <button className="text-white bg-gray-700 px-2 py-1 rounded">30 dias</button>
                    <button className="text-gray-400 hover:text-white">12 semanas</button>
                  </div>
                </div>
                <CardDescription className="text-gray-400">
                  Evolução do número de consultas realizadas no período selecionado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <div>Gráfico de consultas</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Central Area */}
            <Card className="lg:col-span-2 bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Boa tarde, Amanda</h2>
                  <p className="text-gray-400">Como posso te ajudar hoje?</p>
                </div>
                
                <div className="flex justify-center space-x-4 mb-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Agendamento
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    Cadastrar Paciente
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    Consultar Inventário
                  </Button>
                </div>

                <div className="flex justify-center mb-8">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="bg-gray-700 text-white text-xl">A</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex justify-center space-x-8 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-400">Enviar documentos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-400">Gerar cobrança</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Calendar Section */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Junho 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-xs mb-4">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-center text-gray-400 p-1">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-sm">
                  {Array.from({length: 30}, (_, i) => (
                    <div key={i} className="text-center p-2 hover:bg-gray-700 rounded cursor-pointer text-gray-300">
                      {i + 1}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dentistas Disponíveis */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Dentistas Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-2"></div>
                    <div className="text-white font-medium">Elizete</div>
                    <div className="text-xs text-gray-400">Especialista em...</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consultas do dia */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Consultas do dia</CardTitle>
                <div className="text-right text-green-400 text-sm">10 Consultas para hoje</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {consultasHoje.map((consulta, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-lg font-bold text-white">{consulta.time}</div>
                        <div>
                          <div className="text-white font-medium">{consulta.patient}</div>
                          <div className="text-gray-400 text-sm">{consulta.type}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
