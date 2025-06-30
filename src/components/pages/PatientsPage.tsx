
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Search, Plus, Filter, Phone, Mail, Calendar, MoreHorizontal } from 'lucide-react';

const PatientsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const patients = [
    {
      id: 1,
      name: 'Ana Silva',
      email: 'ana.silva@email.com',
      phone: '(11) 99999-9999',
      lastVisit: '2024-06-15',
      nextAppointment: '2024-07-20',
      status: 'Ativo',
      treatments: ['Limpeza', 'Clareamento']
    },
    {
      id: 2,
      name: 'Carlos Santos',
      email: 'carlos.santos@email.com',
      phone: '(11) 88888-8888',
      lastVisit: '2024-06-10',
      nextAppointment: null,
      status: 'Ativo',
      treatments: ['Canal', 'Prótese']
    },
    {
      id: 3,
      name: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      phone: '(11) 77777-7777',
      lastVisit: '2024-05-28',
      nextAppointment: '2024-07-15',
      status: 'Inativo',
      treatments: ['Ortodontia']
    }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pacientes</h1>
          <p className="text-gray-600 dark:text-gray-400">Gerencie os pacientes da clínica</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Novo Paciente
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Pacientes</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pacientes Ativos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">142</p>
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Novos este Mês</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Consultas Hoje</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Lista de Pacientes</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar pacientes..."
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
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{patient.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-1" />
                        {patient.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        {patient.phone}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      {patient.treatments.map((treatment, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {treatment}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right text-sm">
                    <p className="text-gray-900 dark:text-white">Última consulta</p>
                    <p className="text-gray-500 dark:text-gray-400">{patient.lastVisit}</p>
                  </div>
                  <Badge variant={patient.status === 'Ativo' ? 'default' : 'secondary'}>
                    {patient.status}
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

export default PatientsPage;
