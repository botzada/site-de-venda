"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/lib/auth";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, LogOut, Loader2, User as UserIcon, Mail } from "lucide-react";
import { toast } from "sonner";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        router.push("/auth");
        return;
      }
      setUser(currentUser);
    } catch (error) {
      console.error("Erro ao verificar usuário:", error);
      router.push("/auth");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.signOut();
      toast.success("Logout realizado com sucesso!");
      router.push("/");
    } catch (error: any) {
      toast.error(error.message || "Erro ao fazer logout");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-white animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg">
              <Code2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-white/80 dark:text-gray-300">Bem-vindo de volta!</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>

        {/* User Info Card */}
        <Card className="backdrop-blur-sm bg-white/95 dark:bg-gray-900/95 shadow-2xl border-0 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Informações da Conta
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Seus dados de cadastro
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Nome</p>
                <p className="font-medium dark:text-gray-100">
                  {user?.user_metadata?.name || "Não informado"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium dark:text-gray-100">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Code2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">ID do Usuário</p>
                <p className="font-mono text-sm dark:text-gray-100">{user?.id}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Welcome Card */}
        <Card className="backdrop-blur-sm bg-gradient-to-br from-cyan-500/20 to-blue-600/20 dark:from-cyan-900/20 dark:to-blue-900/20 border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white">🎉 Conta criada com sucesso!</CardTitle>
            <CardDescription className="text-white/80 dark:text-gray-300">
              Você agora tem acesso completo à plataforma CodeCraft
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white/90 dark:text-gray-200">
              Explore nossos serviços e entre em contato para começar seu próximo projeto!
            </p>
            <Button
              onClick={() => router.push("/")}
              className="mt-4 bg-white text-cyan-600 hover:bg-gray-100"
            >
              Voltar ao site
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
