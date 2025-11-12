import { Code2, Smartphone, Globe, Palette, Zap, Shield, Mail, Phone, ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/custom/navbar";

export default function Home() {
  const services = [
    {
      icon: Smartphone,
      title: "Desenvolvimento de Apps",
      description: "Apps nativos e híbridos para iOS e Android com performance excepcional e UX moderna.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Sites e sistemas web responsivos, rápidos e otimizados para SEO e conversão.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces intuitivas e atraentes que encantam usuários e aumentam engajamento.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Otimização & Performance",
      description: "Análise e otimização de aplicações para máxima velocidade e eficiência.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Segurança & Manutenção",
      description: "Proteção de dados, atualizações constantes e suporte técnico especializado.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Code2,
      title: "Consultoria Técnica",
      description: "Orientação estratégica para escolha de tecnologias e arquitetura de projetos.",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm text-cyan-400 mb-8 shadow-lg shadow-cyan-500/10">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide">Excelência em Desenvolvimento Digital</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                CodeCraft
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                Desenvolvimento Premium
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Transformamos suas ideias em experiências digitais extraordinárias com tecnologias de ponta e design sofisticado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth">
                <Button size="lg" className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105 border border-white/10">
                  Começar Projeto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#servicos">
                <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-2xl border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800/50 hover:text-cyan-400 transition-all duration-500 hover:scale-105 shadow-xl">
                  Ver Serviços
                </Button>
              </Link>
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
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                Expertise completa para elevar sua presença digital a outro nível
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
                    <p className="text-slate-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl"></div>
                <div className="relative text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                    100 mil+
                  </div>
                  <p className="text-slate-400 text-lg font-light">Projetos Entregues</p>
                </div>
              </div>
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl"></div>
                <div className="relative text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                    100 mil+
                  </div>
                  <p className="text-slate-400 text-lg font-light">Clientes Satisfeitos</p>
                </div>
              </div>
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl"></div>
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

        {/* Contact Section */}
        <section id="contato" className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Entre em Contato</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
              Vamos Criar Algo Incrível?
            </h2>
            <p className="text-xl text-slate-300 mb-12 font-light">
              Transforme suas ideias em realidade com nossa expertise premium
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a 
                href="tel:+5569992688660"
                className="group relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 mb-1 font-light">Telefone</p>
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
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 mb-1 font-light">Email</p>
                    <p className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">craftcode83@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>

            <Link href="/auth">
              <Button size="lg" className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105 border border-white/10">
                Criar Conta Premium
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
