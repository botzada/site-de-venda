import { Code2, Smartphone, Globe, Palette, Zap, Shield, Mail, Phone, ArrowRight, Sparkles, Star, CheckCircle2, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/custom/navbar";

export default function Home() {
  const services = [
    {
      icon: Smartphone,
      title: "Desenvolvimento de Apps",
      description: "Apps nativos e híbridos para iOS e Android com performance excepcional e UX moderna.",
      gradient: "from-cyan-500 to-blue-600",
      features: ["React Native", "Flutter", "Swift/Kotlin"]
    },
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Sites e sistemas web responsivos, rápidos e otimizados para SEO e conversão.",
      gradient: "from-blue-500 to-indigo-600",
      features: ["Next.js", "React", "Node.js"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces intuitivas e atraentes que encantam usuários e aumentam engajamento.",
      gradient: "from-purple-500 to-pink-600",
      features: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      icon: Zap,
      title: "Otimização & Performance",
      description: "Análise e otimização de aplicações para máxima velocidade e eficiência.",
      gradient: "from-orange-500 to-red-600",
      features: ["SEO", "Core Web Vitals", "Analytics"]
    },
    {
      icon: Shield,
      title: "Segurança & Manutenção",
      description: "Proteção de dados, atualizações constantes e suporte técnico especializado.",
      gradient: "from-emerald-500 to-teal-600",
      features: ["SSL/TLS", "Backups", "Monitoring"]
    },
    {
      icon: Code2,
      title: "Consultoria Técnica",
      description: "Orientação estratégica para escolha de tecnologias e arquitetura de projetos.",
      gradient: "from-indigo-500 to-purple-600",
      features: ["Architecture", "Code Review", "Best Practices"]
    }
  ];

  const plans = [
    {
      name: "Single",
      price: "R$ 297",
      period: "/mês",
      description: "Ideal para projetos simples e landing pages",
      gradient: "from-slate-700 to-slate-800",
      borderColor: "border-slate-600",
      popular: false,
      discount: null,
      features: [
        "Landing Page Responsiva",
        "Design Moderno e Profissional",
        "Otimização SEO Básica",
        "Formulário de Contato",
        "Integração Google Analytics",
        "1 Revisão Incluída",
        "Entrega em 7 dias",
        "Suporte por 30 dias"
      ]
    },
    {
      name: "Premium",
      price: "R$ 279",
      originalPrice: "R$ 697",
      period: "/mês",
      description: "Perfeito para sites completos e sistemas web",
      gradient: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-500",
      popular: true,
      discount: "60% OFF",
      features: [
        "Site Completo Multi-páginas",
        "Design Premium Personalizado",
        "Otimização SEO Avançada",
        "Painel Administrativo",
        "Integração com APIs",
        "Sistema de Blog/CMS",
        "3 Revisões Incluídas",
        "Entrega em 15 dias",
        "Suporte por 90 dias",
        "Treinamento Incluído"
      ]
    },
    {
      name: "Business",
      price: "R$ 599",
      originalPrice: "R$ 1.497",
      period: "/mês",
      description: "Solução completa para empresas e e-commerce",
      gradient: "from-indigo-500 to-purple-600",
      borderColor: "border-indigo-500",
      popular: false,
      discount: "60% OFF",
      features: [
        "Plataforma Completa Customizada",
        "E-commerce ou Sistema Complexo",
        "Design Premium + Branding",
        "Otimização SEO Profissional",
        "Painel Admin Avançado",
        "Integrações Ilimitadas",
        "Sistema de Pagamentos",
        "App Mobile (iOS/Android)",
        "Revisões Ilimitadas",
        "Entrega em 30 dias",
        "Suporte por 1 ano",
        "Consultoria Estratégica",
        "Manutenção Mensal Incluída"
      ]
    }
  ];

  const projects = [
    {
      title: "E-commerce Premium",
      category: "Desenvolvimento Web",
      description: "Plataforma completa de vendas online com painel administrativo, integração de pagamentos e gestão de estoque.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      results: "+250% em conversões"
    },
    {
      title: "App de Delivery",
      category: "Desenvolvimento Mobile",
      description: "Aplicativo completo para delivery com rastreamento em tempo real, pagamentos integrados e sistema de avaliações.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "Maps API"],
      results: "50k+ downloads"
    },
    {
      title: "Dashboard Analytics",
      category: "UI/UX Design + Web",
      description: "Interface moderna para visualização de dados complexos com gráficos interativos e relatórios personalizados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "D3.js", "Tailwind"],
      results: "95% satisfação"
    },
    {
      title: "Sistema de Gestão",
      category: "Desenvolvimento Web",
      description: "ERP completo para gestão empresarial com módulos financeiro, estoque, vendas e relatórios avançados.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Next.js", "Node.js", "MongoDB"],
      results: "40% + produtividade"
    },
    {
      title: "App de Fitness",
      category: "Desenvolvimento Mobile",
      description: "Aplicativo de treinos personalizados com IA, tracking de progresso e comunidade integrada.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      tags: ["Flutter", "TensorFlow", "Cloud"],
      results: "100k+ usuários ativos"
    },
    {
      title: "Landing Page Conversão",
      category: "UI/UX Design + Web",
      description: "Landing page otimizada para conversão com design premium e animações sofisticadas.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      tags: ["Next.js", "Framer Motion", "SEO"],
      results: "8.5% taxa de conversão"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm text-cyan-400 mb-8 shadow-lg shadow-cyan-500/10 animate-fade-in">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">Excelência em Desenvolvimento Digital</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                CodeCraft
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                Desenvolvimento Premium
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transformamos suas ideias em experiências digitais extraordinárias com tecnologias de ponta e design sofisticado.
            </p>

            <p className="text-lg text-cyan-400 mb-12 max-w-2xl mx-auto font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              💎 Não perca tempo com soluções amadoras. Invista em qualidade premium que gera resultados reais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="#contato">
                <Button size="lg" className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105 border border-white/10">
                  Solicitar Orçamento Gratuito
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#projetos">
                <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-2xl border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800/50 hover:text-cyan-400 transition-all duration-500 hover:scale-105 shadow-xl">
                  Ver Portfólio
                </Button>
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Entrega Garantida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Código Limpo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">Serviços Premium</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
                Soluções de Elite
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light mb-4">
                Expertise completa para elevar sua presença digital a outro nível
              </p>
              <p className="text-lg text-cyan-400 max-w-2xl mx-auto font-medium">
                🚀 Cada projeto é tratado como único, com atenção aos mínimos detalhes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="relative p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-cyan-500/20`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-slate-800/50 text-cyan-400 text-xs font-medium border border-slate-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section id="planos" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">Planos e Preços</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
                Escolha Seu Plano Ideal
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light mb-4">
                Soluções personalizadas para cada necessidade e orçamento
              </p>
              <p className="text-lg text-cyan-400 max-w-2xl mx-auto font-medium">
                💰 Investimento que se paga com resultados reais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-500 ${
                    plan.popular 
                      ? 'scale-105 shadow-2xl shadow-cyan-500/30 border-2 border-cyan-500' 
                      : 'hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 border border-slate-800'
                  } bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                      MAIS POPULAR
                    </div>
                  )}

                  {plan.discount && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-br-2xl">
                      {plan.discount}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="relative p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {plan.name}
                      </h3>
                      <p className="text-slate-400 text-sm mb-6 font-light">
                        {plan.description}
                      </p>
                      <div className="mb-6">
                        {plan.originalPrice && (
                          <div className="mb-2">
                            <span className="text-2xl text-slate-500 line-through font-light">
                              {plan.originalPrice}
                            </span>
                          </div>
                        )}
                        <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        <span className="text-slate-400 text-lg font-light">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a href="#contato" className="block">
                      <Button 
                        size="lg" 
                        className={`w-full text-lg py-6 rounded-xl transition-all duration-500 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50'
                            : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-cyan-500/50'
                        }`}
                      >
                        Começar Agora
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-slate-400 mb-4 text-lg">
                Precisa de algo personalizado?
              </p>
              <a href="#contato">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-2xl border-2 border-cyan-500/50 bg-slate-900/50 backdrop-blur-sm text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-500 hover:scale-105 shadow-xl">
                  Solicitar Orçamento Customizado
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projetos" className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Portfólio</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
                Projetos que Impressionam
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light mb-4">
                Conheça alguns dos projetos que desenvolvemos com excelência
              </p>
              <p className="text-lg text-cyan-400 max-w-2xl mx-auto font-medium">
                ✨ Cada projeto é uma história de sucesso dos nossos clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                      {project.category}
                    </div>
                  </div>
                  
                  <CardContent className="relative p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-lg bg-slate-800/50 text-slate-300 text-xs font-medium border border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <span className="text-cyan-400 font-semibold text-sm flex items-center gap-1">
                        <Star className="w-4 h-4 fill-cyan-400" />
                        {project.results}
                      </span>
                      <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-slate-400 mb-6 text-lg">
                Quer ver seu projeto aqui? 
              </p>
              <a href="#contato">
                <Button size="lg" className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105 border border-white/10">
                  Começar Meu Projeto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                Números que Falam por Si
              </h2>
              <p className="text-lg text-cyan-400 font-medium">
                🏆 Resultados comprovados que geram confiança
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                    20 mil+
                  </div>
                  <p className="text-slate-400 text-lg font-light">Projetos Entregues</p>
                </div>
              </div>
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                    98%
                  </div>
                  <p className="text-slate-400 text-lg font-light">Clientes Satisfeitos</p>
                </div>
              </div>
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                    5+
                  </div>
                  <p className="text-slate-400 text-lg font-light">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10"></div>
          <div className="relative max-w-5xl mx-auto">
            <Card className="relative overflow-hidden border-2 border-cyan-500/30 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm shadow-2xl shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
              <CardContent className="relative p-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-8">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Oferta Especial</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                  Pronto para Transformar Sua Ideia em Realidade?
                </h2>
                <p className="text-xl text-slate-300 mb-4 font-light max-w-2xl mx-auto">
                  Entre em contato agora e receba uma consultoria gratuita para seu projeto
                </p>
                <p className="text-lg text-cyan-400 mb-10 font-medium">
                  ⚡ Vagas limitadas para novos projetos este mês
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="tel:+5569992688660">
                    <Button size="lg" className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105 border border-white/10">
                      <Phone className="mr-2 w-5 h-5" />
                      Ligar Agora
                    </Button>
                  </a>
                  <a href="mailto:craftcode83@gmail.com">
                    <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-2xl border-2 border-cyan-500/50 bg-slate-900/50 backdrop-blur-sm text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-500 hover:scale-105 shadow-xl">
                      <Mail className="mr-2 w-5 h-5" />
                      Enviar Email
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Resposta em até 2h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Orçamento sem compromisso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Consultoria gratuita</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Entre em Contato</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Vamos Criar Algo Incrível?
            </h2>
            <p className="text-xl text-slate-300 mb-4 font-light">
              Transforme suas ideias em realidade com nossa expertise premium
            </p>
            <p className="text-lg text-cyan-400 mb-12 font-medium">
              💬 Estamos prontos para atender você e discutir seu projeto
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a 
                href="tel:+5569992688660"
                className="group relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 mb-1 font-light">Telefone / WhatsApp</p>
                    <p className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">+55 69 99268-8660</p>
                  </div>
                </div>
              </a>

              <a 
                href="mailto:craftcode83@gmail.com"
                className="group relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 mb-1 font-light">Email</p>
                    <p className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">craftcode83@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>

            <p className="text-slate-400 text-sm">
              Atendimento de segunda a sexta, das 9h às 18h (horário de Brasília)
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">CodeCraft</span>
            </div>
            <p className="text-slate-400 mb-4 font-light">Transformando ideias em realidade digital desde 2019</p>
            <p className="text-sm text-slate-500 font-light">© 2024 CodeCraft. Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
