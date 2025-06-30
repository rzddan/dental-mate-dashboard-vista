
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Menu, X, ChevronRight, Star, Shield, Clock, Users, TrendingUp, Brain, Calendar, Activity } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const benefits = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado que otimiza sua agenda e reduz faltas em 40%"
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: "Gestão Completa",
      description: "Prontuários digitais, controle financeiro e relatórios em uma plataforma"
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "IA para Insights",
      description: "Análises preditivas que ajudam você a tomar melhores decisões"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Segurança Total",
      description: "Dados protegidos com criptografia e backup automático"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Crescimento Sustentável",
      description: "Ferramentas que ajudam sua clínica a crescer de forma organizada"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Experiência do Paciente",
      description: "Portal do paciente e comunicação automatizada via WhatsApp"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Ana Silva",
      specialty: "Ortodontista",
      content: "O Dental Mate revolucionou minha clínica. Economizo 3 horas por dia em tarefas administrativas.",
      rating: 5
    },
    {
      name: "Dr. Carlos Mendes",
      specialty: "Implantodontista",
      content: "A organização financeira ficou impecável. Sei exatamente quanto faturei e onde investir.",
      rating: 5
    },
    {
      name: "Dra. Marina Costa",
      specialty: "Dentista Geral",
      content: "Meus pacientes adoram o portal. Consegui reduzir as faltas em 50% com os lembretes automáticos.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Dental Mate
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Recursos</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Entrar
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                Teste Grátis
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 p-4 bg-white rounded-lg border border-blue-100 shadow-lg">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Recursos</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    Entrar
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    Teste Grátis
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              ✨ Mais de 5.000 dentistas confiam no Dental Mate
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Transforme sua clínica odontológica
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              O sistema de gestão mais completo e intuitivo para dentistas que querem <strong>crescer</strong>, <strong>organizar</strong> e <strong>inovar</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Começar Teste Grátis
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl w-full sm:w-auto"
              >
                Ver Demonstração
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                Teste por 30 dias grátis
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-green-500" />
                Sem compromisso
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-green-500" />
                Suporte especializado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Tudo que sua clínica precisa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ferramentas poderosas e intuitivas que simplificam seu dia a dia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              O que nossos dentistas dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Histórias reais de profissionais que transformaram suas clínicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {testimonial.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para revolucionar sua clínica?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de dentistas que já descobriram o poder do Dental Mate
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Começar Agora - É Grátis!
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Dental Mate</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Dental Mate. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
