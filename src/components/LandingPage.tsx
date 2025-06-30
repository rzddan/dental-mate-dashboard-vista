
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Star,
  Check,
  Brain,
  Shield,
  Zap,
  Heart,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Agendamento Inteligente",
      description: "Sistema de agendamento com IA que otimiza sua agenda e reduz cancelamentos em até 30%."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Gestão de Pacientes",
      description: "Prontuário eletrônico completo com histórico detalhado e lembretes automáticos."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600" />,
      title: "Controle Financeiro",
      description: "Dashboard financeiro completo com relatórios, fluxo de caixa e análise de rentabilidade."
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      title: "IA Insights",
      description: "Análises inteligentes que identificam oportunidades de crescimento e otimização."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Segurança Total",
      description: "Dados criptografados e backup automático. Conformidade com LGPD garantida."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Automação",
      description: "Lembretes automáticos, confirmações e follow-ups que economizam horas do seu dia."
    }
  ];

  const testimonials = [
    {
      name: "Dra. Ana Silva",
      specialty: "Ortodontista",
      avatar: "AS",
      content: "O Dental Mate revolucionou minha clínica. Aumentei minha receita em 40% no primeiro ano!",
      rating: 5
    },
    {
      name: "Dr. Carlos Santos",
      specialty: "Implantodontista",
      avatar: "CS",
      content: "Ferramenta indispensável. A IA me ajuda a identificar tendências que eu nunca notaria sozinho.",
      rating: 5
    },
    {
      name: "Dra. Maria Costa",
      specialty: "Dentista Geral",
      avatar: "MC",
      content: "Interface intuitiva e suporte excepcional. Recomendo para todos os colegas dentistas.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "R$ 97",
      period: "/mês",
      description: "Perfeito para consultórios iniciantes",
      features: [
        "Até 500 pacientes",
        "Agendamento básico",
        "Controle financeiro",
        "Suporte por email",
        "1 usuário"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "R$ 197",
      period: "/mês",
      description: "Ideal para clínicas em crescimento",
      features: [
        "Pacientes ilimitados",
        "IA Insights avançado",
        "Automação completa",
        "Suporte prioritário",
        "Até 5 usuários",
        "Relatórios avançados"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 397",
      period: "/mês",
      description: "Para grandes clínicas e franquias",
      features: [
        "Tudo do Professional",
        "Multi-unidades",
        "API personalizada",
        "Gerente de sucesso",
        "Usuários ilimitados",
        "Treinamento presencial"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
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
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                Teste Grátis
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-blue-600 transition-colors">Recursos</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
              <a href="#pricing" className="block text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
              <div className="flex flex-col space-y-2 pt-3">
                <Button variant="outline" size="sm" className="w-full">Login</Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                  Teste Grátis
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                O futuro da gestão
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block">
                  odontológica
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sistema completo com IA para dentistas que querem crescer, organizar e inovar. 
                Aumente sua receita em até 40% no primeiro ano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-3">
                  Começar Teste Grátis
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Ver Demonstração
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                ✅ 14 dias grátis • ✅ Sem cartão de crédito • ✅ Suporte incluído
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Dashboard Hoje</h3>
                    <Badge className="bg-green-100 text-green-700">+12% mês</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">156</div>
                      <div className="text-sm text-gray-600">Pacientes</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">R$ 28.5k</div>
                      <div className="text-sm text-gray-600">Receita</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo que sua clínica precisa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recursos poderosos desenvolvidos especialmente para dentistas modernos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dentistas que confiam em nós
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 2.000 profissionais já transformaram suas clínicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.specialty}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos para cada momento
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para o tamanho da sua clínica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.popular ? 'border-blue-600 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className={`w-full mt-8 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    size="lg"
                  >
                    Começar Teste Grátis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua clínica?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 2.000 dentistas que já revolucionaram suas práticas com o Dental Mate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Começar Teste Grátis
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Dental Mate</span>
              </div>
              <p className="text-gray-400">
                O sistema de gestão mais completo para clínicas odontológicas modernas.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Treinamentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dental Mate. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
