
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Send, Mic, Paperclip, Calendar, Users, FileText, BarChart3, Clock } from 'lucide-react';

const AIPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: 'Olá! Sou Amanda, sua assistente virtual da clínica. Como posso ajudá-la hoje?',
      timestamp: '09:00'
    },
    {
      id: 2,
      type: 'user',
      content: 'Quais são os agendamentos de hoje?',
      timestamp: '09:01'
    },
    {
      id: 3,
      type: 'assistant',
      content: 'Hoje você tem 8 consultas agendadas. A primeira é às 09:30 com Ana Silva para limpeza dental. Gostaria que eu mostre a agenda completa?',
      timestamp: '09:01'
    }
  ]);

  const quickActions = [
    { icon: Calendar, label: 'Agendar Consulta', action: 'schedule' },
    { icon: Users, label: 'Buscar Paciente', action: 'search_patient' },
    { icon: FileText, label: 'Relatórios', action: 'reports' },
    { icon: BarChart3, label: 'Análises', action: 'analytics' },
  ];

  const suggestions = [
    'Mostrar agenda de hoje',
    'Relatório financeiro do mês',
    'Pacientes em atraso',
    'Estoque com baixa quantidade',
    'Criar nova consulta para Maria Silva'
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user' as const,
        content: message,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'assistant' as const,
          content: 'Entendi sua solicitação! Estou processando as informações para te ajudar da melhor forma.',
          timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-gradient-to-br from-teal-500 to-blue-600 text-white">
              A
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Amanda - IA Assistente</h1>
            <p className="text-gray-600 dark:text-gray-400">Sua assistente virtual para gestão da clínica</p>
          </div>
        </div>
        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
          Online
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Area */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Conversa com Amanda
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-teal-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                    }`}>
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${
                        msg.type === 'user' ? 'text-teal-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Input
                  placeholder="Digite sua mensagem..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button variant="ghost" size="sm">
                  <Mic className="w-4 h-4" />
                </Button>
                <Button 
                  onClick={handleSendMessage}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                  >
                    <action.icon className="w-5 h-5" />
                    <span className="text-xs text-center">{action.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle>Sugestões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3 text-sm"
                    onClick={() => setMessage(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Status */}
          <Card>
            <CardHeader>
              <CardTitle>Status da IA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Processamento</span>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  Rápido
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Precisão</span>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  98%
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Última atualização</span>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3 mr-1" />
                  Agora há pouco
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIPage;
