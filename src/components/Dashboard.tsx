
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  TrendingUp, 
  DollarSign, 
  Users,
  Calendar,
  Plus,
  MoreHorizontal
} from 'lucide-react';

const Dashboard = () => {
  const kpis = [
    {
      title: "Pacientes ativos",
      value: "16",
      subtitle: "Igual ao mês anterior",
      change: "+4.0%",
      icon: <Users className="w-5 h-5 text-primary" />,
    },
    {
      title: "Consultas hoje",
      value: "2",
      subtitle: "Igual a ontem",
      change: "+8.0%",
      icon: <Calendar className="w-5 h-5 text-accent" />,
    },
    {
      title: "Faturamento do mês",
      value: "R$ 7.999,00",
      subtitle: "Igual ao mês anterior",
      change: "+5.0%",
      icon: <DollarSign className="w-5 h-5 text-yellow-600" />,
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

  return (
    <div className="space-y-6">
      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="dental-mint">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{kpi.title}</span>
                <Badge variant="secondary" className="text-primary bg-primary/10 border-primary/20">
                  {kpi.change}
                </Badge>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{kpi.value}</div>
              <div className="text-xs text-muted-foreground">{kpi.subtitle}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Consultas realizadas - Chart */}
        <Card className="lg:col-span-1 dental-blue">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground">Consultas realizadas</CardTitle>
              <div className="flex space-x-2 text-xs">
                <button className="text-muted-foreground hover:text-foreground">7 dias</button>
                <button className="text-foreground bg-muted px-2 py-1 rounded">30 dias</button>
                <button className="text-muted-foreground hover:text-foreground">12 semanas</button>
              </div>
            </div>
            <CardDescription className="text-muted-foreground">
              Evolução do número de consultas realizadas no período selecionado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <div>Gráfico de consultas</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Central Area */}
        <Card className="lg:col-span-2 dental-cream">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Boa tarde, Amanda</h2>
              <p className="text-muted-foreground">Como posso te ajudar hoje?</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                Novo Agendamento
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted">
                Cadastrar Paciente
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted">
                Consultar Inventário
              </Button>
            </div>

            <div className="flex justify-center mb-8">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-muted text-foreground text-xl">A</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Enviar documentos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-muted-foreground">Gerar cobrança</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <Card className="dental-sage">
          <CardHeader>
            <CardTitle className="text-foreground">Junho 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 text-xs mb-4">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-center text-muted-foreground p-1">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-sm">
              {Array.from({length: 30}, (_, i) => (
                <div key={i} className="text-center p-2 hover:bg-muted rounded cursor-pointer text-foreground">
                  {i + 1}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dentistas Disponíveis */}
        <Card className="dental-mint">
          <CardHeader>
            <CardTitle className="text-foreground">Dentistas Disponíveis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-2"></div>
                <div className="text-foreground font-medium">Elizete</div>
                <div className="text-xs text-muted-foreground">Especialista em...</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consultas do dia */}
        <Card className="dental-blue">
          <CardHeader>
            <CardTitle className="text-foreground">Consultas do dia</CardTitle>
            <div className="text-right text-primary text-sm">10 Consultas para hoje</div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {consultasHoje.map((consulta, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-lg font-bold text-foreground">{consulta.time}</div>
                    <div>
                      <div className="text-foreground font-medium">{consulta.patient}</div>
                      <div className="text-muted-foreground text-sm">{consulta.type}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
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
