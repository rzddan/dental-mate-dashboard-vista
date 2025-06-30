
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  Settings,
  Menu,
  X,
  Activity,
  Brain,
  FileText,
  CreditCard,
  Clock,
  HelpCircle,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Filter
} from 'lucide-react';

const CalendarPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState('June 2025');
  const [selectedFilters, setSelectedFilters] = useState({
    agendadas: true,
    confirmadas: true,
    concluidas: true,
    canceladas: false,
    pagamentoPendente: true
  });

  const menuItems = [
    { name: "Dashboard", icon: Activity, active: false },
    { name: "Pacientes", icon: Users, active: false },
    { name: "Consultas", icon: Calendar, active: true },
    { name: "Minha Agenda", icon: Clock, active: false },
    { name: "Dentistas & Equipe", icon: Users, active: false },
    { name: "Serviços", icon: Settings, active: false },
    { name: "Estoque", icon: FileText, active: false },
    { name: "Financeiro", icon: CreditCard, active: false },
    { name: "Assistente", icon: Brain, active: false },
    { name: "Configurações", icon: Settings, active: false }
  ];

  const filterOptions = [
    { key: 'agendadas', label: 'Agendadas', color: 'bg-blue-500', active: true },
    { key: 'confirmadas', label: 'Confirmadas', color: 'bg-green-500', active: true },
    { key: 'concluidas', label: 'Concluídas', color: 'bg-green-600', active: true },
    { key: 'canceladas', label: 'Canceladas', color: 'bg-red-500', active: false },
    { key: 'pagamentoPendente', label: 'Pagamento Pendente', color: 'bg-orange-500', active: true }
  ];

  const appointments = [
    { day: 30, time: '11:04 PM', patient: 'João Silva', type: 'Limpeza', color: 'bg-orange-500' },
    { day: 1, time: '11:04 PM', patient: 'Ana Costa', type: 'Consulta', color: 'bg-green-500' },
    { day: 2, time: '11:04 PM', patient: 'Carlos Mendes', type: 'Tratamento', color: 'bg-orange-500' }
  ];

  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

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
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">TC</span>
            </div>
            <div>
              <div className="text-white font-semibold">Clínica Solzinho</div>
              <div className="text-gray-400 text-xs">solzinho@clinica.com</div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:bg-gray-800"
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
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
              {item.name === "Configurações" && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg">
            <HelpCircle className="w-5 h-5" />
            <span>Suporte</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg">
            <MessageSquare className="w-5 h-5" />
            <span>Feedback</span>
          </button>
          <div className="bg-gray-800 rounded-lg p-3 mt-4">
            <div className="text-xs text-gray-400">Solação Saturno</div>
            <div className="text-sm">solacao@saturnadem</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-white hover:bg-gray-800"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Calendar className="w-6 h-6 text-white" />
              <h1 className="text-xl font-semibold text-white">Consultas</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-white font-medium">Hoje</div>
              </div>
              <div className="text-right">
                <div className="text-white font-medium">Mês</div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar - Calendar and Filters */}
            <div className="lg:col-span-1 space-y-6">
              {/* Mini Calendar */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <CardTitle className="text-white text-sm">Junho 2025</CardTitle>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                      <div key={day} className="text-center text-gray-400 p-1">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    {Array.from({length: 35}, (_, i) => {
                      const day = i - 5; // Adjust for month start
                      return (
                        <div key={i} className={`text-center p-1 rounded cursor-pointer ${
                          day > 0 && day <= 30 
                            ? 'text-white hover:bg-gray-700' 
                            : 'text-gray-600'
                        } ${day === 25 ? 'bg-blue-600 text-white' : ''}`}>
                          {day > 0 && day <= 30 ? day : ''}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Filters */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {filterOptions.map((filter) => (
                    <div key={filter.key} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={filter.active}
                        onChange={() => {
                          setSelectedFilters(prev => ({
                            ...prev,
                            [filter.key]: !prev[filter.key as keyof typeof prev]
                          }));
                        }}
                        className="rounded"
                      />
                      <div className={`w-3 h-3 rounded-full ${filter.color}`}></div>
                      <span className="text-white text-sm">{filter.label}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Calendar Grid */}
            <div className="lg:col-span-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">June 2025</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Week Headers */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {weekDays.map(day => (
                      <div key={day} className="text-center text-gray-400 p-2 font-medium">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({length: 35}, (_, i) => {
                      const day = i - 6; // Adjust for month start
                      const hasAppointments = appointments.some(apt => apt.day === day);
                      
                      return (
                        <div key={i} className="border border-gray-700 h-24 p-1 relative">
                          {day > 0 && day <= 30 && (
                            <>
                              <div className="text-white text-sm font-medium">{day}</div>
                              {hasAppointments && (
                                <div className="space-y-1 mt-1">
                                  {appointments
                                    .filter(apt => apt.day === day)
                                    .map((apt, idx) => (
                                      <div key={idx} className={`text-xs p-1 rounded text-white ${apt.color}`}>
                                        <div className="font-medium">{apt.time}</div>
                                        <div className="truncate">{apt.patient}</div>
                                      </div>
                                    ))}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
