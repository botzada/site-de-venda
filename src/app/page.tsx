import { Code2, Smartphone, Globe, Palette, Zap, Shield, Mail, Phone, ArrowRight } from "lucide-react";
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
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 mb-8 animate-pulse">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Transformando ideias em realidade digital</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                CodeCraft
              </span>
              <br />
              <span className="text-gray-900 dark:text-gray-100">
                Desenvolvimento de Excelência
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Criamos aplicativos, sites e sistemas web de alta qualidade com tecnologias modernas. 
              Sua visão, nossa expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                  Começar Projeto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#servicos">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-2 hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300">
                  Ver Serviços
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Nossos Serviços
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Soluções completas para transformar sua presença digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-cyan-500/50 bg-white dark:bg-gray-900"
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  100 mill +
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Projetos Entregues</p>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  100 mil+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Clientes Satisfeitos</p>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 to-blue-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-xl mb-12 text-cyan-50">
              Entre em contato e descubra como podemos transformar suas ideias em realidade
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <a 
                href="tel:+5569992688660"
                className="flex items-center justify-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-cyan-100 mb-1">Telefone</p>
                  <p className="text-lg font-semibold">+55 69 99268-8660</p>
                </div>
              </a>

              <a 
                href="mailto:craftcode83@gmail.com"
                className="flex items-center justify-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-cyan-100 mb-1">Email</p>
                  <p className="text-lg font-semibold">craftcode83@gmail.com</p>
                </div>
              </a>
            </div>

            <Link href="/auth">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300">
                Criar Conta Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CodeCraft</span>
            </div>
            <p className="mb-4">Transformando ideias em realidade digital desde 2019</p>
            <p className="text-sm">© 2024 CodeCraft. Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
