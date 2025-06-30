
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const kpis = [
    {
      title: "Pacientes Ativos",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Receita Mensal",
      value: "R$ 156.890",
      change: "+8.5%",
      trend: "up",
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Consultas Hoje",
      value: "32",
      change: "+2",
      trend: "up",
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Taxa de Ocupação",
      value: "87%",
      change: "+5%",
      trend: "up",
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: "Ana Costa Silva",
      email: "ana.costa@email.com",
      phone: "(11) 99999-9999",
      lastVisit: "2024-01-15",
      status: "Ativo",
      treatment: "Ortodontia"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      email: "carlos.mendes@email.com",
      phone: "(11) 88888-8888",
      lastVisit: "2024-01-14",
      status: "Agendado",
      treatment: "Implante"
    },
    {
      id: 3,
      name: "Marina Santos",
      email: "marina.santos@email.com",
      phone: "(11) 77777-7777",
      lastVisit: "2024-01-13",
      status: "Ativo",
      treatment: "Limpeza"
    },
    {
      id: 4,
      name: "João Oliveira",
      email: "joao.oliveira@email.com",
      phone: "(11) 66666-6666",
      lastVisit: "2024-01-12",
      status: "Pendente",
      treatment: "Canal"
    }
  ];

  const upcomingAppointments = [
    {
      time: "09:00",
      patient: "Ana Costa Silva",
      treatment: "Ortodontia - Manutenção",
      duration: "30 min"
    },
    {
      time: "10:00",
      patient: "Carlos Mendes",
      treatment: "Implante - Consulta",
      duration: "45 min"
    },
    {
      time: "11:30",
      patient: "Marina Santos",
      treatment: "Limpeza Dentária",
      duration: "60 min"
    },
    {
      time: "14:00",
      patient: "João Oliveira",
      treatment: "Canal - Retorno",
      duration: "90 min"
    }
  ];

  const menuItems = [
    { name: "Dashboard", icon: Activity, active: true },
    { name: "Pacientes", icon: Users, active: false },
    { name: "Agendamentos", icon: Calendar, active: false },
    { name: "Financeiro", icon: DollarSign, active: false },
    { name: "Relatórios", icon: TrendingUp, active: false },
    { name: "IA Insights", icon: Brain, active: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Dental Mate
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                item.active 
                  ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Dr. Maria Silva</p>
              <p className="text-xs text-gray-500">Ortodontista</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Bem-vinda de volta, Dra. Maria!</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar pacientes..."
                  className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-500"
                />
              </div>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-8">
          {/* KPIs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className={`border-2 ${kpi.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      {kpi.icon}
                    </div>
                    <Badge variant="secondary" className="text-green-600 bg-green-100">
                      {kpi.change}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                    <p className="text-sm text-gray-600">{kpi.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Appointments Today */}
            <Card className="lg:col-span-1 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Agenda de Hoje</span>
                </CardTitle>
                <CardDescription>
                  4 consultas agendadas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{appointment.time}</div>
                      <div className="text-xs text-gray-500">{appointment.duration}</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{appointment.patient}</p>
                      <p className="text-sm text-gray-600">{appointment.treatment}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Patients */}
            <Card className="lg:col-span-2 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Pacientes Recentes</span>
                </CardTitle>
                <CardDescription>
                  Últimos pacientes atendidos
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Mobile View */}
                <div className="lg:hidden space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="p-4 bg-gray-50 rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{patient.name}</h4>
                        <Badge variant={patient.status === 'Ativo' ? 'default' : patient.status === 'Agendado' ? 'secondary' : 'destructive'}>
                          {patient.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>{patient.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{patient.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4" />
                          <span>{patient.treatment}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table View */}
                <div className="hidden lg:block">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Paciente</TableHead>
                        <TableHead>Contato</TableHead>
                        <TableHead>Tratamento</TableHead>
                        <TableHead>Última Visita</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentPatients.map((patient) => (
                        <TableRow key={patient.id} className="hover:bg-blue-50 transition-colors">
                          <TableCell className="font-medium">{patient.name}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-sm">{patient.email}</div>
                              <div className="text-sm text-gray-500">{patient.phone}</div>
                            </div>
                          </TableCell>
                          <TableCell>{patient.treatment}</TableCell>
                          <TableCell>{patient.lastVisit}</TableCell>
                          <TableCell>
                            <Badge variant={patient.status === 'Ativo' ? 'default' : patient.status === 'Agendado' ? 'secondary' : 'destructive'}>
                              {patient.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="mt-8 shadow-lg border-0 bg-gradient-to-br from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-600" />
                <span>IA Insights</span>
              </CardTitle>
              <CardDescription>
                Análises inteligentes para otimizar sua clínica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Previsão de Receita</h4>
                  <p className="text-2xl font-bold text-green-600 mb-1">R$ 182.500</p>
                  <p className="text-sm text-gray-600">Próximos 30 dias</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Otimização de Agenda</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-1">+15%</p>
                  <p className="text-sm text-gray-600">Eficiência possível</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Satisfação</h4>
                  <p className="text-2xl font-bold text-purple-600 mb-1">94%</p>
                  <p className="text-sm text-gray-600">Índice de satisfação</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
