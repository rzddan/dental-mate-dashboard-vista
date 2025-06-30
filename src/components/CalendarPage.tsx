
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  ChevronLeft,
  ChevronRight,
  Filter
} from 'lucide-react';

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState('June 2025');
  const [selectedFilters, setSelectedFilters] = useState({
    agendadas: true,
    confirmadas: true,
    concluidas: true,
    canceladas: false,
    pagamentoPendente: true
  });

  const filterOptions = [
    { key: 'agendadas', label: 'Agendadas', color: 'bg-accent', active: true },
    { key: 'confirmadas', label: 'Confirmadas', color: 'bg-primary', active: true },
    { key: 'concluidas', label: 'Concluídas', color: 'bg-emerald-600', active: true },
    { key: 'canceladas', label: 'Canceladas', color: 'bg-destructive', active: false },
    { key: 'pagamentoPendente', label: 'Pagamento Pendente', color: 'bg-yellow-500', active: true }
  ];

  const appointments = [
    { day: 30, time: '11:04 AM', patient: 'João Silva', type: 'Limpeza', color: 'bg-yellow-500' },
    { day: 1, time: '11:04 AM', patient: 'Ana Costa', type: 'Consulta', color: 'bg-primary' },
    { day: 2, time: '11:04 AM', patient: 'Carlos Mendes', type: 'Tratamento', color: 'bg-yellow-500' }
  ];

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Calendar and Filters */}
        <div className="lg:col-span-1 space-y-6">
          {/* Mini Calendar */}
          <Card className="dental-mint">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <CardTitle className="text-foreground text-sm">Junho 2025</CardTitle>
                <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center text-muted-foreground p-1">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs">
                {Array.from({length: 35}, (_, i) => {
                  const day = i - 5; // Adjust for month start
                  return (
                    <div key={i} className={`text-center p-1 rounded cursor-pointer ${
                      day > 0 && day <= 30 
                        ? 'text-foreground hover:bg-muted' 
                        : 'text-muted-foreground'
                    } ${day === 25 ? 'bg-primary text-primary-foreground' : ''}`}>
                      {day > 0 && day <= 30 ? day : ''}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          <Card className="dental-blue">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
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
                  <span className="text-foreground text-sm">{filter.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Calendar Grid */}
        <div className="lg:col-span-3">
          <Card className="dental-cream">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-foreground">June 2025</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Week Headers */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-muted-foreground p-2 font-medium">
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
                    <div key={i} className="border border-border h-24 p-1 relative bg-card">
                      {day > 0 && day <= 30 && (
                        <>
                          <div className="text-foreground text-sm font-medium">{day}</div>
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
  );
};

export default CalendarPage;
