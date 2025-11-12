"use client";

import { useState, FormEvent } from "react";
import { Code2, Mail, Lock, User, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { authService } from "@/lib/auth";
import { toast } from "sonner";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        // Login com email e senha cadastrados
        const result = await authService.signIn({
          email: formData.email,
          password: formData.password,
        });
        
        if (result.user) {
          toast.success(`Bem-vindo de volta, ${result.user.user_metadata?.name || 'usuário'}!`);
          router.push("/dashboard");
        }
      } else {
        // Cadastro - cria nova conta
        const result = await authService.signUp({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        });
        
        if (result.user) {
          toast.success("Conta criada com sucesso! Agora você pode fazer login.");
          // Limpa o formulário e muda para tela de login
          setFormData({ name: "", email: formData.email, password: "" });
          setIsLogin(true);
        }
      }
    } catch (error: any) {
      console.error("Erro na autenticação:", error);
      toast.error(error.message || "Erro ao processar sua solicitação");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      toast.error("Digite seu email primeiro");
      return;
    }

    try {
      await authService.resetPassword(formData.email);
      toast.success("Email de recuperação enviado! Verifique sua caixa de entrada.");
    } catch (error: any) {
      toast.error(error.message || "Erro ao enviar email");
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    // Limpa apenas a senha ao trocar de modo
    setFormData({ ...formData, password: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-white dark:text-gray-300 hover:text-cyan-100 dark:hover:text-cyan-400 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar ao site</span>
        </Link>

        <Card className="backdrop-blur-sm bg-white/95 dark:bg-gray-900/95 shadow-2xl border-0">
          <CardHeader className="space-y-4 text-center">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                CodeCraft
              </CardTitle>
              <CardDescription className="text-base mt-2 dark:text-gray-400">
                {isLogin ? "Entre com seu email e senha" : "Crie sua conta gratuita"}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="dark:text-gray-300">Nome completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10 h-12 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                      required={!isLogin}
                      disabled={isLoading}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="dark:text-gray-300">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="dark:text-gray-300">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 h-12 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                    required
                    minLength={6}
                    disabled={isLoading}
                  />
                </div>
                {!isLogin && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Mínimo de 6 caracteres
                  </p>
                )}
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <button 
                    type="button" 
                    onClick={handleForgotPassword}
                    className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    disabled={isLoading}
                  >
                    Esqueceu a senha?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processando...
                  </>
                ) : (
                  isLogin ? "Entrar" : "Criar conta"
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={toggleMode}
              disabled={isLoading}
              className="w-full h-12 border-2 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800"
            >
              {isLogin ? "Criar nova conta" : "Fazer login"}
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-white/80 dark:text-gray-400 text-sm mt-6">
          Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade
        </p>
      </div>
    </div>
  );
}
