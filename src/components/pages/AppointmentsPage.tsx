
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Clock, Plus, Filter, Search, MoreHorizontal } from 'lucide-react';

const AppointmentsPage = () => {
  const [selectedDate, setSelectedDate] = useState('2024-07-20');

  const appointments = [
    {
      id: 1,
      patient: 'Ana Silva',
      time: '09:00',
      duration: '30min',
      service: 'Limpeza',
      doctor: 'Dr. João Santos',
      status: 'Confirmada',
      type: 'routine'
    },
    {
      id: 2,
      patient: 'Carlos Mendes',
      time: '10:30',
      duration: '60min',
      service: 'Canal',
      doctor: 'Dra. Maria Costa',
      status: 'Agendada',
      type: 'treatment'
    },
    {
      id: 3,
      patient: 'Lucia Ferreira',
      time: '14:00',
      duration: '45min',
      service: 'Ortodontia',
      doctor: 'Dr. Pedro Lima',
      status: 'Confirmada',
      type: 'followup'
    },
    {
      id: 4,
      patient: 'Roberto Silva',
      time: '15:30',
      duration: '30min',
      service: 'Consulta',
      doctor: 'Dr. João Santos',
      status: 'Pendente',
      type: 'consultation'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmada': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Agendada': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Pendente': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Cancelada': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Consultas</h1>
          <p className="text-gray-600 dark:text-gray-400">Gerencie as consultas da clínica</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nova Consulta
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Consultas Hoje</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              </div>
              <Calendar className="w-8 h-8 text-teal-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Confirmadas</p>
                <p className="text-2xl font-bold text-green-600">8</p>
              </div>
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pendentes</p>
                <p className="text-2xl font-bold text-yellow-600">3</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Canceladas</p>
                <p className="text-2xl font-bold text-red-600">1</p>
              </div>
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Appointments List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Consultas do Dia - {selectedDate}</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{appointment.time}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{appointment.duration}</div>
                  </div>
                  <Avatar>
                    <AvatarFallback className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300">
                      {appointment.patient.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{appointment.patient}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.service}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{appointment.doctor}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={getStatusColor(appointment.status)}>
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
    </div>
  );
};

export default AppointmentsPage;
