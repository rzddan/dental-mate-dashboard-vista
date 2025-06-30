
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Plus,
  MoreHorizontal,
  Brain,
  Phone,
  Mail
} from 'lucide-react';

const Dashboard = () => {
  const kpis = [
    {
      title: "Pacientes Ativos",
      value: "156",
      subtitle: "+12 novos este mês",
      change: "+8.0%",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      color: "text-blue-600"
    },
    {
      title: "Consultas Hoje",
      value: "12",
      subtitle: "8 confirmadas",
      change: "+5.0%",
      icon: <Calendar className="w-5 h-5 text-green-600" />,
      color: "text-green-600"
    },
    {
      title: "Faturamento Mensal",
      value: "R$ 12.450",
      subtitle: "Meta: R$ 15.000",
      change: "+12.0%",
      icon: <DollarSign className="w-5 h-5 text-teal-600" />,
      color: "text-teal-600"
    },
    {
      title: "Taxa de Ocupação",
      value: "85%",
      subtitle: "Acima da média",
      change: "+3.0%",
      icon: <TrendingUp className="w-5 h-5 text-orange-600" />,
      color: "text-orange-600"
    }
  ];

  const todayAppointments = [
    {
      time: "09:30",
      patient: "Ana Silva",
      service: "Limpeza Dental",
      doctor: "Dr. João Santos",
      status: "Confirmada"
    },
    {
      time: "10:30",
      patient: "Carlos Mendes",
      service: "Canal",
      doctor: "Dra. Maria Costa",
      status: "Agendada"
    },
    {
      time: "14:00",
      patient: "Lucia Ferreira",
      service: "Ortodontia",
      doctor: "Dr. Pedro Lima",
      status: "Confirmada"
    }
  ];

  const recentPatients = [
    { name: "Roberto Silva", lastVisit: "2024-07-19", phone: "(11) 99999-9999" },
    { name: "Fernanda Costa", lastVisit: "2024-07-18", phone: "(11) 88888-8888" },
    { name: "José Santos", lastVisit: "2024-07-17", phone: "(11) 77777-7777" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Boa tarde, Amanda! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Aqui está um resumo da sua clínica hoje
          </p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nova Consulta
        </Button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {kpi.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {kpi.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {kpi.subtitle}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  {kpi.icon}
                  <Badge variant="secondary" className="text-green-600 bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 mt-2">
                    {kpi.change}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Assistant - Amanda */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border-teal-200 dark:border-gray-700">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarFallback className="bg-gradient-to-br from-teal-500 to-blue-600 text-white text-2xl">
                  A
                </AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Olá, sou Amanda! 🤖
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Sua assistente de IA para gestão da clínica. Como posso ajudar hoje?
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button variant="outline" size="sm" className="bg-white/50 dark:bg-gray-800/50">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Consulta
              </Button>
              <Button variant="outline" size="sm" className="bg-white/50 dark:bg-gray-800/50">
                <Users className="w-4 h-4 mr-2" />
                Buscar Paciente
              </Button>
              <Button variant="outline" size="sm" className="bg-white/50 dark:bg-gray-800/50">
                <DollarSign className="w-4 h-4 mr-2" />
                Relatório Financeiro
              </Button>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Brain className="w-4 h-4 mr-2" />
                Sugestão inteligente:
              </div>
              <p className="text-sm text-gray-800 dark:text-gray-200">
                "Você tem 3 pacientes com consultas de retorno em atraso. Gostaria que eu os contacte automaticamente?"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Resumo Rápido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Próxima consulta</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">09:30</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Sala de espera</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">2 pacientes</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 text-teal-600 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Faturamento hoje</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">R$ 680</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Calendar Rápido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(day => (
                  <div key={day} className="text-center text-gray-400 p-1">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs">
                {Array.from({length: 28}, (_, i) => (
                  <div key={i} className={`text-center p-2 rounded cursor-pointer ${
                    i === 19 ? 'bg-teal-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Consultas de Hoje</CardTitle>
              <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                {todayAppointments.length} agendadas
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        {appointment.time}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {appointment.patient}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {appointment.service} - {appointment.doctor}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={appointment.status === 'Confirmada' ? 'default' : 'secondary'}>
                      {appointment.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Patients */}
        <Card>
          <CardHeader>
            <CardTitle>Pacientes Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map((patient, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {patient.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Última visita: {patient.lastVisit}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
