
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Plus, Mail, Phone, Calendar, Clock, MoreHorizontal } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. João Santos',
      role: 'Dentista Geral',
      specialty: 'Clínica Geral',
      email: 'joao.santos@clinica.com',
      phone: '(11) 99999-1111',
      status: 'Ativo',
      appointmentsToday: 6,
      schedule: '08:00 - 17:00'
    },
    {
      id: 2,
      name: 'Dra. Maria Costa',
      role: 'Endodontista',
      specialty: 'Endodontia',
      email: 'maria.costa@clinica.com',
      phone: '(11) 99999-2222',
      status: 'Ativo',
      appointmentsToday: 4,
      schedule: '08:00 - 16:00'
    },
    {
      id: 3,
      name: 'Dr. Pedro Lima',
      role: 'Ortodontista',
      specialty: 'Ortodontia',
      email: 'pedro.lima@clinica.com',
      phone: '(11) 99999-3333',
      status: 'Ativo',
      appointmentsToday: 5,
      schedule: '09:00 - 18:00'
    },
    {
      id: 4,
      name: 'Ana Secretária',
      role: 'Recepcionista',
      specialty: 'Atendimento',
      email: 'ana.recepcao@clinica.com',
      phone: '(11) 99999-4444',
      status: 'Ativo',
      appointmentsToday: 0,
      schedule: '07:00 - 16:00'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Inativo': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'Férias': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Equipe</h1>
          <p className="text-gray-600 dark:text-gray-400">Gerencie a equipe da clínica</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Membro
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total da Equipe</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Dentistas</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-teal-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Staff Auxiliar</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">4</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Presentes Hoje</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">11</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members */}
      <Card>
        <CardHeader>
          <CardTitle>Membros da Equipe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {member.specialty}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(member.status)}>
                      {member.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4 mr-2" />
                    {member.email}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    {member.phone}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    Horário: {member.schedule}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    Consultas hoje: {member.appointmentsToday}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamPage;
