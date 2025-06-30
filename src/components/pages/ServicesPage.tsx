
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Clock, DollarSign, Users, MoreHorizontal } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      name: 'Limpeza Dental',
      category: 'Prevenção',
      duration: '30min',
      price: 'R$ 80,00',
      description: 'Limpeza completa com remoção de tártaro e polimento',
      popularity: 'Alta',
      availability: 'Disponível'
    },
    {
      id: 2,
      name: 'Canal',
      category: 'Endodontia',
      duration: '90min',
      price: 'R$ 350,00',
      description: 'Tratamento endodôntico completo',
      popularity: 'Média',
      availability: 'Disponível'
    },
    {
      id: 3,
      name: 'Clareamento',
      category: 'Estética',
      duration: '60min',
      price: 'R$ 250,00',
      description: 'Clareamento dental profissional',
      popularity: 'Alta',
      availability: 'Disponível'
    },
    {
      id: 4,
      name: 'Ortodontia',
      category: 'Ortodontia',
      duration: '45min',
      price: 'R$ 180,00',
      description: 'Consulta e manutenção ortodôntica',
      popularity: 'Alta',
      availability: 'Lista de Espera'
    },
    {
      id: 5,
      name: 'Implante Dentário',
      category: 'Cirurgia',
      duration: '120min',
      price: 'R$ 1.200,00',
      description: 'Colocação de implante dentário',
      popularity: 'Média',
      availability: 'Disponível'
    },
    {
      id: 6,
      name: 'Prótese Dentária',
      category: 'Prótese',
      duration: '60min',
      price: 'R$ 450,00',
      description: 'Confecção e instalação de próteses',
      popularity: 'Baixa',
      availability: 'Disponível'
    }
  ];

  const categories = ['Prevenção', 'Endodontia', 'Estética', 'Ortodontia', 'Cirurgia', 'Prótese'];

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'Alta': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Média': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Baixa': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Disponível': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Lista de Espera': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Indisponível': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Serviços</h1>
          <p className="text-gray-600 dark:text-gray-400">Gerencie os serviços oferecidos pela clínica</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Novo Serviço
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Serviços</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Categorias</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">6</p>
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Faturamento Médio</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ 280</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Mais Popular</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">Limpeza</p>
              </div>
              <Users className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categorias de Serviços</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="text-sm px-3 py-1">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Services List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Serviços</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{service.name}</h3>
                    <Badge variant="secondary" className="text-xs mb-2">
                      {service.category}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div>
                    <div className="flex items-center text-gray-900 dark:text-white font-semibold">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {service.price}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge className={getPopularityColor(service.popularity)}>
                      {service.popularity}
                    </Badge>
                    <Badge className={getAvailabilityColor(service.availability)}>
                      {service.availability}
                    </Badge>
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

export default ServicesPage;
